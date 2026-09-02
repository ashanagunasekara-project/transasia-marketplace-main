import Image from "next/image";
export default function Features() {
  return (
    <div className="rbt-component-area rbt-timeline-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0 text-center">
              <span className="rbt-card-subtitle h5 mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Featured Packaging’s
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Packaging that </span>New brand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="rbt-timeline rbt-timeline-style-one">
              <div className="rbt-timeline-single-element rbt-scroll-trigger fade_in animation-order-1">
                <div className="rbt-timeline-image rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Timeline Image"
                    src="/assets/images/timeline-image/timeline-img-01.webp"
                    width={1120}
                    height={660}
                  />
                </div>
                <div className="rbt-timeline-content">
                  <span className="rbt-timeline-count-digit">01</span>
                  <div className="rbt-timeline-info">
                    <h3 className="rbt-timeline-title">
                      Choose your favorite logo design
                    </h3>
                    <ul className="rbt-timeline-info-list">
                      <li>Instantly generate 100s of custom logo mockups</li>
                      <li>Change colors, symbols, sizing, and more</li>
                      <li>
                        High-res file types include SVG, PNG, EPS &amp; PDF
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rbt-timeline-single-element rbt-scroll-trigger fade_in animation-order-2">
                <div className="rbt-timeline-content">
                  <span className="rbt-timeline-count-digit">02</span>
                  <div className="rbt-timeline-info">
                    <h3 className="rbt-timeline-title">
                      Customize your free logo
                    </h3>
                    <ul className="rbt-timeline-info-list">
                      <li>Instantly generate 100s of custom logo mockups</li>
                      <li>Change colors, symbols, sizing, and more</li>
                      <li>
                        High-res file types include SVG, PNG, EPS &amp; PDF
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rbt-timeline-image rbt-scroll-trigger zoom_in animation-order-2">
                  <Image
                    alt="Ecommerce Timeline Image"
                    src="/assets/images/timeline-image/timeline-img-02.webp"
                    width={1120}
                    height={660}
                  />
                </div>
              </div>
              <div className="rbt-timeline-single-element rbt-scroll-trigger fade_in animation-order-3">
                <div className="rbt-timeline-image rbt-scroll-trigger zoom_in animation-order-3">
                  <Image
                    alt="Ecommerce Timeline Image"
                    src="/assets/images/timeline-image/timeline-img-03.webp"
                    width={1120}
                    height={660}
                  />
                </div>
                <div className="rbt-timeline-content">
                  <span className="rbt-timeline-count-digit">03</span>
                  <div className="rbt-timeline-info">
                    <h3 className="rbt-timeline-title">
                      Print your logo
                    </h3>
                    <ul className="rbt-timeline-info-list">
                      <li>Instantly generate 100s of custom logo mockups</li>
                      <li>Change colors, symbols, sizing, and more</li>
                      <li>
                        High-res file types include SVG, PNG, EPS &amp; PDF
                      </li>
                    </ul>
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
