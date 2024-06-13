import React, { useEffect } from "react";
import overlay from "./Logo aniGIF.gif";
import "./Home.css";
function Overlay({ onClose, autoHideDuration }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose();
    }, autoHideDuration);
    return () => clearTimeout(timerId);
  }, [autoHideDuration, onClose]);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content">
        <img
          src={overlay}
          className="img-fluid p-0"
          alt="Speak UP Logo animation"
        />
      </div>
    </div>
  );
}
export default Overlay;
