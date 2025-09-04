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
import { FaBars, FaTimes } from "react-icons/fa";

// This self-contained component can be moved to its own file later
const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => (
  <div className="hamburger-menu">
    <button onClick={toggleMenu} className="hamburger-icon">
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>
);

// This self-contained component can be moved to its own file later
const Header = ({ lang, setLang, toggleMenu }) => (
  <header className="terms-header">
    <div className="logo">
      <img src="/logo.png" alt="Company Logo" />
    </div>
    <nav className="desktop-nav">
      <a href="/pricelist">PRICELIST</a>
      <a href="/terms" className="active">
        TERMS
      </a>
    </nav>
    <div className="header-actions">
      <div className="language-switcher">
        <button
          onClick={() => setLang("sv")}
          className={lang === "sv" ? "active" : ""}
        >
          SV
        </button>
        <button
          onClick={() => setLang("en")}
          className={lang === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
    </div>
  </header>
);

const TermsPage = () => {
  const [lang, setLang] = useState("sv");
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://fakturera-clone-backend.onrender.com/api/terms/${lang}`
        );
        setTermsContent(response.data.content);
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError(
          `Failed to fetch terms. Please ensure content for '${lang.toUpperCase()}' exists.`
        );
        setTermsContent("");
      } finally {
        setLoading(false);
      }
    };
    fetchTerms();
  }, [lang]);

  return (
    <>
      <style>{`
        /* --- GLOBAL & BACKGROUND FIXES --- */
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            overflow-x: hidden; /* Prevent horizontal scroll issues */
        }

        body {
            /* IMPORTANT: Make sure '/background.jpg' is the correct path to your image */
            background-image: url('/background.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed; /* Fixed for desktop parallax effect */
        }

        .terms-page-container {
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        /* --- HEADER --- */
        .terms-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo img { height: 40px; }
        .desktop-nav { display: none; } /* Mobile-first: hide desktop nav */
        .desktop-nav a { margin: 0 1rem; text-decoration: none; color: #333; font-weight: bold; }
        .desktop-nav a.active { color: #007bff; }
        .header-actions { display: flex; align-items: center; }
        .language-switcher button {
            background: none;
            border: 1px solid #ccc;
            padding: 0.5rem;
            cursor: pointer;
        }
        .language-switcher button.active { background-color: #007bff; color: white; border-color: #007bff;}
        .hamburger-menu { display: block; } /* Show hamburger on mobile */
        .hamburger-icon { font-size: 1.5rem; background: none; border: none; cursor: pointer; }

        /* --- SIDE NAVIGATION (for mobile) --- */
        .side-nav {
            position: fixed;
            top: 0;
            right: -100%; /* Start off-screen */
            width: 250px;
            height: 100%;
            background-color: white;
            box-shadow: -2px 0 5px rgba(0,0,0,0.5);
            transition: right 0.3s ease-in-out;
            z-index: 1001;
            padding-top: 60px;
        }
        .side-nav.open { right: 0; /* Slide in */ }
        .side-nav nav { display: flex; flex-direction: column; align-items: center; }
        .side-nav a { padding: 1rem; text-decoration: none; color: #333; font-weight: bold; width: 100%; text-align: center; }
        .side-nav a.active { background-color: #f0f0f0; color: #007bff; }
        .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }

        /* --- MAIN CONTENT --- */
        .terms-main-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 2rem;
            box-sizing: border-box;
        }

        .terms-content-wrapper {
            max-width: 800px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 8px;
            padding: 2rem 3rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
            color: #333;
        }
        .terms-content-wrapper h1, .terms-content-wrapper h2 {
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
            margin-top: 1.5rem;
        }
        .terms-content-wrapper p { line-height: 1.6; }

        .close-button-container {
            padding: 1rem;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.9);
        }
        .close-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        /* --- TABLET & DESKTOP STYLES --- */
        @media (min-width: 768px) {
            .desktop-nav { display: flex; }
            .hamburger-menu { display: none; }
        }

        /* --- MOBILE-SPECIFIC FIXES --- */
        @media (max-width: 767px) {
            body {
                /* THIS IS THE KEY FIX: Change attachment to scroll on mobile */
                background-attachment: scroll;
            }
            .terms-main-content {
                padding: 1rem;
            }
            .terms-content-wrapper {
                padding: 1.5rem 1rem;
                /* Add padding at the bottom so content isn't hidden by the button */
                padding-bottom: 80px;
            }
            .close-button-container {
                position: fixed; /* Make button sticky at the bottom */
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(255, 255, 255, 0.95);
                box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                z-index: 100;
            }
        }
      `}</style>

      <div className="terms-page-container">
        <Header lang={lang} setLang={setLang} toggleMenu={toggleMenu} />

        {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
        <div className={`side-nav ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <a href="/pricelist">PRICELIST</a>
            <a href="/terms" className="active">
              TERMS
            </a>
          </nav>
        </div>

        <main className="terms-main-content">
          <div className="terms-content-wrapper">
            {loading && <p>Loading Terms...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {termsContent && (
              <div dangerouslySetInnerHTML={{ __html: termsContent }} />
            )}
          </div>
        </main>

        <div className="close-button-container">
          <button
            className="close-button"
            onClick={() => (window.location.href = "/pricelist")}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
