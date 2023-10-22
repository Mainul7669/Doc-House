"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import doctorData from "@utils/doctorData";

const SingleDoctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const pathname = usePathname(); // Use usePathname to get the current pathname
  const id = pathname.split('/').pop(); // Extract the id from the pathname

  useEffect(() => {
    const foundDoctor = doctorData.find(doctor => doctor.id === id);
    setSelectedDoctor(foundDoctor);
  }, [id]);

  if (!selectedDoctor) {
    return <div>Doctor not found!</div>;
  }

  const { name, specialization, location, availability, price, image } = selectedDoctor;

  return (
    <div className="container">
      <div className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2> {/* Use h2 for the doctor's name */}
        <p>{specialization}</p>
        <p>{location}</p>
        <p>{availability}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SingleDoctor;
