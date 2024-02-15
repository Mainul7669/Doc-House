"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./providers/AuthProvider";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const { user, logout } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(isAdmin);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      fetchUserData().then((userData) => {
        if (userData) {
          const isAdminUser = userData.find(
            (userData) =>
              userData.email === user.email && userData.role === "admin"
          );
          setIsAdmin(!!isAdminUser);
        }
      });
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
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

  return (
    <div>
      <div className="drawer lg:drawer-open z-[9999]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center absolute right-3 bottom-2 ">
          {/* Page content here */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#FFFFFF] font-semibold text-lg text-[#898989]">
            {/* Sidebar content here */}

            <div className="flex justify-between items-center lg:hidden mb-5 mt-3">
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className=" text-black bg-gray-200 btn-ghost p-2 font-semibold rounded-lg"
                  >
                    Logout
                  </button>

                  <div>
                    <img className="w-16 rounded-xl" src={user?.photoURL} />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* For admin */}

            {isAdmin ? (
              <>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/dashboard"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/dashboard/allusers"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/dashboard/allusers"
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/dashboard/adddoctor"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/dashboard/adddoctor"
                  >
                    Add a Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/dashboard/managedoctors"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/dashboard/managedoctors"
                  >
                    Manage Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/dashboard/myhistory"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/dashboard/myhistory"
                  >
                    My History
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${
                      pathname === "/"
                        ? "active"
                        : "no-underline hover:text-black hover:font-bold"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
