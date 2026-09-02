import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="rbt-component-area rbt-product-reviews-area rbt-section-gapTop">
      <div className="rbt-wider-container rbt-bg-color-primary mt--68 mt_sm--20 mt_md--20 mt_lg--20">
        <div className="container">
          <div className="row row--12">
            <div className="col-12">
              <div className="rbt-review-card-var-2">
                <div className="row">
                  <div className="col-12 col-md-7 p-0">
                    <div className="rbt-review-card-content">
                      <div className="rbt-review-text">
                        Sometimes when feed my family Unimart Bakery Buy it
                        chokes me up. My Bobby of blessed memory would serve it
                        to us from the freezer with a cold glass of milk. I
                        always loved visiting. #unimartbakeryalways
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
                      <h3 className="rbt-client">Andrew Sermons John</h3>
                    </div>
                  </div>
                  <div className="col-12 col-md-5 p-0">
                    <div className="rbt-review-card-media">
                      <figure>
                        <Image
                          alt="Product Image"
                          src="/assets/images/bg-shape/baby-feed-a-01.webp"
                          width={784}
                          height={972}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
