"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
type HeaderComponentSlide = {
  src: string;
  width: number;
  height: number;
};

const topSlides: HeaderComponentSlide[] = [
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-1.webp",
    width: 1384,
    height: 492,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-2.webp",
    width: 493,
    height: 247,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-3.webp",
    width: 1383,
    height: 492,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-1.webp",
    width: 1384,
    height: 492,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-2.webp",
    width: 493,
    height: 247,
  },
];

const bottomSlides: HeaderComponentSlide[] = [
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-4.webp",
    width: 1322,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-5.webp",
    width: 508,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-6.webp",
    width: 1176,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-7.webp",
    width: 696,
    height: 498,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-4.webp",
    width: 1322,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-5.webp",
    width: 508,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-6.webp",
    width: 1176,
    height: 497,
  },
  {
    src: "/assets/images/splash/builder-element/megamenu/megamenu-7.webp",
    width: 696,
    height: 498,
  },
];

function HeaderComponents5() {
  return (
    <>
      <div className="rbt-megamenu-presentation-area rbt-section-gapTop rbt-section-gap2Bottom rbt-bg-color-brand-50 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--56 mb_sm--32">
                <h2 className="mb--12">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Build mega menus with integrated, <br />
                    user-friendly options.
                  </span>
                </h2>
                <div className="rbt-description">
                  Experience world-class design and a super user-friendly
                  interface <br />
                  for effortless website design and seamless editing.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Component Slide Area */}
        <div className="splash-element-presentation-wrapper">
          <Swiper
            modules={[Autoplay]}
            {...{
              slidesPerView: "auto",
              spaceBetween: 32,
              speed: 9000,
              loop: true,
              autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            }}
            className="swiper rbt-splash-megamenu-slider-active pb--32"
          >
            {topSlides.map((slide, index) => (
              <SwiperSlide
                className="swiper-slide"
                key={`${slide.src}-${index}`}
              >
                <div className="rbt-element p--0">
                  <Image
                    alt="Component Image"
                    src={slide.src}
                    width={slide.width}
                    height={slide.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            {...{
              slidesPerView: "auto",
              spaceBetween: 32,
              speed: 9000,
              loop: true,
              autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            }}
            className="swiper rbt-splash-megamenu-slider-active pb--32"
          >
            {bottomSlides.map((slide, index) => (
              <SwiperSlide
                className="swiper-slide"
                key={`${slide.src}-${index}`}
              >
                <div className="rbt-element p--0">
                  <Image
                    alt="Component Image"
                    src={slide.src}
                    width={slide.width}
                    height={slide.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* End Component Slide Area */}
      </div>
    </>
  );
}

export default HeaderComponents5;
