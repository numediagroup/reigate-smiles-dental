import { useEffect, useState } from 'react';

interface MembershipModalProps {
  ctaUrl?: string;
  showOnExitIntent?: boolean;
  showOnDelay?: boolean;
  delaySeconds?: number;
}

export default function MembershipModal({
  ctaUrl = '#',
  showOnExitIntent = true,
  showOnDelay = true,
  delaySeconds = 5,
}: MembershipModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already dismissed in this session
    const dismissed = sessionStorage.getItem('membershipModalDismissed');
    if (dismissed) return;

    // Time delay trigger
    if (showOnDelay) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delaySeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [showOnDelay, delaySeconds]);

  useEffect(() => {
    if (!showOnExitIntent) return;

    const dismissed = sessionStorage.getItem('membershipModalDismissed');
    if (dismissed) return;

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showOnExitIntent]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('membershipModalDismissed', 'true');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(45, 20, 50, 0.50)' }}
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-md w-full max-w-[600px] shadow-lg">
        {/* Header Bar */}
        <div className="relative flex items-center justify-between px-6 py-4" style={{ backgroundColor: '#3d1951' }}>
          <h2 className="text-white text-base font-semibold uppercase tracking-[2px]">
            Exclusive Patient Membership
          </h2>
          <button
            onClick={handleClose}
            className="text-white opacity-60 hover:opacity-100 transition-opacity text-2xl leading-none w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Accent Bar */}
        <div className="h-[3px]" style={{ backgroundColor: '#a693ac' }}></div>

        {/* Body */}
        <div className="px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Left Column - Price Block */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center text-center md:w-[200px]">
              <div className="flex items-start">
                <span className="text-3xl font-bold" style={{ color: '#3d1951' }}>£</span>
                <span className="text-[58px] leading-none font-bold" style={{ color: '#3d1951' }}>24</span>
              </div>
              <p className="mt-2 text-sm font-medium" style={{ color: '#a693ac' }}>per month</p>
              <p className="mt-3 text-xs" style={{ color: '#999999' }}>
                Spread the cost of your dental care.
              </p>
            </div>

            {/* Right Column - Benefits List */}
            <div className="flex-1 space-y-4">
              {/* Benefit 1 */}
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #a693ac' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3d1951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l5 8 5-8c1-1 2-3 2-5 0-4-3-7-7-7z"/>
                    <circle cx="12" cy="9" r="2"/>
                  </svg>
                </div>
                <p className="text-[14px] font-medium" style={{ color: '#2a2a2a' }}>
                  2 Dental Examinations per year
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #a693ac' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3d1951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10h7l3-8 4 16 3-8h4"/>
                  </svg>
                </div>
                <p className="text-[14px] font-medium" style={{ color: '#2a2a2a' }}>
                  2 Hygiene Appointments per year
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #a693ac' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3d1951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8"/>
                    <path d="M12 8v8"/>
                    <path d="M9 9l6 6"/>
                    <path d="M15 9l-6 6"/>
                  </svg>
                </div>
                <p className="text-[14px] font-medium" style={{ color: '#2a2a2a' }}>
                  Includes Airflow Stain Removal
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #a693ac' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3d1951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 3v18"/>
                  </svg>
                </div>
                <p className="text-[14px] font-medium" style={{ color: '#2a2a2a' }}>
                  All Routine X-Rays Included
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 md:mx-8" style={{ borderTop: '1px solid #ece8ed' }}></div>

        {/* CTA Section */}
        <div className="px-6 py-8 md:px-8 text-center">
          <a
            href={ctaUrl}
            className="block w-full py-4 rounded uppercase font-bold tracking-[2.5px] text-white text-sm transition-colors whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#3d1951' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2e1140'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3d1951'}
          >
            Join the Plan Today
          </a>
          <p className="mt-4 text-xs" style={{ color: '#999999' }}>
            No hidden fees · Easy online registration
          </p>
          <button
            onClick={handleClose}
            className="mt-3 text-xs transition-colors cursor-pointer"
            style={{ color: '#b5b5b5' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#777'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#b5b5b5'}
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
