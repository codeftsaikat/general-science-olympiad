'use client';

import { Navbar1 } from '@/components/common/header/navbar';
import { useEffect, useState } from 'react';

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
        ? 'bg-slate-900/50 backdrop-blur-xl shadow-lg border-teal-500/20'
        : 'bg-slate-900/60 backdrop-blur-md'
        }`}
    >
      <Navbar1 />


    </nav>
  );
};

export default Header;