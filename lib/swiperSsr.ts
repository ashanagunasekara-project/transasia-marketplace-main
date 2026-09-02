/** Pre-hydration Swiper layout utilities (pairs with rbt-swiper-ssr--* SCSS). */
export type SwiperSsrLayout = "1-1" | "1-2" | "1-3";

const LAYOUT_CLASS: Record<SwiperSsrLayout, string> = {
  "1-1": "rbt-swiper-ssr--1-1",
  "1-2": "rbt-swiper-ssr--1-2",
  "1-3": "rbt-swiper-ssr--1-3",
};

/** Class for a fixed SSR layout (1 slide, or 1 mobile / 2 desktop). */
export function swiperSsrLayoutClass(layout: SwiperSsrLayout): string {
  return LAYOUT_CLASS[layout];
}

/** Append an SSR layout class to an existing Swiper className. */
export function withSwiperSsrLayout(
  className: string,
  layout?: SwiperSsrLayout,
): string {
  if (!layout) return className;
  return `${className} ${swiperSsrLayoutClass(layout)}`.trim();
}
