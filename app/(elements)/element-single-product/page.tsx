import { Metadata } from "next";
import ElementsHero from "@/components/elements/ElementsHero";
import DetailsDefault from "@/components/product-details/details/DetailsDefault";
import ComboProducts from "@/components/product-details/others/ComboProducts";
import { electronicsHoverVideoData } from "@/data/products/electronics";
import Description1 from "@/components/product-details/descriptions/Description1";

export const metadata: Metadata = {
  title:
    "Element Single Product | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementSingleProductPage() {
  const product = electronicsHoverVideoData[0];
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Single Product</span>
            </>
          }
        />
        <DetailsDefault
          parentClass="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gap"
          product={product}
        />

        <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
          <div className="container">
            <div className="rbt-combo-prd-box rbt-bg-color-white">
              <div className="row justify-content-between">
                <div className="col-lg-2">
                  <div className="rbt-combo-title-section">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There&apos;s more in the complete bundle
                    </h5>
                  </div>
                </div>
                <div className="col-lg-10">
                  <ComboProducts />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Description1 />
      </>
    </>
  );
}
