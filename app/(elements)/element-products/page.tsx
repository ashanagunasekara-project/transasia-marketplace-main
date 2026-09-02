import { Metadata } from "next";
import DefaultProductCard from "@/components/elements/element-products/DefaultProductCard";
import AllInfoHover from "@/components/elements/element-products/AllInfoHover";
import MiniXS from "@/components/elements/element-products/MiniXS";
import MiniCardXXS from "@/components/elements/element-products/MiniCardXXS";
import StandardCard from "@/components/elements/element-products/StandardCard";
import HorizontalLarge from "@/components/elements/element-products/HorizontalLarge";
import MarqueStandard from "@/components/elements/element-products/MarqueStandard";
import HorizontalXL from "@/components/elements/element-products/HorizontalXL";
import HoverTransformFullwidth from "@/components/elements/element-products/HoverTransformFullwidth";
import SlideHover from "@/components/elements/element-products/SlideHover";
import HoverTransformSlider from "@/components/elements/element-products/HoverTransformSlider";
import SlideHoverXL from "@/components/elements/element-products/SlideHoverXL";
import MiniStandard from "@/components/elements/element-products/MiniStandard";
import ExpandLg from "@/components/elements/element-products/ExpandLg";
import CardStyleFourteen from "@/components/elements/element-products/CardStyleFourteen";
import CardStyleThirteen from "@/components/elements/element-products/CardStyleThirteen";
import CardStyleFifteen from "@/components/elements/element-products/CardStyleFifteen";
import CardStyleSixteen from "@/components/elements/element-products/CardStyleSixteen";
import CardStyleSeventeen from "@/components/elements/element-products/CardStyleSeventeen";
import CardStyleEighteen from "@/components/elements/element-products/CardStyleEighteen";
import CallForPrice from "@/components/elements/element-products/CallForPrice";
import LoginRegisterForPrice from "@/components/elements/element-products/LoginRegisterForPrice";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Products | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementProductsPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Products</span>
            </>
          }
        />
        <DefaultProductCard />
        <AllInfoHover />
        <MiniXS />
        <MiniCardXXS />
        <StandardCard />
        <HorizontalLarge />
        <MarqueStandard />
        <HorizontalXL />
        <HoverTransformFullwidth />
        <SlideHover />
        <HoverTransformSlider />
        <SlideHoverXL />
        <MiniStandard />
        <ExpandLg />
        <CardStyleFourteen />
        <CardStyleThirteen />
        <CardStyleFifteen />
        <CardStyleSixteen />
        <CardStyleSeventeen />
        <CardStyleEighteen />
        <CallForPrice />
        <LoginRegisterForPrice />
      </>
    </>
  );
}
