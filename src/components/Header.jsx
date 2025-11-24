import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/Cartcontext";
import Logo from "../assets/bilicdhallan logo.jpg";

function Header() {
  const { cartCount } = useCart();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 h-[80px] left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-[40px] h-[40px] rounded-full" src={Logo} alt="logo" />
          <h1 className="text-blue-500 font-bold">
            <span className="text-green-300 font-extrabold">Baby</span> Shop
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 font-medium relative">
          <Link className={`transition ${isActive("/") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/">Home</Link>
          <Link className={`transition ${isActive("/Babyfurniture") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Babyfurniture">Baby Furniture</Link>
          <Link className={`transition ${isActive("/Babyshower") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Babyshower">Baby Shower</Link>

          {/* Boys dropdown */}
          <div className="relative">
            <button onClick={() => toggleDropdown("boys")} className={`transition flex items-center ${["/Newborn", "/BoysUnderage"].includes(location.pathname) ? "text-green-400 font-bold" : "hover:text-green-500"}`}>Boys ▾</button>
            {openDropdown === "boys" && (
              <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg w-40 py-2">
                <Link to="/Newborn" className={`block px-4 py-2 ${isActive("/Newborn") ? "bg-green-100" : "hover:bg-green-100"}`} onClick={() => setOpenDropdown(null)}>Newborn</Link>
                <Link to="/BoysUnderage" className={`block px-4 py-2 ${isActive("/BoysUnderage") ? "bg-green-100" : "hover:bg-green-100"}`} onClick={() => setOpenDropdown(null)}>Underage</Link>
              </div>
            )}
          </div>

          {/* Girls dropdown */}
          <div className="relative">
            <button onClick={() => toggleDropdown("girls")} className={`transition flex items-center ${["/GirlsNewborn", "/GirlsUnderage"].includes(location.pathname) ? "text-green-400 font-bold" : "hover:text-green-500"}`}>Girls ▾</button>
            {openDropdown === "girls" && (
              <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg w-40 py-2">
                <Link to="/GirlsNewborn" className={`block px-4 py-2 ${isActive("/GirlsNewborn") ? "bg-green-100" : "hover:bg-green-100"}`} onClick={() => setOpenDropdown(null)}>Newborn</Link>
                <Link to="/GirlsUnderage" className={`block px-4 py-2 ${isActive("/GirlsUnderage") ? "bg-green-100" : "hover:bg-green-100"}`} onClick={() => setOpenDropdown(null)}>Underage</Link>
              </div>
            )}
          </div>

          <Link className={`transition ${isActive("/Cars") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Cars">Cars</Link>
          <Link className={`transition ${isActive("/ContactUs") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/ContactUs">Contact Us</Link>
        </nav>

        {/* Cart & Mobile menu button */}
        <div className="flex items-center space-x-2">
          <Link to="/Cartpage" className="relative">
            <FaCartArrowDown size={26} className="  text-green-400 hover:text-green-600 transition"/>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={22}/> : <FaBars size={22}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-2">
          <Link className={`block ${isActive("/") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link className={`block ${isActive("/Babyfurniture") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Babyfurniture" onClick={() => setIsMobileMenuOpen(false)}>Baby Furniture</Link>
          <Link className={`block ${isActive("/Babyshower") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Babyshower" onClick={() => setIsMobileMenuOpen(false)}>Baby Shower</Link>

          {/* Boys mobile submenu */}
          <div>
            <button onClick={() => toggleDropdown("boys")} className="w-full text-left flex justify-between hover:text-green-400 font-bold">Boys ▾</button>
            {openDropdown === "boys" && (
              <div className="pl-4 space-y-1">
                <Link to="/Newborn" className={`block ${isActive("/Newborn") ? "text-green-400 font-bold" : "hover:text-green-500"}`} onClick={() => {setOpenDropdown(null); setIsMobileMenuOpen(false);}}>Newborn</Link>
                <Link to="/BoysUnderage" className={`block ${isActive("/BoysUnderage") ? "text-green-400 font-bold" : "hover:text-green-500"}`} onClick={() => {setOpenDropdown(null); setIsMobileMenuOpen(false);}}>Underage</Link>
              </div>
            )}
          </div>

          {/* Girls mobile submenu */}
          <div>
            <button onClick={() => toggleDropdown("girls")} className="w-full text-left flex justify-between">Girls ▾</button>
            {openDropdown === "girls" && (
              <div className="pl-4 space-y-1">
                <Link to="/GirlsNewborn" className={`block ${isActive("/GirlsNewborn") ? "text-green-400 font-bold" : "hover:text-green-500"}`} onClick={() => {setOpenDropdown(null); setIsMobileMenuOpen(false);}}>Newborn</Link>
                <Link to="/GirlsUnderage" className={`block ${isActive("/GirlsUnderage") ? "text-green-400 font-bold" : "hover:text-green-500"}`} onClick={() => {setOpenDropdown(null); setIsMobileMenuOpen(false);}}>Underage</Link>
              </div>
            )}
          </div>

          <Link className={`block ${isActive("/Cars") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/Cars" onClick={() => setIsMobileMenuOpen(false)}>Cars</Link>
          <Link className={`block ${isActive("/ContactUs") ? "text-green-400 font-bold" : "hover:text-green-500"}`} to="/ContactUs" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
