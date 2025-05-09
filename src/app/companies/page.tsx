import Brands from "@/components/company/Brands";
import CompanyBlock from "@/components/company/CompanyBlock"; // ✅ Import the component
import NewsSection from "@/components/group/RecentNews";
import HeroSlider from "@/components/HeroSlider";
import ReportsCarousel from "@/components/ReportsCarousel";
export default function TestPage() {
  return (
    <main>
      <HeroSlider />
      <Brands />

      {/* Add companies here */}
      <CompanyBlock
        image="/images/company0.png"
        logo="/images/mkspamp.png"
        name="MKS PAMP"
        description="With over 60 years of global experience in the precious metals industry, MKS PAMP is dedicated to creating a sustainable future with precious metals products and services. The company offers the world’s most extensive range of sustainable, innovative and responsibly sourced precious metal products and services. It aims to create value by leveraging its technical expertise, innovations and global infrastructure to be an indispensable global partner and the most sustainable organization in the precious metals industry. ​"
        founded={1979}
        offices={13}
        employees={500}
        ceoName="Mr. James Emmett"
        ceoTitle="Chief Executive Officer"
        ceoImage="/images/MarwanShakarchi.png"
        services={[
          "Trading", "Online Trading", "Refining", "Vaulting & Storage", "Treasury Services", "Custom Minting"
        ]}
        products={[
          "Provenance™", "Minted Bars", "Cast Bars", "Industrial Products"
        ]}
        website="mkspamp.com"
      />

      <CompanyBlock
        image="/images/company1.png"
        logo="/images/pamp.png"
        name="MMTC-PAMP"
        description="A joint venture between Switzerland-based bullion refinery, MKS PAMP SA, and MMTC Ltd, a Miniratna and Government of India Undertaking. MMTC-PAMP is the only LBMA-accredited gold & silver good delivery refiner in India and is accepted across global commodity exchanges and central banks. The company seamlessly marries Swiss excellence with Indian insights. MMTC-PAMP India Pvt. Ltd. is internationally recognized as an industry leader in bringing global standards of excellence to the Indian precious metals industry. ​"
        founded={2008}
        offices={3}
        employees={350}
        ceoName="Mr. Vikas Singh"
        ceoTitle="Chief Executive Officer"
        ceoImage="/images/company2.png"
        services={[
          "Refining", "Bullion Sales & Trading", "Vaulting & Storage", "Treasury Services", "Minting", "Scrap", "Master Alloys", "Digital Gold & Silver", "Gold Buyback"
        ]}
        products={[
          "Bullion Bars", "Minted Coins & Bars", "Master Alloys", "Electrical Contacts"
        ]}
        website="mmtcpamp.com"
      />
  <CompanyBlock
        image="/images/company3.png"
        logo="/images/mtb_logo.png"
        name="MMTC-PAMP"
        description="Established in 1957, Manfra, Tordella, and Brookes is the oldest name in precious metals coins in the United States. In addition to its historical foothold in the market, MTB—now a subsidiary of the Swiss-based MKS PAMP GROUP—is recognized for setting the highest standards in corporate and social responsibility in the industry."
        founded={2002}
        offices={2}
        employees={96}
        ceoName="Mr. Ryan Boyles"
        ceoTitle="Chief Executive Officer"
        ceoImage="/images/boyles.png"
        services={[
          "Vaulting", "Storage", "Custom Minting and Trading​", 
        ]}
        products={[
          "Minted Products",
        ]}
        website="mtbmetals.com"
      />

<CompanyBlock
        image="/images/apmex2.png"
        logo="/images/apmex.png"
        name="MMTC-PAMP"
        description="APMEX, Inc.  is one of the largest sources in the Precious Metals industry.  APMEX prides itself on innovation and has developed disruptive solutions over the years including our OneGold digital gold platform, the first shopping app in our industry, and The Bullion Card, which is the first credit card to offer rewards in precious metals.  Based in Oklahoma City, OK and operating in the former Federal Reserve Building, APMEX has been named a best place to work for 5 years running with over 300 dedicated employees. ​"
        founded={2000}
        offices={1}
        employees={300}
        ceoName="Mr. Ryan Boyles"
        ceoTitle="Chief Executive Officer"
        ceoImage="/images/KennethLewis​.png"
        services={[
          "Selling", "Storing", "Buying", "Trading and Minting Services" 
        ]}
        products={[
          "Cast and Minted Bars", "Coins", "Collectibles"
        ]}
        website="apmex.com"
      />

<NewsSection />

<ReportsCarousel />

    </main>
  );
}
