import { Metadata } from "next";
import ButtonColor from "@/components/elements/element-button/ButtonColor";
import ButtonBorder from "@/components/elements/element-button/ButtonBorder";
import ButtonSize from "@/components/elements/element-button/ButtonSize";
import ButtonRound from "@/components/elements/element-button/ButtonRound";
import ButtonRoundIcon from "@/components/elements/element-button/ButtonRoundIcon";
import MagneticEffect from "@/components/elements/element-button/MagneticEffect";
import ElasticButton from "@/components/elements/element-button/ElasticButton";
import Marquee from "@/components/elements/element-button/Marquee";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Button | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementButtonPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Button</span>
            </>
          }
        />
        <ButtonColor />
        <ButtonBorder />
        <ButtonSize />
        <ButtonRound />
        <ButtonRoundIcon />
        <MagneticEffect />
        <ElasticButton />
        <Marquee />
      </>
    </>
  );
}
