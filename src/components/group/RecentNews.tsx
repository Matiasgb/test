// File: src/components/group/News.tsx

export default function News() {
    const articles = [
      {
        image: "/images/news1.png",
        date: "29/09/23",
        category: "News",
        source: "GOLD AVENUE",
        title: "MKS PAMP GROUP",
        subtitle: "specialises in all aspects of the precious metals business.",
      },
      {
        image: "/images/news2.png",
        date: "27/09/23",
        category: "Events",
        source: "MKS PAMP",
        title: "MKS PAMP GROUP",
        subtitle: "specialises in all aspects of the precious metals business.",
      },
      {
        image: "/images/news3.png",
        date: "27/09/23",
        category: "Events",
        source: "MKS PAMP",
        title: "MKS PAMP GROUP",
        subtitle: "specialises in all aspects of the precious metals business.",
      },
      {
        image: "/images/news3.png",
        date: "27/09/23",
        category: "Events",
        source: "MKS PAMP",
        title: "MKS PAMP GROUP",
        subtitle: "specialises in all aspects of the precious metals business.",
      },
    ];
  
    return (
      <section className="bg-[#FAF2E4] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl uppercase text-[#1A1A1E] tracking-wide mb-2">News</h2>
            <div className="h-[1px] w-16 bg-[#CFA04F] mx-auto mb-4" />
            <p className="text-sm text-[#1A1A1E]">MKS PAMP GROUP News, Press & Events</p>
          </div>
  
          {/* Grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {articles.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover mb-3"
                />
                <p className="text-[13px] text-[#CFA04F] mb-1">
                  {item.date} | {item.category} | {item.source}
                </p>
                <p className="text-base text-[#171717] font-medium leading-snug">
                  {item.title}
                  <br />
                  <span className="font-normal">{item.subtitle}</span>
                </p>
              </div>
            ))}
          </div>
  
          {/* See all link */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="text-sm text-[#1A1A1E] font-semibold inline-flex items-center gap-1"
            >
              See All News <span className="text-[#CFA04F]">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
  