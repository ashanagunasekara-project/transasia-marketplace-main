import Newsletter from "../common/other-components/Newsletter";
import Image from "next/image";
import Link from "next/link";
import { footerData, socialLinks } from "../../data/footer";

export default function Footer1() {
  return (
    <>
      <Newsletter />
      <footer className="rbt-footer rbt-footer-style-one rbt-bg-color-gray-light">
        <div className="rbt-footer-top rbt-section-gap2Top">
          <div className="container">
            <div className="row justify-content-between row--12 mt_dec--24 pb--40 pb_sm--24">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--24 border-end rbt-border-color-border-2">
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
                  <p className="description pr--140 pr_sm--0">
                    Worldwide electronics store since 1978. We sell over 1000+
                    branded products on our web-site.
                  </p>
                  <div className="rbt-quick-contact-info">
                    <p className="b2 title">
                      Free from fixed and mobile phones.
                    </p>
                    <a
                      className="contact-link has-lg-fsize"
                      href="tel:0800300353"
                    >
                      0 800 300-353
                    </a>
                  </div>
                  <div className="rbt-quick-contact-info">
                    <p className="b2 title">Call Center hours</p>
                    <p className="text-inf">Mon-Sun 09:00-19:00</p>
                  </div>
                  <div className="rbt-quick-contact-info d-flex rbt-gap--4 align-items-center">
                    <p className="b2 title mb--0">Email :</p>
                    <a
                      className="contact-link"
                      href="mailto:someone@example.com"
                    >
                      info@rbtshop.com
                    </a>
                  </div>
                </div>
              </div>
              {footerData.map((widget, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24"
                >
                  <div className="footer-widget rbt-link-hover mt_sm--16">
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
            </div>
            <div className="row pb--40 pb_sm--24">
              <div className="col-12">
                <Link href={`/shop`}>
                  <Image
                    alt="Banner Image"
                    src="/assets/images/footer/banner-image1.png"
                    width={1320}
                    height={140}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row row--12 align-items-center mt_dec--24">
              <div className="col-lg-6 mt--24">
                <div className="rbt-footer-social-area justify-content-center justify-content-lg-start">
                  <p className="title">Follow Us :</p>
                  <ul className="social-icon social-icon-md rbt-social-default with-bg-primary justify-content-start justify-content-lg-end">
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
              <div className="col-lg-6 mt--20">
                <div className="rbt-app-store-area justify-content-center justify-content-lg-end">
                  <p className="title">Download App :</p>
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
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright-style-1 pb--32 pt--32 rbt-bg-color-white">
          <div className="container">
            <div className="row align-items-center justify-content-between row--12 mt_dec--24">
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
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
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
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
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt--24 mt_sm--16 mt_md--20 mt_lg--20">
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
      </footer>{" "}
    </>
  );
}
