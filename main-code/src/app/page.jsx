import HeroSection from "@/components/Hero.jsx";
import AboutSection from "@/components/About.jsx";
import GalleryMobile from "@/components/Slider/SliderMobile/slider.jsx";
import "./index.css";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <GalleryMobile />
    </div>
  );
}
