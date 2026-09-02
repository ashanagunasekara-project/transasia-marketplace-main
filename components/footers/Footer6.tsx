import Image from "next/image";
import Link from "next/link";
import InfoSection3 from "./footerSections/InfoSection3";
import { footerData, footerDataStores, socialLinks } from "../../data/footer";
import FooterNewsletterForm from "./FooterNewsletterForm";

export default function Footer6() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2 rbt-bg-color-white">
        <div className="container">
          <InfoSection3 />
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-style-six rbt-bg-color-primary rbt-section-gap3 pb--24">
        <div className="p-0 rbt-footer-top">
          <div className="container">
            {/* Start WaterMark */}
            <div className="row">
              <div className="col-12">
                <div className="rbt-watermark-text rbt-watermark-lg">
                  <span>Buy@Unimart</span>
                </div>
              </div>
            </div>
            {/* End WaterMark */}
            <div className="rbt-separator-mid mt--48 pb--24 mt_sm--16 ptb_sm--8 mt_dec--24">
              <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
            </div>
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Our Social Links:</h5>
                  <ul className="social-icon social-icon-sm rbt-social-default with-bg-white justify-content-start justify-content-lg-end">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          className="rbt-text-color-white"
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
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Shipping System:</h5>
                  <ul className="payment-img-link justify-content-start">
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-01.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-02.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-03.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-04.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          alt="Payment Brand Image"
                          src="/assets/images/payment-brand/shipping-image-05.webp"
                          width={82}
                          height={48}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt--24">
                <div className="footer-widget d-flex flex-column align-items-start rbt-gap--16 justify-content-lg-end">
                  <h5 className="ft-title mb--0">Payment System:</h5>
                  <ul className="payment-img-link justify-content-start">
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
              </div>
            </div>
            <div className="rbt-separator-mid ptb--32">
              <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
            </div>
            <div className="row row--12 mt_dec--24 justify-content-between">
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
              <div className="col-xl-4 col-lg-4 col-md-7 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Download App on Mobile:</h5>
                  <div className="rbt-app-store-area mt--24">
                    <ul className="rbt-app-store-list has-larger-img">
                      <li>
                        <a href="#">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/apple-store-logo.webp"
                            width={249}
                            height={80}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
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
                </div>
                <div className="footer-widget mt--32">
                  <h5 className="ft-title mb--8">Subscribe our newsletter</h5>
                  <ul className="ft-link">
                    <li>
                      <p>Subscribe and get discount 20% Off</p>
                    </li>
                  </ul>
                  <FooterNewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid pt--48 pb--24">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 p-0">
          <div className="container">
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-md-6 col-12 mt--24 d-flex justify-content-center justify-content-md-start">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright {new Date().getFullYear()} ®
                  <a href="https://rainbowthemes.net/" target="_blank"
                  rel="noopener noreferrer" className="mr--4">Unimart</a> Nextjs
                  Template.
                </p>
              </div>
              <div className="col-md-6 col-12 mt--24 mt_sm--0">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-xl-end mt_sm--12 mt_md--0 mt_lg--0">
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
