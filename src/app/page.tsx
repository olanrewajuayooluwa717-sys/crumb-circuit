import { AboutPitch } from "@/components/about-pitch";
import { CakeOrder } from "@/components/cake-order";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { MenuOrder } from "@/components/menu-order";
import { TechInquiry } from "@/components/tech-inquiry";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuOrder />
      <TechInquiry />
      <CakeOrder />
      <AboutPitch />
      <Contact />
    </>
  );
}
