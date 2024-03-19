import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// variaciones para animacion del modal
const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } }
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 m-4 overflow-y-auto"
            onClick={e => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-lg font-semibold text-gray-700 hover:text-gray-900"
            >
              × {/* Use a more elegant 'X' for closing */}
            </button>
            <div className="modal-content max-h-[calc(100vh-4rem)] flex flex-col items-center">
              {React.Children.map(children, child =>
                React.isValidElement(child) && child.type === 'img'
                  ? React.cloneElement(child, { className: 'w-full h-auto max-w-md my-4 rounded-lg' }) // Tailwind classes for full width, auto height, margin, and rounded corners
                  : child
              )}
            
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;