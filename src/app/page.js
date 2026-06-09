import Image from "next/image";
import StatsSection from "./Components/StatsSection";
import FeaturesSection from "./Components/FeaturesSection";
import PricingSection from "./Components/PricingSection";

export default function Home() {
  return (
    <div >
     <StatsSection/>
     <FeaturesSection/>
     <PricingSection/>
    </div>
  );
}
