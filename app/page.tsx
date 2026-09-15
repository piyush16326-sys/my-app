import Image from "next/image";
import Navbar from "@/lib/Navbar";
import HeroSection from "@/lib/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div >
  );
}
