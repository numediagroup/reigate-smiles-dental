import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Journey from './components/Journey';
import Invisalign from './components/Invisalign';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #1f0d38 20%, #2d1b69 45%, #1f0d38 70%, #1a0a2e 100%)' }}>
      {/* Global animated gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(111,42,219,0.18) 0%, rgba(111,42,219,0.06) 50%, transparent 70%)',
            animation: 'orbDrift1 22s ease-in-out infinite',
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '35%',
            right: '-12%',
            background: 'radial-gradient(circle, rgba(80,28,103,0.20) 0%, rgba(80,28,103,0.07) 50%, transparent 70%)',
            animation: 'orbDrift2 28s ease-in-out infinite',
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            bottom: '5%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(196,168,232,0.10) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
            animation: 'orbDrift3 18s ease-in-out infinite',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <style>{`
        @keyframes orbDrift1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(60px, 40px) scale(1.06); }
          66%  { transform: translate(-30px, 70px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orbDrift2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          40%  { transform: translate(-70px, -50px) scale(1.08); }
          70%  { transform: translate(40px, 60px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orbDrift3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(50px, -60px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <Stats />

        <div style={{ background: 'rgba(45,27,105,0.45)' }}>
          <WhyChooseUs />
        </div>

        <Services />

        <div style={{ background: 'rgba(45,27,105,0.45)' }}>
          <Journey />
        </div>

        <Invisalign />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}