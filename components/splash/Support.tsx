import Image from "next/image";
export default function Support() {
  return (
    <div className="rbt-support-area rbt-splash-common-sec-bg-2 position-relative">
      <div className="container">
        <div className="row row--12 mt_dec--24 pb--80 pt--80 rbt-splash-scroll flex-nowrap">
          {/* Start Splash Service  */}
          <div className="col-10 col-md-5 col-lg-4 mt--24">
            <div className="rbt-splash-service rbt-scroll-trigger zoom_in animation-order-1">
              <div className="inner">
                <div className="icon">
                  <Image
                    alt="Icon Images"
                    src="/assets/images/splash/icons/icon18.png"
                    width={81}
                    height={81}
                  />
                </div>
                <div className="content">
                  <h4 className="rbt-title mb--24">
                    <a
                      href="https://nextjs.getunimart.com/docs"
                      target="_blank"
                    >
                      Online Documentation
                    </a>
                  </h4>
                  <hr className="rbt-separator mb--24 rbt-bg-color-gray-light" />
                  <p className="rbt-description">
                    Our documentation is highly comprehensive, providing
                    detailed and user-friendly explanations for each themes
                    option.
                  </p>
                  <a
                    href="https://nextjs.getunimart.com/docs"
                    className="rbt-btn splash-btn icon-reverse-left"
                    target="_blank"
                  >
                    <span className="icon-left">
                      <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                    </span>
                    <span>View Documentation</span>
                    <span className="icon-right">
                      <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Splash Service  */}
          {/* Start Splash Service  */}
          <div className="col-10 col-md-5 col-lg-4 mt--24">
            <div className="rbt-splash-service rbt-scroll-trigger zoom_in animation-order-2">
              <div className="inner">
                <div className="icon">
                  <Image
                    alt="Icon Images"
                    src="/assets/images/splash/icons/icon19.png"
                    width={81}
                    height={81}
                  />
                </div>
                <div className="content">
                  <h4 className="rbt-title mb--24">
                    <a href="https://support.rainbowit.net/support/login">
                      Dedicated Support
                    </a>
                  </h4>
                  <hr className="rbt-separator mb--24 rbt-bg-color-gray-light" />
                  <p className="rbt-description">
                    Don&apos;t hesitate to initiate a support ticket to notify
                    us of any problems or inquire about any questions you might
                    possess.
                  </p>
                  <a
                    href="https://support.rainbowit.net/support/login"
                    className="rbt-btn splash-btn icon-reverse-left"
                    target="_blank"
                  >
                    <span className="icon-left">
                      <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                    </span>
                    <span>Get Support</span>
                    <span className="icon-right">
                      <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Splash Service  */}
          {/* Start Splash Service  */}
          <div className="col-10 col-md-5 col-lg-4 mt--24">
            <div className="rbt-splash-service rbt-bg-color-primary position-relative rbt-scroll-trigger zoom_in animation-order-3">
              <div className="inner">
                <div className="service-badge">
                  <Image
                    alt="Badge"
                    src="/assets/images/splash/icons/badge-bg.png"
                    width={159}
                    height={24}
                  />
                  <span className="badge-text">RECOMENDED</span>
                </div>
                <div className="icon">
                  <Image
                    alt="Icon Images"
                    src="/assets/images/splash/icons/icon20.png"
                    width={81}
                    height={81}
                  />
                </div>
                <div className="content">
                  <h4 className="rbt-title mb--24 rbt-text-color-white">
                    Hire Developer &amp; Designer
                  </h4>
                  <hr className="rbt-separator mb--24 rbt-bg-color-brand-700" />
                  <p className="rbt-description rbt-text-color-gray-100">
                    Just give us the details about the project our developer
                    &amp; designer will get it done faster, Better, and could
                    possibly imagine.
                  </p>
                  <a
                    href="https://rainbowthemes.net/contact/"
                    className="rbt-btn splash-btn icon-reverse-left rbt-bg-color-white rbt-text-color-primary"
                    target="_blank"
                  >
                    <span className="icon-left">
                      <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                    </span>
                    <span>Hire Experts</span>
                    <span className="icon-right">
                      <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Splash Service  */}
        </div>
      </div>
    </div>
  );
}
