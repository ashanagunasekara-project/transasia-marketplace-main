import Image from "next/image";
import Link from "next/link";
import { footerData, socialLinks } from "../../data/footer";
import FooterNewsletterForm from "./FooterNewsletterForm";

export default function Footer2() {
  return (
    <footer className="rbt-footer rbt-footer-dark rbt-footer-style-two rbt-section-gap2-half-Top rbt-bg-color-gray-black">
      <div className="rbt-footer-top">
        <div className="container">
          <div className="rbt-newsletter-area style--one pb--56">
            <div className="row align-items-center">
              <div className="col-md-5 col-lg-6 col-xl-7 justify-content-center justify-content-md-start d-flex">
                <div className="rbt-newsletter-content-wrapper rbt-gap--16">
                  <div className="content">
                    <h2 className="title">
                      Subscribe our <span>newsletter</span>
                    </h2>
                    <p className="sub-title m-0 p-0 border-0">
                      Subscribe and get discount 20% Off
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-6 col-xl-5 mt_sm--12 justify-content-start d-flex">
                <div className="w-100">
                  <label className="h5 rbt-text-color-gray-200 mb--12">
                    Sign Up For Our Newsletter
                  </label>
                  <FooterNewsletterForm
                    formClass="rbt-newsletter-form-one rbt-max-w-full w-100"
                    inputClass="rbt-bg-color-white-opacity"
                    btnClass="rbt-btn rbt-btn-md radius-round-6 rbt-bg-color-secondary"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="rbt-separator-mid">
            <hr className="rbt-separator separator-height-1 rbt-separator-gray700 mb--36" />
          </div>
          <div className="row justify-content-between row--12 mt_dec--24">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
              <div className="footer-widget">
                <div className="logo mb--16">
                  <Link href={`/`}>
                    <Image
                      alt="Unimart Logo"
                      src="/assets/images/logo/logo-blackbg.webp"
                      width={1487}
                      height={334}
                    />
                  </Link>
                </div>
                <p className="description rbt-text-color-gray-300 pr--68 pr_sm--0">
                  Worldwide electronics store since 1978. We sell over 1000+
                  branded products on our web-site.
                </p>
                <div className="rbt-footer-social-area mt--24">
                  <p className="title mb--16">Follow Us :</p>
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
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
              >
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title mb--16">{widget.title}</h5>
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
            <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
              <div className="footer-widget">
                <h5 className="ft-title rbt-text-color-white">
                  Download App on Mobile:
                </h5>
                <ul className="ft-link">
                  <li>
                    <p className="rbt-text-color-gray-300">
                      15% discount on your first purchase
                    </p>
                  </li>
                </ul>
                <div className="rbt-app-store-area mt--24">
                  <ul className="rbt-app-store-list">
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          alt="App Store"
                          className="app-store-badge"
                          src="/assets/images/footer/apple-store-white.webp"
                          width={123}
                          height={40}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          alt="App Store"
                          className="app-store-badge"
                          src="/assets/images/footer/play-store-white.webp"
                          width={123}
                          height={40}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid rbt-section-gap3Top">
        <div className="container">
          <hr className="rbt-separator separator-height-1 m-0 rbt-separator-gray700" />
        </div>
      </div>
      <div className="copyright-area copyright-style-1">
        <div className="container">
          <div className="row row--12 g-3 align-items-center justify-content-between">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover rbt-text-color-brand-100 text-center text-lg-start">
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
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12">
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
            <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-12">
              <ul className="payment-img-link justify-content-lg-center justify-content-xl-end">
                <li>
                  <a href="#!" target="_blank" rel="noopener noreferrer">
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
      </div>
    </footer>
  );
}
