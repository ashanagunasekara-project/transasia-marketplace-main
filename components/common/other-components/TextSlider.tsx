export default function TextSlider({
  parentClass = "rbt-component-area rbt-categories-scroll-area rbt-bg-color-white", bgClass
}: { parentClass?: string; bgClass?: string }) {
  return (
    <div className={parentClass}>
      <div className="wrapper">
        <div className="rbt-scroll-animation-container">
          <div className={`rbt-scroll-animation-wrapper rbt-no-overlay ${bgClass}`}>
            <div className="rbt-scroll-animation rbt-scroll-right-left">
              {/* Start Single Testimonial  */}
              <div className="rbt-single-column-100">
                <div className="rbt-category-list">
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                  <a href="#">
                    <span className="rbt-category-icon rbt-offer-icon-circle" />
                    UNIMART - 10% OFF ON YOUR FIRST ORDER
                  </a>
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
