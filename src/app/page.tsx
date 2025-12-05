'use client';
import Categories from '@/src/components/Categories';
import Events from '@/src/components/Events';
import Flashback from '@/src/components/Flashback';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Media from '@/src/components/Media';
import Mission from '@/src/components/Mission';
import ScrollEffect from '@/src/components/ScrollEffect';
import TrustStrip from '@/src/components/TrustStrip';
import ValueProposition from '@/src/components/ValueProposition';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="antialiased">
      <div className="texture-overlay"></div>
      <ScrollEffect />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        switchTab={(tabId) => {
          // This will be handled by the Events component
        }}
      />
      <Hero />
      <TrustStrip />
      <ValueProposition />
      <Categories />
      <Mission />
      <Events />
      <Flashback />
      <Media />
      <Footer />
    </div>
  );
}