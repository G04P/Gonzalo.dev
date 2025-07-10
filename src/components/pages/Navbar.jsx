import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full px-6 py-4 bg-white/5 backdrop-blur-md shadow-md border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo + Nombre */}
        <Link to="/" className="flex items-center gap-2">
          <FaUserCircle className="text-white text-3xl" />
          <h1 className="text-white font-semibold text-xl tracking-wide">
            Gonzalo<span className="text-blue-400">.dev</span>
          </h1>
        </Link>

        {/* Navegación dinámica */}
        <div className="flex items-center gap-6">
          {location.pathname !== '/' && (
            <Link
              to="/"
              className="text-sm font-medium text-white hover:text-blue-300 transition"
            >
              Home
            </Link>
          )}
          {location.pathname !== '/skills' && (
            <Link
              to="/skills"
              className="text-sm font-medium text-white hover:text-blue-300 transition"
            >
              Skills
            </Link>
          )}
                    {location.pathname !== '/experiences' && (
            <Link
              to="/experiences"
              className="text-sm font-medium text-white hover:text-blue-300 transition"
            >
              Experiences
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
