const Modal = ({ closeModal, selectedDate, selectedService }) => {


  return (
    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box">
        <form method="dialog">
          {/* Close button */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
        </form>
        <h3 className="font-bold text-lg">Appointment Details</h3>
        {/* Display the selected date */}
        <p className="py-4">{selectedDate.toLocaleDateString()}</p>
        {/* Display the selected service details */}
        <p>Service: {selectedService ? selectedService.title : ''}</p>
        <p>Description: {selectedService ? selectedService.description : ''}</p>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default Modal;
