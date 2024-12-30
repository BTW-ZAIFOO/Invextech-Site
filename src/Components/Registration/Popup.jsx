import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <p className="text-gray-800 font-medium text-lg">{message}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-sky-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;