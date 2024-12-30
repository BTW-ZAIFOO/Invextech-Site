import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../../assets/assets";

const Modal = ({ isOpen, onClose, children }) => {
  const logoUrl = assets.logo_preview; 

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black opacity-85"></div>
          <motion.div
            className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", duration: 0.9, ease: "easeInOut" }}
          >
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            </button>
            <div className="flex justify-center mb-4">
              <img src={logoUrl} alt="Invextech Logo" className="h-16" />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;