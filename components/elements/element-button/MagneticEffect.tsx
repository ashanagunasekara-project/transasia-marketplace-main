"use client";
import MagneticButton from "@/components/common/ui/MagneticButton";

function MagneticEffect() {
  return (
    <>
      <div className="rbt-button-area rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Magnetic Effect
                </span>
                <h2 className="title">Round Variation with Magnetic Effect</h2>
              </div>
            </div>
          </div>
          <div className="row rbt-section-gap3Top">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <MagneticButton
                  href="#"
                  as="a"
                  className="rbt-btn rbt-magnetic-button rbt-btn-round"
                >
                  <i className="fa-solid fa-arrow-up-right" /> Button CTA
                </MagneticButton>
                <MagneticButton
                  href="#"
                  as="a"
                  className="rbt-btn rbt-magnetic-button rbt-btn-round rbt-btn-secondary"
                >
                  <i className="fa-solid fa-arrow-up-right" /> Button CTA
                </MagneticButton>
                <MagneticButton
                  href="#"
                  as="a"
                  className="rbt-btn rbt-magnetic-button rbt-btn-round rbt-btn-border"
                >
                  <i className="fa-solid fa-arrow-up-right" /> Button CTA
                </MagneticButton>
                <MagneticButton
                  href="#"
                  as="a"
                  className="rbt-btn rbt-magnetic-button rbt-btn-round rbt-btn-border color-two"
                >
                  <i className="fa-solid fa-arrow-up-right" /> Button CTA
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MagneticEffect;
