import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children, className }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`${className} ${isOpen ? "open" : ""}`}>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
