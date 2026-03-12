export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0d0418] to-[#1a0a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://static.readdy.ai/image/b359796b77322c262c5aff5db97a4e79/503eb490a5d70e16a84ff87baa4efabf.png"
                alt="Reigate Smiles Logo"
                style={{ width: '180px', filter: 'brightness(0) invert(1)' }}
                className="object-contain"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Reigate Smiles is a friendly dental practice on Bell Street, Reigate, offering general, cosmetic and specialist dentistry for the whole family. Open Monday to Friday.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#7C3AED]/40 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#7C3AED]/40 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#7C3AED]/40 transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('invisalign')}
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  Invisalign
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">General Dentistry</li>
              <li className="text-white/80 text-sm">Cosmetic Dentistry</li>
              <li className="text-white/80 text-sm">Invisalign</li>
              <li className="text-white/80 text-sm">Dental Implants</li>
              <li className="text-white/80 text-sm">Emergency Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-[#7C3AED] mt-1"></i>
                <div>
                  <p className="text-white/80 text-sm">6 Bell Street</p>
                  <p className="text-white/80 text-sm">Reigate, Surrey RH2 7BG</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-[#7C3AED]"></i>
                <a href="tel:01737949930" className="text-white/80 text-sm hover:text-white cursor-pointer">
                  01737 949 930
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-[#7C3AED]"></i>
                <a href="mailto:enquiries@reigatesmiles.co.uk" className="text-white/80 text-sm hover:text-white cursor-pointer">
                  enquiries@reigatesmiles.co.uk
                </a>
              </li>
            </ul>

            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h5 className="font-semibold mb-2 text-sm">Opening Hours</h5>
              <div className="space-y-1 text-xs text-white/80">
                <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Reigate Smiles. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}