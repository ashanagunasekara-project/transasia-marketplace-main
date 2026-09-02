"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GALLERY3_IMAGES = [
  "/assets/images/product-img/fashion/product-01.webp",
  "/assets/images/product-img/fashion/product-02.webp",
  "/assets/images/product-img/fashion/product-03.webp",
  "/assets/images/product-img/fashion/product-04.webp",
] as const;
import "@/lib/lightgallery-styles";
export default function Gallery3() {
  return (
    <>
      <div className="col-xl-6 col-lg-12 col-12 mt--16">
        <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
          <LightGallery
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="row row--12 mt_dec--24"
            speed={400}
            selector="a.rbt-product-single-img"
            zoomFromOrigin={false}
          >
            {GALLERY3_IMAGES.map((src) => (
              <div key={src} className="col-lg-6 col-6 mt--24">
                <div className="thumbnail">
                  <a
                    href={src}
                    data-src={src}
                    className="rbt-product-single-img"
                  >
                    <Image
                      className="rbt-rounded--12"
                      alt="Product Images"
                      src={src}
                      width={624}
                      height={846}
                    />
                  </a>
                </div>
              </div>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
}
