"use client";
import Image from "next/image";

import { useContextElement } from "@/context/Context";
import { stickyBottomProducts } from "@/data/products/others";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BottomStickyProduct() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topPos = window.scrollY || window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const filled = (topPos + windowHeight) / documentHeight;
      const targetPosition = documentHeight * 0.36;

      setActive(topPos > targetPosition && filled !== 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`rbt-minicart-bottom-section rbt-product-card${active ? " rbt-minicart-bottom-section-active" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between mt_dec--12">
          <div className="col-lg-6 col-md-12 mt--12">
            <div className="rbt-prd-info-section">
              <div className="rbt-prd-img">
                <Link
                  href={`/product-single-default/${stickyBottomProducts[0].id}`}
                >
                  <Image
                    alt="Ecommerce Product Image"
                    src={stickyBottomProducts[0].imgSrc}
                    width="220"
                    height="168"
                  />
                </Link>
              </div>
              <div className="rbt-content">
                <h6 className="rbt-title mb--0 rbt-text-bold">
                  <Link
                    href={`/product-single-default/${stickyBottomProducts[0].id}`}
                  >
                    {stickyBottomProducts[0].title}
                  </Link>
                </h6>
                <p className="rbt-desc">
                  Accessibility Statement Wi-Fi 512GB Gray Space....
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mt--12 mt_sm--16">
            <div className="rbt-minicart-bottom-section-center justify-content-center d-flex">
              <div className="pricing-part">
                <del className="price-text rbt-text-semi-bold rbt-text-color-gray-400">
                  $
                  {((stickyBottomProducts[0].oldPrice ?? 0) as number).toFixed(
                    2,
                  )}
                </del>
                <span className="price-text rbt-text-bold rbt-text-color-heading">
                  ${stickyBottomProducts[0].price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mt--12 mt_sm--16">
            <div className="rbt-minicart-bottom-section-right d-flex">
              <div className="minicart-btn-grp d-flex rbt-gap--16">
                <a
                  className="rbt-btn rbt-btn-border rbt-btn-sm d-block has-left-icon"
                  href="#"
                  onClick={() => addProductToCart(stickyBottomProducts[0])}
                >
                  <i className="fa-regular mr fa-cart-shopping" />{" "}
                  {isAddedToCartProducts(stickyBottomProducts[0].id)
                    ? "Already Added"
                    : "Add To Cart"}
                </a>
                <a className="rbt-btn rbt-btn-sm d-block" href="#">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
