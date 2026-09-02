"use client";
import { Product } from "@/types";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import { comboProducts } from "@/data/products/others";
import { useState } from "react";
import DropdownSelect from "@/components/common/select/DropdownSelect";

export default function ComboProducts({ products = comboProducts }) {
  const [selected, setSelected] = useState<Product[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>(
    {},
  );
  const sizeOptions = [
    "Extra Large",
    "Large",
    "Medium",
    "Small",
    "Extra Small",
  ];
  const totalPrice = selected.reduce((acc, item) => acc + item.price, 0);
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { addToWishlist, isAddedtoWishlist } = useContextElement();

  return (
    <>
      <div className="col-lg-12">
        <div className="rbt-combo-prd-content-section">
          <div className="rbt-prd-pricing-box rbt-bg-color-white">
            <div className="rbt-pricing-box-top">
              <div className="rbt-prd-img-area">
                {products.map((img, index) => (
                  <div className="single-product-img-box" key={index}>
                    <span className="icon h6">
                      <i className="fa-solid fa-plus" />
                    </span>
                    <label
                      onClick={() =>
                        setSelected((pre) =>
                          pre.includes(img)
                            ? [...pre].filter((elm) => elm != img)
                            : [...pre, img],
                        )
                      }
                      className={`rbt-img ${
                        selected.includes(img) ? "selected" : ""
                      }`}
                    >
                      <Image
                        alt="Card Image"
                        src={img.imgSrc}
                        width={435}
                        height={341}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="rbt-pricing-box-bottom">
              <ul className="rbt-combo-prd-list liststyle">
                {comboProducts.map((product, i) => (
                  <li key={i} className="rbt-single-prd">
                    <div
                      className="input-part"
                      onClick={() =>
                        setSelected((pre) =>
                          pre.includes(product)
                            ? [...pre].filter((elm) => elm != product)
                            : [...pre, product],
                        )
                      }
                    >
                      <input
                        className="rbt-check-green"
                        type="checkbox"
                        checked={selected.includes(product)}
                        readOnly
                      />
                      <label>{product.title}</label>
                    </div>

                    <div className="single-prd-select-area">
                      <div className="rbt-modern-select single-prd-select rbt-sm-size">
                        <DropdownSelect
                          options={sizeOptions}
                          selected={selectedSizes[i] || "Extra Large"}
                          onChange={(value) =>
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [i]: value,
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="pricing-part mt--0">
                      <del className="price-text">
                        ${(product.oldPrice ?? 0).toFixed(2)}
                      </del>
                      <span className="price-text">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
          {/* pricing-box end */}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="rbt-pricing-area d-flex align-items-center rbt-gap--16 mt--24">
          <div className="rbt-button-group text-center rbt-gap--16 m-0">
            <button
              onClick={() =>
                selected.forEach((product) => {
                  addProductToCart(product);
                })
              }
              className="rbt-btn rbt-btn-md"
            >
              <i className="fa-regular fa-cart-shopping mr--4" />{" "}
              {selected.length &&
              selected.every((product) => isAddedToCartProducts(product.id))
                ? "Already in cart"
                : "Add To Cart All"}
            </button>
            <button
              onClick={() =>
                selected.forEach((product) => {
                  addToWishlist(product);
                })
              }
              className="rbt-btn rbt-btn-md rbt-btn-border"
            >
              {selected.length &&
              selected.every((product) => isAddedtoWishlist(product.id))
                ? "Remove wishlist"
                : "Add All To Wishlist"}
            </button>
          </div>
          <div className="price d-flex align-items-center rbt-gap--4">
            <h6 className="mb--0">Total:</h6>
            <h4 className="mb--0 rbt-text-bold">${totalPrice.toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
