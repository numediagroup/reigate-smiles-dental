import { useEffect, useRef, useState } from 'react';

export default function Journey() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Complimentary Consultation',
      description: 'Begin with a free, no-obligation consultation where we listen to your concerns, understand your goals, and discuss your dental health.',
      icon: 'ri-chat-smile-3-fill',
    },
    {
      number: '02',
      title: 'Digital Scans & Diagnostics',
      description: 'Using advanced 3D imaging and digital scanning technology, we create a comprehensive picture of your oral health with precision and comfort.',
      icon: 'ri-scan-fill',
    },
    {
      number: '03',
      title: 'Tailored Treatment Plan',
      description: 'We design a personalized treatment plan that fits your needs, timeline, and budget, with clear explanations and transparent pricing.',
      icon: 'ri-file-list-3-fill',
    },
    {
      number: '04',
      title: 'Smile Transformation',
      description: 'Experience gentle, expert care as we bring your dream smile to life. Our team ensures every step is comfortable and stress-free.',
      icon: 'ri-sparkling-fill',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D9C4E8] text-sm font-semibold uppercase tracking-wider">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Your Path to a Perfect Smile
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            From your first visit to your final reveal, we guide you every step of the way with care, expertise, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="flex items-start gap-6 p-7 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 32px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex-shrink-0 w-20 flex items-start justify-center pt-1">
                  <span
                    className="text-5xl font-bold leading-none select-none"
                    style={{ color: 'rgba(216,180,254,0.55)' }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-lg mb-2 leading-snug">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}