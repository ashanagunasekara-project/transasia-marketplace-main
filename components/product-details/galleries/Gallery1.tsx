"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryImages = [
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-lg-01.webp",
    width: 2572,
    height: 1436,
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-04.webp",
    width: 1230,
    height: 1230,
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-03.webp",
    width: 1230,
    height: 1230,
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-02.webp",
    width: 1230,
    height: 1230,
  },
  {
    src: "/assets/images/product-img/accessories/bl-speaker-a-md-01.webp",
    width: 1230,
    height: 1230,
  },
];
import "@/lib/lightgallery-styles";
export default function Gallery1() {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="row row--8 align-items-center rbt-mobile-row rbt-masonary-variation-markup position-relative"
      speed={400}
      selector="a.rbt-product-single-img"
      zoomFromOrigin={false}
    >
      {galleryImages.map((img, index) => (
        <div
          key={index}
          className={`${index == 0 ? "col-xl-12" : "col-xl-6 mt--16"} col-sm-6 col-12 rbt-scroll-trigger fade_in animation-order-${index + 1}`}
        >
          <div className="thumbnail position-relative">
            <a
              className="rbt-product-single-img"
              href={img.src}
              data-src={img.src}
            >
              <Image
                className="w-100 rbt-rounded--12"
                alt="Product Images"
                src={img.src}
                width={img.width}
                height={img.height}
              />
            </a>
          </div>
        </div>
      ))}
    </LightGallery>
  );
}
