'use client';

import { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-mdtransition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo-dark.svg"
                alt="GSO Logo"
                className="h-14 w-auto object-contain filter group-hover:brightness-110 transition-all "
              />

            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a href="#" className="nav-link hover:text-teal-700">Home</a>
              <a href="#mission" className="nav-link hover:text-teal-700">About Us</a>

              <div className="relative group py-4">
                <button className="flex items-center gap-1 hover:text-teal-700 focus:outline-none">
                  Events <i className="fas fa-chevron-down w-3 h-3"></i>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                  <a href="#first-ngso-details" className="block px-4 py-3 rounded-md hover:bg-slate-50">
                    <span className="block text-slate-900 font-bold">1st NGSO</span>
                    <span className="block text-xs text-slate-500 mt-0.5">National Legacy Event</span>
                  </a>
                  <a href="#events" onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-md hover:bg-slate-50">
                    <span className="block text-teal-700 font-bold">2nd IGSO <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200 uppercase">Live</span></span>
                    <span className="block text-xs text-slate-500 mt-0.5">International Championship</span>
                  </a>
                </div>
              </div>

              <a href="#media" className="nav-link hover:text-teal-700">Media & Partners</a>

              <a href="https://sciencebaze.com/direct-reg/second-igso" className="btn-gold px-6 py-2.5 rounded-md font-bold text-white shadow-lg flex items-center gap-2 text-sm uppercase tracking-wide">
                Register Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button id="mobile-menu-btn" className="md:hidden text-slate-700" onClick={toggleMobileMenu}>
              <i className="fas fa-bars w-6 h-6"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 px-6 border-l border-gray-100 transition-transform`}
      >
        <button id="close-menu-btn" className="absolute top-6 right-6 text-slate-400 hover:text-slate-800" onClick={toggleMobileMenu}>
          <i className="fas fa-times w-6 h-6"></i>
        </button>
        <div className="space-y-6 text-lg font-medium text-slate-800">
          <a href="#" className="block hover:text-teal-700">Home</a>
          <a href="#mission" className="block hover:text-teal-700">About</a>
          <div className="border-t border-b border-gray-100 py-4">
            <div className="text-xs uppercase text-slate-400 font-bold mb-3">Events</div>
            <a href="#first-ngso-details" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base">1st National GSO</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-teal-700 font-bold">2nd International GSO</a>
          </div>
          <a href="#media" className="block hover:text-teal-700">Media</a>
          <a href="https://sciencebaze.com/direct-reg/second-igso" className="block w-full text-center bg-slate-900 text-white py-3 rounded-md text-sm uppercase tracking-wide mt-4">Register Now</a>
        </div>
      </div>
    </>
  );
};

export default Header;