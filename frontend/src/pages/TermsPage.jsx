// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // --- Translations for all UI text ---
// const translations = {
//   en: {
//     nav: {
//       home: "Home",
//       order: "Order",
//       customers: "Our Customers",
//       about: "About us",
//       contact: "Contact Us",
//     },
//     title: "Terms",
//     closeButton: "Close and Go Back",
//   },
//   sv: {
//     nav: {
//       home: "Hem",
//       order: "Beställ",
//       customers: "Våra kunder",
//       about: "Om oss",
//       contact: "Kontakta oss",
//     },
//     title: "Villkor",
//     closeButton: "Stäng och gå tillbaka",
//   },
// };

// // --- Self-Contained Header Component (with Dropdown) ---
// const Header = ({ currentLang, onLangChange }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const languages = {
//     en: {
//       name: "English",
//       flag: "https://storage.123fakturere.no/public/flags/GB.png",
//     },
//     sv: {
//       name: "Svenska",
//       flag: "https://storage.123fakturere.no/public/flags/SE.png",
//     },
//   };
//   const navText = translations[currentLang]?.nav || translations.en.nav;

//   const handleLangSelect = (langCode) => {
//     onLangChange(langCode);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="terms-header">
//       <div className="terms-header-left">
//         <img
//           src="https://storage.123fakturera.se/public/icons/diamond.png"
//           alt="Logo"
//           className="terms-header-logo-img"
//         />
//         <nav className="terms-nav">
//           <a href="#">{navText.home}</a>
//           <a href="#">{navText.order}</a>
//           <a href="#">{navText.customers}</a>
//           <a href="#">{navText.about}</a>
//           <a href="#">{navText.contact}</a>
//         </nav>
//       </div>
//       <div
//         className="language-selector"
//         onMouseLeave={() => setIsDropdownOpen(false)}
//       >
//         <div
//           className="language-switcher"
//           onMouseEnter={() => setIsDropdownOpen(true)}
//         >
//           <span>{languages[currentLang]?.name || "Language"}</span>
//           <img src={languages[currentLang]?.flag} alt="flag" />
//         </div>
//         {isDropdownOpen && (
//           <div className="language-dropdown">
//             <div
//               className="language-option"
//               onClick={() => handleLangSelect("sv")}
//             >
//               <span>Svenska</span>
//               <img src={languages.sv.flag} alt="Swedish Flag" />
//             </div>
//             <div
//               className="language-option"
//               onClick={() => handleLangSelect("en")}
//             >
//               <span>English</span>
//               <img src={languages.en.flag} alt="English Flag" />
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// // --- Main TermsPage Component ---
// const TermsPage = () => {
//   const [lang, setLang] = useState("sv");
//   const [termsContent, setTermsContent] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTerms = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await axios.get(
//           `https://fakturera-clone-backend.onrender.com/api/terms/${lang}`
//         );
//         setTermsContent(response.data.content);
//       } catch (err) {
//         setError(
//           `Failed to fetch terms. Please ensure content for '${lang.toUpperCase()}' exists in the database.`
//         );
//         setTermsContent("");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTerms();
//   }, [lang]);

//   const uiText = translations[lang] || translations.en;

//   return (
//     <>
//       <style>{`
//         /* --- All previous styles remain the same --- */
//         .terms-page-container { min-height: 100vh; width: 100%; display: flex; flex-direction: column; background-image: url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg'); background-size: cover; background-position: center; background-attachment: fixed; font-family: Arial, sans-serif; }
//         .terms-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background-color: rgba(44, 62, 80, 0.85); color: white; flex-shrink: 0; position: sticky; top: 0; z-index: 10; }
//         .terms-header-left { display: flex; align-items: center; gap: 2rem; }
//         .terms-header-logo-img { height: 35px; }
//         .terms-nav { display: flex; gap: 1.5rem; }
//         .terms-nav a { color: #bdc3c7; text-decoration: none; font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 2px solid transparent; transition: color 0.2s, border-bottom-color 0.2s; }
//         .terms-nav a:hover { color: white; border-bottom-color: white; }
//         .terms-main-content { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem; gap: 1.5rem; }
//         .terms-title { color: white; font-size: 2.5rem; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
//         .terms-content-wrapper { max-width: 800px; width: 100%; background-color: rgba(255, 255, 255, 0.98); padding: 2rem 3rem; border-radius: 6px; box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); color: #333; margin-bottom: 2rem; }
//         .close-button { background-color: #2ecc71; color: white; border: none; padding: 0.8rem 2rem; border-radius: 2rem; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: background-color 0.2s, transform 0.2s; }
//         .close-button:hover { background-color: #27ae60; transform: translateY(-2px); }
//         .loading-text, .error-text { text-align: center; font-size: 1.2rem; color: #333; padding-top: 2rem; }

