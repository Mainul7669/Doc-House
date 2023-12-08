"use client";

import { useState } from 'react';
import appointmentsData from "@utils/appointmentsData";

const AppointmentDetails = ({ params }) => {
  const { id } = params;

  const selectedAppointment = appointmentsData.find(
    (appointment) => String(appointment.id) === String(id)
  );

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);

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
        <p>ID: {selectedAppointment.id}</p>
        <p className="text-[#F0AA22] font-semibold">Hello, {selectedAppointment.name}</p>
        <p className="text-black text-lg font-bold">Please Pay for {selectedAppointment.treatment}</p>
        <p>Your appointment on <span className="text-[#F0AA22] font-semibold">{selectedAppointment.date}</span> at <span className="text-black font-semibold">{selectedAppointment.time}</span></p>
        <p className="text-black text-lg font-bold">Please Pay: {selectedAppointment.price}</p>
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
