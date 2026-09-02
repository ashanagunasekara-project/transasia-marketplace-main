import Countdown from "@/components/common/ui/Countdown";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-countdown-area rbt-bg-color-white rbt-section-gap3">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-countdown-section rbt-countdown-section-style-one rbt-scroll-trigger zoom_in animation-order-1">
          <div className="row justify-content-end">
            <div className="col-xl-4 col-md-5 col-12">
              <div className="rbt-countdown-content rbt-countdown-content-right-position">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                  Starting From
                  <span className="rbt-color-primary ml--4">11th December</span>
                </p>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Up to 40% Off</span> On All
                  Brands
                </h2>
                <Link
                  className="rbt-btn rbt-btn-sm rbt-scroll-trigger fade_in animation-order-3"
                  href="/shop"
                >
                  Know More
                </Link>
                <div className="rbt-countdown-sections mt--32">
                  <div className="rbt-countdown-one bg-variation-black cd-border-style">
                    <Countdown />
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
