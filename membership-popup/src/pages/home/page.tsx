import MembershipModal from '../../components/MembershipModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="https://static.readdy.ai/image/b359796b77322c262c5aff5db97a4e79/e65dcf231407d9f49368b33b27036fe7.jpeg" 
            alt="Selsdon Smiles Dental" 
            className="h-12 object-contain"
          />
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer" style={{ color: '#3d1951' }}>Services</a>
            <a href="#membership" className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer" style={{ color: '#3d1951' }}>Membership</a>
            <a href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer" style={{ color: '#3d1951' }}>Contact</a>
            <a 
              href="#book" 
              className="px-6 py-2 rounded text-sm font-semibold text-white transition-colors whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: '#3d1951' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2e1140'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3d1951'}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#3d1951' }}>
            Your Smile, Our Priority
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#2a2a2a' }}>
            Experience exceptional dental care with our exclusive patient membership plan
          </p>
          <a 
            href="#membership" 
            className="inline-block px-8 py-4 rounded text-base font-semibold text-white transition-colors whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#3d1951' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2e1140'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3d1951'}
          >
            Learn About Membership
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6" style={{ backgroundColor: '#f9f8f9' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#3d1951' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#3d1951' }}>General Dentistry</h3>
              <p className="text-sm" style={{ color: '#2a2a2a' }}>
                Comprehensive dental examinations, cleanings, and preventive care
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#3d1951' }}>Cosmetic Dentistry</h3>
              <p className="text-sm" style={{ color: '#2a2a2a' }}>
                Teeth whitening, veneers, and smile makeovers
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#3d1951' }}>Hygiene Services</h3>
              <p className="text-sm" style={{ color: '#2a2a2a' }}>
                Professional cleaning with Airflow stain removal technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#3d1951' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm mb-2">© 2025 Selsdon Smiles Dental. All rights reserved.</p>
          <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/80 text-xs transition-colors cursor-pointer">
            Website Builder
          </a>
        </div>
      </footer>

      {/* Membership Modal */}
      <MembershipModal 
        ctaUrl="#book"
        showOnExitIntent={true}
        showOnDelay={true}
        delaySeconds={5}
      />
    </div>
  );
}
