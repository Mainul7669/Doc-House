"use client";

import "../../Styles/app.css";

import { useState } from 'react';
import appointmentsData from "@utils/appointmentsData";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const appointments = appointmentsData;


    // Function to format date to YYYY-MM-DD format
const formatDate = (date) => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    let month = formattedDate.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = formattedDate.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  };
  
  // Inside your component
  const filteredAppointments = selectedDate
    ? appointments.filter(appointment => formatDate(appointment.date) === selectedDate)
    : appointments;
  


  return (
    <div>
      <div className="flex justify-between py-8 mx-5 lg:mx-1">
        <h1 className="text-xl font-bold text-black">
          My History: {filteredAppointments.length}
        </h1>
        <div>
          {/* Input field for date selection */}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-[#07332F] text-white text-lg rounded-md lg:px-3 lg:py-3 p-1"
          />
        </div>
      </div>
      <div className="overflow-x-auto card">
        <table className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold lg:w-[850px]">
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Name</td>
              <td>Date</td>
              <td>Time</td>
              <td>Treatment</td>
              <td>Payment</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.treatment}</td>
                <td>
                  <span className="text-[#F7A582]">Paid</span>
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

