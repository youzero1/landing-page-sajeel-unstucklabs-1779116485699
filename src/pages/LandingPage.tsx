import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import LogoCloud from '@/components/sections/LogoCloud';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Stats from '@/components/sections/Stats';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
