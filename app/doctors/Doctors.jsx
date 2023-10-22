// pages/Doctors.js
import DoctorCards from "./DoctorCards";

import doctorData from "@utils/doctorData";


const Doctors = () => {
  return (
    <div className="lg:mb-24 lg:mt-24 mt-10 mb-16">
      <h1 className="text-3xl font-bold mb-4 text-black ml-8 text-center">
        Our Expert Doctors
      </h1>

      <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row sm:justify-center">
        {doctorData.map((doctor) => (
          <DoctorCards key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;

