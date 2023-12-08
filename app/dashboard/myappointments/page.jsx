import Link from "next/link";

import "../../Styles/app.css";

import appointmentsData from "@utils/appointmentsData";

const Page = () => {
  const appointments = appointmentsData; 

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
              <td>Time</td>
              <td>Treatment</td>
              <td>Payment</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.treatment}</td>
                <td>
                  {appointment.paymentStatus === "Paid" ? (
                    <span className="text-[#F7A582]">Paid</span>
                  ) : (
                    <Link href={`/dashboard/myappointments/${appointment.id}`} passHref>
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
