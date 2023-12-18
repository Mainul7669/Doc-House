"use client";

import { AuthContext } from "@components/providers/AuthProvider";
import Link from "next/link";
import { useContext, useState } from "react";

const SignIn = () => {

  const { signIn } = useContext(AuthContext);


  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });

  };
  



  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Banner */}
      <div className="md:w-1/2 bg-[#07332F] p-8">
      <img src="/Medical prescription (2).gif" alt="" className="w-[450px] lg:m-36"/>
      
      </div>
      

      {/* Right Side - Sign-in Form */}
      <div className="w-full md:w-1/2 bg-[#FFF] p-6 flex flex-col justify-center lg:pl-24">
        <div className="max-w-md w-full border lg:p-10 p-6 rounded-md">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">Sign in to Doc House</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black font-semibold mb-2">Username or Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#F3F3F3] rounded-md px-3 py-3 text-black"
                placeholder="Enter your username or address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-[#F3F3F3] rounded-md px-3 py-3"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-[#F7A582] text-white font-bold text-lg py-3 rounded-md hover:bg-red-200"
              >
                Sign In
              </button>
            </div>

            <p className="text-center text-[#6C6B6B] text-md mb-2">Please register at first. Go to <Link href="/signup" className="text-[#F7A582] font-bold">SIGN UP</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
