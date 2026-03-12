import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUs() {
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

  const reasons = [
    {
      title: 'Cosmetic Dentistry Tailored to You',
      description:
        'Whether you are interested in teeth whitening, veneers, composite bonding or Invisalign, we take time to understand what you want and explain every option clearly. The goal is a smile you feel confident in.',
      image:
        'https://readdy.ai/api/search-image?query=patient%20relaxed%20and%20comfortable%20reclining%20in%20modern%20dental%20chair%20calm%20serene%20atmosphere%20soft%20warm%20lighting%20dental%20clinic%20interior%20reassuring%20environment%20professional%20medical%20photography%20simple%20clean%20background&width=600&height=400&seq=whychoose1&orientation=landscape',
    },
    {
      title: 'Caring for Nervous Patients',
      description:
        'If visiting the dentist makes you anxious, you are not alone. Our team works at your pace, explains everything before they start, and many of our patients tell us they wish they had come sooner.',
      image:
        'https://readdy.ai/api/search-image?query=dentist%20using%20advanced%20digital%20intraoral%20scanner%203D%20scanning%20equipment%20modern%20dental%20technology%20high-tech%20clinical%20setting%20professional%20dentist%20at%20work%20precise%20diagnostic%20tools%20clean%20background&width=600&height=400&seq=whychoose2&orientation=landscape',
    },
    {
      title: 'Technology That Makes a Difference',
      description:
        'We use the iTero Element scanner for Invisalign treatment, which means no messy moulds and a digital preview of your results before you commit. We also use AirFlow during whitening for a noticeably fresher clean.',
      image:
        'https://readdy.ai/api/search-image?query=dentist%20using%20advanced%20digital%20intraoral%20scanner%203D%20scanning%20equipment%20modern%20dental%20technology%20high-tech%20clinical%20setting%20professional%20dentist%20at%20work%20precise%20diagnostic%20tools%20clean%20background&width=600&height=400&seq=whychoose2&orientation=landscape',
    },
    {
      title: 'Your Local Practice on Bell Street',
      description:
        'Dr Sobhan Amiri and the team have been looking after patients in Reigate since 2019. We are open Monday to Friday, our pricing is straightforward, and we always take time to explain your treatment properly.',
      image:
        'https://readdy.ai/api/search-image?query=modern%20bright%20dental%20reception%20waiting%20area%20elegant%20interior%20design%20comfortable%20seating%20warm%20welcoming%20atmosphere%20contemporary%20clinic%20lobby%20natural%20light%20plants%20calming%20decor%20simple%20clean%20background&width=600&height=400&seq=whychoose4&orientation=landscape',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#D9C4E8] text-sm font-semibold uppercase tracking-wider">
            Why Choose Reigate Smiles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Your Trusted Dental Partner in Surrey
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            Dr Sobhan Amiri and his team have been caring for patients in Reigate since 2019. Whether you need a routine check-up, are considering Invisalign, or want to explore dental implants, we take time to listen and explain every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                hover:scale-[1.03]
                hover:shadow-[0_0_0_2px_rgba(124,58,237,0.7),0_8px_40px_rgba(124,58,237,0.35)]
                shadow-[0_4px_24px_rgba(0,0,0,0.3)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Full-bleed image */}
              <img
                src={reason.image}
                alt={reason.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 20%, rgba(15,5,32,0.7) 60%, rgba(15,5,32,0.92) 100%)',
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(15,5,32,0.15) 0%, rgba(15,5,32,0.82) 55%, rgba(15,5,32,0.97) 100%)',
                }}
              />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-white text-lg leading-snug mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
