// File: src/components/sustainability/EsgSection.tsx

export default function EsgSection() {
    return (
      <section className="relative w-full">
        {/* Background Columns */}
        <div className="absolute inset-0 grid grid-cols-1 z-0 pt-[500px]">

          <div className="bg-[#F8F6F1]" />
        </div>
  
        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          {/* Top Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl tracking-wide uppercase text-[#1A1A1E]">
              Our ESG Commitment
            </h2>
            <div className="w-14 h-[1px] bg-[#CFA04F] mx-auto mt-2 mb-6" />
            <p className="text-xl text-[#1A1A1E] max-w-2xl mx-auto font-light leading-relaxed">
              At MKS PAMP GROUP, we are deeply committed to sustainability in our operations. We uphold the highest ESG standards, embodying our purpose to safeguard our partners’ values through investments in precious metals. MKS PAMP GROUP contributes 3% of its annual profits to drive further social and environmental initiatives.
            </p>
          </div>
  
          {/* Approach Banner */}
         <div>

         <div className="w-full max-w-4xl mx-auto  relative">
            <img
              src="/images/commitment.png"
              alt="ESG Approach"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-lg font-medium tracking-wide uppercase">
                Our ESG Approach
              </p>
            </div>
          </div>
  
          {/* Quote Blocks */}
          <div className="w-[890px] m-auto">
            {/* Quote 1 */}
            <div className="bg-white p-8 text-sm leading-relaxed px-18">
              <p className="mb-6 text-xl font-questa">
                “Sustainability has always been at the core of the values and vision from which Marwan and I have built MKS PAMP. Today, we are simply better equipped to articulate the importance of sustainability through more precise language, the establishment of effective governance frameworks, and the integration of its ecological dimensions into the breadth of our operations.”
              </p>
              <div className="flex items-center justify-end gap-6">
                <div>
                  <p className="text-md font-bold text-[#CFA04F]">Karma Llessa-Shakarchi</p>
                  <p className="text-[14px] text-[#666]">Chairwoman – MKS PAMP</p>
                </div>
                <img src="/images/karma.png" alt="Karma" className=" rounded-full object-cover" />
              </div>

              <div className="w-14 h-[1px] bg-[#CFA04F] mx-auto  mt-12 mb-6" />
            </div>
           
            {/* Quote 2 */}
            <div className="bg-white p-8 text-sm leading-relaxed px-18">
              <p className="mb-6 text-xl font-questa ">
                “Central to our principles, we believe in being agents of positive change. Our approach to profitability is underpinned by sustainable practices that prioritize the well-being of people and the planet. From the outset, we have championed long-term thinking, responsible sourcing, and ethical conduct, establishing industry benchmarks through collaboration with our partners.”
              </p>
              <div className="flex items-center justify-start gap-6">
              <img src="/images/marwan.png" alt="Marwan" className=" rounded-full object-cover" />
                <div>
                  <p className="text-md font-bold text-[#CFA04F]">Marwan Shakarchi</p>
                  <p className="text-[14px] text-[#666]">CEO – MKS PAMP GROUP</p>
                </div>
              
              </div>
            </div>
          </div>
         </div>
        </div>
      </section>
    );
  }
  