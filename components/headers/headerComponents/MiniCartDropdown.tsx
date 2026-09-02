"use client";

import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/store";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { formatCurrency } from "@/lib/price";

export default function MiniCartDropdown() {
  const { cartProducts, totalPrice, setCartProducts } = useContextElement();

  return (
    <div className="rbt-mini-cart-popup">
      <div className="rbt-mini-cart-inner">
        <div className="inner-top">
          <div className="content d-block">
            <div className="title-section">
              <h6 className="title mb--0">
                <i className="fa-sharp fa-regular fa-cart-shopping mr--12" />
                Your cart
              </h6>
            </div>
            <div className="rbt-btn-close">
              <button
                type="button"
                className="minicart-close-button rbt-round-btn"
                aria-label="Close mini cart"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        </div>

        {cartProducts.length > 0 ? (
          <>
            <nav className="side-nav w-100">
              <ul className="rbt-minicart-wrapper">
                {cartProducts.map((item) => (
                  <li className="minicart-item" key={item.id}>
                    <div className="thumbnail">
                      <Link href={`/product-single-default/${item.id}`}>
                        <Image
                          alt="Product Image"
                          src={item.imgSrc}
                          width={item.imgWidth || item.width || 142}
                          height={item.imgHeight || item.height || 100}
                        />
                      </Link>
                    </div>
                    <div className="product-content text-start">
                      <h6 className="title">
                        <Link href={`/product-single-default/${item.id}`}>
                          {item.title}
                        </Link>
                      </h6>
                      <span className="quantity">
                        {item.quantity}x{" "}
                        <span className="price">{formatCurrency(item.price)}</span>
                      </span>
                    </div>
                    <div className="close-btn">
                      <button
                        type="button"
                        aria-label={`Remove ${item.title} from cart`}
                        className="rbt-round-btn"
                        onClick={() =>
                          setCartProducts(
                            cartProducts.filter((elm) => elm.id !== item.id),
                          )
                        }
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rbt-minicart-footer">
              <div className="rbt-cart-subttotal">
                <p>Subtotal ({cartProducts.length} items)</p>
                <p className="price">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="rbt-cart-subttotal">
                <p>Shipping</p>
                <p className="price">$10.00</p>
              </div>
              <hr className="mb--0" />
              <div className="rbt-cart-subttotal">
                <p className="subtotal">
                  <strong>Total</strong>
                </p>
                <p className="price">
                  ${(totalPrice + (totalPrice > 0 ? 10 : 0)).toFixed(2)}
                </p>
              </div>
              <div className="offer-progress-area text-start">
                <p className="offer-text">
                  {totalPrice < 1000 ? (
                    <>
                      Add <strong>${(1000 - totalPrice).toFixed(2)}</strong>{" "}
                      More To Get
                      <strong className="ml--4">Free Shipping</strong>
                    </>
                  ) : (
                    <>
                      Congratulations! You have
                      <strong className="ml--4">Free Shipping</strong>
                    </>
                  )}
                </p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Shipping-progress"
                  aria-valuenow={Math.min((totalPrice / 1000) * 100, 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${Math.min((totalPrice / 1000) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div className="rbt-minicart-bottom mt--16">
                <div className="rbt-button-group">
                  <Link
                    href={`/cart`}
                    className="rbt-btn rbt-btn-sm rbt-btn-gray"
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/checkout-delivery-step-one"
                    className="rbt-btn rbt-btn-sm"
                  >
                    <span className="btn-text">Checkout</span>
                  </Link>
                </div>
                <div className="share-btn-grp rbt-link-hover">
                  <ModalTriggerButton
                    openModalName="socialShareModal"
                    className="share-btn"
                  >
                    <i className="fa-sharp fa-solid fa-link mr--4" />
                    Share Cart
                  </ModalTriggerButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rbt-minicart-footer">
            <div className="text-center p--20">
              <i
                className="fa-regular fa-bag-shopping mb--16"
                style={{ fontSize: "48px", opacity: 0.2 }}
              />
              <h6 className="mb--8">Your cart is empty</h6>
              <p className="description-text mb--24">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link href="/shop" className="rbt-btn rbt-btn-sm w-100">
                Go to Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
