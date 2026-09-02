import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import Image from "next/image";

import Slider1 from "../sliders/Slider1";
import ProductActionPanel from "../ProductActionPanel";
import BuyMoreOption1 from "../others/BuyMoreOption1";

import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function DetailsBuyMoreOption({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--20 mt_dec--16 justify-content-center">
          <div className="col-xl-7 col-lg-12 col-12 mt--16">
            <Slider1 product={product} />
          </div>
          <div className="col-xl-5 col-lg-12 col-12 mt--16">
            <div className="rbt-single-product-content ptb--0">
              <div
                className="rbt-quick-access-banner rbt-quick-access-banner-sm rbt-bg-color-brand-300 rbt-rounded--8 alert alert-dismissible fade show"
                role="alert"
              >
                <div className="rbt-quick-access-banner-banner-content d-flex align-items-center">
                  <div className="rbt-icon-img">
                    <Image
                      alt="Ecommerce Gift Box Icon"
                      src="/assets/images/icons/product-single/gift-box-01-sm.svg"
                      width={44}
                      height={44}
                    />
                  </div>
                  <p className="rbt-quick-access-banner-title b3 mb-0">
                    Register to buy Grocery&apos;s at wholesale prices for your
                    shop.
                  </p>
                </div>
                <div className="rbt-quick-access-banner-action-btn">
                  <ModalTriggerButton
                    openModalName="signinModal"
                    className="rbt-btn rbt-btn-xs"
                  >
                    <i className="fa-light fa-user mr--4" /> Register Now
                  </ModalTriggerButton>
                </div>
                <a
                  href="#"
                  className="rbt-cancel-btn"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </a>
              </div>
              <Link
                href={`/shop-by-category`}
                className="rbt-card-subtitle rbt-card-categories-text mt--16"
              >
                Headphones
              </Link>
              <h2 className="rbt-card-title mt--12">
                <a href="#">{product.title} </a>
              </h2>
              <p className="description-text b2 mt--16 mb--0">
                At vero eos et accusamus et iusto dignissimos ducimus blanditiis
                praesentium voluptatum deleniti atque...
              </p>
              <div className="rbt-info-wrapper d-flex">
                <ProductRating product={product}><span className="icon">
                    <i className="fa-sharp fa-solid fa-truck-fast" />
                  </span></ProductRating>
                <div className="prd-info-section has-left-separator">
                  <span>
                    <span className="rbt-text-bold rbt-text-color-heading">
                      SKU:
                    </span>
                    HN-508801
                  </span>
                  <div className="rbt-badge rbt-badge-border rbt-bg-warning rbt-badge-small rbt-badge-rounded">
                    OUT OF STOCK
                  </div>
                </div>
              </div>
              <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                <div className="pricing-part mt--0">
                  {product.oldPrice ? (
                    <del className="price-text">
                      ${product.oldPrice?.toFixed(2)}
                    </del>
                  ) : (
                    ""
                  )}
                  <span className="price-text">
                    {" "}
                    ${product.price.toFixed(2)}
                  </span>
                  <OfferBadge product={product} className="rbt-offer-badge-md" />
                </div>
              </div>
              <ProductActionPanel product={product} />
              <BuyMoreOption1 />
              <hr className="rbt-separator rbt-separator-gray200 mt--20 mb--0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
