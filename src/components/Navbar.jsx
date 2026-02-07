import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black shadow-2xl px-6 py-3 flex justify-between items-center">
      {/* Logo / App Name */}
      <div className="text-3xl font-bold text-white">
        PasteKro
      </div>
      {/* Navigation Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-200 hover:text-blue-800 transition ${
              isActive ? 'font-semibold border-b-2 border-blue-600 ' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/AllPaste"
          className={({ isActive }) =>
            `text-gray-200 hover:text-blue-700 transition ${
              isActive ? 'font-semibold border-b-2 border-blue-600' : ''
            }`
          }
        >
          Paste
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;