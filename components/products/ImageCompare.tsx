"use client";

import { recommendedProducts } from "@/data/products/others";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

type PreviewImage = {
  src: string;
  width: number;
  height: number;
};

export default function ImageCompare() {
  const sliderId = useId();
  const [slide, setSlide] = useState<number>(50);
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);

  const previewImages: PreviewImage[] = [
    {
      src: "/assets/images/image-comparison/image-comparison-a.webp",
      width: 400,
      height: 242,
    },
    {
      src: "/assets/images/image-comparison/image-comparison-b.webp",
      width: 400,
      height: 242,
    },
    {
      src: "/assets/images/image-comparison/image-comparison-c.webp",
      width: 400,
      height: 242,
    },
    {
      src: "/assets/images/image-comparison/image-comparison-a.webp",
      width: 400,
      height: 242,
    },
    {
      src: "/assets/images/image-comparison/image-comparison-b.webp",
      width: 400,
      height: 242,
    },
  ];

  return (
    <div className="rbt-component-area rbt-products-comparison-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 rbt-text-capitalize">
                <span className="rbt-bold--text">From Initial </span>Offer ends
                in
              </h2>
            </div>
          </div>
          <div className="row row--12 mt_dec--16">
            <div className="col-lg-2 col-md-6 col-sm-12 col-12 mt--16">
              <div className="rbt-img-peeker-list-single">
                <div className="rbt-img-peeker-list">
                  {previewImages.map((img, idx) => (
                    <div
                      key={`${img.src}-${idx}`}
                      className="rbt-img-peeker-single rbt-scroll-trigger fade_in animation-order-1"
                    >
                      <a
                        className={activePreviewIndex === idx ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActivePreviewIndex(idx);
                        }}
                      >
                        <Image
                          alt="Ecommerce Product Use Comparison Image"
                          src={img.src}
                          width={img.width}
                          height={img.height}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 col-sm-12 col-12 mt--16">
              <div className="rbt-img-comparison-style-one">
                <div className="rbt-img-comparison-list">
                  <div className="rbt-img-comparison-single rbt-scroll-trigger zoom_in animation-order-1">
                    <div className="rbt-block rbt-block--comparison">
                      <div
                        className="rbt-block__image"
                        style={
                          {
                            ["--range" as never]: `${slide}%`,
                          } as React.CSSProperties
                        }
                      >
                        <div className="rbt-block__img rbt-block__img--first">
                          <Image
                            className="img-cover"
                            alt="eCommerce Comparison Image"
                            src="/assets/images/image-comparison/image-comparison-a-1.webp"
                            width={4327}
                            height={4851}
                          />
                          <div className="rbt-comparison-badge rbt-comparison-badge-before">
                            Before
                          </div>
                          <div className="rbt-comparison-badge rbt-comparison-badge-after">
                            After
                          </div>
                        </div>
                        <div className="rbt-block__img rbt-block__img--last">
                          <Image
                            className="img-cover"
                            alt="eCommerce Comparison Image"
                            src="/assets/images/image-comparison/image-comparison-a-2.webp"
                            width={4303}
                            height={4851}
                          />
                        </div>
                        <div className="rbt-block__slide-line">
                          <div className="rbt-block__slide-icon">
                            <i className="fa-regular fa-bars" />
                          </div>
                        </div>
                        <input
                          id={sliderId}
                          className="rbt-block__slide"
                          type="range"
                          min={0}
                          max={100}
                          step={0.05}
                          value={slide}
                          onChange={(e) => setSlide(Number(e.target.value))}
                          aria-label="Comparison slider"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--16">
              <div className="rbt-list-card-box-one">
                {recommendedProducts.map((product, idx) => (
                  <div
                    key={`${product.title}-${idx}`}
                    className={`rbt-card rbt-product-card rbt-list-view-variation list-view-md list-view-md-var-one rbt-scroll-trigger fade_in animation-order-${idx + 1}`}
                  >
                    <div className="inner">
                      <div className="rbt-card-body">
                        <div className="rbt-card-rating">
                          <ul className="rbt-rating-icon-list">
                            {Array.from({ length: 5 }).map((_, starIdx) => (
                              <li key={`${product.title}-star-${starIdx}`}>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            ))}
                          </ul>
                          <p className="rating-digit">{product.ratingCount}</p>
                        </div>
                        <h6 className="rbt-card-title b4">
                          <Link href={`/product-single-default/${product.id}`}>
                            {product.title}
                          </Link>
                        </h6>

                        <div className="pricing-part">
                          <del className="price-text">
                            ${product.oldPrice?.toFixed(2)}
                          </del>
                          <span className="price-text">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="rbt-card-img rbt-bg-color-default">
                        <Link href={`/product-single-default/${product.id}`}>
                          <Image
                            alt="Card Image"
                            src={product.imgSrc}
                            width={400}
                            height={242}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
