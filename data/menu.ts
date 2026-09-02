import { CategoryMegamenu, DemoData, MenuItem, MenuSection } from "@/types";
export const demoData: DemoData[] = [
  {
    href: "/home-electronics",
    src: "/assets/images/splash/demo-pages/demo-1.webp",
    width: 408,
    height: 422,
    title: "Electronics One",
  },
  {
    href: "/home-electronics-three",
    src: "/assets/images/splash/demo-pages/demo-electronics-03.webp",
    width: 408,
    height: 422,
    title: "Electronics Three",
  },
  {
    href: "/home-fashion",
    src: "/assets/images/splash/demo-pages/demo-5.webp",
    width: 408,
    height: 422,
    title: "Fashion One",
  },
  {
    href: "/home-furniture",
    src: "/assets/images/splash/demo-pages/demo-8.webp",
    width: 408,
    height: 422,
    title: "Furniture One",
  },
  {
    href: "/home-coffee-store",
    src: "/assets/images/splash/demo-pages/demo-coffee-01.webp",
    width: 469,
    height: 485,
    title: "Coffee Store",
  },
  {
    href: "/home-wedding-accessories",
    src: "/assets/images/splash/demo-pages/demo-wedding-accessories-01.webp",
    width: 408,
    height: 422,
    title: "Wedding Accessories",
  },
  {
    href: "/home-glass",
    src: "/assets/images/splash/demo-pages/demo-3.webp",
    width: 408,
    height: 422,
    title: "Glass One",
  },
  {
    href: "/home-printing-service",
    src: "/assets/images/splash/demo-pages/demo-6.webp",
    width: 408,
    height: 422,
    title: "Print Service One",
  },
  {
    href: "/home-black-friday-sale",
    src: "/assets/images/splash/demo-pages/demo-black-friday-01.webp",
    width: 408,
    height: 422,
    title: "Black Friday Sale",
  },
  {
    href: "/home-kids-cloth",
    src: "/assets/images/splash/demo-pages/demo-kids-cloth-01.webp",
    width: 469,
    height: 485,
    title: "Kids Cloth",
  },
];

export const shopPages: MenuSection[] = [
  {
    title: "Shop Pages",
    items: [
      {
        href: "/shop",
        label: "Shop Default",
        badge: "SHOP",
        badgeColor: "green",
      },
      { href: "/shop-right-sidebar", label: "Shop Right Sidebar" },
      {
        href: "/shop-filter-list-left-sidebar",
        label: "Shop List Left Sidebar",
      },
      {
        href: "/shop-filter-list-right-sidebar",
        label: "Shop List Right Sidebar",
      },
      { href: "/shop-left-sidebar", label: "Shop Left Sidebar" },
      {
        href: "/shop-sticky-sidebar",
        label: "Sticky Sidebar Shop",
        badge: "POPULAR",
        badgeColor: "primary",
      },
      { href: "/shop-collapsible-sidebar", label: "Collapse Sidebar Shop" },
      { href: "/shop-scroll-sidebar", label: "Scroll Sidebar Shop" },
      { href: "/shop-loadmore", label: "Load More Button" },
      { href: "/shop-sm-categories", label: "Shop Small Categories" },
      {
        href: "/products-inside-border-column-shop",
        label: "Bordered inside Products Shop",
      },
      {
        href: "/products-show-rating-shop",
        label: "Products Show Rating",
        badge: "HOT",
        badgeColor: "danger",
      },
    ],
  },
  {
    title: "Custom Pages",
    items: [
      { href: "/shop-filter-grid-two", label: "Two Columns" },
      { href: "/shop-filter-grid-three", label: "Three Columns" },
      {
        href: "/shop-filter-grid-four",
        label: "Four Columns",
        badge: "POPULAR",
        badgeColor: "danger",
        ml: true,
      },
      { href: "/shop-wider", label: "Three Columns Wide" },
      {
        href: "/shop-wider-four",
        label: "Four Columns",
        badge: "POPULAR",
        badgeColor: "green",
        ml: true,
      },
      { href: "/shop-wider-five", label: "Five Columns Wide" },
      { href: "/shop-wider-six", label: "Six Columns Wide" },
      { href: "/shop-featured", label: "Featured Products" },
      { href: "/shop-best-prds", label: "Best Selling Products" },
      { href: "/shop-collapse-filter-top", label: "Hidden Side Bar Shop" },
      {
        href: "/products-show-countdown-shop-style-two",
        label: "Products Show Countdown Two",
      },
      { href: "/products-even-list-shop", label: "Even List Products" },
    ],
  },
  {
    title: "Custom Pages",
    items: [
      { href: "/shop-no-page-heading", label: "Shop No Page Heading" },
      { href: "/shop-by-category", label: "Shop By Category" },
      { href: "/shop-offcanvas-sidebar-left", label: "Shop offcanvas Left" },
      { href: "/shop-offcanvas-sidebar-right", label: "Shop offcanvas Right" },
      { href: "/shop-offcanvas-sidebar-top", label: "Shop offcanvas top" },
      {
        href: "/shop-offcanvas-sidebar-bottom",
        label: "Shop offcanvas Bottom",
      },
      {
        href: "/shop-collapse-filter-bottom",
        label: "Shop Filter Collapse Bottom",
      },
      {
        href: "/shop-collapse-filter-left",
        label: "Shop Filter Collapse Left",
      },
      {
        href: "/shop-collapse-filter-right",
        label: "Shop Filter Collapse Right",
      },
      {
        href: "/products-show-progressbar-shop",
        label: "Products Show Progress-bar",
      },
      {
        href: "/products-show-countdown-shop",
        label: "Products Show Countdown",
      },
      {
        href: "#!",
        label: "Infinite Scroll",
        badge: "Coming Soon",
        badgeColor: "yellow",
      },
      {
        href: "#!",
        label: "Shop Classic",
        badge: "Coming Soon",
        badgeColor: "yellow",
      },
    ],
  },
];

