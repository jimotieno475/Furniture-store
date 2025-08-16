import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";
import logo from "../assets/image.png";
import CartIcon from "./CartIcon";
import FavoritesIconWithBadge from './FavoritesIconWithBadge';

const Navbar = ({ cartItems }) => {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-md px-4 sm:px-6 py-3 flex justify-between items-center z-50">
      {/* Left - Logo & Brand */}
      <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
        <img src={logo} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Furniro</h1>
      </div>

      {/* Center - Navigation Links (Hidden on mobile) */}
      <div className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-12">
        <NavLink to="/" text="Home" closeMenu={closeMenu} />
        <NavLink to="/shop" text="Shop" closeMenu={closeMenu} />
        <NavLink to="/about" text="About" closeMenu={closeMenu} />
        <NavLink to="/contact" text="Contact" closeMenu={closeMenu} />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6 flex-1 justify-end">
        <IconLink to="/search" icon={<Search className="w-6 h-6 sm:w-7 sm:h-7" />} closeMenu={closeMenu} />
        {/* <IconLink to="/favourites" icon={<Heart className="w-6 h-6 sm:w-7 sm:h-7" />} closeMenu={closeMenu} /> */}
        <FavoritesIconWithBadge />
        {/* <IconLink to="/cart" icon={<ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />} closeMenu={closeMenu} /> */}
        <CartIcon itemCount={itemCount} />
        <IconLink to="/profile" icon={<User className="w-6 h-6 sm:w-7 sm:h-7" />} closeMenu={closeMenu} />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none ml-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-gray-700" />
          ) : (
            <Menu className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}>
          <div 
            className="absolute top-16 right-0 w-full sm:w-96 bg-white shadow-lg flex flex-col p-6 space-y-4 animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileNavLink to="/" text="Home" closeMenu={closeMenu} />
            <MobileNavLink to="/shop" text="Shop" closeMenu={closeMenu} />
            <MobileNavLink to="/about" text="About" closeMenu={closeMenu} />
            <MobileNavLink to="/contact" text="Contact" closeMenu={closeMenu} />
            <div className="border-t border-gray-200 pt-4 mt-2">
              <MobileNavLink to="/search" text="Search" closeMenu={closeMenu} icon={<Search className="w-5 h-5 mr-2" />} />
              <MobileNavLink to="/favourites" text="Favourites" closeMenu={closeMenu} icon={<Heart className="w-5 h-5 mr-2" />} />
              <MobileNavLink to="/cart" text="Cart" closeMenu={closeMenu} icon={<ShoppingCart className="w-5 h-5 mr-2" />} />
              <MobileNavLink to="/profile" text="Profile" closeMenu={closeMenu} icon={<User className="w-5 h-5 mr-2" />} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable components for cleaner code
const NavLink = ({ to, text, closeMenu }) => (
  <Link 
    to={to} 
    className="text-base lg:text-lg font-medium text-gray-700 hover:text-red-500 transition-colors duration-200"
    onClick={closeMenu}
  >
    {text}
  </Link>
);

const MobileNavLink = ({ to, text, closeMenu, icon }) => (
  <Link 
    to={to} 
    className="flex items-center text-lg text-gray-700 hover:text-red-500 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
    onClick={closeMenu}
  >
    {icon}
    {text}
  </Link>
);

const IconLink = ({ to, icon, closeMenu }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
    onClick={closeMenu}
  >
    {icon}
  </Link>
);

export default Navbar;