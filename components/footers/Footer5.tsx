import Image from "next/image";
import Link from "next/link";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { footerData, footerDataStores, socialLinks } from "../../data/footer";

export default function Footer5() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-categories-scroll-area">
        <div className="wrapper">
          <div className="rbt-scroll-animation-container">
            <div className="rbt-scroll-animation-wrapper rbt-no-overlay rbt-bg-color-primary">
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
      {/* Start Footer aera */}
      <footer className="rbt-footer rbt-footer-style-five rbt-bg-color-gray-light">
        <div className="rbt-footer-top rbt-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rbt-separator-mid pb--40 pb_sm--16 pb_md--24">
                  <hr className="rbt-separator m-0 rbt-separator-gray100" />
                </div>
              </div>
            </div>
            <div className="row justify-content-between row--12 mt_dec--24">
              {footerData.map((widget, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24"
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
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">{footerDataStores.title}</h5>
                  <ul className="ft-link">
                    {footerDataStores.items.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Contact Us</h5>
                  <ul className="ft-link">
                    <li>
                      <a
                        href="tel:+1234567890"
                        className="rbt-quick-contact-box"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-phone" />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-500">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-primary rbt-text-bold rbt-link-hover">
                            +1234 567 890
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:into@domain.com"
                        className="rbt-quick-contact-box"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-envelope" />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-500">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-primary rbt-text-bold rbt-link-hover">
                            into@domain.com
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <ModalTriggerButton
                        openModalName="findStoreModal"
                        className="rbt-quick-contact-box"
                        as="div"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-location-dot" />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-500">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-primary rbt-text-bold rbt-link-hover">
                            Find Our Stores
                          </span>
                        </div>
                      </ModalTriggerButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="rbt-separator-mid pt--56 pb--40 pt_sm--16 pb_sm--12 pt_md--32 pb_md--24">
                  <hr className="rbt-separator m-0 rbt-separator-gray100" />
                </div>
              </div>
            </div>
            <div className="row mb--24 mt_dec--12">
              <div className="col-12 col-md-6 mt--12">
                <p className="rbt-text-bold rbt-text-color-heading">
                  Your Can Pay With :
                </p>
              </div>
              <div className="col-12 col-md-6 mt--12">
                <div className="rbt-footer-social-area d-flex rbt-gap--16 align-items-center justify-content-start justify-content-md-end">
                  <p className="title mb--0">Follow Us :</p>
                  <ul className="rbt-social-icon-list">
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
            <div className="row pb--40 pb_md--16 pb_sm--16">
              <div className="col-12">
                <Image
                  alt="Banner Image"
                  src="/assets/images/footer/banner-image2.png"
                  width={1320}
                  height={162}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-separator-gray100" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1">
          <div className="container">
            <div className="row row--12 align-items-center justify-content-between mt_dec--24">
              <div className="col-xl-4 col-lg-2 col-md-12 col-12 mt--24">
                <div className="logo mx-auto mx-xl-0">
                  <Link href={`/`}>
                    <Image
                      alt="Unimart Logo"
                      src="/assets/images/logo/logo.webp"
                      width={1487}
                      height={334}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright {new Date().getFullYear()} ®
                  <a
                    className="rbt-text-semi-bold rbt-text-color-heading mr--4"
                    href="https://rainbowthemes.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unimart
                  </a>
                  Nextjs Template.
                </p>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12 col-12 mt--24 mt_sm--12 mt_md--12">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-xl-end">
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
        {/* End Copyright Area  */}
      </footer>
    </>
  );
}
