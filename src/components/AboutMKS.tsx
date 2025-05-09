export default function AboutMKS() {
    return (
      <section className="bg-[#FCFCFC] px-6 py-16 text-[#171717]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="max-w-[300px]">
          <h2 className="uppercase text-4xl font-semibold text-[#1A1A1E] mb-2">
            ABOUT MKS PAMP GROUP
          </h2>
          <div className="w-[100px] h-[1px] bg-gold mb-6" />
          <p className="text-lg text-[#1A1A1E] mb-4">
          MKS PAMP GROUP is an integrated precious metals group trusted by the world’s leading organizations
          </p>

          <div className="flex justify-between items-start mt-12">

          <a
            href="#"
            className="text-md font-semibold text-black inline-flex items-center  gap-1"
          >
            The Group <span className="text-gold ml-2"><svg id="link_arrow_right" xmlns="http://www.w3.org/2000/svg" width="33" height="10" viewBox="0 0 33 10">
  <path id="link_arrow_right-2" data-name="link_arrow_right" d="M5.718,30.351V0H4.282V30.351L1.017,27.2,0,28.184,5,33l5-4.816L8.983,27.2Z" transform="translate(0 10) rotate(-90)" fill="#cfa04f"/>
</svg>
</span>
          </a>
        
          </div>
         
         
        </div>
          <div className="md:col-span-2">
            <p className="mb-4">
              MKS PAMP GROUP is a leading precious metals consortium servicing the global supply chain from upstream to downstream. With 2 refineries, 4 mints and over 1,500 experts across its brands – MKS PAMP, MMTC-PAMP, MTB, APMEX and GOLD AVENUE – the Group leverages its talent with innovation to develop sustainable solutions for clients.
            </p>
            <p>
              As a collective, MKS PAMP GROUP companies are committed to sustainability and responsible sourcing through the development of ethical and transparent value chains across its operations and business to safeguard future generations.
            </p>
            <div className="mt-6">
          {/* Logo placeholders */}
          <img src="/images/pamp2.png" alt="MKS PAMP GROUP" className="" />
        
        </div>
          </div>
        </div>
      
      </section>
    );
  }