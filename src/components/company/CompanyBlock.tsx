type CompanyBlockProps = {
  image: string;
  logo: string;
  name: string;
  description: string;
  founded: number;
  offices: number;
  employees: number;
  ceoName: string;
  ceoTitle: string;
  ceoImage: string;
  services: string[];
  products: string[];
  website: string;
};

export default function CompanyBlock({
    image,
    logo,
    name,
    description,
    founded,
    offices,
    employees,
    ceoName,
    ceoTitle,
    ceoImage,
    services,
    products,
    website,
  }: CompanyBlockProps) {
    return (
      <section className="relative w-full py-16">
        {/* Background covers full block */}
        <div className="absolute inset-0 grid grid-cols-2 z-0">
          <div className="bg-[#F8F6F1] h-full" />
          <div className="bg-[#F9F1E5] h-full" />
        </div>
  
        {/* Foreground content (z-10) */}
        <div className="relative z-10">
          {/* Hero image */}
          <div className="max-w-[1440px] h-[300px] mx-auto">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
  
          {/* Split content */}
          <div className="grid md:grid-cols-2 max-w-7xl m-auto">
            {/* Left column */}
            <div className="px-10 py-16 text-[#171717]">
              <div className="flex flex-col items-center text-center mb-6">
                <img src={logo} alt={name} className="mb-4" />
              </div>
              <p className="text-sm max-w-md mx-auto">{description}</p>
  
              <div className="flex justify-center gap-14 mt-14 text-center">
                {[{ label: 'FOUNDED', value: founded }, { label: 'OFFICES', value: offices }, { label: 'EMPLOYEES', value: employees }].map((stat, i) => (
                  <div key={i}>
                    <p className="text-[50px] font-light text-[#CFA04F] mb-6">{stat.value}</p>
                    <div className="w-[100px] h-[1px] bg-[#CFA04F] mx-auto my-6" />
                    <p className="text-xs font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right column */}
            <div className="px-10 py-16 text-[#171717] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8 w-[490px] mx-auto">
                <img src={ceoImage} alt={ceoName} className="w-[120px] h-[120px] object-cover rounded-full border-4 border-white shadow-md" />
                <div>
                  <p className="text-sm">{ceoTitle}</p>
                  <p className="text-sm text-[#CFA04F] font-semibold">{ceoName}</p>
                </div>
              </div>
  
              <div className="h-[1px] bg-[#CFA04F] mx-auto my-4 mb-12 w-[490px]" />
  
              <div className="grid grid-cols-2 gap-8 w-[490px] mx-auto">
                <div>
                  <h3 className="text-sm text-[#CFA04F] font-semibold mb-2">Services</h3>
                  <ul className="text-sm space-y-2">
                    {services.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm text-[#CFA04F] font-semibold mb-2">Products</h3>
                  <ul className="text-sm space-y-2">
                    {products.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
  
              <div className="mt-6 flex items-center gap-2 text-[#CFA04F] font-medium w-[490px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
  <g id="icon_web" transform="translate(0)">
    <path id="Shape" d="M12.15,24.987a12.5,12.5,0,1,1,.7,0A3.461,3.461,0,0,1,12.5,25,3,3,0,0,1,12.15,24.987Z" fill="#cfa04f"/>
  </g>
</svg>

                <span className="text-sm">{website}</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  