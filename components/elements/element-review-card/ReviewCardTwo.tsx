import Image from "next/image";
function ReviewCardTwo() {
  return (
    <>
      <div className="rbt-component-area rbt-product-reviews-area rbt-section-gap">
        <div className="rbt-wider-container rbt-bg-color-chocolate">
          <div className="container">
            <div className="row row--12">
              <div className="col-12">
                <div className="rbt-review-card-var-2">
                  <div className="row">
                    <div className="col-12 col-md-7 p-0">
                      <div className="rbt-review-card-content">
                        <div className="rbt-review-text">
                          Sometimes when feed my family Unimart Bakery Buy it
                          chokes me up. My Bobby of blessed memory would serve
                          it to us from the freezer with a cold glass of milk. I
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
                            src="/assets/images/product-img/foods/bakery-product-img-01.webp"
                            width={1374}
                            height={1144}
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
    </>
  );
}

export default ReviewCardTwo;
