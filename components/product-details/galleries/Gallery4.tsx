"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GALLERY4_IMAGES = [
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-03.webp",
] as const;
import "@/lib/lightgallery-styles";
export default function Gallery4() {
  const layoutClasses = [
    "col-xl-12 col-sm-6 col-12",
    "col-xl-4 col-sm-6 col-12 mt--16",
    "col-xl-8 col-sm-6 col-12 mt--16",
    "col-xl-8 col-sm-6 col-12 mt--16",
    "col-xl-4 col-sm-6 col-12 mt--16",
  ] as const;

  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="row row--8 align-items-center rbt-mobile-row rbt-masonary-variation-markup position-relative"
      speed={400}
      selector="a.rbt-product-single-img"
      zoomFromOrigin={false}
    >
      <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
        NEW
      </div>
      <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
        HOT
      </div>
      {GALLERY4_IMAGES.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`${layoutClasses[index] ?? "col-xl-4 col-sm-6 col-12 mt--16"} rbt-scroll-trigger fade_in animation-order-${index + 1}`}
        >
          <div className="thumbnail position-relative">
            <a className="rbt-product-single-img" href={src} data-src={src}>
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                width={624}
                height={846}
                src={src}
              />
            </a>
          </div>
        </div>
      ))}
    </LightGallery>
  );
}
