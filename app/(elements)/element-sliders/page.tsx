import { Metadata } from "next";
import HeroSlidersOne from "@/components/elements/element-sliders/HeroSlidersOne";
import HeroSlidersTwo from "@/components/elements/element-sliders/HeroSlidersTwo";
import HeroSlidersThree from "@/components/elements/element-sliders/HeroSlidersThree";
import HeroSlidersFour from "@/components/elements/element-sliders/HeroSlidersFour";
import HeroSlidersFive from "@/components/elements/element-sliders/HeroSlidersFive";
import HeroSlidersSix from "@/components/elements/element-sliders/HeroSlidersSix";
import HeroSlidersSeven from "@/components/elements/element-sliders/HeroSlidersSeven";
import HeroSlidersEight from "@/components/elements/element-sliders/HeroSlidersEight";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Sliders | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementSlidersPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Sliders</span>
            </>
          }
        />
        <HeroSlidersOne />
        <HeroSlidersTwo />
        <HeroSlidersThree />
        <HeroSlidersFour />
        <HeroSlidersFive />
        <HeroSlidersSix />
        <HeroSlidersSeven />
        <HeroSlidersEight />
      </>
    </>
  );
}
