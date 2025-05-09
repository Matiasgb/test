export default function NewsSection() {
  return (
    <section className="relative w-full">
      {/* Two-tone background (left/right split) */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#F8F6F1]" />
        <div className="bg-[#F9F1E5]" />
      </div>

      {/* Main content */}
      <div className="relative max-w-[1480px] mx-auto grid md:grid-cols-2 z-10">
        {/* Left column (featured news) */}
        <div className="px-10 py-16">
          <h2 className="text-3xl font-light text-[#171717] mb-2">NEWS</h2>
          <div className="w-16 h-[2px] bg-[#CFA04F] mb-3" />
          <p className="text-xs font-medium text-[#1A1A1E] mb-8">
            MKS PAMP GROUP News, Press & Events
          </p>

          <img
            src="/images/news0.png"
            alt="Gold Bars"
            className="w-[492px] h-auto mb-6"
          />

          <p className="text-[14px] text-[#CFA04F] mb-2">
            30/09/23 | Press Release | MKS PAMP
          </p>
          <h3 className="text-2xl font-medium text-[#171717] max-w-sm ">
            MKS PAMP GROUP specialises in all aspects of the precious metals business.
          </h3>
        </div>

        {/* Right column (news list) */}
        <div className="px-10 py-16 flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            {/* News Item 1 */}
            <div className="flex gap-4">
              <img
                src="/images/news1.png"
                alt="News 1"
                className="w-[260px]  object-cover"
              />
              <div>
                <p className="text-[14px] text-[#CFA04F] mb-1">
                  29/09/23 | News | GOLD AVENUE
                </p>
                <p className="text-xl text-[#171717] font-medium">
                  MKS PAMP GROUP<br />
                  <span className="font-normal text-xl">
                    specialises in all aspects of the precious metals business.
                  </span>
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex gap-4">
              <img
                src="/images/news2.png"
                alt="News 2"
                className="w-[260px]  object-cover"
              />
              <div>
                <p className="text-[14px] text-[#CFA04F] mb-1">
                  27/09/23 | Events | MKS PAMP
                </p>
                <p className="text-xl text-[#171717] font-medium">
                  MKS PAMP GROUP<br />
                  <span className="font-normal">
                    specialises in all aspects of the precious metals business.
                  </span>
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex gap-4">
              <img
                src="/images/news3.png"
                alt="News 3"
                className="w-[260px]  object-cover"
              />
              <div>
                <p className="text-[14px] text-[#CFA04F] mb-1">
                  27/09/23 | Events | MKS PAMP
                </p>
                <p className="text-xlñ text-[#171717] font-medium">
                  MKS PAMP GROUP<br />
                  <span className="font-normal">
                    specialises in all aspects of the precious metals business.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* See all link */}
          <a
            href="#"
            className="text-sm mt-10 inline-block text-[#171717] font-semibold hover:text-[#d7a756] transition"
          >
            See All News <span className="text-[#d7a756]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
