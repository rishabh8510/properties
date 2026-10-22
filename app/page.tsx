import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertySectors from "@/components/home/PropertySectors";
import AboutSection from "@/components/home/AboutSection";
import LondonZones from "@/components/home/LondonZones";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home(){
  return(
    <>
    <HeroSection />
    <FeaturedProperties />
    <PropertySectors />
    <AboutSection />
    <LondonZones />
    <CtaBanner />
    </>
  )
}