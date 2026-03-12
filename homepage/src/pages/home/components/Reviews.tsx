import { useState, useEffect, useRef } from 'react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState('opacity-100');
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

  return (
    <section ref={sectionRef} id="reviews" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Testimonial Carousel */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-12 shadow-[0_4px_40px_rgba(124,58,237,0.18)]">
            <div className={`max-w-4xl mx-auto transition-opacity duration-300 ${fadeClass}`}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#7C3AED]">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
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
                <p className="text-white/80 text-lg leading-relaxed italic">
                  {reviews[currentIndex].text}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToReview(index)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        index === currentIndex ? 'bg-[#7C3AED] w-8' : 'bg-white/20 w-2'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevReview}
                    className="w-10 h-10 bg-[#4C1D95] text-white rounded-full flex items-center justify-center hover:bg-[#7C3AED] hover:scale-110 transition-all cursor-pointer"
                  >
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-10 h-10 bg-[#4C1D95] text-white rounded-full flex items-center justify-center hover:bg-[#7C3AED] hover:scale-110 transition-all cursor-pointer"
                  >
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