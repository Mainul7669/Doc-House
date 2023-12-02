import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box">
        <form method="dialog" >
          {/* Close button */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default Modal;
