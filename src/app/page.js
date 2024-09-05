import About from "@/components/about/about";
import Partner from "@/components/Partner/Partner";
import Slider from "@/components/slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Slider />
  <About />
  <Partner />
   </main>
  );
}
