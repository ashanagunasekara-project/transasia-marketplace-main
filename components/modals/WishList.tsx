"use client";
import { CloseIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import AddToCart from "@/components/action-buttons/AddToCart";

export default function WishList() {
  const { wishList, removeFromWishlist, mounted } = useContextElement();
  const { close } = useManagedModalPanel("wishlistModal");

  const items = wishList;

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="wishlistModal"
      tabIndex={-1}
      aria-labelledby="wishlistModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog sm-size modal-dialog-centered">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <CloseIcon />
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              aria-label="Close"
              onClick={close}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-wishlist-modal-content">
                <h5 className="rbt-title rbt-text-bold" id="wishlistModalLabel">
                  Product Wishlist
                </h5>
                {mounted && items.length === 0 ? (
                  <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray pt--16 pb--16 mb--16 text-center">
                    <p className="b2 mb--0">
                      Your wishlist is currently empty.
                    </p>
                  </div>
                ) : (
                  mounted && (
                    <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray pt--0 pb--0 mb--16">
                      <table className="rbt-transparent-table-one mb--0 rbt-wishlist-table">
                        <tbody>
                          {/* Start single wishlist product row */}
                          {items.map((product, i) => (
                            <tr key={i}>
                              <td className="rbt-product-remove-btn-wrapper">
                                <button
                                  onClick={() => removeFromWishlist(product.id)}
                                  className="rbt-product-remove-btn rbt-round-btn"
                                >
                                  <span>
                                    <i className="fa-solid fa-xmark" />
                                  </span>
                                </button>
                              </td>
                              <td className="product-thumbnail">
                                <Link
                                  href={`/product-single-default/${product.id}`}
                                >
                                  <Image
                                    alt="Product image"
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
                                  <span className="rbt-text-semi-bold">
                                    SKU:
                                  </span>
                                  #180036458
                                </span>
                              </td>
                              <td>
                                <div className="rbt-button-group">
                                  <AddToCart product={product} />
                                </div>
                              </td>
                            </tr>
                          ))}
                          {/* End single wishlist product row */}
                        </tbody>
                      </table>
                    </div>
                  )
                )}
                <div className="rbt-wishlist-modal-footer d-flex flex-wrap rbt-gap--16 justify-content-between align-items-center">
                  <Link href={`/wishlist`} className="rbt-link">
                    <span className="icon mr--4">
                      <i className="fa-sharp fa-regular fa-heart" />
                    </span>
                    Open wishlist page
                  </Link>
                  <Link href={`/shop`} className="rbt-link">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
