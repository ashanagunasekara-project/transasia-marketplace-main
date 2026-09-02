"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GALLERY2_IMAGES = [
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
] as const;
import "@/lib/lightgallery-styles";
export default function Gallery2({
  cardClass = "col-xl-12 col-sm-6 col-12 mt--16",
}) {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="w-100"
      speed={400}
      selector="a.rbt-product-single-img"
      zoomFromOrigin={false}
    >
      <div className="row row--8 mt_dec--16 align-items-center rbt-mobile-row">
        <div className={cardClass}>
          <div className="thumbnail position-relative">
            <a
              className="rbt-product-single-img"
              href={GALLERY2_IMAGES[0]}
              data-src={GALLERY2_IMAGES[0]}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={GALLERY2_IMAGES[0]}
                width={624}
                height={846}
              />
              <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
                NEW
              </div>
              <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
                HOt
              </div>
            </a>
          </div>
        </div>
        <div className="col-xl-12 col-sm-6 col-12 mt--16">
          <div className="thumbnail">
            <a
              className="rbt-product-single-img"
              href={GALLERY2_IMAGES[1]}
              data-src={GALLERY2_IMAGES[1]}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={GALLERY2_IMAGES[1]}
                width={624}
                height={846}
              />
            </a>
          </div>
        </div>
        <div className="col-xl-12 col-sm-6 col-12 mt--16">
          <div className="thumbnail">
            <a
              className="rbt-product-single-img"
              href={GALLERY2_IMAGES[2]}
              data-src={GALLERY2_IMAGES[2]}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={GALLERY2_IMAGES[2]}
                width={624}
                height={846}
              />
            </a>
          </div>
        </div>
        <div className="col-xl-12 col-sm-6 col-12 mt--16">
          <div className="thumbnail">
            <a
              className="rbt-product-single-img"
              href={GALLERY2_IMAGES[3]}
              data-src={GALLERY2_IMAGES[3]}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={GALLERY2_IMAGES[3]}
                width={624}
                height={846}
              />
            </a>
          </div>
        </div>
      </div>
    </LightGallery>
  );
}
