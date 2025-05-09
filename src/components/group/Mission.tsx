// File: src/components/group/Mission.tsx

export default function Mission() {
    const missions = [
      {
        image: "/images/mission2.png",
        text: "To produce beautiful, safe, and physical assets by refining, trading, and selling superior precious metals products globally and in Switzerland."
      },
      {
        image: "/images/mission2.png",
        text: "To engage with our suppliers, customers and employees to ensure that our products are innovative, authentic, and responsibly sourced and produced, to the highest standards in the industry."
      },
      {
        image: "/images/mission2.png",
        text: "To create wealth while promoting social wellbeing and responsibly managing all the resources involved in our supply-chain"
      }
    ];
  
    return (
      <section className="bg-[#FAF7F4] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl uppercase tracking-wide text-[#1A1A1E]">MISSION</h2>
          <div className="w-16 h-[1px] bg-[#CFA04F] my-4 mb-12" />
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            {missions.map((item, index) => (
              <div key={index} className="flex flex-col items-start max-w-[360px]">
                {index === 1 ? (
                  <>
                    <p className="text-sm text-[#171717] leading-snug mb-4">
                      {item.text}
                    </p>
                    <img src={item.image} alt="Mission" className="w-full object-cover" />
                  </>
                ) : (
                  <>
                    <img src={item.image} alt="Mission" className="mb-4 w-full object-cover" />
                    <p className="text-sm text-[#171717] leading-snug">
                      {item.text}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }