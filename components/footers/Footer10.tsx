import Image from "next/image";
import Link from "next/link";
import {
  footerData,
  footerDataB2B,
  footerDataStores,
  socialLinks,
} from "../../data/footer";
import FooterNewsletterForm from "./FooterNewsletterForm";
export default function Footer10() {
  return (
    <footer className="rbt-footer rbt-footer-style-ten rbt-bg-color-gray-light">
      <div className="rbt-footer-top rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-watermark-text rbt-watermark-color-var-1 text-center">
                <span>Follow Us@Unimart</span>
              </div>
            </div>
          </div>
          <div className="row mt_dec--24">
            <div className="col-12">
              <hr className="rbt-separator m-0" />
            </div>
          </div>
          <div className="row row--16 justify-content-between pt--32 rbt-footer-nav-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
              <div className="footer-widget">
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
                <p className="description pr--52 pr_sm--0">
                  Unimart is a modern and user-friendly e-commerce platform
                  designed to make online shopping simple, secure, and
                  convenient.
                </p>
                <div className="footer-widget mt--24">
                  <h5 className="ft-title mb--0">Download App on Mobile:</h5>
                  <div className="rbt-app-store-area mt--16">
                    <ul className="rbt-app-store-list">
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
                <div className="footer-widget mt--40">
                  <ul className="ft-link">
                    <li>
                      <p>Subscribe and get discount 20% Off</p>
                    </li>
                  </ul>
                  <FooterNewsletterForm formClass="rbt-newsletter-form-one mt--24" />
                </div>
                <div className="footer-widget mt--40">
                  <ul className="ft-link">
                    <li>
                      <div className="rbt-quick-contact-box border-0 bg-transparent pl--0">
                        <a
                          href="tel:(500)80018588-5"
                          className="rbt-icon rbt-text-color-heading h2 mb--0 rbt-text-medium"
                        >
                          <i className="fa-regular fa-phone" />
                        </a>
                        <div className="rbt-quick-contact-info border-0 rbt-link-hover pl--0">
                          <p className="b1 mb--0 rbt-text-color-gray-500">
                            Need help? Call now!
                          </p>
                          <a
                            href="tel:(500)80018588-5"
                            className="rbt-text-color-heading rbt-text-bold rbt-link-hover"
                          >
                            (500) 8001 8588-5
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 col-12 mt--24">
              <div className="row row--16 mt_dec--24">
                {footerData.map((widget, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
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
                {footerDataB2B.map((widget, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
                  <div className="footer-widget rbt-link-hover">
                    <h5 className="ft-title">{footerDataStores.title}</h5>
                    <ul className="ft-link">
                      {footerDataStores.items.slice(0, 6).map((item, i) => (
                        <li key={i}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* Start Copyright Area  */}
      <div className="copyright-area copyright-style-1">
        <div className="container">
          <div className="row row--16 mt_dec--24 align-items-center justify-content-between">
            <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-12 col-12 mt--24">
              <div className="rbt-footer-social-area justify-content-center justify-content-lg-start d-flex flex-wrap rbt-gap--16">
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
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright {new Date().getFullYear()} ®
                <a
                  href="https://rainbowthemes.net/"
                  className="rbt-text-bold rbt-text-color-heading mr--4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unimart
                </a>
                Nextjs Template.
              </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mt--24">
              <ul className="payment-img-link justify-content-center justify-content-lg-start justify-content-xl-end">
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
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </footer>
  );
}
