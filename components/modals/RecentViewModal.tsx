import { CloseIcon } from '../svg-icons';
import ProductRating from "@/components/common/ui/ProductRating";
import Image from "next/image";
import { recentViewProducts } from "@/data/products/others";
import Link from "next/link";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { formatCurrency } from "@/lib/price";

export default function RecentViewModal() {
  const { close } = useManagedModalPanel("recent-viewModal");
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="recent-viewModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered xs-size">
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
            <div className="rbt-recent-view-prd-area rbt-content-trs-portion rbt-scroll-vertical-wrapper">
              <h5 className="rbt-title mb--16 rbt-text-bold">
                Recently Viewed Items
              </h5>
              <div className="rbt-scroll-vertical">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {recentViewProducts.map((product, index) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                      key={index}
                    >
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                        <div
                          className={`inner rbt-scroll-trigger fade_in animation-order-${
                            (index % 6) + 1
                          }`}
                        >
                          <div className="rbt-card-body">
                            <ProductRating product={product} />
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${product.id}`}
                              >
                                {product.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              <del className="price-text">
                                {formatCurrency(product.oldPrice)}
                              </del>
                              <span className="price-text">
                                {formatCurrency(product.price)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                            <Link
                              href={`/product-single-default/${product.id}`}
                            >
                              <Image src={product.imgSrc} width={100}
                                height={100} alt="Card Image" />
                            </Link>
                          </div>
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
    </div>
  );
}
