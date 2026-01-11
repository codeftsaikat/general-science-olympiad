import ScrollEffect from '@/components/common/scroll-effect';
import { useEffect } from 'react';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import ActivitiesSection from '../views/home/activity';
import CategoriesSection from '../views/home/catagory';
import { default as MissionVisionImpactSimple } from '../views/home/events/first/first-ngso';
import EventsSection from '../views/home/events/second';
import Hero from '../views/home/hero';
import MediaCoverageSection from '../views/home/media';
import PartnersSection from '../views/home/partner';

export default function HomePage() {
  useEffect(() => {
    document.title = 'General Science Olympiad | Official Portal';
  }, []);

  return (
    <div className="antialiased">
      <ScrollEffect />
      <Header />
      <Hero />

      <MissionVisionImpactSimple />
      <EventsSection />
      <CategoriesSection />
      <div className='max-w-7xl mx-auto'>
        <PartnersSection />
        <MediaCoverageSection />
        <ActivitiesSection />
      </div>
      <Footer />
    </div>
  );
}