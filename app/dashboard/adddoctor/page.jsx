"use client";

import React, { useState } from 'react';

const specialties = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Ophthalmology'];

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handlePhotoChange = (e) => {
    // Handle photo upload logic here, e.target.files[0] contains the selected file
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Specialty:', specialty);
    console.log('Photo:', photo);
    // Reset form fields after submission if needed
    setName('');
    setEmail('');
    setSpecialty('');
    setPhoto(null);
  };

  return (
<>
<h2 className="text-2xl font-bold text-black">Add New Doctor</h2>
    <div className="max-w-md mx-auto bg-white p-8 mt-5 rounded-md shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border  bg-white text-slate-500 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border  bg-white text-slate-500 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialty" className="block text-gray-700 font-semibold mb-1">Specialty</label>
          <select
            id="specialty"
            value={specialty}
            onChange={handleSpecialtyChange}
            className="w-full px-4 py-2 border bg-white text-slate-500 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Specialty</option>
            {specialties.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-semibold mb-1">Upload Photo</label>
          <input
            type="file"
            id="photo"
            onChange={handlePhotoChange}
            className="w-full px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-[#07332F] text-white w-full py-2 font-semibold rounded-md hover:bg-[#2a6964] focus:outline-none"
        >
          Add Doctor
        </button>
      </form>
    </div>
</>
  );
};

export default page;
