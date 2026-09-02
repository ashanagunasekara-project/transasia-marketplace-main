import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="rbt-component-area rbt-product-reviews-area rbt-section-gapTop">
      <div className="container">
        <div className="rbt-bg-color-gray-light p--28 rbt-rounded--16">
          <div className="rbt-review-card-var-2">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="rbt-review-card-content">
                  <div className="rbt-review-text rbt-text-color-gray-600">
                    Sometimes when feed my family Unimart Bakery Buy it chokes
                    me up. My Bobby of blessed memory would serve it to us from
                    the freezer with a cold glass of milk. I always loved
                    visiting. #unimartbakeryalways
                  </div>
                  <div className="rbt-rating">
                    <ul className="rbt-rating-icon-list">
                      <li>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                    </ul>
                  </div>
                  <h3 className="rbt-client rbt-text-color-gray-700">
                    Andrew Sermons John
                  </h3>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="rbt-review-card-media">
                  <figure>
                    <Image
                      alt="Product Image"
                      src="/assets/images/product-img/accessories/product-img-laundry-05.webp"
                      width={1122}
                      height={924}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
