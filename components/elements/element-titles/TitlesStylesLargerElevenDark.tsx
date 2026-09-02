import OdometerComponent from "@/components/common/ui/OdometerComponent";

function TitlesStylesLargerElevenDark() {
  return (
    <>
      <div className="rbt-component-area rbt-bg-color-black rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-exclusive-section-title text-center position-relative">
                <span className="rbt-overlay-counter">
                  <OdometerComponent className="odometer-auto-theme" max={20} />{" "}
                  <span className="counter-suffix">+</span>
                </span>
                <h2 className="rbt-title rbt-text-color-white mb--24">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Titles Styles larger
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    With Counter Up Section
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitlesStylesLargerElevenDark;
