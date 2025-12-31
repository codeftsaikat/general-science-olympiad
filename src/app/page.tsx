
import ScrollEffect from '@/components/common/scroll-effect';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import ActivitiesSection from '../views/home/activity';
import CategoriesSection from '../views/home/catagory';
import { default as MissionVisionImpactSimple } from '../views/home/events/first-ngso';
import EventsSection from '../views/home/events/second';
import Hero from '../views/home/hero';
import MediaCoverageSection from '../views/home/media';
import PartnersSection from '../views/home/partner';

export default function Home() {

  return (
    <div className="antialiased">
      <ScrollEffect />
      <Header />

      <Hero />
      <div className='max-w-7xl mx-auto'>
        <MissionVisionImpactSimple />
        <EventsSection />
        <CategoriesSection />
        <PartnersSection />
        <MediaCoverageSection />
        <ActivitiesSection />
      </div>
      <Footer />
    </div>
  );
}