import { BadgeQualityIcon } from '../../svg-icons';
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-product-banner-var-classic rbt-bg-color-gray-100">
      <div className="container-fluid">
        {/* Start Product Banner Area */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="rbt-hero-banner-content text-center rbt-content-has-shape">
              <h4 className="subtitle rbt-font-secondary">
                Bring Energy in your Life....
              </h4>
              <h1 className="title">Flat 30% Off</h1>
              <ul className="rbt-desc-list mt--16 justify-content-center">
                <li>
                  We Keep <br />
                  Growing
                </li>
                <li>
                  Satisfaction <br />
                  Guarantee
                </li>
                <li>
                  Packed with <br />
                  Care
                </li>
              </ul>
              <Link
                href="/shop"
                className="rbt-btn rbt-bg-color-secondary mt--32 mt_sm--16"
              >
                Shop Collection
              </Link>
              <div className="rbt-content-shape rbt-content-shape-star">
                <span className="text">End of Summer Sale!</span>
                <span className="rbt-star-shape">
                  <BadgeQualityIcon />
                </span>
              </div>
            </div>
            <Image
              className="rbt-hero-bg-image"
              alt="eCommerce Hero Slider"
              src="/assets/images/hero-slider-banner/slider-plants-01.webp"
              width={3840}
              height={1598}
              priority
            />
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