//         /* --- NEW STYLES for Language Dropdown --- */
//         .language-selector {
//           position: relative;
//         }
//         .language-switcher {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           cursor: pointer;
//           font-size: 0.9rem;
//           padding: 0.5rem;
//         }
//         .language-switcher img {
//           height: 20px;
//           width: 30px;
//           object-fit: cover;
//           border-radius: 3px;
//         }
//         .language-dropdown {
//           position: absolute;
//           top: 100%;
//           right: 0;
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//           padding: 0.5rem;
//           z-index: 20;
//           width: 150px;
//           color: #333;
//         }
//         .language-option {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0.75rem;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//         .language-option:hover {
//           background-color: #f1f1f1;
//         }
//         .language-option img {
//           height: 20px;
//           width: 30px;
//           object-fit: cover;
//           border-radius: 3px;
//         }

//         /* --- MOBILE OPTIMIZATION FIXES --- */
//         body {
//             overflow-x: hidden;
//         }
//         .terms-content-wrapper {
//             padding: 1rem; /* Reduce padding on mobile */
//         }
//         @media (max-width: 600px) {
//             .terms-main-content {
//                 padding: 1rem; /* Reduce padding on main content area for mobile */
//             }
//         }
//       `}</style>

//       <div className="terms-page-container">
//         <Header currentLang={lang} onLangChange={setLang} />
//         <main className="terms-main-content">
//           <h1 className="terms-title">{uiText.title}</h1>
//           <button className="close-button">{uiText.closeButton}</button>
//           <div className="terms-content-wrapper">
//             {loading && <p className="loading-text">Loading Terms...</p>}
//             {error && <p className="error-text">{error}</p>}
//             {!loading && !error && (
//               <div dangerouslySetInnerHTML={{ __html: termsContent }} />
//             )}
//           </div>
//           <button className="close-button">{uiText.closeButton}</button>
//         </main>
//       </div>
//     </>
//   );
// };

// export default TermsPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // --- Translations for all UI text ---
// const translations = {
//   en: {
//     nav: {
//       home: "Home",
//       order: "Order",
//       customers: "Our Customers",
//       about: "About us",
//       contact: "Contact Us",
//     },
//     title: "Terms",
//     closeButton: "Close and Go Back",
//   },
//   sv: {
//     nav: {
//       home: "Hem",
//       order: "Beställ",
//       customers: "Våra kunder",
//       about: "Om oss",
//       contact: "Kontakta oss",
//     },
//     title: "Villkor",
//     closeButton: "Stäng och gå tillbaka",
//   },
// };

// // --- Self-Contained Header Component (with Dropdown) ---
// const Header = ({ currentLang, onLangChange }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const languages = {
//     en: {
//       name: "English",
//       flag: "https://storage.123fakturere.no/public/flags/GB.png",
//     },
//     sv: {
//       name: "Svenska",
//       flag: "https://storage.123fakturere.no/public/flags/SE.png",
//     },
//   };
//   const navText = translations[currentLang]?.nav || translations.en.nav;

