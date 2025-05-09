// File: src/components/group/Overview.tsx

export default function Overview() {
    const firstRowStats = [
      { number: "5", label: "Brands" },
      { number: "4", label: "Mints" },
      { number: "2", label: "Refineries" },
      { number: "17", label: "World Offices" },
      { number: "40+", label: "Credentials" },
    ];
  
    const secondRowStats = [
 
      { number: "1450+", label: "Employees" },
      { number: "1690+", label: "Tonnes of Refining Capacity P.A." },
      { number: "1500+", label: "B2B Clients Around the Globe" },
      { number: "100 M+", label: "B2C Clients Through Digital Gold" },
    ];
  
    return (
      <section className="py-20 px-4 bg-[#FDFDFC] text-center">
        <h2 className="text-2xl uppercase tracking-wide text-[#1A1A1E]">Overview</h2>
        <div className="w-16 h-[1px] bg-[#CFA04F] mx-auto my-4 mb-18" />
  
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 max-w-6xl mx-auto mt-12">
          {firstRowStats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[#CFA04F] text-[50px] font-light font-aktiv-grotesk mb-6">
                {item.number}
              </span>
              <div className="w-16 h-[1px] bg-[#CFA04F] my-4" />
              <p className="text-sm font-semibold text-[#171717] uppercase text-center max-w-[160px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mt-18">
          {secondRowStats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[#CFA04F] text-[50px] font-light font-aktiv-grotesk mb-6">
                {item.number}
              </span>
              <div className="w-16 h-[1px] bg-[#CFA04F] my-4" />
              <p className="text-sm font-semibold text-[#171717] uppercase text-center max-w-[160px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }