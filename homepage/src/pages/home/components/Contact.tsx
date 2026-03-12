import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMapVisible(true);
      },
      { threshold: 0.1 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });
      const response = await fetch('https://readdy.ai/api/form/d6ip0chboei3uoqmpo5g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#D9C4E8] text-sm font-semibold uppercase tracking-wider">
            Book Your Visit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Book Your Appointment
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            Call us on 01737 949 930 or fill in the form below and we will get back to you within one working day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-[0_4px_32px_rgba(124,58,237,0.12)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.28)] hover:border-white/25 transition-all shadow-xl mb-8">
              {/* Step Indicators */}
              <div className="flex items-center mb-10">
                {[1, 2, 3].map((step, idx) => (
                  <div key={step} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          step === 1
                            ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/40'
                            : 'bg-white/10 text-white/40'
                        }`}
                      >
                        {step}
                      </div>
                    </div>
                    {idx < 2 && (
                      <div className="flex-1 h-0.5 bg-white/10 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>

              <form id="appointment-form" data-readdy-form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Full Name <span className="text-[#D9C4E8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED] text-sm text-white placeholder-white/30 transition-all outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Email Address <span className="text-[#D9C4E8]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED] text-sm text-white placeholder-white/30 transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Phone Number <span className="text-[#D9C4E8]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED] text-sm text-white placeholder-white/30 transition-all outline-none"
                      placeholder="07XXX XXXXXX"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C3AED] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  Book Online
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-[#7C3AED]/20 border border-[#7C3AED] rounded-lg text-white text-sm">
                    <i className="ri-check-line mr-2"></i>
                    Thank you! We'll contact you shortly to confirm your appointment.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-400 rounded-lg text-red-200 text-sm">
                    <i className="ri-error-warning-line mr-2"></i>
                    Something went wrong. Please call us directly.
                  </div>
                )}
              </form>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-xl p-6 shadow-[0_4px_32px_rgba(124,58,237,0.12)] hover:bg-white/12 hover:shadow-[0_8px_40px_rgba(124,58,237,0.28)] hover:border-white/25 transition-all">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-phone-fill text-3xl text-[#7C3AED]"></i>
                </div>
                <h4 className="font-bold text-white mt-3 mb-2">Call Us</h4>
                <a href="tel:01737949930" className="text-white/70 text-sm hover:text-[#D9C4E8] cursor-pointer">
                  01737 949 930
                </a>
              </div>
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-xl p-6 shadow-[0_4px_32px_rgba(124,58,237,0.12)] hover:bg-white/12 hover:shadow-[0_8px_40px_rgba(124,58,237,0.28)] hover:border-white/25 transition-all">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-mail-fill text-3xl text-[#7C3AED]"></i>
                </div>
                <h4 className="font-bold text-white mt-3 mb-2">Email Us</h4>
                <a href="mailto:enquiries@reigatesmiles.co.uk" className="text-white/70 text-sm hover:text-[#D9C4E8] cursor-pointer">
                  enquiries@reigatesmiles.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div ref={mapRef}>
            <div
              className={`bg-white/6 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-full border-2 border-[#7C3AED]/50 transition-all duration-1000 ${
                isMapVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.6!2d-0.2057!3d51.2376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f0b0b0b0b0b1%3A0x0!2sHigh+St%2C+Reigate+RH2+9AA!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reigate Smiles Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}