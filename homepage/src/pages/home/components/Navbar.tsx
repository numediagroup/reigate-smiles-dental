import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    { name: 'General Dentistry', id: 'services' },
    { name: 'Cosmetic Dentistry', id: 'services' },
    { name: 'Invisalign', id: 'invisalign' },
    { name: 'Dental Implants', id: 'services' },
    { name: 'Emergency Care', id: 'services' },
    { name: 'Orthodontics', id: 'services' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1a0535]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(124,58,237,0.25)] border-b border-white/10'
          : 'bg-[#1a0535]/75 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('hero')}
          >
            {logoError ? (
              <span
                className="font-bold tracking-wide text-white whitespace-nowrap"
                style={{ fontSize: '22px', fontFamily: 'Montserrat, sans-serif' }}
              >
                Reigate <span style={{ color: '#D9C4E8' }}>Smiles</span>
              </span>
            ) : (
              <img
                src="https://static.readdy.ai/image/b359796b77322c262c5aff5db97a4e79/503eb490a5d70e16a84ff87baa4efabf.png"
                alt="Reigate Smiles"
                onError={() => setLogoError(true)}
                style={{
                  width: '216px',
                  minWidth: '192px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  display: 'block',
                }}
              />
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-white/80 hover:text-white"
            >
              About Us
            </button>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 text-white/80 hover:text-white">
                Treatments
                <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a0a2e]/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-white/10">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {service.name}
                    </button>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="w-full text-left px-4 py-3 text-sm text-[#D9C4E8] font-semibold hover:bg-white/8 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View All Treatments →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-white/80 hover:text-white"
            >
              Testimonials
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-white/80 hover:text-white"
            >
              Contact
            </button>

            <a
              href="tel:01737949930"
              className="flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-white/80 hover:text-white"
            >
              <i className="ri-phone-fill"></i>
              01737 949 930
            </a>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#7C3AED] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
            >
              Book Online
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl cursor-pointer text-white"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a0535]/98 backdrop-blur-xl border-t border-white/10 shadow-xl">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-white/80 hover:text-white cursor-pointer whitespace-nowrap"
            >
              About Us
            </button>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-white/80 hover:text-white cursor-pointer whitespace-nowrap"
              >
                Treatments
                <i className={`ri-arrow-down-s-line transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.id)}
                      className="block w-full text-left py-2 text-sm text-white/70 hover:text-white cursor-pointer whitespace-nowrap"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left py-2 text-white/80 hover:text-white cursor-pointer whitespace-nowrap"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-white/80 hover:text-white cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>
            <a
              href="tel:01737949930"
              className="flex items-center gap-2 py-2 text-white/80 hover:text-white cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i>
              01737 949 930
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#7C3AED] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#6D28D9] transition-all whitespace-nowrap cursor-pointer"
            >
              Book Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
