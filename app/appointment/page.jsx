"use client";

import AppointmentNavbar from "@app/Shared/AppointmentNavbar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Footer from "@components/Footer";

const Page = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <AppointmentNavbar />

      <div
        className="bg-cover bg-center bg-no-repeat h-auto py-20"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b6cd/39aa/9b61d5f9fb998ca97419a792f46dab7c?Expires=1699228800&Signature=WlnoCgla7riSJbOCJYUzhqJgVZu7XO1g7fDOgFtGV3WRHHbqfn55EawStWA78rqk6J1f7JPmMJi3FcuxP91tVNJAizVmK9YvqDrjnYGva7KFF7GuB-bdxAGXjD0C8x8geeN9rrg5jtLZ0aV2ScmCIKekrB9O7tNYFAL3bcGzQqM-I01JiW7tWLYaYATnl-aqTj3vrs~gSEz73VFoheFkxdxmRr9LuERtLP6nzysqIUs9XwQ40NRFzwBOSIJHnX3cBEg6OaviC2RRmJaRBKpZpNxEiS1a1ihCt37NZ3JC5PdCTqsUqxgYb3wfE2Rl6vEBodneWvJIRFAky-C~ZOU2mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
        }}
      >
      
      <div className="flex flex-col lg:gap-0 gap-16 md:flex-row items-center justify-center">
  <div className="w-full md:w-1/2 flex justify-center ">
    <Calendar
      onChange={onChange}
      value={value}
      className="shadow-lg rounded-lg border-none"
    />
  </div>
  <div className="w-[350px] md:w-1/2">
    <img src="/chair 1.png" alt="" className="lg:max-w-lg" />
  </div>
</div>



<div className="text-center mt-10 lg:mt-24">
  <h2 className="text-[#F7A582]">Available Services on April 30, 2022</h2>
   <h1 className="text-black text-3xl font-bold mt-4">Please select a service</h1>
</div>

      </div>


<div className=" bg-white">
 
 <div className="flex flex-wrap justify-center items-center lg:mx-28">
 <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#FFECEE] p-3">
        <img
        className="h-10 w-10 rounded-full object-cover"
        src="/006-broken-tooth.png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Teeth Orthodontics</p>
      </div>
    </div>
  </div>

  {/* Repeat the above structure for the next five cards, updating the image source and text accordingly */}

  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#FFFCF9] p-3">
        <img
        className="h-10 w-10 rounded-full object-cover"
        src="/Flat.png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Cosmetic Dentisty</p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#FFECEE] p-3">
        <img
        className="w-10 object-cover"
        src="/Group (1).png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Teeth Cleaning</p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#37D4E91A] p-3">
        <img
        className="h-10 w-10 rounded-full object-cover"
        src="/Group (2).png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Cavity Protection</p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#FFECEE] p-3">
        <img
        className="h-10 w-10 rounded-full object-cover"
        src="/003-smile.png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Pediatric Dental</p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
    <div className="rounded-lg bg-[#FFC1071A] p-3">
        <img
        className="h-10 w-10 rounded-full object-cover"
        src="/Group 34963.png"
        alt="Image 1"
      />
    </div>
      <div>
        <p className="font-bold text-lg text-black">Oral Surgery</p>
      </div>
    </div>
  </div>
 </div>

  
  
    

  
</div>



<Footer/>

    </div>
  );
};

export default Page;


