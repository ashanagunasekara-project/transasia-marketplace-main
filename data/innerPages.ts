import type { InnerPageItem } from "@/types/misc";

export type { InnerPageItem } from "@/types/misc";

export const FILTERS = [
  { label: "All Together", value: "*" },
  { label: "Shop", value: ".shop" },
  { label: "Product", value: ".product" },
  { label: "Blog", value: ".blog" },
  { label: "Others", value: ".others" },
];

export const PAGE_SIZE = 15;

export const INNER_PAGES: InnerPageItem[] = [
  {
    type: "product",
    href: "/product-single-default",
    title: "Product Single Default",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-01.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-fashion",
    title: "Product Single Fashion",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-26.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop",
    title: "Shop Default",
    image: {
      src: "/assets/images/splash/inner-pages/shop-02.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "Hot",
      className: "rbt-product-badge-bg-red",
    },
  },
  {
    type: "others",
    href: "/about",
    title: "About Page",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-01.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "product",
    href: "/product-single-furniture",
    title: "Product Single Furniture",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-02.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-right-sidebar",
    title: "Shop Right Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/shop-05.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/faq-page-01",
    title: "Contact Page",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-02.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "product",
    href: "/product-single-cosmetic-beauty",
    title:
      "Product Single Beauty\n                                                                Product",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-03.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "others",
    href: "/compare-product",
    title: "Compare Product",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-09.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/categories-list",
    title: "Categories List",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-10.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "shop",
    href: "/shop-filter-list-left-sidebar",
    title: "Shop List Left Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/shop-06.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "others",
    href: "/offer-list-page",
    title: "Offer list page",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-03.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "product",
    href: "/product-single-phone-case",
    title: "Product Single Phone Case",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-04.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-filter-list-right-sidebar",
    title: "Shop List Right Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/shop-05.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "others",
    href: "/signin",
    title: "Sign IN",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-05.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/signup",
    title: "Sign UP",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-06.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/wishlist",
    title: "Wishlist",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-07.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "blog",
    href: "/blog-default",
    title: "Blog Default",
    image: {
      src: "/assets/images/splash/inner-pages/blog-01.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "shop",
    href: "/shop-left-sidebar",
    title: "Shop Left Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/shop-02.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "blog",
    href: "/blog-single/1",
    title: "Blog Details",
    image: {
      src: "/assets/images/splash/inner-pages/blog-07.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/contact",
    title: "FAQ Page",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-04.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/find-store",
    title: "Find Our Store",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-08.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "shop",
    href: "/shop-sticky-sidebar",
    title: "Sticky Sidebar Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-02.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "NEW",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-collapsible-sidebar",
    title: "Collapse Sidebar Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-02.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-scroll-sidebar",
    title: "Scroll Sidebar Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-01.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-sm-categories",
    title: "Shop Small Categories",
    image: {
      src: "/assets/images/splash/inner-pages/shop-22.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-filter-grid-two",
    title: "Two Columns Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-16.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-filter-grid-three",
    title: "Three Columns Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-15.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-filter-grid-four",
    title: "Four Columns Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-17.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-wider",
    title: "Three Columns Wide Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-23.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-wider-four",
    title: "Four Columns Wide Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-17.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-wider-five",
    title: "Five Columns Wide Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-09.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-wider-six",
    title: "Six Columns Wide",
    image: {
      src: "/assets/images/splash/inner-pages/shop-25.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-featured",
    title: "Featured Products",
    image: {
      src: "/assets/images/splash/inner-pages/shop-18.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-best-prds",
    title: "Best Selling Products",
    image: {
      src: "/assets/images/splash/inner-pages/shop-23.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-collapse-filter-top",
    title: "Hidden Side Bar Shop",
    image: {
      src: "/assets/images/splash/inner-pages/shop-19.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-no-page-heading",
    title: "Shop No Page Heading",
    image: {
      src: "/assets/images/splash/inner-pages/shop-15.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/hop-only-category",
    title: "Shop Only Category",
    image: {
      src: "/assets/images/splash/inner-pages/shop-10.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-offcanvas-sidebar-left",
    title: "Shop offcanvas Left",
    image: {
      src: "/assets/images/splash/inner-pages/shop-11.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-offcanvas-sidebar-right",
    title: "Shop offcanvas Right",
    image: {
      src: "/assets/images/splash/inner-pages/shop-12.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-offcanvas-sidebar-top",
    title: "Shop offcanvas Top",
    image: {
      src: "/assets/images/splash/inner-pages/shop-13.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-offcanvas-sidebar-bottom",
    title: "Shop offcanvas Bottom",
    image: {
      src: "/assets/images/splash/inner-pages/shop-14.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-collapse-filter-bottom",
    title: "Shop Filter Collapse Bottom",
    image: {
      src: "/assets/images/splash/inner-pages/shop-19.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-collapse-filter-left",
    title: "Shop Filter Collapse Left",
    image: {
      src: "/assets/images/splash/inner-pages/shop-20.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "shop",
    href: "/shop-collapse-filter-right",
    title: "Shop Filter Collapse Right",
    image: {
      src: "/assets/images/splash/inner-pages/shop-20.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-accessories",
    title: "Product Single Accessories",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-05.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-tech-accessories",
    title: "Product Single Tech Accessories",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-06.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-animal-accessories",
    title: "Product Single Animal Accessories",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-07.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-printing-service",
    title: "Product Single Print Product",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-08.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-sports-shoe",
    title: "Product Single Sports Shoe",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-09.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-ladies-bag",
    title: "Product Single Ladies Bag",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-10.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-accessories-two",
    title: "Product Single Accessories Two",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-11.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-two-v360",
    title: "Product Single 360 Angle View",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-12.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary",
    title: "Product Grid Gallary",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-13.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-two",
    title: "Product Grid Gallary Two",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-14.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-sticky-info",
    title: "Product Single Sticky Info",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-15.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-sticky-info-both",
    title: "Product Single Sticky Info Both",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-16.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-sticky-thumb",
    title: "Product Single Thumb sticky",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-17.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-side-view",
    title: "Product Single Side View",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-18.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-stock-out",
    title: "Product Single Out of Stock",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-19.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-with-buy-more-option",
    title: "Product Single with Buy More Option",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-20.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-with-buy-more-option2",
    title: "Product Single with Buy More Option Style 2",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-21.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-grid",
    title: "Product Single Grid",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-22.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-grid-sidebar",
    title: "Product Grid With Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-23.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-side-view-two",
    title: "Product Single Side View Two",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-24.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-side-view-three",
    title: "Product Single Side View Three",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-25.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-side-view-four",
    title: "Product Single Side View Four",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-27.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-two-zoom-v1",
    title: "Product Single Zoom01",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-28.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-two-zoom-v2",
    title: "Product Single Zoom02",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-29.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "product",
    href: "/product-single-gallary-two-zoom-v3",
    title: "Product Single Zoom03",
    image: {
      src: "/assets/images/splash/inner-pages/product-single-30.webp",
      width: 642,
      height: 664,
    },
    badge: {
      text: "new",
      className: "rbt-product-badge-bg-green",
    },
  },
  {
    type: "blog",
    href: "/blog-grid",
    title: "Blog Grid",
    image: {
      src: "/assets/images/splash/inner-pages/blog-02.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "blog",
    href: "/blog-sidebar",
    title: "Blog Sidebar",
    image: {
      src: "/assets/images/splash/inner-pages/blog-02.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "blog",
    href: "/blog-modern",
    title: "Blog Modern",
    image: {
      src: "/assets/images/splash/inner-pages/blog-04.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "blog",
    href: "/blog-infinite-scroll",
    title: "Blog Infinite Scroll",
    image: {
      src: "/assets/images/splash/inner-pages/blog-05.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "blog",
    href: "/blog-load-more",
    title: "Blog load-more",
    image: {
      src: "/assets/images/splash/inner-pages/blog-06.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/brand-list",
    title: "Brand List",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-11.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/shop",
    title: "Portfolio Default",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-12.webp",
      width: 642,
      height: 664,
    },
  },
  {
    type: "others",
    href: "/portfolio-details",
    title: "Portfolio Details",
    image: {
      src: "/assets/images/splash/inner-pages/other-pages-13.webp",
      width: 642,
      height: 664,
    },
  },
];
