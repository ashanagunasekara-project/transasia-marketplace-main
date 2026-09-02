import { CloseIcon } from '../svg-icons';
import Image from "next/image";
import Link from "next/link";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function QuickView() {
  const { close } = useManagedModalPanel("addedcomparisonModal");
  return (
    <div
      className="rbt-default-modal rbt-added-comparison-modal modal fade has-rbt-top-folder-shape"
      id="addedcomparisonModal"
      tabIndex={-1}
      aria-labelledby="addedcomparisonModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
            {/* Start Component Area */}
            <div className="rbt-comparison-popup-area rbt-bg-color-white rbt-content-trs-portion">
              <div className="inner">
                <div className="rbt-comparison-prd-box">
                  <div className="rbt-comparison-prd-img">
                    <Image
                      alt="Product Image"
                      src="/assets/images/product-img/electronics/electronics-bg-trans-01.webp"
                      width={1246}
                      height={976}
                    />
                  </div>
                  <h6
                    className="rbt-product-title"
                    id="addedcomparisonModalLabel"
                  >
                    G244F 23.8 inch FHD 4k Rapid IPS 70Hz Super Vertical
                  </h6>
                </div>
                <div className="rbt-popup-action-area text-center">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-circle-check" />
                  </span>
                  <p className="mb--16 rbt-text-color-heading">
                    Successfully You have added <br />
                    your product comparison!
                  </p>
                  <Link href="/compare-product"
                    className="rbt-btn rbt-btn-sm rbt-square-btn d-block has-left-icon mb--12"
                  >
                    <i className="fa-regular fa-scale-balanced" /> Compare Now
                  </Link>
                  <Link
                    className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                    href="/shop"
                  >
                    <i className="fa-regular fa-browser" /> Browse Products
                  </Link>
                </div>
              </div>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
