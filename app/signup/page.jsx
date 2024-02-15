"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const router = useRouter();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    image: "", // To store the image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, password, image } = formData;

    // Use createUser method to create a user
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        // Update user profile with provided image URL
        return updateUserProfile(fullname, image); // Update profile with fullname and image URL
      })
      .then(() => {
        const savedUser = {
          fullname: fullname,
          email: email,
          image: image,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              // Redirect to home page after successful signup
              router.push("/"); // Assuming "/" is your home page route
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Banner */}
      <div className="md:w-1/2 bg-[#07332F] p-8">
        <img
          src="/Medical prescription (3).gif"
          alt=""
          className="w-[450px] lg:m-36"
        />
      </div>

      {/* Right Side - Sign-up Form */}
      <div className="w-full md:w-1/2 bg-[#FFF] p-6 flex flex-col justify-center lg:pl-24">
        <div className="max-w-md w-full border lg:p-10 p-6 rounded-md">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Sign Up to Doc House
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-black font-semibold mb-2"
              >
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full bg-[#F3F3F3] text-black rounded-md px-3 py-3"
                placeholder="Enter image URL"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-black font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full bg-[#F3F3F3] text-black rounded-md px-3 py-3"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F3F3F3] text-black rounded-md px-3 py-3"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#F3F3F3] text-black rounded-md px-3 py-3"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-[#F7A582] text-white font-bold text-lg py-3 rounded-md hover:bg-red-200"
              >
                Create Account
              </button>
            </div>

            <p className="text-center text-[#6C6B6B] text-md mb-2">
              Already registered ?{" "}
              <Link href="/signin" className="text-[#F7A582] font-bold">
                SIGN IN
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
