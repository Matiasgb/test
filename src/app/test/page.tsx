import AboutMKS from "@/components/AboutMKS";
import HeroSlider from "@/components/HeroSlider";
import NewsSection from "@/components/NewsSection";
import PageBanner from "@/components/PageBanner";
import ReportsCarousel from "@/components/ReportsCarousel";

export default function TestPage() {
  return (
    <main>
   
      <HeroSlider />
      <PageBanner />
      <AboutMKS />
      <NewsSection />
      <ReportsCarousel />
    </main>
  );
}
