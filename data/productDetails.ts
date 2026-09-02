import type {
  ProductFaq,
  ProductFeature,
  ProductSpecification,
  ReviewComment,
  ReviewMediaItem,
} from "@/types/product-details";

export type {
  ProductFaq,
  ProductFeature,
  ProductSpecification,
  ReviewComment,
  ReviewMediaItem,
} from "@/types/product-details";

export const REVIEW_MEDIA_ITEMS: ReviewMediaItem[] = [
  {
    id: "review-image-1",
    type: "image",
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    thumbSrc: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    alt: "Review Image 1",
  },
  {
    id: "review-image-2",
    type: "image",
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    thumbSrc: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    alt: "Review Image 2",
  },
  {
    id: "review-image-3",
    type: "image",
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    thumbSrc: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    alt: "Review Image 3",
  },
  {
    id: "review-image-4",
    type: "image",
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    thumbSrc: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    alt: "Review Image 4",
  },
  {
    id: "review-video-1",
    type: "video",
    src: "https://www.youtube.com/embed/S2650pS8Vf0?si=O6p8K4h1O6O4P0Q0",
    thumbSrc: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    alt: "Review Video 1",
  },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "feature-1",
    title: "The Ultimate in Audio Excellence",
    desc: "At vero eos et accusamus et iusto dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    icon: "fa-sharp fa-regular fa-headphones",
  },
  {
    id: "feature-2",
    title: "Crystal Clear Sound Quality",
    desc: "At vero eos et accusamus et iusto dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    icon: "fa-sharp fa-regular fa-microphone",
  },
  {
    id: "feature-3",
    title: "Advanced Noise Cancellation",
    desc: "At vero eos et accusamus et iusto dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    icon: "fa-sharp fa-regular fa-volume-high",
  },
];

export const PRODUCT_SPECIFICATIONS: ProductSpecification[] = [
  { id: "spec-1", label: "Model Number", value: "HN-508801" },
  { id: "spec-2", label: "Brand", value: "Unimart" },
  { id: "spec-3", label: "Color", value: "Black, White, Blue" },
  { id: "spec-4", label: "Weight", value: "250g" },
  { id: "spec-5", label: "Battery Life", value: "Up to 40 hours" },
  { id: "spec-6", label: "Charging Time", value: "2 hours" },
  { id: "spec-7", label: "Connectivity", value: "Bluetooth 5.0" },
  { id: "spec-8", label: "Water Resistance", value: "IPX4" },
];

export const productReviews: ReviewComment[] = [
  {
    id: 1,
    author: "Andrew Simon",
    imgSrc: "/assets/images/blog-details/blog-commenter-1.webp",
    rating: 3,
    date: "Nov 23, 2018 at 12:23 pm",
    title: "No longer available to buy new",
    desc: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
    hasMedia: true,
  },
  {
    id: 2,
    author: "Mila Kunis",
    imgSrc: "/assets/images/blog-details/blog-commenter-2.webp",
    rating: 3,
    date: "Nov 23, 2018 at 12:23 pm",
    title: "No longer available to buy new",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus lacinia. Vestibulum vitae leo id diam pellentesque ornare.",
  },
  {
    id: 3,
    author: "John Doe",
    imgSrc: "/assets/images/blog-details/blog-commenter-3.webp",
    rating: 3,
    date: "Nov 23, 2018 at 12:23 pm",
    title: "No longer available to buy new",
    desc: "Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.",
  },
];

export const productFaqs: ProductFaq[] = [
  {
    id: "collapseOne1",
    question: "What if I just had renovation work done?",
    answer: "If you've recently had renovation work done, we can provide specialized cleaning services tailored to post-renovation needs. Our team is equipped to handle the extra dust and debris that comes with renovations, ensuring your space is spotless and ready for use.",
  },
  {
    id: "collapseOne2",
    question: "I have a lot of items that need to be clean separately",
    answer: "If you've recently had renovation work done, we can provide specialized cleaning services tailored to post-renovation needs. Our team is equipped to handle the extra dust and debris that comes with renovations, ensuring your space is spotless and ready for use.",
  },
  {
    id: "collapseOne3",
    question: "How long does it take you to clean our Office?",
    answer: "If you've recently had renovation work done, we can provide specialized cleaning services tailored to post-renovation needs. Our team is equipped to handle the extra dust and debris that comes with renovations, ensuring your space is spotless and ready for use.",
  },
  {
    id: "collapseOne4",
    question: "Do I have to move all the heavy items for the clean?",
    answer: "If you've recently had renovation work done, we can provide specialized cleaning services tailored to post-renovation needs. Our team is equipped to handle the extra dust and debris that comes with renovations, ensuring your space is spotless and ready for use.",
  },
];

export const DEFAULT_QUICKVIEW_IMAGES = [
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
];

export const QUICKVIEW_BRANDS = [
  {
    id: "brand-1",
    name: "Brand",
    content: "Product Brand",
    imgSrc: "/assets/images/icons/small-brand/sm-brand-b-01.webp",
    width: 78,
    height: 48,
  },
  {
    id: "brand-2",
    name: "All Europe",
    content: "All Europe Delivery",
    imgSrc: "/assets/images/icons/small-brand/sm-brand-b-02.webp",
    width: 40,
    height: 41,
  },
  {
    id: "brand-3",
    name: "Verified",
    content: "Verified Product",
    imgSrc: "/assets/images/icons/small-brand/sm-brand-b-03.webp",
    width: 40,
    height: 41,
    isSpan: true,
  },
];

export const QUICKVIEW_STYLES = [
  { id: "style-1", label: "Headphones Only", active: true },
  { id: "style-2", label: "Charging Stand" },
  { id: "style-3", label: "Headphones + Charging Stand", disabled: true },
];
