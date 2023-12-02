"use client";

import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Styles/app.css";
import Modal from "./Modal";

const AppointmentTabs = ({ selectedDate }) => {

// console.log(selectedDate);

  const [selectedService, setSelectedService] = useState(null); // State to store selected service

  // Function to handle the click on "Book Appointment" button
  const handleBookAppointment = (service) => {
    setSelectedService(service); // Set the selected service
    openModal(); // Open the modal
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };




  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };



  const OrthodonticsData = [
    {
      imageSrc: "/004-dental.png",
      title: "Teeth Orthodontics",
      description: "8:00 AM - 9:00 AM",
      bgColor: "bg-[#01D0FB0D]",
    },
    {
      imageSrc: "/002-decayed.png",
      title: "Teeth Orthodontics",
      description: "10:00 AM - 11:00 AM",
      bgColor: "bg-[#D700000D]",
    },
    {
      imageSrc: "/003-bacteria.png",
      title: "Teeth Orthodontics",
      description: "5:00 PM - 6:00 PM",
      bgColor: "bg-[#FFF5C60D]",
    },
    // Add the data for the rest of the cards similarly
  ];

  const CleaningData = [
    {
      imageSrc: "/001-dental-checkup.png",
      title: "Teeth Cleaning",
      description: "10.05 AM - 11:30 AM",
      bgColor: "bg-[#FD47550D]",
    },
    {
      imageSrc: "/001-dental-checkup.png",
      title: "Teeth Cleaning",
      description: "10.05 AM - 11:30 AM",
      bgColor: "bg-[#FD47550D]",
    },

    // Add the data for the rest of the cards similarly
  ];
  const DentistryData = [
    {
      imageSrc: "/005-tooth-whitening.png",
      title: "Cosmetic Dentistry",
      description: "10.05 AM - 11:30 AM",
      bgColor: "bg-[#DF646E0D]",
    },
    {
      imageSrc: "/005-tooth-whitening.png",
      title: "Cosmetic Dentistry",
      description: "10.05 AM - 11:30 AM",
      bgColor: "bg-[#DF646E0D]",
    },
    {
      imageSrc: "/005-tooth-whitening.png",
      title: "Cosmetic Dentistry",
      description: "10.05 AM - 11:30 AM",
      bgColor: "bg-[#DF646E0D]",
    },

    // Add the data for the rest of the cards similarly
  ];

  const CavityProtection = [
    {
      imageSrc: "/002-decayed.png",
      title: "Cavity Protection",
      description: "8:00 AM - 9:00 AM",
      bgColor: "bg-[#01D0FB0D]",
    },
    {
      imageSrc: "/002-decayed.png",
      title: "Cavity Protection",
      description: "10:00 AM - 11:00 AM",
      bgColor: "bg-[#D700000D]",
    },
    {
      imageSrc: "/002-decayed.png",
      title: "Cavity Protection",
      description: "5:00 PM - 6:00 PM",
      bgColor: "bg-[#FFF5C60D]",
    },
    // Add the data for the rest of the cards similarly
  ];

  const PediatricDental = [
    {
      imageSrc: "/003-bacteria.png",
      title: "Pediatric Dental",
      description: "8:00 AM - 9:00 AM",
      bgColor: "bg-[#01D0FB0D]",
    },
    {
      imageSrc: "/003-bacteria.png",
      title: "Pediatric Dental",
      description: "10:00 AM - 11:00 AM",
      bgColor: "bg-[#D700000D]",
    },
    {
      imageSrc: "/003-bacteria.png",
      title: "Pediatric Dental",
      description: "5:00 PM - 6:00 PM",
      bgColor: "bg-[#FFF5C60D]",
    },
    // Add the data for the rest of the cards similarly
  ];

  const OralSurgery = [
    {
      imageSrc: "/Group 34963.png",
      title: "Oral Surgery",
      description: "8:00 AM - 9:00 AM",
      bgColor: "bg-[#01D0FB0D]",
    },
    {
      imageSrc: "/Group 34963.png",
      title: "Oral Surgery",
      description: "10:00 AM - 11:00 AM",
      bgColor: "bg-[#D700000D]",
    },
    {
      imageSrc: "/Group 34963.png",
      title: "Oral Surgery",
      description: "5:00 PM - 6:00 PM",
      bgColor: "bg-[#FFF5C60D]",
    },
    // Add the data for the rest of the cards similarly
  ];

  return (
    <div className="bg-white">
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="flex flex-wrap justify-center items-center gap-8 lg:mx-16">
          {/* Card 1 */}
          <Tab>
            <div className="w-full p-4">
              <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
                <div className="rounded-lg bg-[#FFECEE] p-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/006-broken-tooth.png"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-black">
                    Teeth Orthodontics
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          {/* Add the rest of the Tab components similarly */}

          {/* Card 2 */}
          <Tab>
            <div className="w-full p-4">
              <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
                <div className="rounded-lg bg-[#FFFCF9] p-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/Flat.png"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-black">
                    Cosmetic Dentistry
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          {/* Add the rest of the Tab components similarly */}

          {/* Card 3 */}
          <Tab>
            <div className="w-full p-4">
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
          </Tab>
          {/* Add the rest of the Tab components similarly */}
          {/* Card 4 */}
          <Tab>
            <div className="w-full p-4">
              <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
                <div className="rounded-lg bg-[#37D4E91A] p-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/Group (2).png"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-black">
                    Cavity Protection
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          {/* Card 5 */}
          <Tab>
            <div className="w-full p-4">
              <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-6">
                <div className="rounded-lg bg-[#FFECEE] p-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/003-smile.png"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-black">
                    Pediatric Dental
                  </p>
                </div>
              </div>
            </div>
          </Tab>
          {/* Card 6 */}
          <Tab>
            <div className="w-full p-4">
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
          </Tab>
        </TabList>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-14">
            Available slots for Teeth Orthodontics.
          </h1>

          <div className="flex flex-wrap -mx-2 mb-16">
            {OrthodonticsData.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-8">
            Available slots for Cosmetic Dentistry
          </h1>

          <div className="flex flex-wrap -mx-2 mb-16">
            {DentistryData.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-8">
            Available slots for Teeth Cleaning
          </h1>

          <div className="flex flex-wrap -mx-2 mb-16">
            {CleaningData.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-8">
            Available slots for Cavity Protection{" "}
          </h1>
          <div className="flex flex-wrap -mx-2 mb-16">
            {CavityProtection.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-8">
            Available slots for Pediatric Dental{" "}
          </h1>

          <div className="flex flex-wrap -mx-2 mb-16">
            {PediatricDental.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h1 className="text-black text-3xl font-bold text-center mt-14 mb-8">
            Available slots for Oral Surgery{" "}
          </h1>

          <div className="flex flex-wrap -mx-2 mb-16">
            {OralSurgery.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md text-center py-10">
                  <div
                    className={`p-4 rounded-full inline-block mb-4 ${item.bgColor}`}
                  >
                    <img
                      className="h-10 w-10 mx-auto object-cover"
                      src={item.imageSrc}
                      alt={`Card ${index + 1}`}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">
                      {item.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                 <div key={index} className="px-6 py-4">
            <button className="bg-[#F7A582] hover:bg-[#f3baa2] text-white font-bold py-2 px-4 rounded" onClick={() => handleBookAppointment(item)}>
              Book Appointment
            </button>
          </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Add the rest of the TabPanel components similarly */}
      
      </Tabs>


    {/* Include the Modal component */}
    {isModalOpen && (
  <Modal
    closeModal={closeModal}
    selectedDate={selectedDate} // Pass selectedDate here
    selectedService={selectedService} // Pass selectedService or null here
  />
)}
 
    </div>
  );
};

export default AppointmentTabs;
