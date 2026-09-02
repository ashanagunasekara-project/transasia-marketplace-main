"use client";

import { WaveThinIcon } from '../../svg-icons';
export default function AddReviewForm() {
  return (
    <div className="rbt-reviews-form">
      <form onSubmit={(e) => e.preventDefault()} className="rbt-contact-form">
        <div className="rbt-fshape-box-outline-style">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-contact-form-title rbt-bg-color-white">
                <h6 className="rbt-title">
                  <span className="rbt-bold--text">Add A Review</span>
                </h6>
                <span className="rbt-fshape-right-portion">
                  <WaveThinIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-bg-color-white rbt-contact-form-fshape">
            <div className="row">
              <div className="col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <ul className="rbt-review-inp-list">
                    <li className="rbt-review-inp">
                      <input
                        id="rbt-review-radio-1"
                        type="radio"
                        name="rbt-review-radio"
                      />
                      <label htmlFor="rbt-review-radio-1">
                        <span className="rbt-rating-icon-list">
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="rbt-review-inp">
                      <input
                        id="rbt-review-radio-2"
                        type="radio"
                        name="rbt-review-radio"
                      />
                      <label htmlFor="rbt-review-radio-2">
                        <span className="rbt-rating-icon-list">
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="rbt-review-inp">
                      <input
                        id="rbt-review-radio-3"
                        type="radio"
                        name="rbt-review-radio"
                      />
                      <label htmlFor="rbt-review-radio-3">
                        <span className="rbt-rating-icon-list">
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="rbt-review-inp">
                      <input
                        id="rbt-review-radio-4"
                        type="radio"
                        name="rbt-review-radio"
                      />
                      <label htmlFor="rbt-review-radio-4">
                        <span className="rbt-rating-icon-list">
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                        </span>
                      </label>
                    </li>
                    <li className="rbt-review-inp">
                      <input
                        id="rbt-review-radio-5"
                        type="radio"
                        name="rbt-review-radio"
                      />
                      <label htmlFor="rbt-review-radio-5">
                        <span className="rbt-rating-icon-list">
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                          <span>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </span>
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <label htmlFor="email">Your Review Title</label>
                  <input
                    className="rbt-contact-input-field"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <label htmlFor="message">Your review</label>
                  <textarea
                    className="rbt-contact-input-field"
                    name="message"
                    id="message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-md-end mt--8 rbt-gap--12 flex-wrap">
                <button
                  type="button"
                  className="rbt-btn rbt-btn-md rbt-btn-border"
                >
                  Upload Image
                </button>
                <button type="submit" className="rbt-btn rbt-btn-md">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
