import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import EngineSection from '@/components/EngineSection';
import WhyBuilt from '@/components/WhyBuilt';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <Nav />
      <Hero />
      <ProjectGrid />
      <EngineSection />
      <WhyBuilt />
      <Footer />
    </main>
  );
}
