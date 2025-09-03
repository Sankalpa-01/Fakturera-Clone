import React from "react";
import TermsPage from "./pages/TermsPage.jsx";
import PricelistPage from "./pages/PricelistPage.jsx";

// A simple component-based router
const App = () => {
  const { pathname } = window.location;

  // You can navigate by changing the URL manually for now.
  // For example:
  // http://localhost:5173/ -> shows the Pricelist
  // http://localhost:5173/terms -> shows the Terms page

  if (pathname === "/terms") {
    return <TermsPage />;
  }

  // Default to the pricelist page for the root URL or any other URL
  return <PricelistPage />;
};

export default App;