export const productDetailPages: import("@/types").MenuSection[] = [
  {
    title: "Page Design",
    items: [
      { href: "/product-single-default/132", label: "Product Single Default" },
      {
        href: "/product-single-electronics/132",
        label: "Product Single Electronics",
      },
      {
        href: "/product-single-fashion/1",
        label: "Product Single Fashion",
        badge: "TOP",
        badgeColor: "danger",
        ml: true,
      },
      {
        href: "/product-single-furniture/492",
        label: "Product Single Furniture",
      },
      {
        href: "/product-single-cosmetic-beauty/1",
        label: "Product Single Beauty Product",
      },
      {
        href: "/product-single-phone-case/1",
        label: "Product Single Phone Case",
      },
      {
        href: "/product-single-accessories/1",
        label: "Product Single Accessories",
      },
      {
        href: "/product-single-tech-accessories/1",
        label: "Product Single Tech Accessories",
      },
      {
        href: "/product-single-animal-accessories/1",
        label: "Product Single Animal Accessories",
      },
      { href: "/product-single-ladies-bag/1", label: "Product Ladies Bag" },
    ],
  },
  {
    title: "Page Design",
    items: [
      {
        href: "/product-single-laggage-bag/1",
        label: "Product Single Laggage Bag",
      },
      {
        href: "/product-single-printing-service/1",
        label: "Product Single Print Product",
      },
      {
        href: "/product-single-sports-shoe/1",
        label: "Product Keds",
        badge: "POPULAR",
        badgeColor: "green",
        ml: true,
      },
      {
        href: "/product-single-accessories-two/1",
        label: "Product Single Accessories Two",
      },
      {
        href: "/product-single-gallary-two-v360/1",
        label: "Product Single 360 Angle View",
      },
      { href: "/product-single-gallary/1", label: "Product Grid Gallary" },
      {
        href: "/product-single-gallary-two/1",
        label: "Product Grid Gallary Two",
      },
      {
        href: "#!",
        label: "Product Classic",
        badge: "Coming",
        badgeColor: "yellow",
      },
      {
        href: "#!",
        label: "Product Accessories Three",
        badge: "Coming",
        badgeColor: "yellow",
      },
    ],
  },
  {
    title: "Custom Design",
    items: [
      {
        href: "/product-single-sticky-info/1",
        label: "Product Single Sticky Info",
      },
      {
        href: "/product-single-sticky-info-both/1",
        label: "Product Single Sticky Info Both",
      },
      {
        href: "/product-single-sticky-thumb/1",
        label: "Product Single Thumb sticky",
      },
      {
        href: "/product-single-gallary-side-view/1",
        label: "Product Single Side View",
      },
      {
        href: "/product-single-stock-out/132",
        label: "Product Single Out of Stock",
      },
      {
        href: "/product-single-with-buy-more-option/132",
        label: "Product Single with Buy More Option",
      },
      {
        href: "/product-single-with-buy-more-option2/132",
        label: "Product Single with Buy More Option Style 2",
      },
      {
        href: "#!",
        label: "Product Cross-Sell",
        badge: "Coming",
        badgeColor: "yellow",
      },
      {
        href: "#!",
        label: "Product Feature",
        badge: "Coming",
        badgeColor: "yellow",
      },
    ],
  },
  {
    title: "Custom Design",
    items: [
      {
        href: "/product-single-grid/1",
        label: "Product Grid",
        badge: "Trending",
        badgeColor: "red",
        ml: true,
      },
      {
        href: "/product-single-grid-sidebar/1",
        label: "Product Grid With Sidebar",
      },
      { href: "/product-single-masonary/1", label: "Product Single Masonary" },
      {
        href: "/product-single-gallary-side-view-two/1",
        label: "Product Single Side View Two",
      },
      {
        href: "/product-single-gallary-side-view-three/1",
        label: "Product Single Side View Three",
      },
      {
        href: "/product-single-gallary-side-view-four/1",
        label: "Product Single Side View Four",
      },
      {
        href: "/product-single-gallary-two-zoom-v1/280",
        label: "Product Single Zoom01",
      },
      {
        href: "/product-single-gallary-two-zoom-v2/280",
        label: "Product Single Zoom02",
      },
      {
        href: "/product-single-gallary-two-zoom-v3/280",
        label: "Product Single Zoom03",
      },
      {
        href: "#!",
        label: "Product AR Preview",
        badge: "Coming",
        badgeColor: "yellow",
      },
    ],
  },
];

