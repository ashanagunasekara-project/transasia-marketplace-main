import { BadgeSatisfactionIcon } from '../../svg-icons';
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white rbt-hero-banner-classic rbt-hero-bg-gradient-green rbt-banner-has-bg-grid-two">
      <div className="rbt-banner-wrapper">
        <div className="container">
          {/* Start Product Banner Area */}
          <div className="row row--12">
            <div className="col-xl-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
              <div className="rbt-hero-banner-content text-center rbt-content-has-shape mt--60 mb--60 mb_sm--0 mb_md--0 mb_lg--0">
                <h4 className="subtitle">Bring Energy in your Life....</h4>
                <h1 className="title">
                  Culture is <br />
                  Coffee-Driven
                </h1>
                <ul className="rbt-desc-list mt--16 justify-content-center">
                  <li>Taste the Energy</li>
                  <li>Crafted for You</li>
                  <li>Sip the Magic</li>
                </ul>
                <Link
                  href={`/shop`}
                  className="rbt-btn rbt-bg-color-secondary mt--32 mt_sm--16"
                >
                  Shop Collection
                </Link>
                <div className="rbt-content-shape rbt-content-shape-star">
                  <span className="text">End of Summer Sale!</span>
                  <span className="rbt-star-shape">
                    <BadgeSatisfactionIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
              <div className="rbt-hero-banner-img">
                <Image
                  alt="Hero Image"
                  src="/assets/images/product-banner/coffee-hero-a-01.webp"
                  width={1501}
                  height={1406}
                  priority
                />
                <div className="rbt-hero-banner-shape">
                  <Image
                    alt="Hero Background Shape Image"
                    src="/assets/images/product-banner/coffee-hero-shape-a-01.webp"
                    width={1697}
                    height={1406}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Product Banner Area */}
        </div>
      </div>
    </div>
  );
}
