import React from "react";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      <div className="hamburger-line line1" />
      <div className="hamburger-line line2" />
      <div className="hamburger-line line3" />
    </button>
  );
};

export default HamburgerMenu;
