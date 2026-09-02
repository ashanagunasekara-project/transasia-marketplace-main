import { Metadata } from "next";
import HeaderStyleOne from "@/components/elements/element-header-styles/HeaderStyleOne";
import HeaderStyleTwo from "@/components/elements/element-header-styles/HeaderStyleTwo";
import HeaderStyleThree from "@/components/elements/element-header-styles/HeaderStyleThree";
import HeaderStyleFour from "@/components/elements/element-header-styles/HeaderStyleFour";
import HeaderStyleFive from "@/components/elements/element-header-styles/HeaderStyleFive";
import HeaderStyleSix from "@/components/elements/element-header-styles/HeaderStyleSix";
import HeaderStyleSeven from "@/components/elements/element-header-styles/HeaderStyleSeven";
import HeaderStyleEight from "@/components/elements/element-header-styles/HeaderStyleEight";
import HeaderStyleNine from "@/components/elements/element-header-styles/HeaderStyleNine";
import HeaderStyleTen from "@/components/elements/element-header-styles/HeaderStyleTen";
import HeaderStyleEleven from "@/components/elements/element-header-styles/HeaderStyleEleven";
import HeaderStyleTwelve from "@/components/elements/element-header-styles/HeaderStyleTwelve";
import HeaderStyleThirteen from "@/components/elements/element-header-styles/HeaderStyleThirteen";
import HeaderStyleFourteen from "@/components/elements/element-header-styles/HeaderStyleFourteen";
import HeaderStyleFifteen from "@/components/elements/element-header-styles/HeaderStyleFifteen";
import HeaderStyleSixteen from "@/components/elements/element-header-styles/HeaderStyleSixteen";
import HeaderStyleSeventeen from "@/components/elements/element-header-styles/HeaderStyleSeventeen";
import HeaderStyleEighteen from "@/components/elements/element-header-styles/HeaderStyleEighteen";
import HeaderStyleNineteen from "@/components/elements/element-header-styles/HeaderStyleNineteen";
import HeaderStyleTwenty from "@/components/elements/element-header-styles/HeaderStyleTwenty";
import HeaderStyleTwentyOne from "@/components/elements/element-header-styles/HeaderStyleTwentyOne";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Header Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementHeaderStylesPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Header Styles</span>
            </>
          }
        />
        <HeaderStyleOne />
        <HeaderStyleTwo />
        <HeaderStyleThree />
        <HeaderStyleFour />
        <HeaderStyleFive />
        <HeaderStyleSix />
        <HeaderStyleSeven />
        <HeaderStyleEight />
        <HeaderStyleNine />
        <HeaderStyleTen />
        <HeaderStyleEleven />
        <HeaderStyleTwelve />
        <HeaderStyleThirteen />
        <HeaderStyleFourteen />
        <HeaderStyleFifteen />
        <HeaderStyleSixteen />
        <HeaderStyleSeventeen />
        <HeaderStyleEighteen />
        <HeaderStyleNineteen />
        <HeaderStyleTwenty />
        <HeaderStyleTwentyOne />
      </>
    </>
  );
}
