"use client"

import React, { useState, useEffect } from 'react';
import "../../Styles/app.css";

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your API or source
    fetch('https://server-six-lemon.vercel.app/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);



  // Function to handle making a user an admin
const handleMakeAdmin = user => {
  fetch(`https://server-six-lemon.vercel.app/users/admin/${user._id}`, {
    method: 'PATCH'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.modifiedCount) {
      // Fetch users data again
      fetch('https://server-six-lemon.vercel.app/users')
        .then(res => res.json())
        .then(data => setUsers(data));

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${user.fullname} is an Admin Now`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
  .catch(error => console.error('Error making admin:', error));
};


  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-5">All Users: {users.length}</h1>

      <div className="overflow-x-auto card">
        <table className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold lg:w-[850px]">
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Name</td>
              <td>Admin</td>
              <td>Users</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.fullname}</td>
                <td>
                  <button
                    className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold hover:bg-[#184844]"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold hover:bg-[#184844]"
                  >
                    Remove User
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

export default Page;
