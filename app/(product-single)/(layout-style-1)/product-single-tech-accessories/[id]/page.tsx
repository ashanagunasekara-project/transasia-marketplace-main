import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";
import DetailsTechAccessories from "@/components/product-details/details/DetailsTechAccessories";
import ComboProducts from "@/components/product-details/others/ComboProducts";
import VideoReview from "@/components/product-details/others/VideoReview";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import BoughtTogether from "@/components/product-details/others/BoughtTogether";
import Description1 from "@/components/product-details/descriptions/Description1";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import Footer10 from "@/components/footers/Footer10";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Tech Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsTechAccessories product={product} />

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
      <VideoReview />
      <CompareSimilerItems />
      <SimilerProducts />
      <BoughtTogether />
      <BottomStickyProduct />

      <Footer10 />
    </>
  );
}
