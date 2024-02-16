"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const specialties = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Ophthalmology'];

const AddDoctor = () => {
  const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  
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
    setPhoto(e.target.files[0]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('image', photo);
  
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if (imgResponse.success) {
        const imgUrl = imgResponse.data.display_url;
  
        const doctorData = {
          name,
          email,
          specialty,
          photo: imgUrl
        };
  
        fetch('http://localhost:5000/doctors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(doctorData)
        })
        .then(response => {
          if (response.ok) {
            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setSpecialty('');
            setPhoto(null);
  
            Swal.fire({
              text: "Doctor Added Successfully",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            // Handle errors
            throw new Error('Network response was not ok.');
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          // Optionally, show an error message to the user
          Swal.fire(
            'Error',
            'There was an error adding the doctor. Please try again later.',
            'error',
          );
        });
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally, show an error message to the user
      Swal.fire(
        'Error',
        'There was an error uploading the photo. Please try again later.',
        'error',
      );
    });
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
              className="w-full px-4 py-2 border bg-white text-slate-500 rounded-md focus:outline-none focus:border-blue-500"
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
              className="w-full px-4 py-2 border bg-white text-slate-500 rounded-md focus:outline-none focus:border-blue-500"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
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

export default AddDoctor;
