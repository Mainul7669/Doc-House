"use client"

import "../../Styles/app.css";

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const page = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    fetch('http://localhost:5000/doctors')
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
        // Optionally, show an error message to the user
        Swal.fire(
          'Error',
          'There was an error fetching doctors. Please try again later.',
          'error',
        );
      });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-5">Manage Doctors: 09</h1>

      <div className="overflow-x-auto card">
        <table
          className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold lg:w-[850px]"
        >
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Avatar</td>
              <td>Name</td>
              <td>SPECIALTY</td>
              <td>Action</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={doctor.photo}
                        alt="Doctor Avatar"
                      />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button
                    className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold hover:bg-[#e95275]"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

