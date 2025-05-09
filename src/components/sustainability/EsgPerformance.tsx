// File: src/components/sustainability/EsgPerformance.tsx

export default function EsgPerformance() {
    return (
      <section className="w-full bg-[#F9F1E5] text-[#171717] py-16">
        {/* Banner */}
        <div className="relative max-w-[1300px] m-auto h-[240px]">
          <img
            src="/images/perfomance1.png"
            alt="ESG Performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-2xl tracking-wide uppercase">
              Our ESG Performance
            </h2>
          </div>
        </div>
  
        {/* Two Columns */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="text-start max-w-[350px] m-auto">
            <h3 className="text-md font-bold uppercase mb-2 text-center">Environmental Performance</h3>
            <div className="w-[100px] h-[1px] bg-[#CFA04F] mx-auto my-6 mb-4" />
            <p className="text-md mb-6 text-center  h-[93px]">
              In our operations we aim to have minimal impact on the surrounding environment.
            </p>
            <div className="bg-white shadow  max-w-sm mx-auto">
              <img src="/images/perf2.png" alt="Environment" className="w-full mb-2" />
             <div className="p-4">
             <p className="text-[13px] text-[#CFA04F] mb-1">Spotlight</p>
              <p className="text-sm mb-4 font-questa">
                MMTC-PAMP became India’s first precious metals company to have emissions reduction targets approved by the SBTi.
              </p>
              <a href="#" className="text-[14px] font-medium text-[#171717] inline-flex items-center gap-1">
                Learn More <span className="text-[#CFA04F]">→</span>
              </a>
             </div>
            </div>
          </div>
  
          {/* Column 2 */}
          <div className="text-start max-w-[350px] m-auto">
            <h3 className="text-md font-bold uppercase mb-2 text-center">Social Performance</h3>
            <div className="w-[100px] h-[1px] bg-[#CFA04F] mx-auto my-6 mb-4" />
            <p className="text-md mb-6 text-center h-[93px]">
              We are committed to being socially responsible, protecting the people with whom we come in contact, either directly or indirectly.
            </p>
            <div className="bg-white shadow  max-w-sm mx-auto">
              <img src="/images/perf1.png" alt="Social" className="w-full mb-4" />
             <div className="p-4">
             <p className="text-[13px] text-[#CFA04F] mb-1">Spotlight</p>
              <p className="text-md mb-4 font-questa">
                The safety and well-being of MKS PAMP SA’s employees has always been a top priority.
              </p>
              <a href="#" className="text-[14px] font-medium text-[#171717] inline-flex items-center gap-1">
                Learn More <span className="text-[#CFA04F]">→</span>
              </a>
             </div>
            </div>
          </div>
        </div>
  
        {/* Responsible Sourcing */}
        <div className="relative max-w-[1440px] m-auto">
          <img
            src="/images/performane2.png"
            alt="Responsible Sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6 text-center">
            <h3 className="text-white text-2xl uppercase ">Responsible Sourcing</h3>
            <div className="w-[100px] h-[1px] bg-[#CFA04F] mx-auto my-6 " />
            <p className="text-md text-white max-w-3xl">
              Our Group Responsible Precious Metals Policy outlines the commitments and responsibilities that are central tenets of our operating procedures. It is approved by the Group board and reviewed annually. Changes are made to reflect our commitment to regularly strengthening our requirements. This policy is communicated to employees and available to the public on our website. It is part of our commercial agreements with all our precious metals counterparties.
            </p>
          </div>
        </div>
      </section>
    );
  }
  