export const productsVarientPage: import("@/types").MenuSection[] = [
  {
    title: "Hover Styles",
    items: [
      { href: "/products-all-info-shop", label: "All Info Products" },
      { href: "/products-scale-hover-shop", label: "Transform Style One" },
      {
        href: "/products-hover-add-tocart-shop",
        label: "Hover Add to Cart",
        badge: "Top",
        badgeColor: "red",
      },
      { href: "/products-standard-shop", label: "Standard Products Shop" },
      { href: "/products-icons-hover-shop", label: "Transform Style Two" },
      { href: "/products-button-onimage-shop", label: "Transform Style Three" },
      {
        href: "/products-additional-info-shop",
        label: "Hover Additional Info",
      },
      {
        href: "/products-button-visible-hover-shop",
        label: "Transform Style Four",
      },
      {
        href: "/products-shadow-hover-shop",
        label: "Shadow Products Shop",
        badge: "POPULAR",
        badgeColor: "green",
      },
      { href: "/products-small-variation-shop", label: "Products Small Size" },
    ],
  },
  {
    title: "Product Styles",
    items: [
      {
        href: "/products-shadow-hover-shop",
        label: "Shadow Products Shop",
        badge: "POPULAR",
        badgeColor: "green",
      },
      { href: "/products-even-grid", label: "Even Grid Products" },
      { href: "/products-border-column-shop", label: "Bordered Products Shop" },
      {
        href: "/products-inside-border-column-shop",
        label: "Bordered inside Products Shop",
      },
      { href: "/products-even-list-shop", label: "Even List Products" },
      {
        href: "/products-show-rating-shop",
        label: "Products Show Rating",
        badge: "HOT",
        badgeColor: "danger",
      },
      {
        href: "/products-show-progressbar-shop",
        label: "Products Show Progress-bar",
      },
      {
        href: "/products-show-countdown-shop",
        label: "Products Show Countdown",
      },
      {
        href: "/products-show-countdown-shop-style-two",
        label: "Products Show Countdown Two",
      },
    ],
  },
  {
    title: "Categories Design",
    items: [
      { href: "/categories-style-circle", label: "Categories Style Circle" },
      {
        href: "/categories-style-round-box",
        label: "Categories Style Round Box",
      },
      {
        href: "/categories-style-button-circle",
        label: "Categories Style Button Circle",
      },
      {
        href: "/categories-style-simple-box",
        label: "Categories Style Simple Box",
      },
      {
        href: "/categories-style-bento-box",
        label: "Categories Style Bento Box",
      },
      {
        href: "/categories-style-linked-box",
        label: "Categories Style Linked Box",
      },
      {
        href: "/categories-style-linked-box-swiper",
        label: "Categories Linked Swiper",
      },
      {
        href: "/categories-style-button-boxed",
        label: "Categories Button Boxed",
      },
      {
        href: "/categories-style-classic-bento",
        label: "Categories Classic Bento",
      },
      { href: "/categories-style-mini-bento", label: "Categories Mini Bento" },
    ],
  },
];

