// File: src/components/group/OurOfferings.tsx

'use client';

import { useState } from 'react';

const offerings = [
  {
    title: 'Refining',
    description: 'One of only three refineries worldwide designated as ‘Referee’ by both the LBMA and the LPPM.',
    image: '/images/offer1.png',
  },
  {
    title: 'Minting & Manufacturing',
    description: 'Full suite of services, - Gold, silver, PGMs.',
    image: '/images/offer2.png',
  },
  {
    title: 'Trading',
    description: 'Physical and e-trading.',
    image: '/images/offer1.png',
  },
  {
    title: 'Financing',
    description: 'Short-term services, increased liquidity.',
    image: '/images/offer2.png',
  },
  {
    title: 'Vaulting & Storage',
    description: 'Bespoke storage solutions.',
    image: '/images/offer1.png',
  },
  {
    title: 'Provenance™',
    description: 'A traceability solution that tracks the precious metals supply chain, from source to end product.',
    image: '/images/offer2.png',
  },
];

export default function OurOfferings() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative w-full  text-white bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${offerings[activeIndex].image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-2xl tracking-wide text-white text-center uppercase">Our Offerings</h2>
        <div className="w-16 h-[1px] bg-[#CFA04F] mx-auto my-4 mb-12" />

        <ul className="">
          {offerings.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="flex justify-between items-center pb-28 cursor-pointer border-t-1 "
            >
              <div className="w-[300px] font-questa text-left text-white text-3xl font-light">
                {item.title}
              </div>
              <div className="text-sm min-w-[600px] text-white text-start ">
                {item.description}
              </div>
              <div className="text-white opacity-70 text-xl">→</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
