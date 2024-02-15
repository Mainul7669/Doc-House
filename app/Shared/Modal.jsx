import { AuthContext } from "@components/providers/AuthProvider";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";

const Modal = ({ closeModal, selectedDate, selectedService, price }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useContext(AuthContext); // Access user object from the AuthContext
  useEffect(() => {
    // Set the email state to the current user's email
    if (user) {
      setEmail(user.email);
    }
  }, [user]); // Update the email state when the user object changes



  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission with the collected data
    // For example, you can use fullName, phoneNumber, email, selectedDate, and selectedService
    console.log("Treatment:", selectedService ? selectedService.title : "");
    console.log("Price:", selectedService ? selectedService.price : "");
    console.log("Selected Date:", selectedDate ? selectedDate.toLocaleDateString() : "");
    console.log("Selected Description:", selectedService ? selectedService.description : "");
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);

    // Send data to the server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        selectedService: selectedService ? selectedService.title : "",
        selectedPrice: selectedService ? selectedService.price : "",
        selectedDate: selectedDate ? selectedDate.toLocaleDateString() : "",
        selectedDescription: selectedService ? selectedService.description : "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Appointment Added Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.error("Error adding appointment:", error));

    // Reset the form fields
    setFullName("");
    setPhoneNumber("");
    // Close the modal
    closeModal();
  };

  return (
    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box bg-white">
        <form onSubmit={handleFormSubmit}>
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-[#07332F] text-white"
            onClick={closeModal}
          >
            ✕
          </button>
          {/* Display the selected service title */}
          <h3 className="font-bold text-lg text-black">
            {selectedService ? selectedService.title : ""} : {selectedService ? selectedService.price : ""} 
          </h3>
          {/* Input fields for Full Name, Phone Number, and Email */}
          <div className="flex flex-col py-4 gap-4">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-black font-semibold bg-[#E6E6E6] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4"
              type="text"
              defaultValue={selectedDate ? selectedDate.toLocaleDateString() : ""}
              readOnly
              required
            />
            <input
              className="block w-full rounded-md border-0 py-1.5 text-black text-md bg-[#E6E6E6] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 font-semibold px-4"
              type="text"
              defaultValue={selectedService ? selectedService.description : ""}
              readOnly
              required
            />
            <input
              className="block w-full rounded-md border-0 py-1.5 text-black text-md bg-[#E6E6E6] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 font-semibold px-4"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              className="block w-full rounded-md border-0 py-1.5 text-black text-md bg-[#E6E6E6] shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 font-semibold px-4"
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              className="block w-full rounded-md border-0 py-1.5 text-black text-md bg-[#E6E6E6] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 font-semibold px-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#07332F] hover:bg-[#1f514e] text-white font-bold w-full py-2 rounded"
          >
            Submit
          </button>
        </form>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default Modal;
