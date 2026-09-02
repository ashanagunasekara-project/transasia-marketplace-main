import Image from "next/image";
import Link from "next/link";
import { footerData, socialLinks } from "../../data/footer";
import FooterNewsletterForm from "./FooterNewsletterForm";

export default function Footer11({
  cosmeticBg,
  discountSlider,
}: {
  cosmeticBg?: string;
  discountSlider?: boolean;
}) {
  return (
    <>
      {discountSlider && (
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
      )}
      <footer className="rbt-footer rbt-footer-style-eleven rbt-bg-color-gray-light">
        <div className="p-0 rbt-footer-top pt--60">
          <div className="container">
            <div className="row row--12 mt_dec--24 justify-content-between align-items-center">
              <div className="col-xl-4 col-sm-6 col-12 mt--24">
                <div className="footer-widget border-end rbt-border-color-border">
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
                  <p className="description mt--24 pr--52 pr_sm--0">
                    Unimart is your one‑stop marketplace for curated
                    electronics, everyday essentials, and lifestyle
                    products—delivered fast with trusted service and great
                    prices.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="title mb--0">Our Social Links :</h5>
                  <ul className="social-icon social-icon-md rbt-social-default with-bg-primary justify-content-start mt--16">
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
              <div className="col-xl-4 col-sm-12 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="title mb--0">Newsletter Sign Up :</h5>
                  <FooterNewsletterForm
                    formClass="rbt-newsletter-form-one mt--16"
                    inputClass="rbt-bg-color-gray-100 rbt-text-color-gray-300"
                    iconClass="icon rbt-text-color-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="rbt-separator-mid pt--32 pb--40">
              <hr className="rbt-separator m-0 rbt-separator-gray100" />
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
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <a href="#!">
                    <Image
                      alt="Banner Image"
                      src={`${cosmeticBg ? cosmeticBg : "/assets/images/footer/banner-image3.webp"}`}
                      width={1072}
                      height={502}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid pt--40">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-separator-gray100" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 ptb--24">
          <div className="container">
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-12 mt--24">
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
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12 mt--24 mt_sm--12 mt_md--12 mt_lg--12">
                <ul className="payment-img-link justify-content-center justify-content-xl-end">
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
    </>
  );
}
