import { Metadata } from "next";
import ProductCarouselsOne from "@/components/elements/element-carousels/ProductCarouselsOne";
import ProductCarouselsTwo from "@/components/elements/element-carousels/ProductCarouselsTwo";
import ProductCarouselsThree from "@/components/elements/element-carousels/ProductCarouselsThree";
import CompareProduct from "@/components/elements/element-carousels/CompareProduct";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Carousels | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementCarouselsPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Carousels</span>
            </>
          }
        />
        {/* Start Component Area */}
        <ProductCarouselsOne />
        <ProductCarouselsTwo />
        <ProductCarouselsThree />
        <CompareProduct />
      </>
    </>
  );
}
