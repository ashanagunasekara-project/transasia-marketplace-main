"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

const BENEFITS = [
  "No knowledge of code required",
  "Sections On Every Page",
  "24/7 premium support",
  "Drag & Drop Editor",
];

export default function AdminDashboard() {
  const parallaxRef = useParallax();

  return (
    <section
      ref={parallaxRef}
      className="splash-section-gap rbt-admin-layout-presentation-area position-relative overflow-hidden"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mb--24">
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-2">
                Ecommerce Mastery
              </span>
              <h2 className="rbt-title mb--0">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-3">
                  Backend Dashboard ready
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-4">
                  For Great Product Managing
                </span>
              </h2>
            </div>

            <div className="rbt-admin-presentation-link text-center d-flex justify-content-center mb--48 position-relative z-2 mb_sm--16">
              <a
                href="#"
                className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-7"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-left">
                  <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                </span>
                <span>Explore Admin Dashboard</span>
                <span className="icon-right">
                  <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                </span>
              </a>
            </div>

            <div className="rbt-admin-presentation-wrapper">
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  className="rbt-elementor-layout rbt-scroll-trigger zoom_in"
                  src="/assets/images/splash/others/element-layout.webp"
                  alt="Admin Dashboard preview"
                  width={1320}
                  height={726}
                />
              </a>

              <Image
                className="rbt-elementor-mobile-layout rbt-scroll-trigger fade_in animation-order-2"
                data-parallax='{"x": 0, "y": -30}'
                src="/assets/images/splash/others/element-layout-mobile.webp"
                alt="Admin Dashboard mobile preview"
                width={370}
                height={714}
              />

              <Image
                className="icon icon-1"
                src="/assets/images/splash/icons/icon10.png"
                alt=""
                aria-hidden
                width={135}
                height={144}
              />
              <Image
                className="icon icon-2"
                data-parallax='{"x": 0, "y": 30}'
                src="/assets/images/splash/icons/icon11.png"
                alt=""
                aria-hidden
                width={110}
                height={144}
              />
              <Image
                className="icon icon-3"
                data-parallax='{"x": 0, "y": -30}'
                src="/assets/images/splash/icons/icon12.png"
                alt=""
                aria-hidden
                width={262}
                height={230}
              />
            </div>

            <ul className="rbt-splash-feature-list rbt-elementor-benefit-list justify-content-center">
              {BENEFITS.map((item) => (
                <li key={item}>
                  <i className="fa-regular fa-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
