import type {
  ElevateFeature,
  KeyFeature,
  OceanTemplateSlide,
} from "@/types/misc";

export type {
  ElevateFeature,
  KeyFeature,
  OceanTemplateSlide,
} from "@/types/misc";

export const keyFeatures: KeyFeature[] = [
  {
    id: "kf-1",
    preTitle: "For Business Owners",
    title: "Launch Your Website in Minutes",
    items: [
      { icon: "fa-regular fa-laptop", text: "100+ Ready Demos" },
      { icon: "fa-regular fa-code", text: "Make your own website with Unimart", marquee: true },
      { icon: "fa-regular fa-sack-dollar", text: "Start Selling Instantly" },
    ],
    thumbSrc: "/assets/images/splash/feature/thumbnail-1.webp",
    cardVariation: "rbt-card-var-1",
  },
  {
    id: "kf-2",
    preTitle: "For Freelancers",
    title: "Effortless Client Success & Earn Quickly",
    items: [
      { icon: "fa-regular fa-gear", text: "1000+ built-in features" },
      { icon: "fa-regular fa-bolt", text: "Fast, Client Ready Project", marquee: true },
      { icon: "fa-regular fa-puzzle-piece-simple", text: "Unlimited Free Updates" },
    ],
    thumbSrc: "/assets/images/splash/feature/thumbnail-3.webp",
    cardVariation: "rbt-card-var-3",
  },
  {
    id: "kf-3",
    preTitle: "For Agencies",
    title: "Complete eCommerce Solution Package",
    items: [
      { icon: "fa-regular fa-cube", text: "All in one eCommerce Packages" },
      { icon: "fa-regular fa-truck-bolt", text: "Fast Client Deliveries" },
      { icon: "fa-regular fa-check", text: "Complete in record time", marquee: true },
    ],
    thumbSrc: "/assets/images/splash/feature/thumbnail-2.webp",
    cardVariation: "rbt-card-var-2",
  },
];

export const elevateFeatures: ElevateFeature[] = [
  {
    id: "ef-1",
    type: 1,
    preTitle: "The Latest",
    title: "Technology Support",
    desc: "Provide seamless technology support. Ensuring reliable solutions for all your technical challenges",
    mainImg: "/assets/images/splash/feature/image1.webp",
    icons: [
      { src: "/assets/images/splash/feature/check-icon.png", className: "icon", width: 64, height: 64 },
      { src: "/assets/images/splash/feature/icon3.png", className: "icon icon-2", width: 267, height: 70 },
    ],
    cardClass: "rbt-feature-card-1 rbt-curved-style-box",
  },
  {
    id: "ef-2",
    type: 2,
    preTitle: "User Friendly",
    title: "The Mobile First Design",
    desc: "You can suggest collection of products to customers for any specific product.",
    mainImg: "/assets/images/splash/feature/image2.webp",
    cardClass: "rbt-feature-card-2",
  },
  {
    id: "ef-3",
    type: 3,
    preTitle: "Optimized for",
    title: "Multi-device responsiveness",
    mainImg: "/assets/images/splash/feature/image3.webp",
    cardClass: "rbt-feature-card-3",
  },
  {
    id: "ef-4",
    type: 4,
    preTitle: "Most Dynamic",
    title: "Optimized for SEO",
    desc: "Higher in search results and drive organic traffic.",
    mainImg: "/assets/images/splash/feature/image4.webp",
    icons: [
      { src: "/assets/images/splash/feature/icon1.png", className: "icon", width: 102, height: 112 },
    ],
    cardClass: "rbt-feature-card-4",
  },
  {
    id: "ef-5",
    type: 5,
    title: "Cross Browser Compatible",
    preTitle: "All Available Browsers",
    desc: "Our templates are compatible with all major browsers. Choose your favorite browser.",
    mainImg: "/assets/images/splash/feature/image5.webp",
    icons: [
      { src: "/assets/images/splash/feature/icon4.png", className: "icon", width: 170, height: 171 },
    ],
    cardClass: "rbt-feature-card-7 h-100",
  },
  {
    id: "ef-6",
    type: 6,
    title: "Multiple Styles of Pages",
    preTitle: "Unique & Attractive",
    desc: "Offer a versatile browsing experience with multiple styles of pages designed to suit diverse needs.",
    mainImg: "/assets/images/splash/feature/image6.webp",
    cardClass: "rbt-curved-style-box rbt-feature-card-8 h-100",
  },
];

export const oceanTemplateSlides: OceanTemplateSlide[] = [
  {
    id: "os-1",
    preTitle: "Explore the Vast",
    title: "Ocean of Templates",
    desc: "Ocean of Templates offers the best FREE collection of website designs and simplify the process of designing them.",
    imgSrc: "/assets/images/splash/feature/slide-img-1.webp",
  },
  {
    id: "os-2",
    preTitle: "Explore the Vast",
    title: "Stunning Product Cards",
    desc: "Showcasing your products with style, charm, and purpose to captivate users at first glance.",
    imgSrc: "/assets/images/splash/feature/slide-img-2.webp",
  },
  {
    id: "os-3",
    preTitle: "Explore the Vast",
    title: "Single Product Elegance",
    desc: "A detailed layout for individual products that highlights every feature, ensuring a memorable shopping experience.",
    imgSrc: "/assets/images/splash/feature/slide-img-3.webp",
  },
];
