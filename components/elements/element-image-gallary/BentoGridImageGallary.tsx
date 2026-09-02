"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { bentoGridImageGallary } from "@/data/imageGallary";
import "@/lib/lightgallery-styles";
function BentoGridImageGallary() {
  return (
    <>
      <div className="rbt-liststyle-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--24 border-0">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">
                    Bento Grid Image Gallery
                  </span>
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
            <div className="row rounded--16 overflow-hidden rbt-element-image-gallary-markup">
              <div className={"col-lg-5 col-md-5 col-sm-12 col-12 p-0"}>
                <div className="rbt-gallary-img text-center rbt-gallary-img-style-one rbt-gallary-img-boxed-round-style">
                  <div
                    className={`inner rbt-scroll-trigger zoom_in animation-order-${bentoGridImageGallary.left.id}`}
                  >
                    <a
                      href={bentoGridImageGallary.left.src}
                      data-src={bentoGridImageGallary.left.src}
                      className="rbt-product-single-img"
                    >
                      <Image
                        alt={bentoGridImageGallary.left.alt}
                        src={bentoGridImageGallary.left.src}
                        width={bentoGridImageGallary.left.width}
                        height={bentoGridImageGallary.left.height}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12 p-0">
                <div className="row m-0">
                  {bentoGridImageGallary.right.map((item) => (
                    <div
                      key={item.src}
                      className={"col-lg-4 col-md-4 col-sm-4 col-4 p-0"}
                    >
                      <div className="rbt-gallary-img text-center rbt-gallary-img-style-one rbt-gallary-img-boxed-round-style insta-post-min-height">
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
              </div>
            </div>
          </LightGallery>
          {/* End Image Gallary Area */}
        </div>
      </div>
    </>
  );
}

export default BentoGridImageGallary;
