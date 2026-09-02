"use client";
import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import { alternativeProducts } from "@/data/products/others";
import Link from "next/link";

import { useContextElement } from "@/context/Context";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function AlternativeProducts() {
  const { setQuickViewItem } = useContextElement();
  return (
    <div className="rbt-list-product-container d-flex flex-column rbt-gap--24">
      {alternativeProducts.map((product, index) => (
        <div
          className="rbt-single-element d-flex align-items-center"
          key={index}
        >
          <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-prd-sing-add-card">
            <div className="inner">
              <div className="rbt-card-img rbt-bg-color-default">
                <a href={`/product-single-default/${product.id}`}>
                  <Image
                    alt="Card Image"
                    src={product.imgSrc}
                    width={180}
                    height={180}
                  />
                </a>
              </div>
              <div className="rbt-card-body d-flex rbt-gap--8 align-items-center">
                <div className="left-part">
                  <Link
                    href={`/shop-by-category`}
                    className="rbt-card-subtitle b4 rbt-card-categories-text mt--0"
                  >
                    <i className={`${product.iconClass} mr--4`} />
                    {product.category}
                  </Link>
                  <h6 className="rbt-card-title">
                    <a href={`/product-single-default/${product.id}`}>
                      {product.title}
                    </a>
                  </h6>
                </div>
                <div className="right-part">
                  <ProductRating product={product} />
                  <div className="pricing-part">
                    <del className="price-text">
                      ${(product.oldPrice ?? 0).toFixed(2)}
                    </del>
                    <span className="price-text">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-create-new-btn">
            <ModalTriggerButton
              openModalName="quickViewModal"
              className="rbt-btn rbt-btn-xs text-nowrap"
              onClick={() => {
                setQuickViewItem(product);
              }}
            >
              ADD <i className="fa-solid fa-plus ml--4" />
            </ModalTriggerButton>
          </div>
        </div>
      ))}
    </div>
  );
}
