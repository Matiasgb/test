// File: src/components/group/Milestones.tsx

const milestones = [
    {
      year: "1977",
      description:
        "Established in the late seventies and based in Ticino, Switzerland, PAMP SA rapidly became the world’s leading bullion brand.",
      image: "/images/milestone1.png",
      side: "left",
    },
    {
      year: "1979",
      description:
        "Mahmoud K. Shakarchi founds MKS Finance SA in Geneva, renamed MKS (Switzerland) SA. He works in close collaboration with PAMP SA (Precious Metal Artistic Products) factory, from which he successfully markets gold ingots in the Middle East, including the famous Lady Fortuna™ minted ingots.",
      image: "/images/milestone2.png",
      side: "right",
    },
    {
      year: "1981",
      description:
        "MKS (Switzerland) SA acquires a majority holding of its product arm, PAMP SA. Under his guidance, MKS (Switzerland) SA and PAMP SA evolved to become two of the most respected names in the precious metals industry.",
      image: "/images/milestone-center.jpg",
      type: "center",
    },
    // Add more milestones here...
  ];
  
  export default function Milestones() {
    return (
      <section className="bg-[#FAF7F4] px-6 py-24">
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#E6DED4] z-0" />
  
          {milestones.map((item, index) => {
            const isLeft = item.side === "left";
            const isCenter = item.type === "center";
  
            return (
              <div
                key={index}
                className={`relative mb-24 flex ${
                  isCenter
                    ? "flex-col items-center text-center"
                    : `md:flex-row items-center ${
                        isLeft ? "justify-start" : "justify-end"
                      }`
                }`}
              >
                {!isCenter && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#CFA04F] rounded-full z-10" />
                )}
  
                <div
                  className={`max-w-lg ${
                    isCenter
                      ? ""
                      : `md:w-1/2 ${isLeft ? "md:pr-12 text-right items-end" : "md:pl-12 text-left"}`
                  }`}
                >
                  {isCenter ? (
                    <>
                      <img src={item.image} alt={item.year} className="w-full mb-4" />
                      <h3 className="text-white text-3xl font-semibold mb-2">{item.year}</h3>
                      <p className="text-white text-sm leading-relaxed">{item.description}</p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center md:items-start">
                      <img
                        src={item.image}
                        alt={item.year}
                        className="w-[120px] h-[120px] object-contain mb-3"
                      />
                      <p className="text-[#CFA04F] text-lg font-medium mb-1">{item.year}</p>
                      <p className="text-sm text-[#171717] leading-snug">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  