import React from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatbotToggle = ({ isVisible, onToggle }) => {
  return (
    <>
      {!isVisible && (
        <button
          onClick={() => onToggle(true)}
          className="fixed bottom-10 right-10 p-4 bg-blue-500 text-white rounded-full shadow-xl z-50"
        >
          <FaComments size={28} />
        </button>
      )}
    </>
  );
};

export default ChatbotToggle;