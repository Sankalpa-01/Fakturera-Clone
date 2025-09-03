import React from "react";
// --- Import the specific icons you need ---
import {
  FileText,
  Users,
  Briefcase,
  BookOpen,
  Tag,
  Files,
  FileX,
  Mail,
  Package,
  UserSquare,
  UploadCloud,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <style>{`
        /* All previous CSS remains the same */
        .sidebar {
          width: 250px;
          flex-shrink: 0;
          background-color: #f8f9fa;
          padding: 1.5rem;
          display: none;
        }
        @media (min-width: 992px) {
          .sidebar {
            display: block;
          }
        }
        .sidebar-logo {
          display: block;
          margin-bottom: 2rem;
          text-align: center;
        }
        .sidebar-logo img {
          height: 40px;
        }
        .sidebar-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #dee2e6;
          margin-bottom: 1.5rem;
        }
        .sidebar-profile-pic {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.3rem;
        }
        .sidebar-profile-name {
          font-weight: 600;
        }
        .sidebar-profile-company {
          font-size: 0.9rem;
          color: #6c757d;
        }
        .sidebar-menu-title {
          font-size: 0.9rem;
          font-weight: bold;
          color: #6c757d;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sidebar-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #343a40;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          transition: background-color 0.2s, color 0.2s;
        }
        .sidebar-nav-link:hover {
          background-color: #e9ecef;
        }
        .sidebar-nav-link.active {
          background-color: #e7f3ff;
          color: #007bff;
          font-weight: bold;
        }
        /* Style for the Lucide icons */
        .sidebar-nav-link svg {
            width: 18px; /* Control icon size */
            height: 18px;
            stroke-width: 2; /* Control icon thickness */
        }
      `}</style>
      <aside className="sidebar">
        <a href="#" className="sidebar-logo">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Logo"
          />
        </a>
        <div className="sidebar-profile">
          <div className="sidebar-profile-pic">JA</div>
          <div>
            <div className="sidebar-profile-name">John Andre</div>
            <div className="sidebar-profile-company">Storfjord AS</div>
          </div>
        </div>
        <div className="sidebar-menu-title">Menu</div>
        <nav className="sidebar-nav">
          {/* --- Emojis have been replaced with Lucide Icon Components --- */}
          <a href="#" className="sidebar-nav-link">
            <FileText /> Invoices
          </a>
          <a href="#" className="sidebar-nav-link">
            <Users /> Customers
          </a>
          <a href="#" className="sidebar-nav-link">
            <Briefcase /> My Business
          </a>
          <a href="#" className="sidebar-nav-link">
            <BookOpen /> Invoice Journal
          </a>
          <a href="/pricelist" className="sidebar-nav-link active">
            <Tag /> Price List
          </a>
          <a href="#" className="sidebar-nav-link">
            <Files /> Multiple Invoicing
          </a>
          <a href="#" className="sidebar-nav-link">
            <FileX /> Unpaid Invoices
          </a>
          <a href="#" className="sidebar-nav-link">
            <Mail /> Offer
          </a>
          <a href="#" className="sidebar-nav-link">
            <Package /> Inventory Control
          </a>
          <a href="#" className="sidebar-nav-link">
            <UserSquare /> Member Invoicing
          </a>
          <a href="#" className="sidebar-nav-link">
            <UploadCloud /> Import/Export
          </a>
          <a href="#" className="sidebar-nav-link">
            <LogOut /> Log out
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
