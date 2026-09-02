"use client";
import Countdown from "@/components/common/ui/Countdown";

function TitlesWithCountdownDark() {
  return (
    <>
      <div className="rbt-component-area rbt-bg-color-black rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--0 align-items-center">
                <span className="rbt-card-subtitle rbt-text-color-gray-300 rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Subtitle Text
                </span>
                <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Titles With</span> Countdown
                </h2>
                <p className="description rbt-text-color-gray-300 rbt-scroll-trigger fade_in animation-order-2">
                  Thoughtfully crafted looks with premium fabrics and tailored
                  finishing touches that feel polished in person and on camera.
                  Shop more.
                </p>
                <div className="rbt-countdown-sections">
                  <div className="rbt-countdown-one bg-variation-primary cd-border-style">
                    <Countdown />
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

export default TitlesWithCountdownDark;
