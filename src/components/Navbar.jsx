import React, { useEffect, useState } from "react";
import menu from "../assets/menu_icon.svg";
import crossicon from "../assets/cross_icon.svg";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed bg-white/10 backdrop-blur-md top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <h1 className="text-white text-lg font-bold">WEB DEVELOPER</h1>

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Hero" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Service" className="cursor-pointer hover:text-gray-400">
            Services
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contact Me
          </a>
        </ul>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
        />
      </div>
      {/* Overlay when mobile menu is open */}
      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black/50"
        ></div>
      )}

      {/* ---------------mobile-menu--------------- */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-screen bg-white transition-transform ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={crossicon}
            className="w-6"
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Hero"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Service"
            className="px-4 py-2 rounded-full inline-block"
          >
            Services
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Project"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Me
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
