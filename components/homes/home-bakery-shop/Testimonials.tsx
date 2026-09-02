import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="rbt-component-area rbt-product-reviews-area rbt-section-gapTop">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-bg-color-chocolate mt--68 mt_sm--20 mt_md--20 mt_lg--20 rbt-rounded--24">
          <div className="container">
            <div className="rbt-review-card-var-2 p_sm--20">
              <div className="row">
                <div className="col-12 col-md-7">
                  <div className="rbt-review-card-content">
                    <div className="rbt-review-text">
                      Sometimes when feed my family Unimart Bakery Buy it chokes
                      me up. My Bobby of blessed memory would serve it to us
                      from the freezer with a cold glass of milk. I always loved
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
                    <h3 className="rbt-client">Andrew Sermons John</h3>
                  </div>
                </div>
                <div className="col-12 col-md-5">
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
  );
}
