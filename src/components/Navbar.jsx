import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themechanger } from '../App';
const Navbar = () => {
  const {theme,settheme}=useContext(themechanger);
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black shadow-2xl px-6 py-3 flex flex-col sm:flex-row justify-between items-center border-b-2">
      {/* Logo / App Name */}
      <div className="text-3xl font-bold text-white">
        PasteKro
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center ">
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
          {/* button for darkmode */}
          <button onClick={()=>settheme(theme==='light'?'dark':'light')}  className="px-3 py-2 rounded-lg bg-white text-white dark:bg-gray-700 hover:scale-105 transition">
             {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
      </div>
    </nav>
    
  );
};

export default Navbar;