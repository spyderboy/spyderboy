import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import XanaduIntro from '@/components/XanaduIntro';
import ProjectGrid from '@/components/ProjectGrid';
import EngineSection from '@/components/EngineSection';
import WhyBuilt from '@/components/WhyBuilt';
import Footer from '@/components/Footer';
import Consulting from '@/components/Consulting';
import Background from '@/components/Background';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
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
        <Background />
        <Consulting />
        <Footer />
      </main>
    </>
  );
}
