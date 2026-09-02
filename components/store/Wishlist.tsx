"use client";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Tooltip from "@/components/common/ui/Tooltip";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { usePathname } from "next/navigation";

export default function Wishlist() {
  const {
    wishList,
    removeFromWishlist,
    addProductToCart,
    isAddedToCartProducts,
    mounted,
  } = useContextElement();
  const { copied, copy } = useCopyToClipboard();

  const pathname = usePathname();
  const currentUrl =
    typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const items = wishList;

  return (
    <div className="rbt-component-area rbt-wishlist-area rbt-section-gap2Bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center">
              <h2 className="rbt-title mb--8">
                <span className="rbt-text-bold">Wishlist</span>
              </h2>
              <p className="description mx-auto">
                Your saved favorites in one place. Move items to cart or keep
                them for later.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            {mounted && items.length === 0 ? (
              <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray pt--24 pb--24 mb--20 text-center">
                <p className="b2 mb--8">Your wishlist is currently empty.</p>
                <Link href="/shop" className="rbt-btn rbt-btn-sm mt--8">
                  Browse Products
                </Link>
              </div>
            ) : (
              mounted && (
                <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray pt--0 pb--0 mb--20 rbt-scrollable-content">
                  <table className="rbt-transparent-table-one rbt-wishlist-table mb--0">
                    <tbody>
                      {/* Start wishlist product rows */}
                      {items.map((product) => (
                        <tr key={product.id}>
                          <td className="rbt-product-remove-btn-wrapper">
                            <Tooltip content="Remove" placement="top">
                              <button
                                className="rbt-product-remove-btn rbt-round-btn"
                                onClick={() => removeFromWishlist(product.id)}
                              >
                                <span>
                                  <i className="fa-solid fa-xmark" />
                                </span>
                              </button>
                            </Tooltip>
                          </td>
                          <td className="product-thumbnail">
                            <Link
                              href={`/product-single-default/${product.id}`}
                            >
                              <Image
                                alt={product.title}
                                src={product.imgSrc}
                                width={278}
                                height={212}
                              />
                            </Link>
                          </td>
                          <td className="rbt-wish-product-info">
                            <h6 className="rbt-wish-product-name">
                              <Link
                                href={`/product-single-default/${product.id}`}
                              >
                                {product.title}
                              </Link>
                            </h6>
                            <div className="rbt-product-price-text rbt-text-color-primary">
                              <span>${product.price.toFixed(2)}</span>
                            </div>
                            <span className="rbt-product-id">
                              <span className="rbt-text-semi-bold">SKU:</span>#
                              {product.id}
                            </span>
                          </td>
                          <td className="rbt-product-stock-status">
                            <div className="rbt-product-badge rbt-product-badge-bg-light-green border-rounded">
                              IN STOCK
                            </div>
                          </td>
                          <td>
                            <div className="rbt-button-group">
                              <button
                                type="button"
                                className="rbt-btn rbt-btn-sm has-left-icon"
                                onClick={() => addProductToCart(product)}
                              >
                                <i className="fa-regular fa-cart-shopping mr--4" />
                                {isAddedToCartProducts(product.id)
                                  ? "Already Added"
                                  : "Add To Cart"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* End wishlist product rows */}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
          {/* Start wishlist bottom area */}
          <div className="col-12 col-lg-10 mx-auto">
            <div className="rbt-wishlist-bottom-area">
              <div className="rbt-social-share-area">
                <p className="title mb--0 mr--24 mr_sm--0">Share on :</p>
                <ul className="rbt-social-icon-list">
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rbt-copy-link-part rbt-text-copy-activation">
                <span className="rbt-copy-link-title">Wishlist link:</span>
                <input
                  className="rbt-copy-value-field"
                  type="text"
                  value={currentUrl}
                  readOnly
                />
                <Tooltip content="Copy to clipboard" placement="top">
                  <button
                    className="rbt-btn rbt-btn-xs has-left-icon rbt-copy-btn"
                    onClick={() => copy(currentUrl)}
                    type="button"
                  >
                    <i className="fa-regular fa-copy" />{" "}
                    <span className="rbt-btn-text ml--4">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          {/* End wishlist bottom area */}
        </div>
      </div>
    </div>
  );
}