//   const handleLangSelect = (langCode) => {
//     onLangChange(langCode);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="terms-header">
//       <div className="terms-header-left">
//         <img
//           src="https://storage.123fakturera.se/public/icons/diamond.png"
//           alt="Logo"
//           className="terms-header-logo-img"
//         />
//         <nav className="terms-nav">
//           <a href="#">{navText.home}</a>
//           <a href="#">{navText.order}</a>
//           <a href="#">{navText.customers}</a>
//           <a href="#">{navText.about}</a>
//           <a href="#">{navText.contact}</a>
//         </nav>
//       </div>
//       <div
//         className="language-selector"
//         onMouseLeave={() => setIsDropdownOpen(false)}
//       >
//         <div
//           className="language-switcher"
//           onMouseEnter={() => setIsDropdownOpen(true)}
//         >
//           <span>{languages[currentLang]?.name || "Language"}</span>
//           <img src={languages[currentLang]?.flag} alt="flag" />
//         </div>
//         {isDropdownOpen && (
//           <div className="language-dropdown">
//             <div
//               className="language-option"
//               onClick={() => handleLangSelect("sv")}
//             >
//               <span>Svenska</span>
//               <img src={languages.sv.flag} alt="Swedish Flag" />
//             </div>
//             <div
//               className="language-option"
//               onClick={() => handleLangSelect("en")}
//             >
//               <span>English</span>
//               <img src={languages.en.flag} alt="English Flag" />
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// // --- Main TermsPage Component ---
// const TermsPage = () => {
//   const [lang, setLang] = useState("sv");
//   const [termsContent, setTermsContent] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTerms = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await axios.get(
//           `https://fakturera-clone-backend.onrender.com/api/terms/${lang}`
//         );
//         setTermsContent(response.data.content);
//       } catch (err) {
//         setError(
//           `Failed to fetch terms. Please ensure content for '${lang.toUpperCase()}' exists in the database.`
//         );
//         setTermsContent("");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTerms();
//   }, [lang]);

//   const uiText = translations[lang] || translations.en;

//   return (
//     <>
//       <style>{`
//         /* --- All previous styles remain the same --- */
//         .terms-page-container {
//           min-height: 100vh;
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           background-image: url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg');
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           font-family: Arial, sans-serif;
//           overflow-x: hidden; /* This is key to prevent horizontal scrolling */
//         }
//         .terms-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           background-color: rgba(44, 62, 80, 0.85);
//           color: white;
//           flex-shrink: 0;
//           position: sticky;
//           top: 0;
//           z-index: 10;
//         }
//         .terms-header-left {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//         }
//         .terms-header-logo-img { height: 35px; }
//         .terms-nav { display: flex; gap: 1.5rem; }
//         .terms-nav a {
//           color: #bdc3c7;
//           text-decoration: none;
//           font-size: 0.9rem;
//           padding: 0.5rem 0;
//           border-bottom: 2px solid transparent;
//           transition: color 0.2s, border-bottom-color 0.2s;
//         }
//         .terms-nav a:hover {
//           color: white;
//           border-bottom-color: white;
//         }
//         .terms-main-content {
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding: 2rem;
//           gap: 1.5rem;
//         }
//         .terms-title {
//           color: white;
//           font-size: 2.5rem;
//           font-weight: bold;
//           text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
//         }
//         .terms-content-wrapper {
//           max-width: 800px;
//           width: 100%;
//           background-color: rgba(255, 255, 255, 0.98);
//           padding: 2rem 3rem;
//           border-radius: 6px;
//           box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
//           color: #333;
//           margin-bottom: 2rem;
//           box-sizing: border-box; /* Crucial for preventing overflow */
//         }
//         .close-button {
//           background-color: #2ecc71;
//           color: white;
//           border: none;
//           padding: 0.8rem 2rem;
//           border-radius: 2rem;
//           font-size: 1.1rem;
//           font-weight: bold;
//           cursor: pointer;
//           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//           transition: background-color 0.2s, transform 0.2s;
//         }
//         .close-button:hover {
//           background-color: #27ae60;
//           transform: translateY(-2px);
//         }
//         .loading-text, .error-text {
//           text-align: center;
//           font-size: 1.2rem;
//           color: #333;
//           padding-top: 2rem;
//         }

//         /* --- NEW STYLES for Language Dropdown --- */
//         .language-selector {
//           position: relative;
//         }
//         .language-switcher {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           cursor: pointer;
//           font-size: 0.9rem;
//           padding: 0.5rem;
//         }
//         .language-switcher img {
//           height: 20px;
//           width: 30px;
//           object-fit: cover;
//           border-radius: 3px;
//         }
//         .language-dropdown {
//           position: absolute;
//           top: 100%;
//           right: 0;
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//           padding: 0.5rem;
//           z-index: 20;
//           width: 150px;
//           color: #333;
//         }
//         .language-option {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0.75rem;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//         .language-option:hover {
//           background-color: #f1f1f1;
//         }
//         .language-option img {
//           height: 20px;
//           width: 30px;
//           object-fit: cover;
//           border-radius: 3px;
//         }

