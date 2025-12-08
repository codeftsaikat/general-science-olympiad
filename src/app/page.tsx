import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import ScrollEffect from '@/src/components/ScrollEffect';
import ActivitiesSection from '../views/activity';
import CategoriesSection from '../views/catagory';
import { default as MissionVisionImpactSimple } from '../views/events/first-ngso';
import EventsSection from '../views/events/second';
import MediaCoverageSection from '../views/media';
import PartnersSection from '../views/partner';

export default function Home() {

  return (
    <div className="antialiased">
      <ScrollEffect />
      <Header />
      <Hero />
      <div className='max-w-7xl mx-auto'>
        <CategoriesSection />
        {/* <TrustStrip /> */}
        <MissionVisionImpactSimple />
        {/* <ValueProposition /> */}
        <EventsSection />
        {/* <Categories /> */}
        {/* <Mission /> */}
        {/* <Events /> */}
        {/* <Flashback /> */}
        <PartnersSection />
        {/* <Media /> */}
        <MediaCoverageSection />
        <ActivitiesSection />
      </div>
      <Footer />
    </div>
  );
}