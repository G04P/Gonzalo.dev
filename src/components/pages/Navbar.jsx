import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ to, label }) =>
    location.pathname !== to && (
      <Link
        to={to}
        className="text-sm font-medium text-white hover:text-blue-300 transition"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    );

  return (
    <nav className="w-full px-6 py-4 bg-white/5 backdrop-blur-md shadow-md border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <FaUserCircle className="text-white text-3xl" />
          <h1 className="text-white font-semibold text-xl tracking-wide">
            Gonzalo<span className="text-blue-400">.dev</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/skills" label="Skills" />
          <NavLink to="/experiences" label="Experiences" />
        </div>

        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-4 px-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/skills" label="Skills" />
          <NavLink to="/experiences" label="Experiences" />
        </div>
      )}
    </nav>
  );
};
