import Image from "next/image";


import DescriptionTab1 from "./DescriptionTab1";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

export default function Description1() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light pt--0">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-8 mt--24">
            <DescriptionTab1 />
          </div>
          <div className="col-xl-4 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts />
            <div className="rbt-block-banner-img mt--32">
              <Image
                alt="Ecommerce Product Banner"
                src="/assets/images/product-single/single-prd-banner/single-prd-banner-a-01.webp"
                width={1696}
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
