"use client";

import React, { useState } from "react";
import Link from "next/link";

const AppointmentNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#07332F] p-4 lg:px-36 pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Hamburger menu for small devices */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            href="/"
            className="text-white text-2xl font-semibold mb-4 md:mb-0"
          >
            <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M59.9292 19.1854C58.7225 17.9788 57.0333 17.2146 55.1831 17.2146C52.2872 17.2146 49.6326 16.0481 47.7422 14.1175C45.8518 12.2272 44.6452 9.57258 44.6452 6.67667C44.6452 2.97635 41.6689 0 37.9685 0H23.8912C22.0411 0 20.3518 0.764198 19.1452 1.97083C17.9385 3.17745 17.1743 4.86673 17.1743 6.71689C17.1743 12.5489 12.4685 17.2548 6.63645 17.2548C3.01657 17.2146 0 20.1909 0 23.8912V37.9685C0 41.6689 3.01657 44.6452 6.67667 44.6452C9.57258 44.6452 12.2272 45.8116 14.1175 47.7422C16.0079 49.6326 17.2146 52.2872 17.2146 55.1831C17.2146 58.8834 20.1909 61.8598 23.8912 61.8598H37.9685C39.8187 61.8598 41.508 61.0956 42.7146 59.8889C43.9212 58.6823 44.6854 56.993 44.6854 55.1429C44.6854 52.247 45.8518 49.5924 47.7825 47.702C49.6728 45.8116 52.3274 44.605 55.2233 44.605C58.9236 44.605 61.9 41.5884 61.9 37.9283V23.851C61.9 22.0411 61.1358 20.392 59.9292 19.1854ZM30.9299 46.8172C22.1617 46.8172 15.0828 39.698 15.0828 30.9701C15.0828 22.2019 22.2019 15.1231 30.9299 15.1231C39.6578 15.1231 46.7769 22.2422 46.7769 30.9701C46.8172 39.698 39.698 46.8172 30.9299 46.8172Z"
                fill="white"
              />
              <path
                d="M31.0506 44.4836C38.4694 44.4836 44.4836 38.4694 44.4836 31.0506C44.4836 23.6317 38.4694 17.6176 31.0506 17.6176C23.6317 17.6176 17.6176 23.6317 17.6176 31.0506C17.6176 38.4694 23.6317 44.4836 31.0506 44.4836Z"
                fill="#F7A582"
              />
              <path
                d="M38.4519 29.4285V32.7129C38.4519 33.508 37.795 34.1649 36.9998 34.1649H34.1649V36.9999C34.1649 37.795 33.508 38.4519 32.7128 38.4519H29.4284C28.6333 38.4519 27.9764 37.795 27.9764 36.9999V34.1649H25.1414C24.3463 34.1649 23.6894 33.508 23.6894 32.7129V29.4285C23.6894 28.6333 24.3463 27.9764 25.1414 27.9764H27.9764V25.1415C27.9764 24.3463 28.6333 23.6895 29.4284 23.6895H32.7128C33.508 23.6895 34.1649 24.3463 34.1649 25.1415V27.9764H36.9998C37.795 27.9764 38.4519 28.6333 38.4519 29.4285Z"
                fill="white"
              />
            </svg>
            <h3 className="text-lg font-semibold"><span className="text-[#F7A582]">Doc </span>House</h3>
          </div>
        </Link>

        {/* Hamburger menu for smaller screens */}
        <div className="flex md:hidden">
            <button
              className="text-white hover:text-[#F7A582] focus:outline-none"
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <ul
          className={`absolute ${
            mobileMenuOpen ? "left-0" : "left-[-120%]"
          } top-[6rem] flex min-w-fit pr-4 flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent lg:gap-10 gap-2`}
        >
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/appointment" className="text-white">
              Appointment
            </Link>
          </li>
          <li>
            <Link href="/signin" className="text-white">
              <button className="hover:text-[#F7A582]  text-white font-semibold rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>
        
      </div>

     <div className="lg:py-20 py-10 mx-16 lg:mx-0">
     <h2 className="text-[#F3F3F3]">Home / Appointment</h2>
      <h1 className="text-3xl font-bold text-white">Appointment</h1>
     </div>
    </nav>
  );
};


export default AppointmentNavbar;