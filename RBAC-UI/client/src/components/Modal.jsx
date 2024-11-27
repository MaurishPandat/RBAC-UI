import React from "react";

const BASE_URL = "http://localhost:5002/api";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow">
        <button onClick={onClose} className="text-red-500">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
