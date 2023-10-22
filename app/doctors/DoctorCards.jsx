import Link from "next/link";

const DoctorCards = ({ doctor }) => {
  const { id, name, specialization, location, availability, price, image } =
    doctor;

  return (
    <div className="card w-80 bg-white border rounded-md sm:w-80">
      <figure>
        <img src={image} alt={name} className="p-4" />
      </figure>
      <div className="card-body text-[#6C6B6B]">
        <h2 className="card-title text-black font-bold">{name}</h2>
        <p>{specialization}</p>
        <div className="flex">
            <img src="/Frame.png" alt="" className="h-4 w-4" />
            <img src="/Frame.png" alt="" className="h-4 w-4" />
            <img src="/Frame.png" alt="" className="h-4 w-4" />
            <img src="/Frame.png" alt="" className="h-4 w-4" />
            <img src="/Frame.png" alt="" className="h-4 w-4" />
          </div>
        <div className="flex items-center gap-4 mt-4 mb-2">
          <img className="w-5" src="/location.png" alt="" />
          <p className="text-sm">{location}</p>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <img className="w-5" src="/calendar.png" alt="" />
          <p className="text-sm">{availability}</p>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <img className="w-5" src="/dollar.png" alt="" />
          <p className="text-sm">{price}</p>
        </div>
        <div className="card-actions w-full">
          <Link href={`/doctors/${id}`} passHref
             className="py-2 border border-[#F7A582] rounded-lg w-full text-[#F7A582] hover:bg-[#F7A582] hover:text-white text-center">
              View Profile
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCards;
