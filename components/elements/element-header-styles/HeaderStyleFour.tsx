import Image from "next/image";
function HeaderStyleFour() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom rbt-header-group">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Header Style</span> Four
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="rbt-single-header">
            <Image
              alt="Element Image"
              src="/assets/images/splash/builder-element/header-4.webp"
              width={3840}
              height={530}
            />
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default HeaderStyleFour;
