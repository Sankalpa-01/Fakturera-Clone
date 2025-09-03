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

// --- Self-Contained Header Component (with Dropdown) ---
const Header = ({ currentLang, onLangChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <header className="terms-header">
      <div className="terms-header-left">
        <img
          src="https://storage.123fakturera.se/public/icons/diamond.png"
          alt="Logo"
          className="terms-header-logo-img"
        />
        <nav className="terms-nav">
          <a href="#">{navText.home}</a>
          <a href="#">{navText.order}</a>
          <a href="#">{navText.customers}</a>
          <a href="#">{navText.about}</a>
          <a href="#">{navText.contact}</a>
        </nav>
      </div>
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
          `http://127.0.0.1:5000/api/terms/${lang}`
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
        /* --- All previous styles remain the same --- */
        .terms-page-container { min-height: 100vh; width: 100vw; display: flex; flex-direction: column; background-image: url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg'); background-size: cover; background-position: center; background-attachment: fixed; font-family: Arial, sans-serif; }
        .terms-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background-color: rgba(44, 62, 80, 0.85); color: white; flex-shrink: 0; position: sticky; top: 0; z-index: 10; }
        .terms-header-left { display: flex; align-items: center; gap: 2rem; }
        .terms-header-logo-img { height: 35px; }
        .terms-nav { display: flex; gap: 1.5rem; }
        .terms-nav a { color: #bdc3c7; text-decoration: none; font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 2px solid transparent; transition: color 0.2s, border-bottom-color 0.2s; }
        .terms-nav a:hover { color: white; border-bottom-color: white; }
        .terms-main-content { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem; gap: 1.5rem; }
        .terms-title { color: white; font-size: 2.5rem; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
        .terms-content-wrapper { max-width: 800px; width: 100%; background-color: rgba(255, 255, 255, 0.98); padding: 2rem 3rem; border-radius: 6px; box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); color: #333; margin-bottom: 2rem; }
        .close-button { background-color: #2ecc71; color: white; border: none; padding: 0.8rem 2rem; border-radius: 2rem; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: background-color 0.2s, transform 0.2s; }
        .close-button:hover { background-color: #27ae60; transform: translateY(-2px); }
        .loading-text, .error-text { text-align: center; font-size: 1.2rem; color: #333; padding-top: 2rem; }

        /* --- NEW STYLES for Language Dropdown --- */
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
