import React from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-active font-medium p-2 rounded-md hover:text-secondary"
      : "hover:bg-active font-medium p-2 rounded-md hover:text-secondary";

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto max-w-7xl px-4 xl:px-0 py-4 flex justify-between items-center">
          <div className="logo flex space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="logo_img max-w-full h-8 w-8"
            />
            <h1 className="logo_title text-xl text-primary font-logo">
              JobSeeker
            </h1>
          </div>
          {/* Laptop Menu */}
          <nav className="hidden xl:block space-x-4 text-primary">
            <NavLink to="/" className={linkClass}>
              Jobs
            </NavLink>
            <NavLink to="/contacts" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/companies" className={linkClass}>
              Company
            </NavLink>
          </nav>
          {/* Mobile & Tablet Menu Toggle */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className="menu block xl:hidden"
            id="mobileMenuBtn"
          >
            <img
              src={menu}
              alt="Menu Button"
              className="menu_img max-w-full h-8 w-8"
            />
          </button>
        </div>
      </header>
      {/* Mobile & Tablet Menu */}
      <div
        className={`bg-white fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobileMenu"
      >
        <div className="close flex justify-end p-4">
          <button
            className="close_button"
            onClick={() => setShowMobileMenu(false)}
          >
            <img
              src={close}
              alt="Close Button"
              className="max-w-full h-12 w-12"
            />
          </button>
        </div>
        <div className="h-full w-full flex justify-center">
          <nav className="flex flex-col space-y-10 text-xl text-primary">
            <NavLink
              to="/"
              className="font-medium hover:text-secondary"
              onClick={() => setShowMobileMenu(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/contacts"
              className="font-medium hover:text-secondary"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/companies"
              className="font-medium hover:text-secondary"
              onClick={() => setShowMobileMenu(false)}
            >
              Company
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
