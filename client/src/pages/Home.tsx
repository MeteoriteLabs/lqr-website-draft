import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CreateCustomize from '@/components/CreateCustomize';
import ShareAnywhere from '@/components/ShareAnywhere';
import Analytics from '@/components/Analytics';
import ReferEarn from '@/components/ReferEarn';
import WhoIsFor from '@/components/WhoIsFor';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CreateCustomize />
      <ShareAnywhere />
      <Analytics />
      <ReferEarn />
      <WhoIsFor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
