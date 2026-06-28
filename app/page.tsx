import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import XanaduIntro from '@/components/XanaduIntro';
import ProjectGrid from '@/components/ProjectGrid';
import EngineSection from '@/components/EngineSection';
import WhyBuilt from '@/components/WhyBuilt';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-6">
          <Nav dark />
          <Hero />
          <XanaduIntro />
        </div>
      </div>
      <main className="max-w-3xl mx-auto px-6">
        <ProjectGrid />
        <EngineSection />
        <WhyBuilt />
        <Footer />
      </main>
    </>
  );
}
