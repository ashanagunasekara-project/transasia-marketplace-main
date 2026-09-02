import { Portfolio } from "@/types";
import type {
  IsotopFilter,
  IsotopPortfolioItem,
  PortfolioCardItem,
} from "@/types/portfolio";

export type {
  IsotopFilter,
  IsotopPortfolioItem,
  PortfolioCardItem,
} from "@/types/portfolio";

export const portfolios: Portfolio[] = [
  {
    title: "Sleek Leather Wallet Case",
    subtitle: "Ultra-thin design",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Shockproof Rugged Case",
    subtitle: "Heavy-duty protection",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Minimalist Slim Fit Case",
    subtitle: "Premium leather exterior",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
  {
    title: "Transparent Clear Protection Case",
    subtitle: "Crystal-clear protection",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Eco-Friendly Bamboo Case",
    subtitle: "Ardholder and cash pocket",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Stylish Marble Design Case",
    subtitle: "Designed to absorb impact",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
];

export const portfolioGridThreeItems: PortfolioCardItem[] = [
  {
    title: "Sleek Leather Wallet Case",
    subtitle: "Ultra-thin design",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Shockproof Rugged Case",
    subtitle: "Heavy-duty protection",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Minimalist Slim Fit Case",
    subtitle: "Premium leather exterior",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
  {
    title: "Transparent Clear Protection Case",
    subtitle: "Crystal-clear protection",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Eco-Friendly Bamboo Case",
    subtitle: "Ardholder and cash pocket",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Stylish Marble Design Case",
    subtitle: "Designed to absorb impact",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
];

export const portfolioGridFourColoumnItems: PortfolioCardItem[] = [
  {
    title: "Magnetic Flip Case",
    subtitle: "Convenient magnetic",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Luxury Marble Case",
    subtitle: "Elegant marble",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Heavy-Duty Hybrid Case",
    subtitle: "Dual-layer protection",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
  {
    title: "Luxury Marble Case",
    subtitle: "Elegant marble",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Slim Fit Protection",
    subtitle: "Ultra-thin design",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
  },
  {
    title: "Rugged Defender",
    subtitle: "Heavy-duty protection",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Sleek Leather Case",
    subtitle: "Premium leather exterior",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Clear View Case",
    subtitle: "Crystal-clear protection",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
];

export const isotopFilters: IsotopFilter[] = [
  { label: "All Together", filter: "*", isActive: true },
  { label: "Fashion", filter: ".fashion" },
  { label: "Accessories", filter: ".accessories" },
  { label: "Furniture", filter: ".furniture" },
  { label: "Electronics", filter: ".electronics" },
  { label: "Cosmetics", filter: ".cosmetics" },
  { label: "️‍🔥 Coming Soon", filter: ".coming-soon" },
];

export const isotopPortfolios: IsotopPortfolioItem[] = [
  {
    title: "Sleek Leather Wallet Case",
    subtitle: "Ultra-thin design",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "Shockproof Rugged Case",
    subtitle: "Heavy-duty protection",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "Minimalist Slim Fit Case",
    subtitle: "Premium leather exterior",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "fashion",
  },
  {
    title: "Transparent Clear Protection Case",
    subtitle: "Crystal-clear protection",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "accessories",
  },
  {
    title: "Eco-Friendly Bamboo Case",
    subtitle: "Ardholder and cash pocket",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "furniture",
  },
  {
    title: "Stylish Marble Design Case",
    subtitle: "Designed to absorb impact",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "electronics",
  },
  {
    title: "Vibrant Silicone Grip Case",
    subtitle: "Sustainable and stylish",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "cosmetics",
  },
  {
    title: "Eco-Friendly Case",
    subtitle: "Convenient magnetic closure",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "Dual-layer protection",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "accessories",
  },
  {
    title: "Clear View Case",
    subtitle: "Elegant marble",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "accessories",
  },
  {
    title: "Magnetic Flip Case",
    subtitle: "Ultra-thin design",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "accessories",
  },
  {
    title: "Slim Fit Protection Subtitle",
    subtitle: "Heavy-duty protection",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "accessories",
  },
];

export const isotopPortfoliosWiderTwo: IsotopPortfolioItem[] = [
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "fashion",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "furniture",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "electronics",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "cosmetics",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-1.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-2.webp",
    filterClassName: "accessories",
  },
  {
    title: "App Development",
    subtitle: "development",
    img: "/assets/images/product-banner/product-banner-phone-b-3.webp",
    filterClassName: "accessories",
  },
];
