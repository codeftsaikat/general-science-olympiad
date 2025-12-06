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

export default function Home() {

  return (
    <div className="antialiased">
      <ScrollEffect />
      <Header />
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