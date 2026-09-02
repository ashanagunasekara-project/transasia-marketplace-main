import Countdown from "@/components/common/ui/Countdown";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-countdown-area rbt-bg-color-white rbt-section-gapTop">
      <div className="container-fluid p-0">
        <div className="rbt-countdown-section rbt-countdown-section-style-two rbt-scroll-trigger zoom_in animation-order-1 bg-image rbt-count-down-bg-cake-01 rbt-rounded--0">
          <div className="row row--0 justify-content-center">
            <div className="col-xl-12 col-md-12 col-12">
              <div className="rbt-countdown-content rbt-countdown-content-center-position align-items-center rbt-countdown-content-var-two">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1 rbt-text-color-white">
                  Competition
                </p>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-bold rbt-text-gradient-golden">
                  <span className="rbt-bold--text">
                    YOUR PASS TO THE <br />
                    CHAMPIONSHIP
                  </span>
                </h2>
                <div className="rbt-countdown-sections d-flex mt--32 mt_sm--4">
                  <div className="rbt-countdown-one cd-border-style rbt-countdown-lg bg-variation-purple">
                    <Countdown style={2} />
                  </div>
                </div>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3 mt--40 rbt-bg-color-secondary mt_sm--16"
                  href={`/shop-by-categories`}
                >
                  ENTER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
