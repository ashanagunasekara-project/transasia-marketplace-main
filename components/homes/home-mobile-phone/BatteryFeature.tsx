import Image from "next/image";

export default function BatteryFeature() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-light-pink">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--40 mb_sm--24 align-items-center">
              <span className="rbt-card-subtitle rbt-text-color-black rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                All-Day FLIP!!
              </span>
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">
                  Largest Battery in <br />
                  This Mobile Segment
                </span>
              </h2>
              <p className="b1 rbt-text-color-black">
                Flip all day, and then some more with the largest battery and
                fastest <br />
                charging on a Flip phone in the segment.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <figure>
              <Image
                alt="Banner Image"
                src="/assets/images/about/about-mobile-b-01.webp"
                width={3840}
                height={1080}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
