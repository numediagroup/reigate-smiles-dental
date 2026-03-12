import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState('opacity-100');
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsCarouselVisible(true); },
      { threshold: 0.1 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: 'Sarah Mitchell',
      location: 'Reigate',
      rating: 5,
      text: 'Absolutely outstanding service! The team at Reigate Smiles made me feel so comfortable during my Invisalign treatment. I was nervous about straightening my teeth as an adult, but they explained everything clearly and the results are incredible. Highly recommend!',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20woman%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev1&orientation=squarish',
      treatment: 'Invisalign',
    },
    {
      name: 'James Thompson',
      location: 'Redhill',
      rating: 5,
      text: 'I had a dental emergency on a Saturday and they saw me the same day. The dentist was so gentle and professional, and the pain relief was immediate. The practice is modern, clean, and the staff are wonderful. Thank you for taking such great care of me!',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20man%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev2&orientation=squarish',
      treatment: 'Emergency Care',
    },
    {
      name: 'Emma Richardson',
      location: 'Banstead',
      rating: 5,
      text: 'After years of hiding my smile, I finally got veneers at Reigate Smiles and I couldn\'t be happier! The transformation is amazing and the whole process was painless. The team are true artists and made me feel like a VIP throughout.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20woman%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev3&orientation=squarish',
      treatment: 'Cosmetic Dentistry',
    },
    {
      name: 'Oliver Hartley',
      location: 'Reigate',
      rating: 5,
      text: 'Best dental practice I\'ve ever been to! I\'m usually terrified of dentists, but the sedation option made everything so easy. The staff are incredibly kind and patient, and my dental implants look and feel completely natural. Life-changing experience.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20man%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev4&orientation=squarish',
      treatment: 'Dental Implants',
    },
    {
      name: 'Lucy Anderson',
      location: 'Dorking',
      rating: 5,
      text: 'My whole family goes to Reigate Smiles and we all love it! The dentists are brilliant with children, and my kids actually look forward to their check-ups. The practice is spotless, the technology is impressive, and the care is second to none.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20woman%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev5&orientation=squarish',
      treatment: 'Family Dentistry',
    },
    {
      name: 'David Palmer',
      location: 'Horley',
      rating: 5,
      text: 'Professional teeth whitening here was worth every penny! The results are natural-looking and my confidence has surged. The dentist took time to explain the process and made sure I was comfortable throughout. Exceptional service from start to finish.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20man%20smiling%20friendly%20face%20clean%20background%20high%20quality%20photography&width=100&height=100&seq=reigaterev6&orientation=squarish',
      treatment: 'Teeth Whitening',
    },
  ];

  const nextReview = () => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setFadeClass('opacity-100');
    }, 300);
  };

  const prevReview = () => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setFadeClass('opacity-100');
    }, 300);
  };

  const goToReview = (index: number) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass('opacity-100');
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'ri-heart-pulse-fill',
      title: 'General Dentistry',
      description: 'Comprehensive check-ups, fillings, root canals, and preventive care.',
      image: 'https://readdy.ai/api/search-image?query=modern%20dental%20examination%20professional%20dentist%20checking%20patient%20teeth%20clean%20clinical%20setting%20warm%20lighting%20comfortable%20atmosphere%20high%20quality%20medical%20photography%20simple%20background&width=600&height=400&seq=reigateservice1&orientation=landscape',
    },
    {
      icon: 'ri-sparkling-2-fill',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, bonding, and complete smile makeovers.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20white%20smile%20teeth%20whitening%20result%20cosmetic%20dentistry%20before%20after%20transformation%20happy%20patient%20smiling%20professional%20photography%20simple%20background&width=600&height=400&seq=reigateservice2&orientation=landscape',
    },
    {
      icon: 'ri-align-center',
      title: 'Invisalign',
      description: 'Discreet clear aligners for teens and adults — no traditional braces.',
      image: 'https://readdy.ai/api/search-image?query=invisalign%20clear%20aligners%20in%20hand%20transparent%20orthodontic%20treatment%20modern%20dental%20technology%20professional%20product%20photography%20simple%20clean%20background&width=600&height=400&seq=reigateservice3&orientation=landscape',
    },
    {
      icon: 'ri-tooth-fill',
      title: 'Dental Implants',
      description: 'Permanent, natural-looking tooth replacements with advanced technology.',
      image: 'https://readdy.ai/api/search-image?query=dental%20implant%20model%20showing%20tooth%20replacement%20modern%20dentistry%20educational%20display%20professional%20medical%20photography%20clean%20simple%20background&width=600&height=400&seq=reigateservice4&orientation=landscape',
    },
    {
      icon: 'ri-alarm-warning-fill',
      title: 'Emergency Care',
      description: 'Fast, compassionate treatment for dental emergencies — same-day appointments available.',
      image: 'https://readdy.ai/api/search-image?query=emergency%20dental%20care%20urgent%20treatment%20professional%20dentist%20helping%20patient%20modern%20clinic%20setting%20reassuring%20atmosphere%20high%20quality%20photography%20simple%20background&width=600&height=400&seq=reigateservice5&orientation=landscape',
    },
    {
      icon: 'ri-contrast-2-fill',
      title: 'Orthodontics',
      description: 'Traditional braces and modern alignment solutions for all ages.',
      image: 'https://readdy.ai/api/search-image?query=orthodontic%20braces%20treatment%20dental%20alignment%20modern%20orthodontics%20professional%20dental%20care%20clean%20clinical%20setting%20high%20quality%20medical%20photography%20simple%20background&width=600&height=400&seq=reigateservice6&orientation=landscape',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#D9C4E8] text-sm font-semibold uppercase tracking-wider">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Comprehensive Dental Care
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            From routine check-ups to complete smile transformations, our expert team offers a full range of treatments using the latest technology and techniques.
          </p>
        </div>

        {/* Treatment cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                hover:scale-[1.03]
                hover:shadow-[0_0_0_2px_rgba(124,58,237,0.7),0_8px_40px_rgba(124,58,237,0.35)]
                shadow-[0_4px_24px_rgba(0,0,0,0.3)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={scrollToContact}
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(15,5,32,0.7) 60%, rgba(15,5,32,0.92) 100%)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom, rgba(15,5,32,0.15) 0%, rgba(15,5,32,0.82) 55%, rgba(15,5,32,0.97) 100%)' }} />
              <div className="absolute top-4 left-4">
                <div className="w-9 h-9 bg-[#7C3AED]/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                  <i className={`${service.icon} text-base text-white`}></i>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-white text-lg leading-snug mb-1">{service.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-3">{service.description}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
                  className="inline-flex items-center gap-1.5 text-[#D9C4E8] text-sm font-semibold group-hover:text-white group-hover:gap-2.5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Learn More <i className="ri-arrow-right-line text-base"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Anxiety section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <img
                src="https://readdy.ai/api/search-image?query=friendly%20dentist%20sitting%20beside%20patient%20in%20bright%20modern%20dental%20practice%20having%20calm%20reassuring%20conversation%20warm%20welcoming%20interior%20natural%20light%20comfortable%20chairs%20professional%20clinical%20setting%20genuine%20smile%20relaxed%20atmosphere%20high%20quality%20photography%20simple%20clean%20background&width=800&height=840&seq=anxietysection1&orientation=portrait"
                alt="Dentist speaking calmly with a patient in a welcoming dental practice"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Worried About Visiting the Dentist?
              </h2>
              <p className="text-white/75 max-w-xl leading-relaxed text-lg">
                You are not alone. Our team understands dental anxiety and works at your pace.
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {[
                  'We explain everything before we start',
                  'You are always in control of the pace',
                  'Many of our patients tell us they wish they had come sooner',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-base leading-relaxed">
                    <span className="text-white/60 font-light mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 text-white/70 text-base leading-relaxed italic border-l-2 border-[#7C3AED] pl-5">
                &ldquo;I had avoided the dentist for years. The team at Reigate Smiles made me feel completely at ease from the moment I arrived.&rdquo;
              </blockquote>
              <div className="mt-8">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_24px_rgba(124,58,237,0.5)] cursor-pointer whitespace-nowrap"
                >
                  Book Online <i className="ri-calendar-line text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-[#D9C4E8] text-sm font-semibold uppercase tracking-wider">Patient Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Trusted by Families Across Reigate &amp; Surrey
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] rounded-2xl p-8 text-white text-center shadow-[0_4px_32px_rgba(124,58,237,0.25)] hover:shadow-[0_8px_40px_rgba(124,58,237,0.45)] hover:scale-105 transition-all border border-white/15">
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1,2,3,4,5].map((i) => <i key={i} className="ri-star-fill text-amber-400 text-xl"></i>)}
              </div>
              <p className="text-white/90 text-sm">111 Google Reviews</p>
            </div>
            <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center shadow-[0_4px_32px_rgba(124,58,237,0.12)] hover:bg-white/12 hover:shadow-[0_8px_40px_rgba(124,58,237,0.28)] hover:border-white/25 hover:scale-105 transition-all">
              <i className="ri-scan-2-line text-5xl text-[#7C3AED] mb-3"></i>
              <h3 className="font-bold text-white text-xl mb-2">iTero Scanner</h3>
              <p className="text-white/75 text-sm">Digital Treatment Planning</p>
            </div>
            <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center shadow-[0_4px_32px_rgba(124,58,237,0.12)] hover:bg-white/12 hover:shadow-[0_8px_40px_rgba(124,58,237,0.28)] hover:border-white/25 hover:scale-105 transition-all">
              <i className="ri-home-heart-line text-5xl text-[#7C3AED] mb-3"></i>
              <h3 className="font-bold text-white text-xl mb-2">Est. 2019</h3>
              <p className="text-white/75 text-sm">Serving Reigate Families</p>
            </div>
          </div>
        </div>

        {/* Testimonial carousel — directly below trust cards */}
        <div ref={carouselRef} className={`mt-12 relative transition-all duration-1000 ${isCarouselVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-12 shadow-[0_4px_40px_rgba(124,58,237,0.18)]">
            <div className={`max-w-4xl mx-auto transition-opacity duration-300 ${fadeClass}`}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#7C3AED]">
                  <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">{reviews[currentIndex].name}</h3>
                  <p className="text-white/70 text-sm">{reviews[currentIndex].location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400"></i>
                    ))}
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-block bg-[#7C3AED] text-white px-4 py-2 rounded-full text-xs font-semibold">
                    {reviews[currentIndex].treatment}
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <i className="ri-double-quotes-l text-5xl text-[#7C3AED]/50 mb-4"></i>
                <p className="text-white/80 text-lg leading-relaxed italic">{reviews[currentIndex].text}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToReview(index)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${index === currentIndex ? 'bg-[#7C3AED] w-8' : 'bg-white/20 w-2'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prevReview} className="w-10 h-10 bg-[#4C1D95] text-white rounded-full flex items-center justify-center hover:bg-[#7C3AED] hover:scale-110 transition-all cursor-pointer">
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <button onClick={nextReview} className="w-10 h-10 bg-[#4C1D95] text-white rounded-full flex items-center justify-center hover:bg-[#7C3AED] hover:scale-110 transition-all cursor-pointer">
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
