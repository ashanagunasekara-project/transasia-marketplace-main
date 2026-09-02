"use client";
import dynamic from "next/dynamic";
import { CurvedArrowAltIcon } from "../svg-icons";
import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import { getImageProps } from "next/image";
import Image from "next/image";
import CircleProgress from "./CircleProgress";

import { speedStats } from "@/data/splash";
import { keyFeatures, elevateFeatures } from "@/data/splashFeatures";

const FeatureKeyNotifySwiper = dynamic(
  () => import("./FeatureKeyNotifySwiper"),
  { ssr: false },
);
const FeatureOceanSwiper = dynamic(() => import("./FeatureOceanSwiper"), {
  ssr: false,
});
const ThrowableCapsuleList = dynamic(() => import("./ThrowableCapsuleList"), {
  ssr: false,
  loading: () => (
    <div
      className="rbt-feature-capsule-list"
      aria-hidden
      style={{ minHeight: 180 }}
    />
  ),
});

const { props: splashIntroVideoPoster } = getImageProps({
  alt: "",
  src: "/assets/images/splash/banner/intro-video-thumb.webp",
  width: 500,
  height: 280,
});

export default function Features() {
  return (
    <div
      id="rbt-features-area"
      className="rbt-splash-feature-area splash-section-gapBottom position-relative"
    >
      <div className="container">
        <div className="row row--16">
          <div className="col-12">
            <div className="rbt-splash-intro-video-area">
              <div className="rbt-intro-video-box">
                <Image
                  className="desktop-stand"
                  alt="Desktop Image"
                  src="/assets/images/splash/banner/desktop-stand.webp"
                  width={686}
                  height={131}
                />
                <Image
                  className="desktop-shadow"
                  alt="Shadow"
                  src="/assets/images/splash/banner/desktop-shadow.webp"
                  width={884}
                  height={51}
                />
                <Image
                  className="mini-pc rbt-scroll-trigger zoom_in"
                  alt="PC Image"
                  src="/assets/images/splash/banner/mini-pc.webp"
                  width={173}
                  height={85}
                />
                <div className="desktop">
                  <video
                    className="rbt-splash-video"
                    src="/assets/videos/splash/unimart-treaser-video-01.webm"
                    poster={splashIntroVideoPoster.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <track
                      kind="captions"
                      srcLang="en"
                      label="English captions"
                      src="data:text/vtt,WEBVTT"
                      default
                    />
                  </video>
                  <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                    <MagneticButton
                      as="button"
                      className="play-btn"
                      type="button"
                    >
                      <i className="fa-solid fa-play" />
                    </MagneticButton>
                  </VideoModal>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-splash-section-title text-center position-relative">
              <div className="section-indicator d-md-none d-lg-block">
                <span className="indicator-text">
                  Why Our Template Suits <br />
                  Everyone
                  <span className="icon ml--8">
                    <CurvedArrowAltIcon />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 p--0">
            <div className="rbt-key-features">
              <div className="row row--16 mt_dec--24">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`col-12 col-md-6 col-lg-4 col-xl-3 rbt-scroll-trigger slide_in animation-order-${index + 1} ${index === 1 ? "mt_dec--32 mt_sm--24" : ""}`}
                  >
                    <div
                      className={`rbt-single-key-feature-card ${feature.cardVariation}`}
                    >
                      <div className="rbt-inner">
                        <div className="rbt-content">
                          <span className="rbt-pre-title">
                            {feature.preTitle}
                          </span>
                          <h4 className="rbt-title">{feature.title}</h4>
                          <ul className="rbt-key-feature-list">
                            {feature.items.map((item, idx) => (
                              <li key={idx}>
                                <i className={item.icon} />
                                {item.marquee ? (
                                  <span className="rbt-marquee">
                                    <span data-text={item.text}>
                                      {item.text}
                                    </span>
                                  </span>
                                ) : (
                                  <span>{item.text}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <figure className="rbt-key-feature-thumb">
                          {feature.id === "kf-2" && <FeatureKeyNotifySwiper />}
                          <Image
                            alt="Thumbnail"
                            src={feature.thumbSrc}
                            width={624}
                            height={492}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 rbt-scroll-trigger slide_in animation-order-4 mt_dec--32 mt_sm--24 mt_lg--24">
                  <div className="rbt-single-key-feature-card rbt-card-var-4 rbt-color-animation-card mt_md--24">
                    <div className="rbt-inner">
                      <div className="rbt-gradient-animation-colors rbt-color-animation-active">
                        {[1, 2, 3, 4].map((n) => (
                          <div
                            key={n}
                            className={`rbt-single-color rbt-color-${n}`}
                          />
                        ))}
                      </div>
                      <div className="rbt-content">
                        <h4 className="rbt-title text-center">
                          Why Choose Us?
                        </h4>
                        <div className="text-center">
                          <Image
                            alt="Logo Image"
                            src="/assets/images/splash/others/card-logo.svg"
                            width={85}
                            height={90}
                          />
                        </div>
                      </div>
                      <ThrowableCapsuleList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="splash-section-gapTop">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--44">
                <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                  Elevate User Experience
                </span>
                <h2 className="rbt-title">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    All-In-One Solution
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    Key Features For E-Commerce
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--12">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="row">
                {elevateFeatures.slice(0, 3).map((feature, index) => (
                  <div
                    key={feature.id}
                    className={
                      index === 2
                        ? "col-12 col-md-8 col-lg-12 mx-auto"
                        : "col-12 col-md-6 col-lg-12"
                    }
                  >
                    <div
                      className={`rbt-feature-card ${feature.cardClass} mb--24 rbt-scroll-trigger slide_in animation-order-1`}
                    >
                      {feature.type === 1 ? (
                        <>
                          <div className="rbt-card-img">
                            <Image
                              className="rbt-scroll-trigger zoom_in"
                              alt="Main"
                              src={feature.mainImg}
                              width={324}
                              height={372}
                            />
                            {feature.icons?.map((icon, i) => (
                              <Image
                                key={i}
                                className={icon.className}
                                alt="Icon"
                                src={icon.src}
                                width={icon.width}
                                height={icon.height}
                              />
                            ))}
                          </div>
                          <div className="rbt-feature-card-text text-center">
                            <span className="rbt-text-color-primary rbt-text-medium mb-0">
                              {feature.preTitle}
                            </span>
                            <h3 className="rbt-text-bold mb--12 mt--4">
                              {feature.title}
                            </h3>
                            <p className="b1 rbt-text-color-gray-500">
                              {feature.desc}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="rbt-feature-card-text text-center mb--28">
                            <span
                              className={`rbt-text-color-${feature.type === 2 ? "white" : "white"} rbt-text-medium mb-0`}
                            >
                              {feature.preTitle}
                            </span>
                            <h3
                              className={`rbt-text-color-white rbt-text-bold mb--12 mt--4 h5 ${feature.type === 3 ? "mb--0" : ""}`}
                            >
                              {feature.title}
                            </h3>
                            {feature.desc && (
                              <p className="b1 rbt-text-color-gray-100">
                                {feature.desc}
                              </p>
                            )}
                          </div>
                          <div className="rbt-card-img">
                            <Image
                              className="rbt-scroll-trigger zoom_in"
                              alt="Main"
                              src={feature.mainImg}
                              width={feature.type === 2 ? 346 : 176}
                              height={feature.type === 2 ? 258 : 146}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row row--12">
                <div className="col-12 col-md-6 col-lg-6">
                  <div
                    className={`rbt-feature-card ${elevateFeatures[3].cardClass} rbt-scroll-trigger slide_in animation-order-1`}
                  >
                    <div className="rbt-feature-card-text mt--40">
                      <span className="rbt-text-color-primary rbt-text-medium mb-0">
                        {elevateFeatures[3].preTitle}
                      </span>
                      <h3 className="rbt-text-bold mb--12 mt--4 h5">
                        {elevateFeatures[3].title}
                      </h3>
                      <p className="b1 rbt-text-color-gray-500">
                        {elevateFeatures[3].desc}
                      </p>
                    </div>
                    <div className="rbt-card-img">
                      <Image
                        className="rbt-scroll-trigger zoom_in flex-shrink-0"
                        alt="Main"
                        src={elevateFeatures[3].mainImg}
                        width={180}
                        height={241}
                      />
                      {elevateFeatures[3].icons?.map((icon, i) => (
                        <Image
                          key={i}
                          className={icon.className}
                          alt="Icon"
                          src={icon.src}
                          width={icon.width}
                          height={icon.height}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="rbt-feature-card rbt-feature-card-5 position-relative rbt-scroll-trigger slide_in animation-order-1">
                    <div className="rbt-feature-card-text mb--20">
                      <h4 className="rbt-title rbt-text-bold mb--12 mt--4 mt_sm--12">
                        Super Fast Loading Speed
                      </h4>
                    </div>
                    <div className="rbt-progress-counter-wrap">
                      {speedStats.map((item) => (
                        <div className="counter-box" key={item.label}>
                          <CircleProgress percent={item.percent} />
                          <span className="b4 rbt-text-bold rbt-text-color-black">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Image
                      className="icon rbt-scroll-trigger zoom_in"
                      alt="Icon"
                      src="/assets/images/splash/feature/icon2.svg"
                      width={115}
                      height={126}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="rbt-feature-card rbt-feature-card-6 mt--24 mb--24 rbt-scroll-trigger slide_in animation-order-1">
                    <FeatureOceanSwiper />
                  </div>
                </div>
                {[4, 5].map((i) => (
                  <div
                    key={elevateFeatures[i].id}
                    className="col-12 col-md-6 col-lg-6"
                  >
                    <div
                      className={`rbt-feature-card ${elevateFeatures[i].cardClass} rbt-scroll-trigger slide_in animation-order-1`}
                    >
                      <div className="rbt-feature-card-text text-center mb--16">
                        <span className="rbt-text-color-primary rbt-text-medium mb-0">
                          {elevateFeatures[i].preTitle}
                        </span>
                        <h3 className="rbt-text-bold mb--12 mt--4 h5">
                          {elevateFeatures[i].title}
                        </h3>
                        {elevateFeatures[i].desc && (
                          <p className="b1 rbt-text-color-gray-500">
                            {elevateFeatures[i].desc}
                          </p>
                        )}
                      </div>
                      <div className="rbt-card-img">
                        <Image
                          className="rbt-scroll-trigger zoom_in"
                          alt="Main"
                          src={elevateFeatures[i].mainImg}
                          width={elevateFeatures[i].type === 5 ? 278 : 425}
                          height={elevateFeatures[i].type === 5 ? 208 : 266}
                        />
                        {elevateFeatures[i].icons?.map((icon, idx) => (
                          <Image
                            key={idx}
                            className={icon.className}
                            alt="Icon"
                            src={icon.src}
                            width={icon.width}
                            height={icon.height}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
