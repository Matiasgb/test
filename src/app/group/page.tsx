

import Governance from "@/components/group/Governance";
import Milestones from "@/components/group/Milestones";
import Mission from "@/components/group/Mission";
import Offerings from "@/components/group/Offerings";
import Overview from "@/components/group/Overview";
import PageBanner from "@/components/group/PageBanner";
import RecentNews from "@/components/group/RecentNews";
import Strategy from "@/components/group/Strategy";
import HeroSlider from "@/components/HeroSlider";

export default function TestPage() {
  return (
    <main>
   
      <HeroSlider />
  
      <Overview />
      <PageBanner />
    <Mission />
    <Strategy />
    <Governance />
    <Offerings />
    <Milestones />
    <RecentNews />

    </main>
  );
}
