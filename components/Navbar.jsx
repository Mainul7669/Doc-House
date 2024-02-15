"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AuthContext } from "./providers/AuthProvider";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(isAdmin);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      fetchUserData().then(userData => {
        if (userData) {
          const isAdminUser = userData.find(userData => userData.email === user.email && userData.role === 'admin');
          setIsAdmin(!!isAdminUser);
        }
      });
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#07332F] p-4 lg:px-36 pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            href="/"
            className="text-white text-2xl font-semibold mb-4 md:mb-0 "
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 62 62"
                fill="none"
              >
                {/* SVG Path */}
              </svg>
              <h3 className="text-lg font-semibold"><span className="text-[#F7A582]">Doc </span>House</h3>
            </div>
          </Link>

          <div className="flex md:hidden">
            <button
              className="text-white hover:text-[#F7A582] focus:outline-none"
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>

        <ul
          className={`absolute ${
            mobileMenuOpen ? "left-0" : "left-[-120%]"
          } top-[6rem] flex min-w-fit pr-4 flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent lg:gap-10 gap-2`}
        >
          <li>
            <Link href="/" className="text-white hover:text-[#F7A582] font-semibold">
              Home
            </Link>
          </li>

          <li>
            <Link href="/appointment" className="text-white hover:text-[#F7A582] font-semibold">
              Appointment
            </Link>
          </li>
        
          <li>
            {isAdmin ? (
              <Link href="/dashboard" className="text-white hover:text-[#F7A582] font-semibold">
                Dashboard
              </Link>
            ) : (
              <Link href="/dashboard/myappointments" className="text-white hover:text-[#F7A582] font-semibold">
                My Appointments
              </Link>
            )}
          </li>
          
          <li>
            {user ? (
              <button onClick={handleLogOut} className="hover:text-[#F7A582] text-white font-semibold rounded">
                Logout
              </button>
            ) : (
              <Link href="/signin" className="text-white">
                <button className="hover:text-[#F7A582] text-white font-semibold rounded">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
