import Image from "next/image";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--56 mb_sm--32 align-items-center">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                The Biggest View!
              </a>
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-1 rbt-text-capitalize">
                <span className="rbt-bold--text">
                  Three protocols, thousands <br />
                  of devices powerful smart gateway
                </span>
              </h2>
              <p className="description rbt-scroll-trigger fade_in animation-order-2">
                Flip all day, and then some more with the largest battery and
                fastest charging on a Flip phone in the segment.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <figure>
              <Image
                className="rbt-rounded--8"
                alt="Banner Image"
                src="/assets/images/hero-slider-banner/smart-device-a-02.webp"
                width={2640}
                height={1322}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