//         /* --- MOBILE OPTIMIZATION FIXES --- */
//         @media (max-width: 768px) {
//             .terms-main-content {
//                 padding: 1rem;
//             }
//             .terms-content-wrapper {
//                 padding: 1rem; /* Adjust padding for smaller screens */
//             }
//             .terms-header {
//                 padding: 1rem; /* Adjust header padding for smaller screens */
//             }
//         }
//       `}</style>

//       <div className="terms-page-container">
//         <Header currentLang={lang} onLangChange={setLang} />
//         <main className="terms-main-content">
//           <h1 className="terms-title">{uiText.title}</h1>
//           <button className="close-button">{uiText.closeButton}</button>
//           <div className="terms-content-wrapper">
//             {loading && <p className="loading-text">Loading Terms...</p>}
//             {error && <p className="error-text">{error}</p>}
//             {!loading && !error && (
//               <div dangerouslySetInnerHTML={{ __html: termsContent }} />
//             )}
//           </div>
//           <button className="close-button">{uiText.closeButton}</button>
//         </main>
//       </div>
//     </>
//   );
// };

// export default TermsPage;

import React, { useState, useEffect } from "react";
import axios from "axios";

// --- Translations for all UI text ---
const translations = {
  en: {
    nav: {
      home: "Home",
      order: "Order",
      customers: "Our Customers",
      about: "About us",
      contact: "Contact Us",
    },
    title: "Terms",
    closeButton: "Close and Go Back",
  },
  sv: {
    nav: {
      home: "Hem",
      order: "Beställ",
      customers: "Våra kunder",
      about: "Om oss",
      contact: "Kontakta oss",
    },
    title: "Villkor",
    closeButton: "Stäng och gå tillbaka",
  },
};

// --- Hamburger Menu Component for Mobile ---
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

