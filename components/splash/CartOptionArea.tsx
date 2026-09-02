"use client";
import { CurvedArrowIcon } from '../svg-icons';
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CART_SLIDES = [
  {
    id: "01",
    title: "Various Product Card Styles",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-1.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "02",
    title: "Cart info Share Without Log In",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-2.webp",
      width: 440,
      height: 372,
    },
  },
  {
    id: "03",
    title: "Add to cart Off Canvas",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-3.webp",
      width: 437,
      height: 374,
    },
  },
  {
    id: "04",
    title: "Added to Cart Ajax Popup",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-4.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "05",
    title: "Variable add-to-cart functionality",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-5.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "06",
    title: "Sticky Add to Cart Bar",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-6.webp",
      width: 436,
      height: 373,
    },
  },
  {
    id: "07",
    title: "Quick Edit Cart Popup",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-7.webp",
      width: 437,
      height: 374,
    },
  },
  {
    id: "08",
    title: "Ajax Mini Cart Functionality",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-8.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "09",
    title: "Upsell/Cross sell In the cart",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-9.webp",
      width: 438,
      height: 374,
    },
  },
  {
    id: "10",
    title: "Add to cart Notice (Down Left)",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-10.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "11",
    title: "Marquee Sale banner in the card",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-11.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "12",
    title: "AJAX Remove From Cart",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-12.webp",
      width: 439,
      height: 383,
    },
  },
  {
    id: "13",
    title: "Product 360 & AR",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-13.webp",
      width: 436,
      height: 372,
    },
  },
  {
    id: "14",
    title: "Shoppable Images (Lookbook)",
    description:
      "When user sees brief video of your product then good for marketing of product.",
    image: {
      src: "/assets/images/splash/cart/cart-option-14.webp",
      width: 436,
      height: 372,
    },
  },
];

export default function CartOptionArea() {
  return (
    <div className="splash-section-gap rbt-splash-product-cart-layout-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mb--0">
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                Powerful and flexible
              </span>
              <h2 className="rbt-title">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Master Of Product Cart
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  With All Possible Optionality
                </span>
              </h2>
              <div className="section-indicator">
                <span className="icon rbt-scroll-trigger slide_in animation-order-4">
                  <CurvedArrowIcon />
                </span>
                <span className="indicator-text text-start rbt-scroll-trigger slide_in animation-order-5">
                  Power Of Limitless features and <br />
                  endless possibilities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider main container */}
      <Swiper
        modules={[Navigation]}
        {...{
          slidesPerView: "auto",
          spaceBetween: 32,
          grabCursor: true,
          autoplay: true,
          speed: 1000,
          delay: 0,
          navigation: {
            prevEl: ".rbt-arrow-left",
            nextEl: ".rbt-arrow-right",
          },
          breakpoints: {
            320: {
              spaceBetween: 24,
            },
            768: {
              spaceBetween: 32,
            },
          },
        }}
        className="swiper wrapper rbt-splash-cart-layout-active rbt-arrow-between"
      >
        {CART_SLIDES.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="rbt-splash-cart-layout rbt-scroll-trigger zoom_in">
              <div className="cart-layout-header">
                <span className="rbt-overlay-text"> {slide.id} </span>
                <h5 className="rbt-title rbt-text-bold mb--8">{slide.title}</h5>
                <p className="h6 rbt-text-regular rbt-text-color-gray-700 mb--32">
                  {slide.description}
                </p>
              </div>
              <div className="cart-layout-img">
                <Image
                  alt="Cart Layout Image"
                  src={slide.image.src}
                  width={slide.image.width}
                  height={slide.image.height}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Start slider navigation buttons */}
        <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-lg">
          <div className="custom-overflow">
            <i className="rbt-icon fa-regular fa-arrow-left" />
            <i className="rbt-icon-top fa-regular fa-arrow-left" />
          </div>
        </div>
        <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-lg">
          <div className="custom-overflow">
            <i className="rbt-icon fa-regular fa-arrow-right" />
            <i className="rbt-icon-top fa-regular fa-arrow-right" />
          </div>
        </div>
        {/* End slider navigation buttons */}
      </Swiper>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Link href={`/cart-builder`} className="rbt-btn">
              View All Optionality
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
