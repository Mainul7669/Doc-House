"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import doctorData from "@utils/doctorData";
import Footer from "@components/Footer";
import DoctorNavbar from "@app/Shared/DoctorNavbar";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SingleDoctor = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const pathname = usePathname(); // Use usePathname to get the current pathname
  const id = pathname.split("/").pop(); // Extract the id from the pathname

  useEffect(() => {
    const foundDoctor = doctorData.find((doctor) => doctor.id === id);
    setSelectedDoctor(foundDoctor);
  }, [id]);

  if (!selectedDoctor) {
    return <div>Loading...</div>;
  }

  const { name, specialization, location, BigImage, moreImage } =
    selectedDoctor;

  return (
    <div>
      <DoctorNavbar />

      <div className="container bg-[#CECECE]">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row bg-white rounded-md gap-8 p-5 lg:p-16 mt-24 mb-16 lg:mx-0 mx-4">
            <img src={BigImage} alt={name} className="lg:w-1/2 rounded-md" />
            <div className="card text-[#6C6B6B] lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-black">{name}</h2>
              <p className="text-lg mb-4">{specialization}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="/Frame.png"
                    alt=""
                    className="h-4 w-4 mr-1"
                  />
                ))}
                <img src="/GrayStar.png" alt="" className="h-4 w-4 ml-2" />
                <p className="ml-2 text-gray-600">(35)</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img className="w-6" src="/location.png" alt="" />
                <p className="text-lg">
                  {location} -{" "}
                  <span className="text-[#F7A582] font-bold">
                    Get direction
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center mb-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <img
                    key={index}
                    className="w-1/3 sm:w-1/4 md:w-1/5 p-2"
                    src={moreImage}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 items-center mt-4 mb-4">
                <button className="border-2 py-2 px-4 rounded-lg hover:bg-[#F7A582] hover:text-white hover:border-none">
                  Dental Filling
                </button>
                <button className="border-2 py-2 px-4 rounded-lg hover:bg-[#F7A582] hover:text-white hover:border-none">
                  Teeth Whitening
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero min-h-full">
          <div className="bg-white hero-content mb-8 lg:mb-20">
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <TabList className="flex flex-wrap gap-2 rounded-xl border-b-2 w-full justify-center">
                {["Overview", "Locations", "Reviews", "Business Hours"].map(
                  (tabTitle, index) => (
                    <Tab
                      key={index}
                      className="px-8 md:px-16 py-4 cursor-pointer font-semibold"
                      style={{
                        backgroundColor:
                          selectedIndex === index ? "#F7A582" : "white",
                        color: selectedIndex === index ? "white" : "",
                      }}
                    >
                      {tabTitle}
                    </Tab>
                  )
                )}
              </TabList>

              {/* TabPanel contents */}
              <TabPanel>
                <div className="content mt-6 text-[#3B3A3A]">
                  <h2 className="font-bold text-[#3B3A3A] text-lg">About Me</h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  <div className="py-4">
                    <h2 className="text-lg font-bold">Education</h2>
                    <ul className="list-disc list-inside ml-4 mt-6">
                      <li>
                        <span className="font-bold">
                          American Dental Medical University
                        </span>
                        <ul className="list-inside ml-4 mt-2">
                          <li>BDS</li>
                          <li>1998 - 2003</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          {" "}
                          American Dental Medical University
                        </span>
                        <ul className="list-inside ml-4 mt-2">
                          <li>MDS</li>
                          <li>2003 - 2005</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <h2 className="text-lg font-bold">Work & Experience</h2>
                    <ul className="list-disc list-inside ml-4 mt-6">
                      <li>
                        <span className="font-bold">
                          Glowing Smiles Family Dental Clinic
                        </span>
                        <ul className=" list-inside ml-4 mt-2">
                          <li>2010 - Present (5 years)</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          Comfort Care Dental Clinic
                        </span>
                        <ul className=" list-inside ml-4 mt-2">
                          <li>2007 - 2010 (3 years)</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          {" "}
                          Dream Smile Dental Practice
                        </span>
                        <ul className=" list-inside ml-4 mt-2">
                          <li>2005 - 2007 (2 years)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="py-4">
                    <h2 className="text-lg font-bold">Services</h2>
                    <ul className="list-disc list-inside ml-4 mt-6">
                      <li>Tooth cleaning</li>
                      <li>Root Canal Therapy</li>
                      <li>Implants</li>
                      <li>Composite Bonding</li>
                      <li>Fissure Sealants</li>
                      <li>Surgical Extractions</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="content">
                  <img
                    className="mt-4 mx-auto lg:mx-0"
                    src="/Rectangle 11.png"
                    alt=""
                    width="100%"
                    height="350px"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="content">
                  <img
                    className="mt-4 mx-auto lg:mx-0 rounded-lg"
                    src="/oralSurgery.jpeg"
                    alt=""
                    width="100%"
                    height="350px"
                  />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleDoctor;