// --- Self-Contained Header Component (with Dropdown & Hamburger) ---
const Header = ({ currentLang, onLangChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = {
    en: {
      name: "English",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
    },
    sv: {
      name: "Svenska",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
    },
  };
  const navText = translations[currentLang]?.nav || translations.en.nav;

  const handleLangSelect = (langCode) => {
    onLangChange(langCode);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header className="terms-header">
        <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <div className="terms-header-left">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Logo"
            className="terms-header-logo-img"
          />
          <nav className="terms-nav desktop-nav">
            <a href="#">{navText.home}</a>
            <a href="#">{navText.order}</a>
            <a href="#">{navText.customers}</a>
            <a href="#">{navText.about}</a>
            <a href="#">{navText.contact}</a>
          </nav>
        </div>

        <nav className={`side-nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#">{navText.home}</a>
          <a href="#">{navText.order}</a>
          <a href="#">{navText.customers}</a>
          <a href="#">{navText.about}</a>
          <a href="#">{navText.contact}</a>
        </nav>

        <div
          className="language-selector"
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div
            className="language-switcher"
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <span>{languages[currentLang]?.name || "Language"}</span>
            <img src={languages[currentLang]?.flag} alt="flag" />
          </div>
          {isDropdownOpen && (
            <div className="language-dropdown">
              <div
                className="language-option"
                onClick={() => handleLangSelect("sv")}
              >
                <span>Svenska</span>
                <img src={languages.sv.flag} alt="Swedish Flag" />
              </div>
              <div
                className="language-option"
                onClick={() => handleLangSelect("en")}
              >
                <span>English</span>
                <img src={languages.en.flag} alt="English Flag" />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

// --- Main TermsPage Component ---
const TermsPage = () => {
  const [lang, setLang] = useState("sv");
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://fakturera-clone-backend.onrender.com/api/terms/${lang}`
        );
        setTermsContent(response.data.content);
      } catch (err) {
        setError(
          `Failed to fetch terms. Please ensure content for '${lang.toUpperCase()}' exists in the database.`
        );
        setTermsContent("");
      } finally {
        setLoading(false);
      }
    };
    fetchTerms();
  }, [lang]);

  const uiText = translations[lang] || translations.en;

  return (
    <>
      <style>{`
        /* --- Global Styles for Full-Page Background --- */
        body, html {
          height: 100%;
          margin: 0;
          padding: 0;
          background-image: url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg'); 
          background-size: cover; 
          background-position: center; 
          background-attachment: fixed;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        .terms-page-container { 
          min-height: 100vh;
          width: 100%;
          display: flex; 
          flex-direction: column;
        }
        
        .terms-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 1rem 2rem; 
          background-color: rgba(44, 62, 80, 0.85); 
          color: white; 
          flex-shrink: 0; 
          position: sticky; 
          top: 0; 
          z-index: 1000;
        }
        .terms-header-left { 
          display: flex; 
          align-items: center; 
          gap: 2rem; 
        }
        .terms-header-logo-img { height: 35px; }
        .terms-nav { display: flex; gap: 1.5rem; }
        .terms-nav a { 
          color: #bdc3c7; 
          text-decoration: none; 
          font-size: 0.9rem; 
          padding: 0.5rem 0; 
          border-bottom: 2px solid transparent; 
          transition: color 0.2s, border-bottom-color 0.2s; 
        }
        .terms-nav a:hover { 
          color: white; 
          border-bottom-color: white; 
        }
        .terms-main-content { 
          flex-grow: 1; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
          padding: 2rem; 
          gap: 1.5rem; 
        }
        .terms-title { 
          color: white; 
          font-size: 2.5rem; 
          font-weight: bold; 
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5); 
        }
        .terms-content-wrapper { 
          max-width: 800px; 
          width: 100%; 
          background-color: rgba(255, 255, 255, 0.98); 
          padding: 2rem 3rem; 
          border-radius: 6px; 
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); 
          color: #333; 
          margin-bottom: 2rem; 
          box-sizing: border-box; 
        }
        .close-button { 
          background-color: #2ecc71; 
          color: white; 
          border: none; 
          padding: 0.8rem 2rem; 
          border-radius: 2rem; 
          font-size: 1.1rem; 
          font-weight: bold; 
          cursor: pointer; 
          box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
          transition: background-color 0.2s, transform 0.2s; 
        }
        .close-button:hover { 
          background-color: #27ae60; 
          transform: translateY(-2px); 
        }
        .loading-text, .error-text { 
          text-align: center; 
          font-size: 1.2rem; 
          color: #333; 
          padding-top: 2rem; 
        }

        .language-selector {
          position: relative;
        }
        .language-switcher { 
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
          cursor: pointer; 
          font-size: 0.9rem;
          padding: 0.5rem;
        }
        .language-switcher img { 
          height: 20px; 
          width: 30px; 
          object-fit: cover; 
          border-radius: 3px; 
        }
        .language-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          padding: 0.5rem;
          z-index: 20;
          width: 150px;
          color: #333;
        }
        .language-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .language-option:hover {
          background-color: #f1f1f1;
        }
        .language-option img {
          height: 20px;
          width: 30px;
          object-fit: cover;
          border-radius: 3px;
        }

        /* --- MOBILE HAMBURGER & SIDE NAV STYLES --- */
        .hamburger-menu {
          display: none;
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
        
        /* --- MOBILE OPTIMIZATION FIXES --- */
        @media (max-width: 991px) {
            .terms-nav.desktop-nav {
                display: none;
            }
            .hamburger-menu {
                display: flex;
            }
            .terms-header {
                justify-content: space-between;
                padding: 1rem 1.5rem;
            }
            .terms-header-left {
                gap: 0;
            }
        }

        @media (max-width: 768px) {
            .terms-main-content {
                padding: 1rem;
            }
            .terms-content-wrapper {
                padding: 1rem;
            }
        }
      `}</style>

      <div className="terms-page-container">
        <Header currentLang={lang} onLangChange={setLang} />
        <main className="terms-main-content">
          <h1 className="terms-title">{uiText.title}</h1>
          <button className="close-button">{uiText.closeButton}</button>
          <div className="terms-content-wrapper">
            {loading && <p className="loading-text">Loading Terms...</p>}
            {error && <p className="error-text">{error}</p>}
            {!loading && !error && (
              <div dangerouslySetInnerHTML={{ __html: termsContent }} />
            )}
          </div>
          <button className="close-button">{uiText.closeButton}</button>
        </main>
      </div>
    </>
  );
};

export default TermsPage;
