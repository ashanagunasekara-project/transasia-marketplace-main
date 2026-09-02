"use client";
import { ScaleIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { getStackedModalZIndex } from "@/lib/modalStack";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
export default function Compare() {
  const { removeFromCompareItem, compareItem, setCompareItem } =
    useContextElement();
  const {
    activeBsModal,
    isAnimatedOpen: shouldShowCompareWithAnimation,
    close,
  } = useManagedModalPanel("comparePanel");
  const items = compareItem;

  return (
    <>
      <div
        suppressHydrationWarning
        className={`rbt-comparison-message-area${shouldShowCompareWithAnimation ? " comparison-active" : ""}`}
        style={{
          zIndex: getStackedModalZIndex(activeBsModal, "comparePanel"),
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 col-xl-2">
              <div className="rbt-compare-title">
                <h6>Compare Product</h6>
                <span>
                  <ScaleIcon />
                </span>
                <p className="rbt-compare-table-text">
                  Find and select products to see the differences and
                  similarities between them
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-8">
              <div className="row rbt-compare-products">
                {items.map((product, i) => (
                  <div key={i} className="col-10 col-md-3 col-lg-3">
                    <div className="rbt-card rbt-comparison-prd-box">
                      <button
                        type="button"
                        className="close-btn rbt-round-btn"
                        onClick={() => removeFromCompareItem(product.id)}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                      <div className="rbt-comparison-prd-img">
                        <Link href={`/product-single-default/${product.id}`}>
                          <Image
                            alt="Product Image"
                            src={product.imgSrc}
                            width={1246}
                            height={976}
                          />
                        </Link>
                      </div>
                      <h6 className="rbt-product-title">
                        <Link href={`/product-single-default/${product.id}`}>
                          {product.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-2">
              <div className="rbt-popup-action-area justify-content-center align-items-center">
                <Link
                  href="/compare-product"
                  className="rbt-btn rbt-btn-sm rbt-square-btn has-left-icon mb--12"
                >
                  <i className="fa-regular fa-scale-balanced" /> Compare Now
                </Link>
                <Link
                  className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn has-left-icon mb--12"
                  href={`/shop`}
                >
                  <i className="fa-regular fa-browser" /> Browse Products
                </Link>
                <a
                  href="#!"
                  className="text-decoration-underline text-center mb--12"
                  onClick={() => setCompareItem([])}
                >
                  Clear All
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="close-canvas-btn rbt-round-btn"
          onClick={() => close()}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>{" "}
    </>
  );
}
