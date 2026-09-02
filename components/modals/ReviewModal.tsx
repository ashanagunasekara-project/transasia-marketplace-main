'use client'
import { CloseIcon } from '../svg-icons';
import Image from "next/image";
import Link from "next/link";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function ReviewModal() {
  const { close } = useManagedModalPanel("leaveReviewModal");
  const reviewProductHref = "/product-single-default/1";
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="leaveReviewModal"
    >
      <div className="modal-dialog rbt-register-form-modal modal-dialog-centered">
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
            <div className="rbt-single-product-area rbt-bg-color-white rbt-content-trs-portion">
              <h5 className="rbt-title rbt-modal-title mb--24">
                Leave a review for:
              </h5>
              <ul className="rbt-minicart-wrapper pt--0">
                <li className="minicart-item">
                  <div className="thumbnail transparent-verticle-thumbnail">
                    <Link href={reviewProductHref}>
                      <Image
                        alt="Product Image"
                        src="/assets/images/catagory-img/cat-transp-img-07.webp"
                        width={93}
                        height={93}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h6 className="rbt-title mb--8 b2">
                      <Link href={reviewProductHref}>
                        Nikon D5600 DSLR Camera with 18-55mm Lens
                      </Link>
                    </h6>
                    <span className="quantity">
                      1x <span className="price">$489.00</span>
                    </span>
                  </div>
                </li>
              </ul>
              <hr />
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row row--12 mt_dec--24">
                  <div className="col-12 mt--24">
                    <label htmlFor="full_name" className="form-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      defaultValue="Johnson Charley"
                      readOnly
                    />
                  </div>
                  <div className="col-12 mt--24">
                    <label htmlFor="review_area" className="form-label">
                      Review
                    </label>
                    <textarea
                      id="review_area"
                      rows={5}
                      defaultValue={"Write your opinion..."}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-flex rbt-gap--16">
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-secondary rbt-btn-md rbt-square-btn w-100 mt--24"
                        aria-label="Close"
                        onClick={close}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rbt-btn rbt-btn-md rbt-square-btn w-100 mt--24"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
