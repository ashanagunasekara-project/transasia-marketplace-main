"use client";
import { bundleProducts } from "@/data/products/others";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BundleProducts() {
  const [products, setProducts] = useState(bundleProducts);

  const increaseQty = (index: number) => {
    const updated = [...products];
    updated[index] = {
      ...updated[index],
      quantity: (updated[index].quantity ?? 1) + 1,
    };
    setProducts(updated);
  };

  const decreaseQty = (index: number) => {
    const updated = [...products];
    if ((updated[index].quantity ?? 1) > 1) {
      updated[index] = {
        ...updated[index],
        quantity: (updated[index].quantity ?? 1) - 1,
      };
      setProducts(updated);
    }
  };

  return (
    <div className="rbt-list-product-container d-flex flex-column rbt-gap--16">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="rbt-single-element d-flex align-items-center rbt-bg-color-brand-50 p--16 rbt-rounded--12"
        >
          <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-prd-sing-add-card">
            <div className="inner">
              <div className="rbt-card-img rbt-bg-color-default">
                <Link href={`/product-single-tech-accessories/${product.id}`}>
                  <Image
                    alt="Card Image"
                    src={product.imgSrc}
                    width={180}
                    height={244}
                  />
                </Link>
              </div>
              <div className="rbt-card-body d-flex rbt-gap--8 align-items-center rbt-card-body-sm-wider">
                <div className="left-part">
                  <a
                    href="#"
                    className="rbt-card-subtitle b4 rbt-card-categories-text mt--0"
                  >
                    <i className="fa-regular fa-headphones mr--4 rbt-rated-icon" />
                    {product.subtitle}
                  </a>
                  <h6 className="rbt-card-title">
                    <Link
                      href={`/product-single-tech-accessories/${product.id}`}
                    >
                      {product.title}
                    </Link>
                  </h6>
                </div>
                <div className="right-part">
                  <div className="pricing-part flex-column">
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

          <div className="rbt-qty-area rbt-qty-sm">
            <button
              className="qty-item-btn qty-item-btn-decr"
              onClick={() => decreaseQty(index)}
            >
              <i className="fa-solid fa-minus" />
            </button>
            <input
              type="number"
              className="items-qty-input"
              value={product.quantity}
              min={1}
              readOnly
            />
            <button
              className="qty-item-btn qty-item-btn-incr"
              onClick={() => increaseQty(index)}
            >
              <i className="fa-solid fa-plus" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
