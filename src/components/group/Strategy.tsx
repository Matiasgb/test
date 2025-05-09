// File: src/components/group/Strategy.tsx

export default function Strategy() {
    const strategies = [
      {
        title: "Family Culture",
        description:
          "The Company will ensure that a family spirit is entrenched in its culture. We will promote high environmental, social and governance standards to ensure sustainability in all our business activities for the long-term success of present and future generations.",
        image: "/images/strategy1.png",
      },
      {
        title: "Distinguished Workforce",
        description:
          "The Company will assist employees in adapting to technological advancements and utilising their individual knowledge and expertise to create and provide value-add products and services. The Company will strive for diversity and equality in its workforce and ensure that all employees are valued, respected, and integrated into the corporate family.",
        image: "/images/strategy1.png",
      },
      {
        title: "Sustainability",
        description:
          "We adopt an integrative approach that incorporates progressive social and environmental solutions in our commercial and operational activities.",
        image: "/images/strategy1.png",
      },
      {
        title: "Innovative Practices",
        description:
          "The Company aims to surpass the industry’s expectation of innovation and excellence. Our priority is to deliver the highest quality and transparency in our customer-centric products and services.",
        image: "/images/strategy1.png",
      },
      {
        title: "Access to Products & Solutions",
        description:
          "The Company will focus on customer’s needs. Providing continuous access to the physical supply-chain is essential to our partners.",
        image: "/images/strategy1.png",
      },
    ];
  
    return (
      <section className="bg-[#F9F1E5] px-6 py-20 font-sans ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-x-12 gap-y-16">
          {/* First grid item: Section heading */}
          <div>
            <h2 className="text-2xl uppercase tracking-wide text-[#1A1A1E] mb-4">
              Strategy
            </h2>
            <div className="w-16 h-[1px] bg-[#CFA04F] mb-4" />
            <p className="text-sm text-[#1A1A1E]">
              Five focus areas combine to define who we are:
            </p>
          </div>
  
          {/* Remaining grid items */}
          {strategies.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto mb-3"
              />
              <h3 className="font-semibold text-[#CFA04F] text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#1A1A1E] leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  