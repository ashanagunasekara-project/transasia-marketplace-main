import Image from "next/image";
function CategoriesStyleButtonCircle() {
  return (
    <>
      {/* Start Component Area */}
      <div
        id="rbt-category-block-03"
        className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-white"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Categories Style
                  <span className="rbt-bold--text ml--4">Button Circle</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--24 mt_dec--32 justify-content-md-center rbt-mobile-row">
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt--32">
              <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="rbt-image-portion">
                    <a href="#">
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-circle-md-01.webp"
                        width={260}
                        height={260}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a
                      className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      href="#"
                    >
                      <span className="btn-text">Men Sunglasses</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt--32">
              <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-2">
                <div className="inner">
                  <div className="rbt-image-portion">
                    <a href="#">
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-2"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-circle-md-02.webp"
                        width={260}
                        height={260}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a
                      className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      href="#"
                    >
                      <span className="btn-text">Women Sunglasses</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt--32">
              <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-3">
                <div className="inner">
                  <div className="rbt-image-portion">
                    <a href="#">
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-3"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-circle-md-03.webp"
                        width={260}
                        height={260}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <a
                      className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      href="#"
                    >
                      <span className="btn-text">Kids Sunglasses</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default CategoriesStyleButtonCircle;
