

import Offerings from "@/components/group/Offerings";
import RecentNews from "@/components/group/RecentNews";
import HeroSlider from "@/components/HeroSlider";
import ReportsCarousel from "@/components/ReportsCarousel";
import Commitment from "@/components/sustainability/Commitment";
import EsgPerformance from "@/components/sustainability/EsgPerformance";
export default function TestPage() {
  return (
    <main>
   
      <HeroSlider />
     <Commitment />
     <Offerings />
     <EsgPerformance />
      <ReportsCarousel />
      <RecentNews />
    </main>
  );
}
