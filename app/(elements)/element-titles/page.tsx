import { Metadata } from "next";
import TitlesStyleSimple from "@/components/elements/element-titles/TitlesStyleSimple";
import TitlesStyleDefault from "@/components/elements/element-titles/TitlesStyleDefault";
import TitlesWithNav from "@/components/elements/element-titles/TitlesWithNav";
import TitlesWithCountdown from "@/components/elements/element-titles/TitlesWithCountdown";
import TitlesStylesLargerOne from "@/components/elements/element-titles/TitlesStylesLargerOne";
import TitlesStylesLargerTwo from "@/components/elements/element-titles/TitlesStylesLargerTwo";
import TitlesStylesLargerThree from "@/components/elements/element-titles/TitlesStylesLargerThree";
import TitlesStylesLargerFour from "@/components/elements/element-titles/TitlesStylesLargerFour";
import TitlesStylesLargerFive from "@/components/elements/element-titles/TitlesStylesLargerFive";
import TitlesStyleSimpleDark from "@/components/elements/element-titles/TitlesStyleSimpleDark";
import TitlesStyleDefaultDark from "@/components/elements/element-titles/TitlesStyleDefaultDark";
import TitlesStyleDefaultLeftDark from "@/components/elements/element-titles/TitlesStyleDefaultLeftDark";
import TitlesStyleDefaultRightDark from "@/components/elements/element-titles/TitlesStyleDefaultRightDark";
import TitlesWithNavDark from "@/components/elements/element-titles/TitlesWithNavDark";
import TitlesWithCountdownDark from "@/components/elements/element-titles/TitlesWithCountdownDark";
import TitlesStylesLargerSevenDark from "@/components/elements/element-titles/TitlesStylesLargerSevenDark";
import TitlesStylesLargerEightDark from "@/components/elements/element-titles/TitlesStylesLargerEightDark";
import TitlesStylesLargerNineDark from "@/components/elements/element-titles/TitlesStylesLargerNineDark";
import TitlesStylesLargerTenDark from "@/components/elements/element-titles/TitlesStylesLargerTenDark";
import TitlesStylesLargerElevenDark from "@/components/elements/element-titles/TitlesStylesLargerElevenDark";
import ElementsHero from "@/components/elements/ElementsHero";
import TitlesStyleDefaultCenter from "@/components/elements/element-titles/TitlesStyleDefaultCenter";
import TitlesStyleDefaultLeft from "@/components/elements/element-titles/TitlesStyleDefaultLeft";
import TitlesStyleDefaultRight from "@/components/elements/element-titles/TitlesStyleDefaultRight";
import TitlesStyleDefaultCenterDark from "@/components/elements/element-titles/TitlesStyleDefaultCenterDark";
export const metadata: Metadata = {
  title:
    "Element Titles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementTitlesPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Titles</span>
            </>
          }
        />
        <TitlesStyleSimple />
        <TitlesStyleDefault />
        <TitlesStyleDefaultCenter />
        <TitlesStyleDefaultLeft />
        <TitlesStyleDefaultRight />
        <TitlesWithNav />
        <TitlesWithCountdown />
        <TitlesStylesLargerOne />
        <TitlesStylesLargerTwo />
        <TitlesStylesLargerThree />
        <TitlesStylesLargerFour />
        <TitlesStylesLargerFive />
        {/*-----------------------------------------------------------------------
                  Start Dark Section Title Presentation
    ------------------------------------------------------------------------*/}
        <TitlesStyleSimpleDark />
        <TitlesStyleDefaultDark />
        <TitlesStyleDefaultCenterDark />
        <TitlesStyleDefaultLeftDark />
        <TitlesStyleDefaultRightDark />
        <TitlesWithNavDark />
        <TitlesWithCountdownDark />
        <TitlesStylesLargerSevenDark />
        <TitlesStylesLargerEightDark />
        <TitlesStylesLargerNineDark />
        <TitlesStylesLargerTenDark />
        <TitlesStylesLargerElevenDark />
      </>
    </>
  );
}
