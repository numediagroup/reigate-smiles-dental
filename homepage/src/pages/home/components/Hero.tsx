import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Vimeo Video Background with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <iframe
          src="https://player.vimeo.com/video/593336552?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[100vw] min-h-[100vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh' }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Reigate Smiles Practice Video"
        ></iframe>
        {/* Dark purple gradient overlay — warm deep purple */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79,37,102,0.72) 0%, rgba(15,5,32,0.60) 100%)' }}></div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 w-full px-6 lg:px-12 py-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                <span className="text-amber-400 text-sm">⭐</span>
                <span className="text-white text-sm font-medium tracking-wide">4.9 on Google · 111 Patient Reviews · Serving Reigate Since 2019</span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-[-0.03em]">
                Premium Dental Care in Reigate, Surrey
              </h1>

              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light tracking-wide">
                A friendly, professional practice on Bell Street, Reigate. Caring for patients of all ages, from routine check-ups to complete smile transformations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  Book Online
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all whitespace-nowrap cursor-pointer"
                >
                  Free Consultation
                </button>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                {[
                  { icon: '⭐', label: '4.9 on Google · 111 Reviews' },
                  { icon: 'ri-microscope-line', label: 'iTero Element Scanner & AirFlow Technology' },
                  { icon: '❤️', label: 'Gentle Care for Nervous Patients' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {item.icon.startsWith('ri-') ? (
                        <i className={`${item.icon} text-white/80 text-sm`}></i>
                      ) : (
                        <span className="text-sm">{item.icon}</span>
                      )}
                    </div>
                    <span className="text-white/80 text-sm">{item.label}</span>
                    {i < 2 && <span className="text-white/40 ml-4">·</span>}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
