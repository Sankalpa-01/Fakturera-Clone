import React from "react";
import Header from "../components/common/Header";
import PricelistTable from "../components/pricelist/PricelistTable";
import Sidebar from "../components/common/Sidebar";
import "../styles/main.css";
import "../styles/PricelistPage.css";

const PricelistPage = () => {
  return (
    // The main-content class is now the top-level container
    <div className="main-content">
      <Header />
      <div className="page-layout">
        {" "}
        {/* This class now controls the sidebar/content split */}
        <Sidebar />
        <main className="pricelist-view">
          <div className="pricelist-actions-header">
            <div className="search-bars">
              <div className="search-input-group">
                <input type="text" placeholder="Search Article No..." />
              </div>
              <div className="search-input-group">
                <input type="text" placeholder="Search Product..." />
              </div>
            </div>
            <div className="desktop-action-buttons">
              <button className="desktop-btn">New Product</button>
              <button className="desktop-btn">Print List</button>
              <button className="desktop-btn">Advanced mode</button>
            </div>
          </div>
          <PricelistTable />
        </main>
      </div>
    </div>
  );
};

export default PricelistPage;
