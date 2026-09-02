"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InfoSection from "./footerSections/InfoSection";
import Image from "next/image";
import Link from "next/link";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { footerData, footerDataStores, socialLinks } from "../../data/footer";
const instaPosts = [
  "/assets/images/insta-posts/insta-post-a-07.webp",
  "/assets/images/insta-posts/insta-post-a-08.webp",
  "/assets/images/insta-posts/insta-post-a-09.webp",
  "/assets/images/insta-posts/insta-post-a-10.webp",
  "/assets/images/insta-posts/insta-post-a-11.webp",
  "/assets/images/insta-posts/insta-post-a-12.webp",
  "/assets/images/insta-posts/insta-post-a-07.webp",
  "/assets/images/insta-posts/insta-post-a-08.webp",
  "/assets/images/insta-posts/insta-post-a-09.webp",
  "/assets/images/insta-posts/insta-post-a-10.webp",
  "/assets/images/insta-posts/insta-post-a-11.webp",
  "/assets/images/insta-posts/insta-post-a-12.webp",
];

export default function Footer3() {
  return (
    <>
      <InfoSection />
      <footer className="rbt-footer rbt-footer-style-three rbt-bg-color-gray-light pt--48">
        <div className="p-0 rbt-footer-top">
          <div className="container">
            <div className="row row--12 mt_dec--24 mb--40 justify-content-between align-items-center mb_sm--16">
              <div className="col-md-6 col-12 mt--24">
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
              <div className="col-md-6 col-12 mt--24">
                <div className="footer-widget">
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
            </div>
            {/* Start Instagram Posts Area */}
            <div className="row row--12 mb--32 mb_sm--24">
              <div className="col-12">
                <Swiper
                  className="swiper rbt-insta-slider-activation"
                  {...{
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 15,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                      delay: 1500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    },
                  }}
                  modules={[Autoplay]}
                >
                  {instaPosts.map((src, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="rbt-instapost text-center rbt-instapost-style-one">
                        <ModalTriggerButton as="div" openModalName="instaModal">
                          <div className="instapost-img">
                            <Image
                              alt="Ecommerce Instagram Posts Image"
                              src={src}
                              width={400}
                              height={400}
                            />
                          </div>
                          <div className="instapost-content rbt-gap--4">
                            <span className="insta-icon insta-icon-sm">
                              <i className="fa-brands fa-instagram" />
                            </span>
                            <span className="rbt-btn-link b4">
                              View Product
                            </span>
                          </div>
                        </ModalTriggerButton>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* End Instagram Posts Area */}
            {/* Start WaterMark */}
            <div className="row">
              <div className="col-12">
                <div className="rbt-watermark-text rbt-watermark-color-var-1">
                  <span>Follow@Unimart</span>
                </div>
              </div>
            </div>
            {/* End WaterMark */}
            <div className="row mt_dec--24">
              <div className="col-12">
                <hr className="rbt-separator m-0" />
              </div>
            </div>
            <div className="row row--12 pt--8 justify-content-between rbt-footer-nav-wrapper mt_dec--24">
              {footerData.map((widget, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-2 mt--24">
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
              <div className="col-12 col-sm-6 col-lg-2 mt--24">
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
              <div className="col-12 col-sm-6 col-lg-3 col-xxl-2 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Contact Us</h5>
                  <ul className="ft-link">
                    <li>
                      <span>
                        <i className="fa-regular fa-phone mr--4" />
                        <span className="rbt-text-bold mr--4"> Phone:</span>
                        <a className="contact-link" href="tel:+1234567890">
                          +1234 567 890
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-envelope mr--4" />
                        <span className="rbt-text-bold mr--4"> Email:</span>
                        <a
                          className="contact-link"
                          href="mailto:someone@example.com"
                        >
                          info@rbtshop.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-location-dot mr--4" />
                        <span className="rbt-text-bold mr--4">Location:</span>
                        401 Broadway, 24th floor, orchard view london, UK
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid pt--56">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-bg-color-gray-100" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 pb--32 pt--32">
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
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt--24">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-start justify-content-xl-end mt_sm--12 mt_md--12 mt_lg--12">
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
      </footer>{" "}
    </>
  );
}
