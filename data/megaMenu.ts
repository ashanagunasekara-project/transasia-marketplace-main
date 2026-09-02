// Mega-menu category dropdown data
// Previously this was hardcoded inline in Header4/8/9/9Transparent/17/20/22 (each ~1000 lines)

import type { MegaMenuCategory } from "@/types/menu";

export type {
  MegaMenuBanner,
  MegaMenuCategory,
  MegaMenuColumn,
  MegaMenuLink,
} from "@/types/menu";

const SHOP_BY_CATEGORY = "/shop-by-category";
const SHOP_BY_CATEGORIES = "/shop-by-categories";

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    label: "Home & Garden",
    icon: "fa-regular fa-house-chimney",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: true,
    columns: [
      {
        title: "Home & Garden",
        links: [
          { label: "Furniture", href: SHOP_BY_CATEGORY },
          { label: "Living Room Sets", href: SHOP_BY_CATEGORY },
          { label: "Sofas & Couches", href: SHOP_BY_CATEGORY },
          { label: "Coffee Tables", href: SHOP_BY_CATEGORY },
          { label: "Bedroom Furniture", href: SHOP_BY_CATEGORY },
          { label: "Mattresses & Bedding", href: SHOP_BY_CATEGORY },
          { label: "Wardrobes & Storage", href: SHOP_BY_CATEGORY },
        ],
      },
      {
        title: "More Home & Garden",
        links: [
          { label: "Home Decor", href: SHOP_BY_CATEGORY },
          { label: "Clocks & Mirrors", href: SHOP_BY_CATEGORY },
          { label: "Curtains & Blinds", href: SHOP_BY_CATEGORY },
          { label: "Rugs & Carpets", href: SHOP_BY_CATEGORY },
          { label: "Lighting & Lamps", href: SHOP_BY_CATEGORY },
          { label: "Outdoor Furniture", href: SHOP_BY_CATEGORY },
          { label: "BBQ & Grills", href: SHOP_BY_CATEGORY },
        ],
      },
    ],
    banner: {
      title: "All For Garden",
      desc: "Send your idea, appear Unimart.",
      btnLabel: "View Details",
      btnHref: "/product-single-default/132",
      btnClass: "rbt-btn rbt-btn-sm rbt-btn-black",
      cardClass: "rbt-menu-offer-card",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-garden.webp",
      imgWidth: 518,
      imgHeight: 424,
    },
  },
  {
    label: "Smart Phones",
    icon: "fa-regular fa-mobile-notch",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: true,
    columns: [
      {
        title: "Smart Phones",
        links: [
          { label: "Latest Models", href: SHOP_BY_CATEGORY },
          { label: "5G Phones", href: SHOP_BY_CATEGORY },
          { label: "Android Phones", href: SHOP_BY_CATEGORY },
          { label: "iPhones", href: SHOP_BY_CATEGORY },
          { label: "Gaming Phones", href: SHOP_BY_CATEGORY },
          { label: "Budget Phones", href: SHOP_BY_CATEGORY },
          { label: "Accessories", href: SHOP_BY_CATEGORY },
        ],
      },
      {
        title: "Tablets & Accessories",
        links: [
          { label: "Latest Tablets", href: SHOP_BY_CATEGORY },
          { label: "Android Tablets", href: SHOP_BY_CATEGORY },
          { label: "iPads", href: SHOP_BY_CATEGORY },
          { label: "Tablet Keyboards", href: SHOP_BY_CATEGORY },
          { label: "Stylus Pens", href: SHOP_BY_CATEGORY },
          { label: "Screen Protectors", href: SHOP_BY_CATEGORY },
          { label: "Tablet Cases", href: SHOP_BY_CATEGORY },
        ],
      },
    ],
    banner: {
      title: "Apple 16 Pro",
      titleClass: "title rbt-text-color-white",
      desc: "Send your idea, appear Unimart.",
      descClass: "b3 desc rbt-text-color-gray-200",
      btnLabel: "View Details",
      btnHref: "#",
      btnClass: "rbt-btn rbt-btn-sm",
      cardClass: "rbt-menu-offer-card rbt-bg-style-box rbt-bg-two",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-apple.webp",
      imgWidth: 520,
      imgHeight: 408,
    },
  },
  {
    label: "Electronics Gadgets",
    icon: "fa-regular fa-desktop",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: true,
    columns: [
      {
        title: "Wearable Tech",
        links: [
          { label: "Smartwatches", href: SHOP_BY_CATEGORY },
          { label: "Fitness Trackers", href: SHOP_BY_CATEGORY },
          { label: "VR & AR Headsets", href: SHOP_BY_CATEGORY },
          { label: "Smart Glasses", href: SHOP_BY_CATEGORY },
          { label: "Sleep Trackers", href: SHOP_BY_CATEGORY },
          { label: "Wearable Cameras", href: SHOP_BY_CATEGORY },
          { label: "Wireless Earbuds", href: SHOP_BY_CATEGORY },
        ],
      },
      {
        title: "Smart Home & Office",
        links: [
          { label: "Smart Speakers", href: SHOP_BY_CATEGORY },
          { label: "Smart Plugs & Lights", href: SHOP_BY_CATEGORY },
          { label: "Home Security Systems", href: SHOP_BY_CATEGORY },
          { label: "Streaming Devices", href: SHOP_BY_CATEGORY },
          { label: "External Monitors", href: SHOP_BY_CATEGORY },
          { label: "Portable Projectors", href: SHOP_BY_CATEGORY },
        ],
      },
    ],
    banner: {
      title: "Straps of Colors",
      desc: "Send your idea, appear Unimart.",
      btnLabel: "View Details",
      btnHref: "/product-single-default/132",
      btnClass: "rbt-btn rbt-btn-sm rbt-btn-black",
      cardClass: "rbt-menu-offer-card rbt-bg-color-brand-50 rbt-rounded--12",
      imgSrc: "/assets/images/splash/menu-banner/menu-prd-02-lg.webp",
      imgWidth: 520,
      imgHeight: 424,
    },
  },
  {
    label: "Fashion Wear",
    icon: "fa-regular fa-shirt",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: false,
  },
  {
    label: "Cameras & Photo",
    icon: "fa-regular fa-camera",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: false,
  },
  {
    label: "Cooking Items",
    icon: "fa-regular fa-cauldron",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: false,
  },
  {
    label: "Health & Beauty",
    icon: "fa-regular fa-heart-pulse",
    href: SHOP_BY_CATEGORIES,
    hasMegaPanel: false,
  },
];
