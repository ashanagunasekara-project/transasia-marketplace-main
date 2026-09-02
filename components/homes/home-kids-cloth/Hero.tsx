import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-kids-hero-section-area">
      <div className="rbt-wider-container">
        <div className="container">
          <div className="rbt-product-banner rbt-product-banner-style-six">
            <div className="row row--12 mt_dec--24 align-items-end">
              <div className="col-12 col-md-6 col-lg-5 col-xl-6 mt--24">
                <div className="rbt-banner-content">
                  <div className="rbt-content-section">
                    <h4 className="rbt-banner-subtitle">
                      Exclusive Offer Going
                    </h4>
                    <h1 className="rbt-banner-title">
                      The Magic Happens! <br />
                      <span className="rbt-text-bold"> This is where</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7 col-xl-6 col-xxl-5 mt--24 ms-auto">
                <div className="rbt-banner-content">
                  <div className="rbt-content-section">
                    <p className="rbt-banner-description mb_sm--16">
                      We have been designing clothes for children between 0 and
                      12 years of age for more than 40 years. Our online fashion
                      store for the little ones has a range of {`children's`}
                      clothing made.
                    </p>
                    <div className="rbt-banner-btn-grp">
                      <Link href="/shop" className="rbt-btn rbt-bg-color-secondary">
                        <i className="fa-regular fa-cart-shopping mr--8" />
                        Shop for Baby
                      </Link>
                      <Link
                        href="/shop"
                        className="rbt-btn rbt-btn-border rbt-btn-border-black"
                      >
                        <i className="fa-regular fa-person-breastfeeding mr--8" />
                        Shop For Mom
                      </Link>
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
