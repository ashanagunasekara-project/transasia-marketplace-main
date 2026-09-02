import { features } from "@/data/features";

import Image from "next/image";
import Counter from "@/components/common/ui/Counter";
export default function Features() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-black-three cd-area-style-three">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mt--24">
              <div
                className={`rbt-feature-card rbt-curved-style-box no-bg-mask bg-varition-one rbt-feature-card-8 h-100 rbt-scroll-trigger slide_in animation-order-${index + 1}`}
              >
                <div className="rbt-feature-card-text text-center mb--16">
                  <h5 className="rbt-text-bold mb--12 mt--4 rbt-text-color-secondary">
                    {feature.title}
                  </h5>
                  <p className="b1 rbt-text-color-extra-eleven">
                    {feature.description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div className="rbt-card-img">
                  <Image
                    className="rbt-scroll-trigger zoom_in"
                    alt="Image"
                    src={feature.imgSrc || ""}
                    width={1130}
                    height={764}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid p-0 pt--120">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-component-section-title-has-bg-shape text-center rbt-gap--0 border-0 p-0 mb--0 align-items-center">
              <h3 className="rbt-title rbt-text-color-white h1 rbt-scroll-trigger fade_in animation-order-1 mb--12">
                <span className="rbt-bold--text">Flip with Confidence</span>
              </h3>
              <p className="description rbt-text-color-white mb--32">
                Tested for over 4,00,000 folds to provide maximum durability.
                <br />
                That&apos;s 200+ folds per day for more than 5 Years!
              </p>
              <span className="h1 rbt-text-color-white mb--0">
                <Counter max={200000} />
              </span>
            </div>
          </div>
          <div className="col-lg-12">
            <figure className="cd-banner-img">
              <span className="rbt-round-blur-shape rbt-round-blur-shape-red" />
              <Image
                alt="Countdown Banner Image"
                src="/assets/images/countdown/cd-mobile-a-01.webp"
                width={3840}
                height={2165}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
