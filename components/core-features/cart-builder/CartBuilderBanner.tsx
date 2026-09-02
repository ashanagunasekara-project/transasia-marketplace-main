import { CurvedArrowIcon } from '../../svg-icons';
import Image from "next/image";

function CartBuilderBanner() {
  return (
    <>
      <div className="rbt-builder-banner rbt-splash-banner-bg-var-2 rbt-splash-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center">
                <span className="subtitle">Powerful and flexible</span>
                <h1 className="rbt-title mb--24 rbt-text-capitalize">
                  <span className="rbt-overlay-text overlay-text-color-var-3">
                    eCommerce
                  </span>
                  <span className="rbt-bold--text">
                    Master Of Product Cart
                    <br />
                  </span>
                  <span className="rbt-title-sm-text">
                    With All Possible Optionality
                  </span>
                </h1>
                <p className="rbt-description">
                  Discover endless possibilities with the advanced Template
                  Options - Reimagined for Maximum Flexibility. Explore
                  cutting-edge design and an intuitive user interface.
                </p>
                <div className="section-indicator">
                  <span className="icon">
                    <CurvedArrowIcon />
                  </span>
                  <span className="indicator-text text-start">
                    Power Of Limitless features and <br /> endless
                    possibilities.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="rbt-splash-btn-circle rbt-scroll-down-btn">
            <Image
              className="rbt-animate-rotation-forward"
              alt="Text Image"
              src="/assets/images/splash/others/circle-btn-text.png"
              width={109}
              height={109}
            />
            <span className="circle-btn-center-icon">
              <Image
                alt="Icon"
                src="/assets/images/splash/icons/icon21.png"
                width={48}
                height={49}
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default CartBuilderBanner;
