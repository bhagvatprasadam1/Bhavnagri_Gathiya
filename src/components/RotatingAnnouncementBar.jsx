import { useState, useEffect } from 'react';

const OFFERS = [
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'FREE SHIPPING ON YOUR FIRST ORDER ABOVE ₹599',
];

export default function RotatingAnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#3B2418] text-[#FFF8E9] py-0.5 px-3 sm:px-4 text-center flex items-center justify-center relative overflow-hidden select-none min-h-[22px] leading-tight">
      <div className="relative w-full flex items-center justify-center">
        <span
          key={currentIndex}
          className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase inline-block transition-opacity duration-300"
          style={{ animation: 'fadeInTicker 300ms ease-in-out' }}
        >
          {OFFERS[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes fadeInTicker {
          from { opacity: 0; transform: translateY(-2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
