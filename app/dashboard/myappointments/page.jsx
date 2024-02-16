"use client"


import Link from "next/link";
import "../../Styles/app.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@components/providers/AuthProvider";

const Page = () => {
  const [email, setEmail] = useState("");
  const [appointments, setAppointments] = useState([]);

  const { user } = useContext(AuthContext); // Access user object from the AuthContext
  useEffect(() => {
    // Set the email state to the current user's email
    if (user) {
      setEmail(user.email);
    }
  }, [user]); // Update the email state when the user object changes



  useEffect(() => {
    // Fetch appointments data using the fetched email
    if(email) {
      fetch(`https://server-six-lemon.vercel.app/appointments?email=${email}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
        .catch(error => console.error('Error fetching appointments:', error));
    }
  }, [email]);

  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-5">
        My Appointments: {appointments.length}
      </h1>
      <div className="overflow-x-auto card">
        <table className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold lg:w-[850px]">
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Name</td>
              <td>Date</td>
              <td>Description</td>
              <td>Service</td>
              <td>Payment</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.fullName}</td>
                <td>{appointment.selectedDate}</td>
                <td>{appointment.selectedDescription}</td>
                <td>{appointment.selectedService}</td>
                <td>
                  {appointment.paymentStatus === "Paid" ? (
                    <span className="text-[#F7A582]">Paid</span>
                  ) : (
                    <Link href={`/dashboard/myappointments/${appointment._id}`} passHref>
                      <button className="bg-[#07332F] py-2 px-4 rounded-md text-white font-semibold hover:bg-[#184844]">
                        Pay
                      </button>
                    </Link>
                  )}
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