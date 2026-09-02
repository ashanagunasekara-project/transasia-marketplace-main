"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { miniImageGallary } from "@/data/imageGallary";
import "@/lib/lightgallery-styles";
function MiniImageGallary() {
  return (
    <>
      <div className="rbt-liststyle-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--24 border-0">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Mini Image Gallary</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Image Gallary Area */}
          <LightGallery
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="w-100"
            speed={400}
            selector=".rbt-element-image-gallary-markup a.rbt-product-single-img"
            zoomFromOrigin={false}
          >
            <div className="row row--12 mt_dec--24 rbt-element-image-gallary-markup">
              {miniImageGallary.map((item) => (
                <div
                  key={item.src}
                  className={"col-lg-2 col-md-4 col-sm-4 col-4 mt--24"}
                >
                  <div className="rbt-gallary-img text-center rbt-gallary-img-style-one">
                    <div
                      className={`inner rbt-scroll-trigger zoom_in animation-order-${item.id}`}
                    >
                      <a
                        href={item.src}
                        data-src={item.src}
                        className="rbt-product-single-img"
                      >
                        <Image
                          alt={item.alt}
                          src={item.src}
                          width={item.width}
                          height={item.height}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </LightGallery>
          {/* End Image Gallary Area */}
        </div>
      </div>
    </>
  );
}

export default MiniImageGallary;
