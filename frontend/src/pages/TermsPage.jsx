import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/common/Header.jsx"; // Import the shared Header component

// --- Translations for all UI text ---
const translations = {
  en: {
    title: "Terms",
    closeButton: "Close and Go Back",
  },
  sv: {
    title: "Villkor",
    closeButton: "Stäng och gå tillbaka",
  },
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
        /* --- General styles for terms page --- */
        .terms-page-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          background-image: url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
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

        /* --- MOBILE OPTIMIZATION FIXES --- */
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
        {/* Use the shared, responsive Header component */}
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
