import React, { useState } from "react";

/**
 * A simple hamburger menu icon component.
 */
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

/**
 * The main header component, with responsive behavior for mobile and desktop.
 */
const Header = ({ currentLang = "en", onLangChange = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "se" : "en";
    onLangChange(newLang);
  };

  const languages = {
    en: {
      name: "English",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    se: {
      name: "Svenska",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
    },
  };

  return (
    <>
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background-color: #1e90ff;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .language-switcher img {
          height: 24px;
          width: 32px;
          object-fit: cover;
          border-radius: 3px;
        }
        .hamburger-menu {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1003; 
          position: relative;
        }
        .hamburger-line {
          width: 2rem;
          height: 0.25rem;
          background: white;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        .hamburger-menu.open .line1 { transform: rotate(45deg); }
        .hamburger-menu.open .line2 { opacity: 0; transform: translateX(20px); }
        .hamburger-menu.open .line3 { transform: rotate(-45deg); }
        .side-nav {
          height: 100%;
          width: 250px;
          position: fixed;
          z-index: 1002;
          top: 0;
          left: 0;
          background-color: #fff;
          overflow-x: hidden;
          transition: transform 0.4s ease-in-out;
          padding-top: 60px;
          transform: translateX(-100%);
          box-shadow: 3px 0px 15px rgba(0,0,0,0.2);
        }
        .side-nav.open { transform: translateX(0); }
        .side-nav a {
          padding: 12px 18px;
          text-decoration: none;
          font-size: 1.1rem;
          color: #333;
          display: block;
          transition: 0.3s;
        }
        .side-nav a:hover { background-color: #f1f1f1; }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1001;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease-in-out, visibility 0.4s;
        }
        .overlay.open { opacity: 1; visibility: visible; }

        /* --- HIDE HAMBURGER ON DESKTOP --- */
        @media (min-width: 992px) {
          .hamburger-menu, .side-nav, .overlay {
            display: none;
          }
          .header {
             justify-content: flex-end;
          }
        }
      `}</style>

      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header className="header">
        <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <nav className={`side-nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Menu</a>
          <a href="#">Invoices</a>
          <a href="#">Customers</a>
          <a href="#">My Business</a>
          <a href="/pricelist">Price List</a>
          <a href="#">Log out</a>
        </nav>

        <div className="language-switcher" onClick={toggleLanguage}>
          <span>{languages[currentLang].name}</span>
          <img
            src={languages[currentLang].flag}
            alt={`${languages[currentLang].name} flag`}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
