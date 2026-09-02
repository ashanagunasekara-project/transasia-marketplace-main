import Footer10 from "@/components/footers/Footer10";

import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import BoughtTogether from "@/components/product-details/others/BoughtTogether";
import ComboProducts from "@/components/product-details/others/ComboProducts";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import DescriptionTab1 from "@/components/product-details/descriptions/Description1";

import VideoReview from "@/components/product-details/others/VideoReview";
import { allProducts } from "@/data/products";

import DetailsDefault from "@/components/product-details/details/DetailsDefault";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Default || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product =
    allProducts.filter((p) => p.id === parseInt(id))[0] || allProducts[0];
  return (
    <>
      <BreadCrumb product={product} />
      <DetailsDefault product={product} />

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
      <DescriptionTab1 />
      <VideoReview />
      <CompareSimilerItems />
      <SimilerProducts />
      <BoughtTogether />
      <BottomStickyProduct />
      <Footer10 />
    </>
  );
}
