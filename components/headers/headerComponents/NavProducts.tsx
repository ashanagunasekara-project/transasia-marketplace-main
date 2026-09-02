"use client";
import ProductCard14 from "@/components/product-cards/ProductCard14";
import { navroducts } from "@/data/products/others";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NavProducts() {
  return (
    <Swiper
      {...{
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        pagination: {
          el: ".rbt-swiper-container .rbt-swiper-pagination",
          clickable: true,
        },
      }}
      modules={[Pagination]}
      className="swiper rbt-megamenu-prd-card-activation-1 pb--24"
    >
      {navroducts.map((product, i) => (
        <SwiperSlide key={i}>
          <ProductCard14 product={product}
                      animationOrder={i + 1}
                    />
        </SwiperSlide>
      ))}

      <div className="rbt-swiper-pagination-center">
        <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-cente"></div>
      </div>
    </Swiper>
  );
}
