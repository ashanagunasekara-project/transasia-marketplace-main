import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "../common/select/LanguageSelect";
import CurrencySelect from "../common/select/CurrencySelect";
import InfoSection2 from "./footerSections/InfoSection2";
import { footerData, socialLinks } from "../../data/footer";

export default function Footer4() {
  return (
    <>
      <div className="rbt-component-area rbt-collapsible-content-section rbt-bg-color-white">
        <div className="container">
          <div className="row row--12">
            <div className="col-md-12">
              <div className="rbt-collapsible-content-box rbt-bg-color-gray-light">
                <InfoSection2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      <div className="rbt-separator-mid">
        <div className="wrapper">
          <hr className="rbt-separator m-0 rbt-separator-gray100" />
        </div>
      </div>
      <div className="rbt-component-area rbt-quick-locat-link-area rbt-bg-color-white ptb--32">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="container-fluid">
            <div className="d-flex rbt-gap--16 align-items-center justify-content-between rbt-scrollable-content hide-scrollbar">
              <div className="rbt-quick-locat-link">
                <h6 className="rbt-quick-locat-link-title b1 mb--0">
                  <a className="d-flex align-items-center rbt-gap--8" href="#">
                    Broadway Store
                    <span className="rbt-quick-locat-link-title-arrow">
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </h6>
                <p className="rbt-quick-locat-link-desc">
                  1260 Broadway, San Francisco, CA 941
                </p>
              </div>
              <div className="rbt-quick-locat-link">
                <h6 className="rbt-quick-locat-link-title b1 mb--0">
                  <a className="d-flex align-items-center rbt-gap--8" href="#">
                    Valencia Store
                    <span className="rbt-quick-locat-link-title-arrow">
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </h6>
                <p className="rbt-quick-locat-link-desc">
                  1501 Valencia St, San Francisco, CA 94110|
                </p>
              </div>
              <div className="rbt-quick-locat-link">
                <h6 className="rbt-quick-locat-link-title b1 mb--0">
                  <a className="d-flex align-items-center rbt-gap--8" href="#">
                    Pennsylvania Store
                    <span className="rbt-quick-locat-link-title-arrow">
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </h6>
                <p className="rbt-quick-locat-link-desc">
                  3122 Pennsylvania WD, California Usa, TX 02398
                </p>
              </div>
              <div className="rbt-quick-locat-link">
                <h6 className="rbt-quick-locat-link-title b1 mb--0">
                  <a className="d-flex align-items-center rbt-gap--8" href="#">
                    Emeryville Store
                    <span className="rbt-quick-locat-link-title-arrow">
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </h6>
                <p className="rbt-quick-locat-link-desc">
                  1034 36th St, Emeryville, CA 94608
                </p>
              </div>
              <div className="rbt-quick-locat-link">
                <h6 className="rbt-quick-locat-link-title b1 mb--0">
                  <a className="d-flex align-items-center rbt-gap--8" href="#">
                    Alameda Store
                    <span className="rbt-quick-locat-link-title-arrow">
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </h6>
                <p className="rbt-quick-locat-link-desc">
                  1433 High St, Alameda, CA 94501
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-categories-scroll-area">
        <div className="wrapper">
          <div className="rbt-scroll-animation-container">
            <div className="rbt-scroll-animation-wrapper rbt-no-overlay rbt-bg-color-primary rbt-scroll-sm-size">
              <div className="rbt-scroll-animation rbt-scroll-right-left">
                {/* Start Single Testimonial  */}
                <div className="rbt-single-column-100">
                  <div className="rbt-category-list">
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                    <a href="#">
                      <span className="rbt-category-icon rbt-offer-icon-circle" />
                      UNIMART - 10% OFF ON YOUR FIRST ORDER
                    </a>
                  </div>
                </div>
                {/* End Single Testimonial  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-style-four has-footer-widget-border rbt-bg-color-gray-light">
        <div className="rbt-footer-top wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="container-fluid">
            <div className="row justify-content-between row--12 mt_dec--24">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget pl--0 border-0">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Unimart Logo"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <p className="description mt--24 rbt-less-wider-desc">
                    Worldwide electronics store since 1978. We sell over 1000+
                    branded products on our web-site.
                  </p>
                  <div className="rbt-footer-social-area justify-content-left justify-content-lg-start mt--24 d-flex rbt-gap--16 flex-column">
                    <p className="title mb--0">Follow Us :</p>
                    <ul className="rbt-social-icon-list mt--0">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={`fa-brands ${link.icon}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {footerData.map((widget, index) => (
                <div
                  key={index}
                  className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
                >
                  <div className="footer-widget rbt-link-hover">
                    <h5 className="ft-title">{widget.title}</h5>
                    <ul className="ft-link">
                      {widget.items.map((item, i) => (
                        <li key={i}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-12 mt--24">
                <div className="footer-widget footer-widget-text-right">
                  <h5 className="ft-title">Download App on Mobile:</h5>
                  <ul className="ft-link liststyle">
                    <li>
                      <p>15% discount on your first purchase</p>
                    </li>
                  </ul>
                  <div className="rbt-app-store-area mt--24">
                    <ul className="rbt-app-store-list">
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/apple-store-logo.webp"
                            width={249}
                            height={80}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/play-store-logo.webp"
                            width={271}
                            height={80}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-wrap rbt-gap--12 align-items-center mt--32">
                    <span className="rbt-text-bold rbt-text-color-heading rbt-text-uppercase">
                      Settings :
                    </span>

                    <CurrencySelect parentClass="rbt-footer-dropdown rbt-dropdown-menu rbt-dropdown-menu-elastic currency-menu pr--16 border-end" />

                    <LanguageSelect parentClass="rbt-footer-dropdown rbt-dropdown-menu rbt-dropdown-menu-elastic switcher-language" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="rbt-separator-mid">
        <hr className="rbt-separator m-0 rbt-separator-gray100" />
      </div>
      {/* Start Copyright Area  */}
      <div className="copyright-area copyright-style-1 rbt-bg-color-gray-light">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between mt_dec--24">
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24 mt_sm--12 mt_md--12 mt_lg--12">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright {new Date().getFullYear()} ®
                  <a
                    href="https://rainbowthemes.net/"
                    className="rbt-text-semi-bold mr--4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unimart
                  </a>
                  Nextjs Template.
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24 mt_sm--12 mt_md--12 mt_lg--12">
                <ul className="payment-img-link">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        alt="Payment Brand Image"
                        src="/assets/images/payment-brand/image-01.webp"
                        width={812}
                        height={64}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt--24 mt_sm--12 mt_md--12 mt_lg--12">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-start justify-content-xl-end">
                  <li>
                    <Link href={`/return-policy`}>Refund policy</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/terms-policy`}>Terms &amp; conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
