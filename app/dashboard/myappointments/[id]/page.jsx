"use client";

import { AuthContext } from '@components/providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';

const AppointmentDetails = ({ params }) => {
  const { id } = params;

  const [email, setEmail] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);

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

  useEffect(() => {
    // Find the selected appointment based on the ID
    if (appointments.length > 0) {
      const appointment = appointments.find(appointment => String(appointment._id) === String(id));
      setSelectedAppointment(appointment);
    }
  }, [id, appointments]);

  const handlePayment = () => {
    // Perform payment processing here
    // You may add your logic to handle payment completion
    setPaymentComplete(true);
    // Add further logic as needed for payment handling
  };

  if (!selectedAppointment) {
    return <p>Loading...</p>;
  }



  return (
    <div className="card bg-white rounded-md shadow-sm p-6 mx-auto">
      <div className='leading-10'>
        <p>ID: {selectedAppointment._id}</p>
        <p className="text-[#F0AA22] font-semibold">Hello, {selectedAppointment.fullName}</p>
        <p className="text-black text-lg font-bold">Please Pay for {selectedAppointment.selectedService}</p>
        <p>Your appointment on <span className="text-[#F0AA22] font-semibold">{selectedAppointment.selectedDate}</span> at <span className="text-black font-semibold">{selectedAppointment.selectedDescription}</span></p>
        <p className="text-black text-lg font-bold">Please Pay: {selectedAppointment.selectedPrice}</p>
      </div>

      <div className="divider my-4 mx-4"></div>

      {!paymentComplete && (
        <div>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="input input-bordered mb-4 block w-full bg-white text-black"
          />
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="input input-bordered flex-1 mb-2 md:mb-0 md:mr-2 bg-white text-black py-3"
            />
            <input
              type="text"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              className="input input-bordered flex-1 bg-white text-black py-3"
            />
          </div>
          <button className="bg-[#07332F] text-white w-full py-2 font-semibold rounded-md hover:bg-[#2a6964] focus:outline-none" onClick={handlePayment}>
            Pay
          </button>
        </div>
      )}

      {paymentComplete && (
        <div>
          <p className="text-green-500">Payment Successful!</p>
          {/* Add further UI or actions after successful payment */}
        </div>
      )}
    </div>
  );
};

export default AppointmentDetails;



