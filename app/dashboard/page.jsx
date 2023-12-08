import PatientChart from "../Shared/patientCharts";
import AppointmentChart from "../Shared/appointmentChart";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-5 sm:flex-row mx-5 lg:mx-0">
        <div className="card bg-white shadow-sm rounded-lg p-5">
          <div className="flex gap-4">
            <figure>
              <img
                src="/Frame (3).png"
                alt=""
                className="bg-[#FF00341A] p-3 rounded-md w-14"
              />
            </figure>
            <h2 className="card-title text-3xl font-bold text-[#6C6B6B]">
              168
            </h2>
          </div>
          <progress
            className="progress progress-error w-56 h-[3px] mt-5"
            value="70"
            max="100"
          ></progress>
          <h4 className="text-black font-semibold mt-1">Doctor</h4>
        </div>

        <div className="card bg-white shadow-sm rounded-lg p-5">
          <div className="flex gap-4">
            <figure>
              <img
                src="/Frame (1).png"
                alt=""
                className="bg-[#7BB13C1A] p-3 rounded-md w-14"
              />
            </figure>
            <h2 className="card-title text-3xl font-bold text-[#6C6B6B]">
              487
            </h2>
          </div>
          <progress
            className="progress progress-success w-56 h-[3px] mt-5"
            value="70"
            max="100"
          ></progress>
          <h4 className="text-black font-semibold mt-1">Patients</h4>
        </div>

        <div className="card bg-white shadow-sm rounded-lg p-5">
          <div className="flex gap-4">
            <figure>
              <img
                src="/Frame (2).png"
                alt=""
                className="bg-[#FFBC341A] p-3 rounded-md w-14"
              />
            </figure>
            <h2 className="card-title text-3xl font-bold text-[#6C6B6B]">95</h2>
          </div>
          <progress
            className="progress progress-warning w-56 h-[3px] mt-5"
            value="70"
            max="100"
          ></progress>
          <h4 className="text-black font-semibold mt-1">Appointment</h4>
        </div>
      </div>

     <div className="flex flex-col gap-5 sm:flex-row">
     <PatientChart/>
<AppointmentChart/>
     </div>
    </>
  );
};

export default Dashboard;
