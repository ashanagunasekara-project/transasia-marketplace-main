"use client";
import Image from "next/image";

type TestimonialItem = {
  titleSuffix: string;
  quote: string;
  showOnMobile: boolean;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    titleSuffix: "Customer Support",
    quote:
      "Best support team I&apos;ve ever worked with, response is very quick, helped me a lot during butld a website, looking forward to continue with the team again and again",
    showOnMobile: true,
  },
  {
    titleSuffix: "Design Quality",
    quote:
      "This is my first purchase from themeforest and I&apos;m very thankful about this place because of Arter template creator. He is helping urgently whenever I mail him. I highly recommend you guys if you are looking for good CV template with good customer support",
    showOnMobile: true,
  },
  {
    titleSuffix: "Customer Support",
    quote:
      "Excellent / superb and versatile Jekyll development bundled with great documentation and communication from the developer if needed. Don&apos;t hesitate, buy now!",
    showOnMobile: true,
  },
  {
    titleSuffix: "Flexibility",
    quote:
      "The customer service is great, they helped me as much as possible when I needed help on HTML. Thanks a lot!",
    showOnMobile: true,
  },
  {
    titleSuffix: "Customer Support",
    quote:
      "Fantastic technical service! Not only did they solve my problem instantly but they updated the template half an hour later with the patch. Keep up the good work!",
    showOnMobile: false,
  },
  {
    titleSuffix: "Feature Availability",
    quote:
      "I love the overall design of the template. Perfect for freelancers like me! Support was very fast to respond too. Cheers, team!",
    showOnMobile: false,
  },
  {
    titleSuffix: "Customer Support",
    quote:
      "Ober template has been a charm to work with. Coming from a newbie. Out the gate after updating images, it rates an A from GTmetrix. I am really happy",
    showOnMobile: false,
  },
  {
    titleSuffix: "Customer Support",
    quote:
      "Best support team I've ever worked with, response is very quick, helped me a lot during build a website, looking forward to continue with the team again and again",
    showOnMobile: false,
  },
  {
    titleSuffix: "Customer Support",
    quote:
      "Really good templates. - Modern design - Easy to use - Best support - Responsive design",
    showOnMobile: false,
  },
];

import { useRef } from "react";
import { useIsotopeMasonry } from "@/hooks/useIsotopeMasonry";

export default function Testimonials() {
  const layoutRef = useRef<HTMLDivElement | null>(null);
  useIsotopeMasonry(layoutRef, { itemSelector: ".rbt-layout-item" });
  return (
    <div className="splash-section-gapTop splash-section-gap2Bottom rbt-splash-testimonial-area rbt-splash-common-sec-bg">
      <div className="container position-relative">
        <div className="rbt-splash-section-title text-center mb--48">
          <div className="section-title-img rbt-scroll-trigger fade_in animation-order-1">
            <Image
              className="section-bg-img"
              alt="Overlay Star Icon"
              src="/assets/images/splash/icons/icon17.png"
              width={56}
              height={56}
            />
            <Image
              className="section-bg-img"
              alt="Overlay Star Icon"
              src="/assets/images/splash/icons/icon17.png"
              width={56}
              height={56}
            />
            <Image
              className="section-bg-img"
              alt="Overlay Star Icon"
              src="/assets/images/splash/icons/icon17.png"
              width={56}
              height={56}
            />
            <Image
              className="section-bg-img"
              alt="Overlay Star Icon"
              src="/assets/images/splash/icons/icon17.png"
              width={56}
              height={56}
            />
            <Image
              className="section-bg-img"
              alt="Overlay Star Icon"
              src="/assets/images/splash/icons/icon17.png"
              width={56}
              height={56}
            />
          </div>
          <span className="subtitle rbt-scroll-trigger fade_in animation-order-2">
            Engage Your Audience
          </span>
          <h2 className="rbt-title mb--24">
            <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-3">
              Don&apos;t just take words
              <br />
            </span>
            <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-4">
              Watch Others Too
            </span>
          </h2>
        </div>
        <div className="rbt-layout" ref={layoutRef}>
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className={`rbt-layout-item${
                item.showOnMobile ? "" : " d-none d-md-block"
              }`}
            >
              <div className="rbt-review-card rbt-scroll-trigger zoom_in">
                <h5 className="rbt-title">
                  <span className="rbt-text-color-gray-400">For</span>{" "}
                  {item.titleSuffix}
                </h5>
                <p className="opinion">{item.quote}</p>
                <div className="marketplace">
                  <Image
                    className="marketplace-icon"
                    alt="Marketplace icon"
                    src="/assets/images/splash/icons/icon16.png"
                    width={40}
                    height={40}
                  />
                  <div className="market-name">
                    THEMEFOREST CUSTOMER
                    <div className="review">
                      <div className="rating">
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-bottom text-center">
          <a
            href="https://rainbowthemes.net/testimonial/"
            className="rbt-btn splash-btn icon-reverse-right"
            target="_blank"
          >
            <span className="icon-left">⭐</span>
            <span> Check Customer Rating Now</span>
            <span className="icon-right">
              <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
            </span>
          </a>
          <p className="h6 rbt-text-regular mb--0 mt--16 rbt-scroll-trigger fade_in animation-order-4">
            4.85 Average <br />
            Based On 300 Ratings.
          </p>
        </div>
      </div>
    </div>
  );
}
