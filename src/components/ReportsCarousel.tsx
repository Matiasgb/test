""// File: src/components/ReportsCarousel.tsx

"use client";

import { useEffect, useRef, useState } from "react";

const baseReports = [
  {
    id: 1,
    type: "Report",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report1.png",
  },
  {
    id: 2,
    type: "White Paper",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report2.png",
  },
  {
    id: 3,
    type: "Analysis",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report1.png",
  },
  {
    id: 4,
    type: "Report",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report2.png",
  },
  {
    id: 5,
    type: "Insight",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report1.png",
  },
  {
    id: 6,
    type: "Summary",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report1.png",
  },
  {
    id: 7,
    type: "Bulletin",
    title: "Headline Story Title and Link to Story or Page",
    description:
      "We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report for 2023",
    image: "/images/report1.png",
  },
];

export default function ReportsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 649; // card + gap
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: scrollIndex * cardWidth,
      behavior: "smooth",
    });
  }, [scrollIndex]);

  const scroll = (dir: "left" | "right") => {
    if (dir === "right") {
      if (scrollIndex < baseReports.length - 1) {
        setScrollIndex((prev) => prev + 1);
      }
    } else {
      if (scrollIndex > 0) {
        setScrollIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-[1480px] mx-auto grid md:grid-cols-4 gap-8 items-center overflow-hidden relative">
        {/* Text Column */}
        <div className="">
          <h2 className="uppercase text-2xl font-semibold text-[#1A1A1E] mb-2">
            Reports
          </h2>
          <div className="w-[100px] h-[1px] bg-gold mb-6" />
          <p className="text-lg text-[#1A1A1E] mb-4">
            Explore all of our latest thinking from our thought leaders and market experts.
          </p>

          <div className="flex justify-between items-start mt-12">

          <a
            href="#"
            className="text-md font-semibold text-black inline-flex items-center  gap-1"
          >
            See All Reports <span className="text-gold ml-2"><svg id="link_arrow_right" xmlns="http://www.w3.org/2000/svg" width="33" height="10" viewBox="0 0 33 10">
  <path id="link_arrow_right-2" data-name="link_arrow_right" d="M5.718,30.351V0H4.282V30.351L1.017,27.2,0,28.184,5,33l5-4.816L8.983,27.2Z" transform="translate(0 10) rotate(-90)" fill="#cfa04f"/>
</svg>
</span>
          </a>
          <div className="gap-2">
          <button
              onClick={() => scroll("right")}
              className="w-[49px] h-[49px] rounded-full bg-[#f4f1eb] flex items-center justify-center cursor-pointer mb-3"
            >
<svg id="arrow_scroll_right" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49">
  <circle id="Oval" cx="24.5" cy="24.5" r="24.5" fill="#f5f2ea"/>
  <path id="Path" d="M18.831,4.1,15.031.181a.616.616,0,0,0-.848-.023.582.582,0,0,0-.023.819l2.853,2.944H.6a.579.579,0,1,0,0,1.158H17.013L14.159,8.023a.591.591,0,0,0,.023.819.617.617,0,0,0,.848-.023l3.8-3.921A.506.506,0,0,0,19,4.5.665.665,0,0,0,18.831,4.1Z" transform="translate(15 20)" fill="#cfa04f"/>
</svg>

            </button>
            <button
              onClick={() => scroll("left")}
              className="w-[49px] h-[49px] rounded-full bg-[#f4f1eb] flex items-center justify-center cursor-pointer "
            >
 <svg id="arrow_scroll_left" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49">
  <circle id="Oval" cx="24.5" cy="24.5" r="24.5" fill="#f5f2ea"/>
  <path id="Path" d="M.169,4.1,3.969.181A.616.616,0,0,1,4.817.158a.582.582,0,0,1,.023.819L1.987,3.921H18.4a.579.579,0,1,1,0,1.158H1.987L4.841,8.023a.591.591,0,0,1-.023.819.617.617,0,0,1-.848-.023L.169,4.9A.506.506,0,0,1,0,4.5.665.665,0,0,1,.169,4.1Z" transform="translate(15 20)" fill="#cfa04f"/>
</svg>
            </button>
           
          </div>
          </div>
         
         
        </div>

        {/* Slider Section */}
        <div className="md:col-span-3 overflow-x-hidden relative">
          <div
            ref={containerRef}
            className="flex gap-12 overflow-x-hidden scroll-smooth scrollbar-hide pl-1 snap-x snap-mandatory"
          >
            {baseReports.map((report) => (
              <div
                key={report.id}
                className="min-w-[625px] max-w-[625px] flex-shrink-0 h-[445px] bg-cover bg-center text-white px-10 py-12 flex flex-col justify-between relative snap-start"
                style={{ backgroundImage: `url(${report.image})` }}
              >
                   <div className="absolute inset-0 bg-black/30 z-0" />
               <div className="z-10">
               <span className="text-lg font-medium text-white mb-0">
                  {report.type}
                </span>
                <div className="w-[70px] h-[1px] bg-gold my-2" />
                </div>
               <div className="pr-12 z-10">
               <h3 className="text-[32px] leading-tight font-light">
                  {report.title}
                </h3>
                <p className="text-base mt-2 font-light leading-snug max-w-[85%]">
                  {report.description}
                </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right fade effect */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
