'use client';

const brands = [
  {
    name: 'MKS PAMP',
    image: '/images/mkspamp.png',
  },
  {
    name: 'MMTC-PAMP',
    image: '/images/pamp.png',
  },
  {
    name: 'MTB',
    image: '/images/mtb_logo.png',
  },
  {
    name: 'APMEX',
    image: '/images/apmex.png',
  },
  {
    name: 'GOLD AVENUE',
    image: '/images/goldavenue.png',
  },
];

export default function Brands() {
  return (
    <section className="bg-white py-12 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 text-center">
          {brands.map((brand, index) => (
            <li key={index} className="flex flex-col items-center justify-between">
              {/* Logo container with fixed height and centered content */}
              <div className="w-24 h-20 flex items-center justify-center mb-2">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className=" object-contain"
                />
              </div>
              <div className="w-6 h-[1px] bg-[#CFA04F] my-2" />
              <span className="text-sm text-[#1A1A1E]">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
