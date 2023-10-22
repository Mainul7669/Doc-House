"use client";

import { useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto lg:mx-32 mt-20">
      <div className="lg:flex">
        {/* Left Column (Image) */}
        <div className="px-4 py-6 lg:py-0">
          <img src="/Rectangle 20078.png" alt="" width="452px" height="550px" />
        </div>

        {/* Right Column (Texts and Other Content) */}
        <div className="lg:space-x-8 px-4 py-6 lg:py-0">
          {/* Add your text and other content here */}
          <h1 className="text-4xl font-bold mb-4 text-black ml-8 text-center lg:text-left">
            Our Services
          </h1>
          <p className="text-base text-[#3B3A3A] text-center lg:text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br /> accusantium doloremque laudantium, totam rem aperiam, eaque{" "}
            <br /> ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae <br /> vitae dicta sunt explicabo.
          </p>

          <div className="mt-4 text-[#3B3A3A] text-lg font-semibold rounded-lg text-center lg:text-left">
      <div>
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={ index => setSelectedIndex(index)}
        >
          <TabList className="flex gap-2 rounded-xl border w-fit">
    {['Cavity Protection', 'Gastrology', 'Oral Surgery'].map((tabTitle, index) => (
      <Tab
        key={index}
        className="px-4 py-4 cursor-pointer" 
        style={{
          backgroundColor: selectedIndex === index ? '#F7A582' : 'white',
          borderRadius: selectedIndex === index ? '10px' : '',
        }}
      >
        {tabTitle}
      </Tab>
    ))}
  </TabList>

          {/* TabPanel contents */}
          <TabPanel>
            <div className="content">
              <img
                className="mt-6 mx-auto lg:mx-0"
                src="/Rectangle 10.png"
                alt=""
                width="480px"
                height="350px"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="content">
              <img
                className="mt-6 mx-auto lg:mx-0"
                src="/Rectangle 11.png"
                alt=""
                width="480px"
                height="350px"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="content">
              <img
                className="mt-6 mx-auto lg:mx-0 rounded-lg"
                src="/oralSurgery.jpeg"
                alt=""
                width="480px"
                height="350px"
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>

          <h1 className="text-3xl font-bold mb-4 mt-4 text-black text-center lg:text-left">
            Electro Gastrology Therapy
          </h1>

          <p className="text-base text-[#3B3A3A] text-center lg:text-left lg:w-[490px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error{" "}
          </p>

          <p className="text-base text-[#3B3A3A] mt-2 text-center lg:text-left lg:w-[490px]">
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>

          <button className="btn btn-outline text-[#F7A582] hover:text-white hover:bg-[#F7A582] mt-4 mx-auto lg:mx-0 block sm:inline-block">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
