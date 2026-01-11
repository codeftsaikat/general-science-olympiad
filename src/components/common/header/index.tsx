'use client';

import { useEffect, useState } from 'react';
import { Navbar } from './navbar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-300/50 backdrop-blur-xl shadow-lg border-teal-500/20'
        : 'bg-slate-100/40 backdrop-blur-md shadow-sm'
        }`}
    >
      <Navbar />
    </nav>
  );
};

export default Header;