export const featureMenuColumns: import("@/types").MenuSection[] = [
  {
    title: "Configuring Settings",
    items: [
      { href: "/feature-sticky-nav", label: "Sticky navigation" },
      {
        href: "/feature-frequently-baught-together/132",
        label: "Frequently bought together",
      },
      { href: "/feature-catalog-mode", label: "Catalog mode Shop" },
      { href: "/feature-mobile-bottom-nav", label: "Mobile Bottom Navbar" },
      { href: "/feature-sign-in-btn", label: "Sign In to Prices" },
      {
        href: "/shop-collapsible-sidebar",
        label: "Shop Sidebar widgets Collapse",
      },
      { href: "/feature-image-slider", label: "Image Slider" },
      { href: "/feature-sticky-nav", label: "Sticky navigation" },
      {
        href: "#!",
        label: "Product Modern",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Product Customization",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Advanced Search Filters",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
  {
    title: "Product Features",
    items: [
      { href: "/feature-all-image-shop", label: "All Images on Shop" },
      { href: "/feature-size-guide/1", label: "Size Guides PopUp" },
      {
        href: "/feature-product-single-gallary-v360/1",
        label: "Product 360 view",
      },
      {
        href: "/feature-product-video/132",
        label: "Product Video",
        badge: "HOT",
        badgeColor: "danger",
      },
      {
        href: "/feature-special-offer-banner/1",
        label: "Product Special Video",
      },
      {
        href: "/feature-product-stock-progressbar/132",
        label: "Product Stock ProgressBar",
      },
      {
        href: "/feature-product-custom-design-uploder/132",
        label: "Product Custom Design Uploader",
      },
      {
        href: "/feature-product-single-full-width/1",
        label: "FullWidth Product Single",
      },
      { href: "/feature-mobile-bottom-nav", label: "Mobile Bottom Navbar" },
      {
        href: "#!",
        label: "Quick View Feature",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Product Compare",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Product Wishlist Sync",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
  {
    title: "Extra Features",
    items: [
      { href: "/wishlist", label: "Wishlist" },
      { href: "/checkout-delivery-step-one", label: "Checkout Page" },
      { href: "/checkout-delivery-step-two", label: "Checkout Delivery Info" },
      { href: "/checkout-payment", label: "Checkout Payment" },
      { href: "/checkout-shipping", label: "Checkout Shipping" },
      { href: "/checkout-thankyou", label: "Thank You" },
      { href: "/my-order-history", label: "Order History" },
      { href: "/my-reviews", label: "My Reviews" },
      {
        href: "#!",
        label: "Order Tracking",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Loyalty Points Program",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Gift Card Feature",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Subscription Service",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
];

export const innerPageMenuColumns: import("@/types").MenuSection[] = [
  {
    title: "Inner Pages",
    items: [
      { href: "/contact", label: "Contact Page One" },
      { href: "/about", label: "About Us One" },
      { href: "/faq-page-01", label: "FAQs One" },
      { href: "/contact-two", label: "Contact Page Two" },
      { href: "/about-two", label: "About Us Two" },
      { href: "/contact-four", label: "Contact Page Four" },
      { href: "/faq-page-02", label: "FAQs Two" },
      { href: "/find-store", label: "Find A Store" },
      { href: "/compare-product", label: "Compare Products" },
      { href: "/compare-empty-page", label: "Compare Empty" },
    ],
  },
  {
    title: "Inner Pages",
    items: [
      { href: "/team-page-one", label: "Team One" },
      { href: "/team-page-two", label: "Team Two" },
      { href: "/team-page-three", label: "Team Three" },
      { href: "/team-page-four", label: "Team Four" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/error-404", label: "Error 404" },
      { href: "/error-maintanance", label: "Maintanace" },
      { href: "/portfolio-default", label: "Portfolio Default" },
      {
        href: "/portfolio-grid-layout-full-width",
        label: "Portfolio Full Width",
      },
      { href: "/portfolio-details", label: "Portfolio Details" },
    ],
  },
  {
    title: "Inner Pages",
    items: [
      { href: "/blog-default", label: "Blog Default" },
      { href: "/blog-grid", label: "Blog Grid" },
      { href: "/blog-sidebar", label: "Blog Sidebar" },
      { href: "/blog-modern", label: "Blog Modern" },
      { href: "/blog-infinite-scroll", label: "Blog Infinite Scroll" },
      { href: "/blog-load-more", label: "Blog load-more" },
      { href: "/blog-single/1", label: "Blog Details" },
      { href: "/brand-list", label: "Brand List" },
      {
        href: "#!",
        label: "Blog Timeline",
        badge: "Coming",
        badgeColor: "primary",
      },
      {
        href: "#!",
        label: "Blog Gallery",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
  {
    title: "Shop User Pages",
    items: [
      { href: "/my-order-history", label: "Order History" },
      { href: "/my-wishlist", label: "Wishlist" },
      { href: "/my-payment-methods", label: "Payment Methods" },
      { href: "/account-info", label: "Personal info" },
      { href: "/account-notifications", label: "Notifications" },
      { href: "/help-center", label: "User Help Center" },
      { href: "/terms-policy", label: "Terms and conditions" },
      { href: "/signin", label: "Sign In" },
      { href: "/signup", label: "Sign Up" },
      {
        href: "#!",
        label: "Membership Details",
        badge: "Coming",
        badgeColor: "success",
      },
    ],
  },
  {
    title: "E-commerce",
    items: [
      { href: "/cart", label: "Cart Page" },
      {
        href: "/return-policy",
        label: "Return Policy",
        badge: "New",
        badgeColor: "yellow",
      },
      { href: "/wishlist", label: "Wishlist Page" },
      { href: "/checkout-delivery-step-one", label: "Checkout Page" },
      { href: "/checkout-delivery-step-two", label: "Checkout Delivery Info" },
      { href: "/checkout-payment", label: "Checkout Payment" },
      { href: "/checkout-shipping", label: "Checkout Shipping" },
      { href: "/checkout-thankyou", label: "Thank You" },
      { href: "/categories-list", label: "Categories List" },
      { href: "/offer-list-page", label: "Offer List" },
    ],
  },
];

export const elementsMenuColumns: import("@/types").MenuSection[] = [
  {
    title: "Base Elements",
    items: [
      { href: "/element-titles", label: "Title Styles" },
      { href: "/element-carousels", label: "Carousels Styles" },
      { href: "/element-sliders", label: "Sliders Styles" },
      { href: "/element-product-banner", label: "Banner Styles" },
      { href: "/element-button", label: "Button Styles" },
      { href: "/element-brands", label: "Brands Styles" },
      { href: "/element-list-styles", label: "List Styles" },
      {
        href: "#!",
        label: "Icon Box Styles",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
  {
    title: "Template Elements",
    items: [
      { href: "/element-hotspot-styles", label: "Hotspot Styles" },
      { href: "/element-countdown-styles", label: "Countdown Styles" },
      { href: "/element-insta-post", label: "Instagram Posts" },
      { href: "/element-products", label: "Product Card Styles" },
      { href: "/element-catagories-style", label: "Catagories Card Styles" },
      { href: "/element-video-styles", label: "Video Styles" },
      { href: "/element-header-styles", label: "Header Styles" },
      { href: "/element-footer-styles", label: "Footer Styles" },
    ],
  },
  {
    title: "Template Elements",
    items: [
      { href: "/element-table-styles", label: "Table Styles" },
      { href: "/element-social-buttons", label: "Social Buttons" },
      { href: "/element-image-gallary", label: "Image Gallary" },
      { href: "/element-team-styles", label: "Team Card Styles" },
      { href: "/element-accordion-styles", label: "Accordion Styles" },
      { href: "/element-portfolio-styles", label: "Portfolio Card Styles" },
      { href: "/element-blog-styles", label: "Blog Card Styles" },
      { href: "/element-review-card", label: "Review Cards" },
    ],
  },
  {
    title: "E-Commerce",
    items: [
      { href: "/element-recent-products", label: "Recent Products" },
      { href: "/element-featured-products", label: "Featured Products" },
      {
        href: "/element-best-selling-products",
        label: "Best Selling Products",
      },
      { href: "/element-single-product", label: "Single Product" },
      { href: "/element-sale-products", label: "Sale Products" },
      { href: "/element-pricing", label: "Pricing Styles" },
      { href: "/element-cart", label: "Cart Styles" },
      {
        href: "#",
        label: "Order Tracking",
        badge: "Coming",
        badgeColor: "primary",
      },
    ],
  },
];

export const uxMenuColumns: import("@/types").MenuSection[] = [
  {
    title: "Ultimate User Experience",
    items: [
      { href: "/customize-options", label: "Advanced Customizations" },
      { href: "/page-options", label: "Powerful Page Options" },
      {
        href: "/performance",
        label: "Fast Performance",
        badge: "Hot",
        badgeColor: "red",
      },
      { href: "/header-builder", label: "Ultimate Header Builder" },
      { href: "/footer-builder", label: "Excessive Footer Builder" },
      { href: "/advanced-megamenu", label: "Advanced Mega Menu" },
      { href: "/popup-builder", label: "Popup & Sidebar Search" },
      {
        href: "/boost-features",
        label: "All Boost Sales Features",
        badge: "New",
        badgeColor: "primary",
      },
      { href: "/mobile-first", label: "Mobile-first Experience" },
      {
        href: "#!",
        label: "User Feedback",
        badge: "Coming",
        badgeColor: "yellow",
      },
      {
        href: "#!",
        label: "Seamless Integration",
        badge: "Coming",
        badgeColor: "yellow",
      },
    ],
  },
  {
    title: "Flexible Shopping",
    items: [
      { href: "/product-filtering", label: "Smart Product Filtering" },
      {
        href: "/variant-switcher",
        label: "Variant Swatches",
        badge: "Fully Ready",
        badgeColor: "secondary",
      },
      { href: "/compare-table-builder", label: "Product Compare" },
      { href: "/wishlist-builder", label: "WishLists Builder" },
      { href: "/quick-view", label: "Quick View" },
      { href: "/flash-sell-management", label: "Flash Sales Management" },
      {
        href: "/cart-builder",
        label: "Cart Upsell",
        badge: "New",
        badgeColor: "primary",
      },
      { href: "/size-chart-builder", label: "Size Chart Builder" },
      { href: "/sticky-cart-builder", label: "Sticky Add To Cart" },
      { href: "/product-display", label: "Product Video & 3D View" },
      { href: "/multi-step-checkout", label: "Multi-Step Checkout" },
    ],
  },
  {
    title: "Boost Sales",
    items: [
      { href: "/notifications", label: "Back To Stock Notification" },
      { href: "/sales-popup", label: "Sales Popup" },
      { href: "/pre-order", label: "Pre Order" },
      { href: "/backorder", label: "Backorder" },
      { href: "/partial-payment", label: "Partial Payment" },
      { href: "/shareable-cart", label: "Shareable Cart" },
      { href: "/bulk-amount-purchase", label: "Bulk Amount Purchase" },
      { href: "/stock-progressbar", label: "Stock Progress Bar" },
      { href: "/sale-push-notification", label: "Sales Push Notification" },
      { href: "/offer-management", label: "Special Offers Management" },
      { href: "/free-shipping", label: "Free Shipping Threshold" },
    ],
  },
];

export const categoryMegamenus: CategoryMegamenu[] = [
  {
    label: "Home & Garden",
    icon: "fa-regular fa-house-chimney",
    href: "/shop-by-categories",
    sections: [
      {
        title: "Home & Garden",
        items: [
          { href: "/shop-by-category", label: "Furniture" },
          { href: "/shop-by-category", label: "Living Room Sets" },
          { href: "/shop-by-category", label: "Sofas & Couches" },
          { href: "/shop-by-category", label: "Coffee Tables" },
          { href: "/shop-by-category", label: "Bedroom Furniture" },
          { href: "/shop-by-category", label: "Mattresses & Bedding" },
          { href: "/shop-by-category", label: "Wardrobes & Storage" },
        ],
      },
      {
        title: "More Home & Garden",
        items: [
          { href: "/shop-by-category", label: "Home Decor" },
          { href: "/shop-by-category", label: "Clocks & Mirrors" },
          { href: "/shop-by-category", label: "Curtains & Blinds" },
          { href: "/shop-by-category", label: "Rugs & Carpets" },
          { href: "/shop-by-category", label: "Lighting & Lamps" },
          { href: "/shop-by-category", label: "Outdoor Furniture" },
          { href: "/shop-by-category", label: "BBQ & Grills" },
        ],
      },
    ],
    banner: {
      title: "All For Garden",
      desc: "Send your idea, appear Unimart.",
      btnHref: "/product-single-default/132",
      btnText: "View Details",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-garden.webp",
      imgWidth: 518,
      imgHeight: 424,
      bannerInnerClass: "rbt-bg-color-extra-six",
    },
  },
  {
    label: "Smart Phones",
    icon: "fa-regular fa-mobile-notch",
    href: "/shop-by-categories",
    sections: [
      {
        title: "Smart Phones",
        items: [
          { href: "/shop-by-category", label: "Latest Models" },
          { href: "/shop-by-category", label: "5G Phones" },
          { href: "/shop-by-category", label: "Android Phones" },
          { href: "/shop-by-category", label: "iPhones" },
          { href: "/shop-by-category", label: "Gaming Phones" },
          { href: "/shop-by-category", label: "Budget Phones" },
          { href: "/shop-by-category", label: "Accessories" },
        ],
      },
      {
        title: "Tablets & Accessories",
        items: [
          { href: "/shop-by-category", label: "Latest Tablets" },
          { href: "/shop-by-category", label: "Android Tablets" },
          { href: "/shop-by-category", label: "iPads" },
          { href: "/shop-by-category", label: "Tablet Keyboards" },
          { href: "/shop-by-category", label: "Stylus Pens" },
          { href: "/shop-by-category", label: "Screen Protectors" },
          { href: "/shop-by-category", label: "Tablet Cases" },
        ],
      },
    ],
    banner: {
      title: "Apple 16 Pro",
      desc: "Send your idea, appear Unimart.",
      btnHref: "#",
      btnText: "View Details",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-apple.webp",
      imgWidth: 520,
      imgHeight: 408,
      bannerCardClass: "rbt-bg-style-box rbt-bg-two",
    },
  },
  {
    label: "Electronics Gadgets",
    icon: "fa-regular fa-desktop",
    href: "/shop-by-categories",
    sections: [
      {
        title: "Wearable Tech",
        items: [
          { href: "/shop-by-category", label: "Smartwatches" },
          { href: "/shop-by-category", label: "Fitness Trackers" },
          { href: "/shop-by-category", label: "VR & AR Headsets" },
          { href: "/shop-by-category", label: "Smart Glasses" },
          { href: "/shop-by-category", label: "Sleep Trackers" },
          { href: "/shop-by-category", label: "Wearable Cameras" },
          { href: "/shop-by-category", label: "Wireless Earbuds" },
        ],
      },
      {
        title: "Smart Home & Office",
        items: [
          { href: "/shop-by-category", label: "Smart Speakers" },
          { href: "/shop-by-category", label: "Smart Plugs & Lights" },
          { href: "/shop-by-category", label: "Home Security Systems" },
          { href: "/shop-by-category", label: "Streaming Devices" },
          { href: "/shop-by-category", label: "External Monitors" },
          { href: "/shop-by-category", label: "Portable Projectors" },
        ],
      },
    ],
    banner: {
      title: "Straps of Colors",
      desc: "Send your idea, appear Unimart.",
      btnHref: "/product-single-default/132",
      btnText: "View Details",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-02-lg.webp",
      imgWidth: 520,
      imgHeight: 424,
      bannerCardClass: "rbt-bg-color-brand-50 rbt-rounded--12",
    },
  },
];

export const categorySimpleLinks: {
  href: string;
  label: string;
  icon: string;
}[] = [
  {
    href: "/shop-by-categories",
    label: "Fashion Wear",
    icon: "fa-regular fa-shirt",
  },
  {
    href: "/shop-by-categories",
    label: "Cameras & Photo",
    icon: "fa-regular fa-camera",
  },
  {
    href: "/shop-by-categories",
    label: "Cooking Items",
    icon: "fa-regular fa-cauldron",
  },
  {
    href: "/shop-by-categories",
    label: "Health & Beauty",
    icon: "fa-regular fa-heart-pulse",
  },
];

export const supportMenuItems: MenuItem[] = [
  {
    href: "https://nextjs.getunimart.com/docs",
    label: "Documentation",
  },
  {
    href: "https://www.youtube.com/@rainbow-themes/videos",
    label: "Video Tutorials",
  },
  {
    href: "https://support.rainbowit.net/support/login",
    label: "Support Center",
    badge: "24/7",
    badgeColor: "green",
  },
  {
    href: "https://nextjs.getunimart.com/docsdoc-changelog",
    label: "Change Log",
    useLink: true, // force use of <Link> for this one
  },
  {
    href: "https://rainbowthemes.net/contact/",
    label: "Contact Us",
  },
  {
    href: "https://rainbowthemes.net/faqs/",
    label: "FAQ",
  },
  {
    href: "https://rainbowthemes.net/services/",
    label: "Customization",
  },
];

export const navBrandList: { src: string; width: number; height: number }[] = [
  { src: "/assets/images/brands/brand-a-01.webp", width: 90, height: 30 },
  { src: "/assets/images/brands/brand-a-02.webp", width: 137, height: 26 },
  { src: "/assets/images/brands/brand-a-03.webp", width: 91, height: 16 },
  { src: "/assets/images/brands/brand-a-04.webp", width: 91, height: 18 },
  { src: "/assets/images/brands/brand-a-05.webp", width: 106, height: 26 },
  { src: "/assets/images/brands/brand-a-06.webp", width: 119, height: 14 },
  { src: "/assets/images/brands/brand-a-07.webp", width: 105, height: 16 },
  { src: "/assets/images/brands/brand-a-01.webp", width: 90, height: 30 },
  { src: "/assets/images/brands/brand-a-02.webp", width: 137, height: 26 },
  { src: "/assets/images/brands/brand-a-03.webp", width: 91, height: 16 },
];
export const productCategories = [
  { id: "cat-1", href: "#", icon: "fa-regular fa-chair", title: "Chairs" },
  { id: "cat-2", href: "#", icon: "fa-regular fa-bath", title: "Bathroom" },
  { id: "cat-3", href: "#", icon: "fa-regular fa-lamp", title: "Lamp" },
  { id: "cat-4", href: "#", icon: "fa-regular fa-chair", title: "Bedroom" },
  {
    id: "cat-5",
    href: "#",
    icon: "fa-regular fa-booth-curtain",
    title: "Curtains",
  },
  {
    id: "cat-6",
    href: "#",
    icon: "fa-regular fa-lamp-street",
    title: "Lighting",
  },
  {
    id: "cat-7",
    href: "#",
    icon: "fa-regular fa-microwave",
    title: "microwave",
  },
  { id: "cat-8", href: "#", icon: "fa-regular fa-utensils", title: "Utensils" },
  {
    id: "cat-9",
    href: "#",
    icon: "fa-sharp fa-regular fa-flower-tulip",
    title: "Flower Pot",
  },
  {
    id: "cat-10",
    href: "#",
    icon: "fa-regular fa-microwave",
    title: "microwave",
  },
];
