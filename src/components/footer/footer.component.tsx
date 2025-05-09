// File: src/components/Footer.tsx

'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#2C353F] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <img src="/images/MKS-PAMP-GROUP-logo.png" alt="MKS PAMP" className="" />
        </div>

        {/* Columns */}
        <div className="col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <p className="font-bold text-xs mb-2">THE GROUP</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#">The Group</a></li>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs mb-2">CAREERS</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs mb-2">LEGAL</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs mb-2">FOLLOW US :</p>
            <div className="flex items-center gap-4 mt-2 text-xl">
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#545E69] mx-6" />

      {/* Brand Links + Copyright */}
      <div className="text-xs text-center py-6 text-[#CFA04F] space-x-2">
        <span className="font-semibold">MKS PAMP GROUP:</span>
        <span className="text-white">MKS PAMP</span> <span> - </span>
        <span className="text-white">MTB</span> <span> - </span>
        <span className="text-white">MMTC PAMP</span> <span> - </span>
        <span className="text-white">APMEX</span> <span> - </span>
        <span className="text-white">GOLD AVENUE</span>
      </div>
      <p className="text-center text-xs pb-6 text-white opacity-70">
        © MKS PAMP GROUP 2025 All Rights Reserved
      </p>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-b from-[#CFA04F] to-[#C2913E] text-white text-lg shadow-md transition hover:scale-110 z-50"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
