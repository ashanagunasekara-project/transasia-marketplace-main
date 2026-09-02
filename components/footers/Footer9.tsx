import Image from "next/image";
import Link from "next/link";
import InfoSection5 from "./footerSections/InfoSection5";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { footerData } from "../../data/footer";

export default function Footer9({
  footerImage = "/assets/images/footer/image2.webp",
}) {
  return (
    <>
      <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2Bottom rbt-bg-color-white @@has-not-addition-info">
        <div className="container">
          <div className="row row--12">
            <div className="col-md-12">
              <InfoSection5 />
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-dark rbt-footer-style-nine rbt-section-gap2Top rbt-bg-color-gray-black position-relative">
        <div className="container position-relative">
          <div className="rbt-footer-content">
            <div className="row row--12 mt_dec--24 justify-content-between align-items-center">
              <div className="col-12 mt--24">
                <div className="footer-widget">
                  <div className="rbt-breadcrumb-inner text-left">
                    <ul className="rbt-breadcrumb-page-list justify-content-start mt--0">
                      <li className="rbt-breadcrumb-item">
                        <Link href={`/`}>Home</Link>
                      </li>
                      <li>
                        <div className="icon-right">
                          <i className="fa-solid fa-chevron-right" />
                        </div>
                      </li>
                      <li className="rbt-breadcrumb-item">
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <div className="icon-right">
                          <i className="fa-solid fa-chevron-right" />
                        </div>
                      </li>
                      <li className="rbt-breadcrumb-item active">Shop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rbt-separator-mid">
              <div className="col-12">
                <hr className="rbt-separator separator-height-1 mt--32 mb--32 rbt-separator-gray700" />
              </div>
            </div>
            <div className="row row--12 mt_dec--24 justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Contact Us</h5>
                  <ul className="ft-link">
                    <li>
                      <a
                        href="tel:+1234567890"
                        className="rbt-quick-contact-box bg-transparent"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-phone" />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-300">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                            +1234 567 890
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:into@domain.com"
                        className="rbt-quick-contact-box bg-transparent"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-envelope" />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-300">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                            into@domain.com
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <ModalTriggerButton
                        as="div"
                        openModalName="findStoreModal"
                        className="rbt-quick-contact-box bg-transparent"
                      >
                        <span className="rbt-icon rbt-text-medium">
                          <i className="fa-regular fa-location-dot " />
                        </span>
                        <div className="rbt-quick-contact-info rbt-link-hover">
                          <p className="b4 mb--4 rbt-text-color-gray-300">
                            9AM - 8PM
                          </p>
                          <span className="rbt-text-color-brand-100 rbt-text-bold rbt-link-hover">
                            Find Our Stores
                          </span>
                        </div>
                      </ModalTriggerButton>
                    </li>
                  </ul>
                </div>
              </div>
              {footerData.slice(0, 2).map((widget, index) => (
                <div
                  key={index}
                  className={`col-xl-${index === 0 ? "2" : "4"} col-lg-${index === 0 ? "3" : "4"} col-md-6 col-sm-6 col-12 mt--24`}
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
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt--24" />
            </div>
            <div className="row">
              <div className="col-12">
                <hr className="rbt-separator separator-height-1 mt--56 mb--0 rbt-separator-gray700" />
              </div>
            </div>
            {/* Start Copyright Area  */}
            <div className="copyright-area copyright-style-1 ptb--24">
              <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-12 mt--24">
                  <p className="rbt-link-hover rbt-text-color-gray-300 text-center text-lg-start">
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
                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
                  <ul className="payment-img-link">
                    <li>
                      <a href="#!">
                        <Image
                          alt="eCommerce Brand Image"
                          src="/assets/images/payment-brand/image-01.webp"
                          width={812}
                          height={64}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-12 mt--24">
                  <ul className="copyright-link rbt-link-hover variation-2 justify-content-center justify-content-lg-start justify-content-xl-end">
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
            {/* End Copyright Area  */}
          </div>
          <div className="rbt-footer-image-wrapper">
            <Image alt="Image" src={footerImage} width={1444} height={1086} />
          </div>
        </div>
        <div className="rbt-footer-overlay" />
      </footer>
    </>
  );
}
