export default function MainNews() {
    return (
      <section className="relative w-full pb-18">
        {/* Two-tone background */}
        <div className="absolute inset-0 grid grid-cols-2 pt-[350px]">
          <div className="bg-[#F8F6F1]" />
          <div className="bg-[#F9F1E5]" />
        </div>
  
        <div className="relative z-10 max-w-[1480px] mx-auto px-6 pt-16">
          {/* Title & breadcrumb */}
          <div className="text-center mb-10">
            <h2 className="text-2xl tracking-wide text-[#171717] uppercase">News & Events</h2>
            <div className="w-[100px] h-[1px] bg-[#CFA04F] mx-auto my-4" />
            <p className="text-xs text-[#1A1A1E] font-medium">MKS PAMP GROUP News, Press & Events</p>
          </div>
  
          {/* Featured News (full-width image with overlay) */}
          <div className="relative w-full  mb-16">
            <img
              src="/images/bignews.png"
              alt="Featured News"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-18 left-12 text-white max-w-md">
              <p className="text-[14px] text-[#CFA04F] mb-1">30/09/23 | Event | MKS PAMP</p>
              <h3 className="text-2xl font-semibold mb-2">Headline News / Event</h3>
              <p className="text-md font-normal mb-2">
                We are delighted to present MKS PAMP’s Environmental, Social & Governance (ESG) Report FY 2023
              </p>
              <a href="#" className="text-sm text-white font-bold flex items-center mt-4 gap-2 group">
                Read Story
                <span className="text-[#CFA04F] group-hover:translate-x-1 transition">→</span>
              </a>
            </div>
          </div>
  
          {/* News Grid: Left big card, right column of 3 small ones */}
          <div className="grid md:grid-cols-2 gap-6 max-w-[80%] m-auto">
            {/* Large left card */}
            <div className=" px-4 w-full max-w-md">
              <img
                src="/images/news0.png"
                alt="Main News"
                className="w-full  object-cover mb-4"
              />
              <p className="text-[14px] text-[#CFA04F] mb-2">30/09/23 | Press Release | MKS PAMP</p>
              <h4 className="text-md font-normal font-questa text-[#171717]">
                MKS PAMP GROUP specialises in all aspects of the precious metals business.
              </h4>
            </div>
  
            {/* Vertical list of small news cards */}
            <div className="flex flex-col gap-8 px-8">
              {[1, 2, 3].map((i) => {
                const data = [
                  {
                    date: '29/09/23',
                    type: 'News',
                    source: 'GOLD AVENUE',
                    image: '/images/news1.png',
                  },
                  {
                    date: '27/09/23',
                    type: 'Events',
                    source: 'MKS PAMP',
                    image: '/images/news2.png',
                  },
                  {
                    date: '27/09/23',
                    type: 'Events',
                    source: 'MKS PAMP',
                    image: '/images/news3.png',
                  },
                ][i - 1];
  
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <img
                      src={data.image}
                      alt={`News ${i}`}
                      className="w-[260px]  object-cover"
                    />
                    <div>
                      <p className="text-[14px] text-[#CFA04F] mb-1">
                        {data.date} | {data.type} | {data.source}
                      </p>
                      <p className="text-sm text-[#171717] font-normal font-questa leading-tight">
                        MKS PAMP GROUP<br />
                        <span className="font-normal font-questa">
                          specialises in all aspects of the precious metals business.
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
  
              {/* See All link */}
              <a
                href="#"
                className="text-sm mt-4 text-[#171717] font-semibold hover:text-[#d7a756] transition w-fit"
              >
                See All News <span className="text-[#d7a756]">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  