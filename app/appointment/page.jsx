"use client";


import AppointmentNavbar from "@app/Shared/AppointmentNavbar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Footer from "@components/Footer";
import AppointmentTabs from "@app/Shared/AppointmentTabs";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // List of dates for which services are not available
  const unavailableDates = [
    new Date(2024, 0, 7), // January  (Month 0 represents January)
    new Date(2024, 0, 9), // January  (Month 0 represents January)
    new Date(2024, 0, 12), // January 12, 2023 (Month 0 represents January)
    new Date(2024, 0, 14), // January  (Month 0 represents January)
    new Date(2024, 0, 20), // January  (Month 0 represents January)
    new Date(2024, 0, 24), // January 12, 2023 (Month 0 represents January)
    new Date(2023, 1, 12), // February  (Month 1 represents February)
    new Date(2023, 2, 12), // March  (Month 2 represents March)
    new Date(2023, 3, 12), // April  (Month 3 represents April)
    new Date(2023, 11, 3), // December  (Month 11 represents December)
    new Date(2023, 11, 5), // December  (Month 11 represents December)
    new Date(2023, 11, 17), // December  (Month 11 represents December)
    new Date(2023, 11, 22), // December  (Month 11 represents December)
    new Date(2023, 11, 31), // December  (Month 11 represents December)
    
    // Add more dates here
  ];
  

  // Function to handle calendar date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to check if the selected date is in the unavailable dates list
  const isDateUnavailable = (date) => {
    return unavailableDates.some((unavailableDate) =>
      isSameDate(unavailableDate, date)
    );
  };

 // Function to compare dates (ignoring time)
const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="bg-white">
      <AppointmentNavbar />

      <div
        className="bg-cover bg-center bg-no-repeat h-auto py-20"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b6cd/39aa/9b61d5f9fb998ca97419a792f46dab7c?Expires=1699228800&Signature=WlnoCgla7riSJbOCJYUzhqJgVZu7XO1g7fDOgFtGV3WRHHbqfn55EawStWA78rqk6J1f7JPmMJi3FcuxP91tVNJAizVmK9YvqDrjnYGva7KFF7GuB-bdxAGXjD0C8x8geeN9rrg5jtLZ0aV2ScmCIKekrB9O7tNYFAL3bcGzQqM-I01JiW7tWLYaYATnl-aqTj3vrs~gSEz73VFoheFkxdxmRr9LuERtLP6nzysqIUs9XwQ40NRFzwBOSIJHnX3cBEg6OaviC2RRmJaRBKpZpNxEiS1a1ihCt37NZ3JC5PdCTqsUqxgYb3wfE2Rl6vEBodneWvJIRFAky-C~ZOU2mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
        }}
      >
      


      <div className="flex flex-col lg:gap-0 gap-16 md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <Calendar
          onChange={handleDateChange} // Update the onChange function
          value={selectedDate}
          className="shadow-lg rounded-lg border-none"
          tileDisabled={({ date }) => isDateUnavailable(date)}
        />
      </div>
  <div className="w-[350px] md:w-1/2">
    <img src="/chair 1.png" alt="" className="lg:max-w-lg" />
  </div>
</div>





<div className="text-center mt-10 lg:mt-24">
        <h2 className="text-[#F7A582] text-lg font-semibold">
          {isDateUnavailable(selectedDate)
            ? "Services Not Available"
            : `Available Services on ${selectedDate.toLocaleDateString()}`}
        </h2>
        <h1 className="text-black text-3xl font-bold mt-4">Please select a service</h1>
      </div>

      </div>



<AppointmentTabs/>


<Footer/>

    </div>
  );
};

export default Page;


