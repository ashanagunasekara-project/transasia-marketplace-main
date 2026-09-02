import { Metadata } from "next";
import ProductBannerStyleOne from "@/components/elements/element-product-banner/ProductBannerStyleOne";
import ProductBannerStyleTwo from "@/components/elements/element-product-banner/ProductBannerStyleTwo";
import ProductBannerStyleThree from "@/components/elements/element-product-banner/ProductBannerStyleThree";
import ProductBannerStyleFour from "@/components/elements/element-product-banner/ProductBannerStyleFour";
import ProductBannerStyleFive from "@/components/elements/element-product-banner/ProductBannerStyleFive";
import ProductBannerStyleSix from "@/components/elements/element-product-banner/ProductBannerStyleSix";
import ProductBannerStyleSeven from "@/components/elements/element-product-banner/ProductBannerStyleSeven";
import ProductBannerStyleEight from "@/components/elements/element-product-banner/ProductBannerStyleEight";
import ProductBannerStyleNine from "@/components/elements/element-product-banner/ProductBannerStyleNine";
import ProductBannerStyleTen from "@/components/elements/element-product-banner/ProductBannerStyleTen";
import ProductBannerStyleEleven from "@/components/elements/element-product-banner/ProductBannerStyleEleven";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Product Banner | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementProductBannerPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Product Banner</span>
            </>
          }
        />
        <ProductBannerStyleOne />
        <ProductBannerStyleTwo />
        <ProductBannerStyleThree />
        <ProductBannerStyleFour />
        <ProductBannerStyleFive />
        <ProductBannerStyleSix />
        <ProductBannerStyleSeven />
        <ProductBannerStyleEight />
        <ProductBannerStyleNine />
        <ProductBannerStyleTen />
        <ProductBannerStyleEleven />
      </>
    </>
  );
}
