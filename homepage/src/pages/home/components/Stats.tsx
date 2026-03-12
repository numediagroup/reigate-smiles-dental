import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '4.9',    label: 'Google Rating'    },
    { number: '111',    label: 'Google Reviews'   },
    { number: '6+',     label: 'Years in Reigate' },
    { number: '5 Days', label: 'Mon–Fri Open'     },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full backdrop-blur-md bg-white/[0.08] border-t border-b border-white/15"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center py-12 px-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Divider — hidden on first item */}
              {index !== 0 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20 hidden lg:block" />
              )}
              {/* Mobile divider for second column */}
              {index === 2 && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20 lg:hidden" />
              )}

              <p
                className="text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight whitespace-nowrap"
                style={{ color: '#7C3AED' }}
              >
                {stat.number}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 text-center whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
