import type { CategorySidebarItem } from "@/types/misc";

export type { CategorySidebarItem } from "@/types/misc";

export const categorySidebarData: CategorySidebarItem[] = [
  {
    id: "1",
    title: "Camera & Photo",
    description: "Popular Camera & Photo accessories",
    icon: "fa-camera",
    subCategories: [
      {
        id: "1-1",
        title: "Action Camera",
        image: "/assets/images/product-img/sidebar-category/category-product-7.webp",
        links: [
          { title: "Sports Cameras", url: "/shop-by-category" },
          { title: "Underwater Cameras", url: "/shop-by-category" },
          { title: "360 Cameras", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-2",
        title: "Camera lenses",
        image: "/assets/images/product-img/sidebar-category/category-product-8.webp",
        links: [
          { title: "VR Cameras", url: "/shop-by-category" },
          { title: "Panoramic Cameras", url: "/shop-by-category" },
          { title: "3D Cameras", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-3",
        title: "Digital Camera",
        image: "/assets/images/product-img/sidebar-category/category-product-9.webp",
        links: [
          { title: "Drone Cameras", url: "/shop-by-category" },
          { title: "Helmet Cameras", url: "/shop-by-category" },
          { title: "Dual-Lens Cameras", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-4",
        title: "DSLR",
        image: "/assets/images/product-img/sidebar-category/category-product-10.webp",
        links: [
          { title: "Compact 360 Cameras", url: "/shop-by-category" },
          { title: "DSLR Cameras", url: "/shop-by-category" },
          { title: "Mirrorless Cameras", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-5",
        title: "Handycam",
        image: "/assets/images/product-img/sidebar-category/category-product-11.webp",
        links: [
          { title: "Point-and-Shoot Cameras", url: "/shop-by-category" },
          { title: "Bridge Cameras", url: "/shop-by-category" },
          { title: "Compact Cameras", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-6",
        title: "Mirrorless Camera",
        image: "/assets/images/product-img/sidebar-category/category-product-12.webp",
        links: [
          { title: "Full-Frame Mirrorless", url: "/shop-by-category" },
          { title: "APS-C Mirrorless", url: "/shop-by-category" },
          { title: "Micro Four Thirds Mirrorless", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-7",
        title: "Dash Cam",
        image: "/assets/images/product-img/sidebar-category/category-product-13.webp",
        links: [
          { title: "Compact Mirrorless", url: "/shop-by-category" },
          { title: "Medium Format Mirrorless", url: "/shop-by-category" },
          { title: "Panoramic", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-8",
        title: "Video Camera",
        image: "/assets/images/product-img/sidebar-category/category-product-14.webp",
        links: [
          { title: "Digital Camcorders", url: "/shop-by-category" },
          { title: "Professional Camcorders", url: "/shop-by-category" },
          { title: "4K Camcorders", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-9",
        title: "Instant Camera",
        image: "/assets/images/product-img/sidebar-category/category-product-15.webp",
        links: [
          { title: "Compact Camcorders", url: "/shop-by-category" },
          { title: "High Definition (HD) Camcorders", url: "/shop-by-category" },
          { title: "Panoramic", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-10",
        title: "Camera Accessories",
        image: "/assets/images/product-img/sidebar-category/category-product-16.webp",
        links: [
          { title: "SD Cards (High-Speed)", url: "/shop-by-category" },
          { title: "MicroSD Cards", url: "/shop-by-category" },
          { title: "External Hard Drives", url: "/shop-by-category" },
        ],
      },
      {
        id: "1-11",
        title: "Camera Tripod",
        image: "/assets/images/product-img/sidebar-category/category-product-17.webp",
        links: [
          { title: "Travel Tripods", url: "/shop-by-category" },
          { title: "Tabletop Tripods", url: "/shop-by-category" },
          { title: "Monopods", url: "/shop-by-category" },
        ],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Camera Accessories",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
  {
    id: "2",
    title: "All Watches",
    description: "Pages with a demonstration of Smartwatches",
    icon: "fa-watch-apple",
    badge: {
      text: "EXCLUSIVE",
      class: "rbt-product-badge-bg-primary",
    },
    subCategories: [
      {
        id: "2-1",
        title: "Fitness Tracker",
        image: "/assets/images/product-img/sidebar-category/category-product-1.webp",
        links: [
          { title: "Smart Bands", url: "/shop-by-category" },
          { title: "Heart Rate Monitors", url: "/shop-by-category" },
          { title: "Sleep Trackers", url: "/shop-by-category" },
        ],
      },
      {
        id: "2-2",
        title: "Bluetooth",
        image: "/assets/images/product-img/sidebar-category/category-product-2.webp",
        links: [
          { title: "Luxury Bluetooth Watches", url: "/shop-by-category" },
          { title: "Hybrid Smartwatches", url: "/shop-by-category" },
          { title: "Kids' Smartwatches", url: "/shop-by-category" },
        ],
      },
      {
        id: "2-3",
        title: "Hybrid",
        image: "/assets/images/product-img/sidebar-category/category-product-3.webp",
        links: [
          { title: "Fitness Hybrid Watches", url: "/shop-by-category" },
          { title: "Smart Hybrid Watches", url: "/shop-by-category" },
          { title: "Classic Hybrid Watches", url: "/shop-by-category" },
        ],
      },
      {
        id: "2-4",
        title: "Regular",
        image: "/assets/images/product-img/sidebar-category/category-product-4.webp",
        links: [
          { title: "Analog Watches", url: "/shop-by-category" },
          { title: "Digital Watches", url: "/shop-by-category" },
          { title: "Dress Watches", url: "/shop-by-category" },
        ],
      },
      {
        id: "2-5",
        title: "Touchscreen",
        image: "/assets/images/product-img/sidebar-category/category-product-5.webp",
        links: [
          { title: "Smartwatches", url: "/shop-by-category" },
          { title: "Fitness Trackers", url: "/shop-by-category" },
          { title: "Hybrid Smartwatches", url: "/shop-by-category" },
        ],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Starting From",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
  {
    id: "3",
    title: "TVs, Audio-Video",
    description: "Top TVs, Audio-Videothe most famous brands",
    icon: "fa-camcorder",
    subCategories: [
      {
        id: "3-1",
        title: "QLED TV",
        image: "/assets/images/product-img/sidebar-category/category-product-18.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
      {
        id: "3-2",
        title: "Smart TV",
        image: "/assets/images/product-img/sidebar-category/category-product-19.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
      {
        id: "3-3",
        title: "UHD TV",
        image: "/assets/images/product-img/sidebar-category/category-product-20.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
      {
        id: "3-4",
        title: "HD TV",
        image: "/assets/images/product-img/sidebar-category/category-product-21.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
      {
        id: "3-5",
        title: "LED TV",
        image: "/assets/images/product-img/sidebar-category/category-product-22.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
      {
        id: "3-6",
        title: "4K TV",
        image: "/assets/images/product-img/sidebar-category/category-product-23.webp",
        links: [{ title: "View All", url: "/shop-by-categories" }],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Starting From",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
  {
    id: "4",
    title: "Gaming",
    description: "Accessories for Games from the best brands",
    icon: "fa-game-console-handheld",
    badge: {
      text: "TRENDING",
      class: "rbt-bg-color-green",
    },
    subCategories: [
      {
        id: "4-1",
        title: "Gaming Keyboard",
        image: "/assets/images/product-img/sidebar-category/category-product-24.webp",
        links: [
          { title: "Apex Gamer Pro", url: "/shop-by-category" },
          { title: "Stealth Strike Keyboard", url: "/shop-by-category" },
          { title: "Rapid Fire RGB", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-2",
        title: "Gaming Headset",
        image: "/assets/images/product-img/sidebar-category/category-product-25.webp",
        links: [
          { title: "SoundStorm Pro", url: "/shop-by-category" },
          { title: "EchoMaster Elite", url: "/shop-by-category" },
          { title: "BattleTune 360", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-3",
        title: "Gaming Chair",
        image: "/assets/images/product-img/sidebar-category/category-product-26.webp",
        links: [
          { title: "Elite Gamer Throne", url: "/shop-by-category" },
          { title: "Turbo Comfort Seat", url: "/shop-by-category" },
          { title: "Pro Series Gaming Chair", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-4",
        title: "Mouse Pads",
        image: "/assets/images/product-img/sidebar-category/category-product-27.webp",
        links: [
          { title: "GlidePro Mouse Pad", url: "/shop-by-category" },
          { title: "PixelPerfect Pad", url: "/shop-by-category" },
          { title: "EagleEye Mouse Mat", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-5",
        title: "Joystick",
        image: "/assets/images/product-img/sidebar-category/category-product-28.webp",
        links: [
          { title: "ProGamer Joystick", url: "/shop-by-category" },
          { title: "Precision Play Controller", url: "/shop-by-category" },
          { title: "TurboGrip Joystick", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-6",
        title: "VR headset",
        image: "/assets/images/product-img/sidebar-category/category-product-29.webp",
        links: [
          { title: "VisionSphere VR Headset", url: "/shop-by-category" },
          { title: "ImmersiveEye VR Goggles", url: "/shop-by-category" },
          { title: "RealityFusion Headset", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-7",
        title: "PlayStation Acce...",
        image: "/assets/images/product-img/sidebar-category/category-product-30.webp",
        links: [
          { title: "Crystal Clear Faceplate", url: "/shop-by-category" },
          { title: "ComfortFit Chair", url: "/shop-by-category" },
          { title: "Dynamic RGB LED", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-8",
        title: "Gaming Desk",
        image: "/assets/images/product-img/sidebar-category/category-product-31.webp",
        links: [
          { title: "ProGamer Desk", url: "/shop-by-category" },
          { title: "Titan Gaming Station", url: "/shop-by-category" },
          { title: "Arcade Pro Desk", url: "/shop-by-category" },
        ],
      },
      {
        id: "4-9",
        title: "Gaming Sofa",
        image: "/assets/images/product-img/sidebar-category/category-product-32.webp",
        links: [
          { title: "Victory Lounge", url: "/shop-by-category" },
          { title: "Pixel Perch", url: "/shop-by-category" },
          { title: "Gamer's Retreat", url: "/shop-by-category" },
        ],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Starting From",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
  {
    id: "5",
    title: "Headphones & Music",
    description: "Catalog best Headphones & Music here now",
    icon: "fa-headphones",
    subCategories: [
      {
        id: "5-1",
        title: "Bluetooth Headphone",
        image: "/assets/images/product-img/sidebar-category/category-product-33.webp",
        links: [
          { title: "SoundWave Pro", url: "/shop-by-category" },
          { title: "AeroSound Bluetooth", url: "/shop-by-category" },
          { title: "PulseBeats Wireless", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-2",
        title: "Headphone Stand",
        image: "/assets/images/product-img/sidebar-category/category-product-34.webp",
        links: [
          { title: "Audio Aegis", url: "/shop-by-category" },
          { title: "Harmonic Holder", url: "/shop-by-category" },
          { title: "Headset Haven", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-3",
        title: "Home Theater",
        image: "/assets/images/product-img/sidebar-category/category-product-35.webp",
        links: [
          { title: "Cinematic Sound Bar", url: "/shop-by-category" },
          { title: "Ultra HD Projector", url: "/shop-by-category" },
          { title: "4K Smart TV", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-4",
        title: "Bluetooth Speaker",
        image: "/assets/images/product-img/sidebar-category/category-product-36.webp",
        links: [
          { title: "SoundWave Pro", url: "/shop-by-category" },
          { title: "BassBlaster 360", url: "/shop-by-category" },
          { title: "AeroSound Compact", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-5",
        title: "Soundbar",
        image: "/assets/images/product-img/sidebar-category/category-product-37.webp",
        links: [
          { title: "Versatile Soundbar", url: "/shop-by-category" },
          { title: "Signature Series Soundbar", url: "/shop-by-category" },
          { title: "ProSound Soundbar", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-6",
        title: "Microphone",
        image: "/assets/images/product-img/sidebar-category/category-product-38.webp",
        links: [
          { title: "SoundWave Pro", url: "/shop-by-category" },
          { title: "EchoSphere Mic", url: "/shop-by-category" },
          { title: "ClearCast 3000", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-7",
        title: "Voice Recorder",
        image: "/assets/images/product-img/sidebar-category/category-product-39.webp",
        links: [
          { title: "EchoNote Pro", url: "/shop-by-category" },
          { title: "VoxCapture 3000", url: "/shop-by-category" },
          { title: "SoundScribe", url: "/shop-by-category" },
        ],
      },
      {
        id: "5-8",
        title: "Sound Card",
        image: "/assets/images/product-img/sidebar-category/category-product-40.webp",
        links: [
          { title: "AeroSound Pro", url: "/shop-by-category" },
          { title: "EchoMaster FX", url: "/shop-by-category" },
          { title: "Vortex SoundBlaster", url: "/shop-by-category" },
        ],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Starting From",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
  {
    id: "6",
    title: "Appliances",
    description: "Full list links of all House Appliances active",
    icon: "fa-blender-phone",
    badge: {
      text: "HOT",
      class: "rbt-bg-color-danger",
    },
    subCategories: [
      {
        id: "6-1",
        title: "Air Conditioner",
        image: "/assets/images/product-img/sidebar-category/category-product-41.webp",
        links: [
          { title: "CoolBreeze Pro", url: "/shop-by-category" },
          { title: "ChillMaster Elite", url: "/shop-by-category" },
          { title: "AirFlow Genius", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-2",
        title: "Geyser",
        image: "/assets/images/product-img/sidebar-category/category-product-42.webp",
        links: [
          { title: "AquaFlow Geysers", url: "/shop-by-category" },
          { title: "TurboHeat Geysers", url: "/shop-by-category" },
          { title: "EcoHeat Geysers", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-3",
        title: "Oven",
        image: "/assets/images/product-img/sidebar-category/category-product-43.webp",
        links: [
          { title: "CrispBake Oven", url: "/shop-by-category" },
          { title: "QuickHeat Convection Oven", url: "/shop-by-category" },
          { title: "PerfectBake Electric Oven", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-4",
        title: "Air Fryer",
        image: "/assets/images/product-img/sidebar-category/category-product-44.webp",
        links: [
          { title: "CrispMaster Air Fryer", url: "/shop-by-category" },
          { title: "Healthy Fry Pro", url: "/shop-by-category" },
          { title: "QuickCrisp Air Fryer", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-5",
        title: "Washing Machine",
        image: "/assets/images/product-img/sidebar-category/category-product-45.webp",
        links: [
          { title: "EcoClean Pro", url: "/shop-by-category" },
          { title: "UltraWash 360", url: "/shop-by-category" },
          { title: "QuickSpin Deluxe", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-6",
        title: "Sewing Machine",
        image: "/assets/images/product-img/sidebar-category/category-product-46.webp",
        links: [
          { title: "StitchPro 300", url: "/shop-by-category" },
          { title: "SewMaster Deluxe", url: "/shop-by-category" },
          { title: "QuiltCraft Elite", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-7",
        title: "Air Purifier",
        image: "/assets/images/product-img/sidebar-category/category-product-47.webp",
        links: [
          { title: "PureAir Breeze", url: "/shop-by-category" },
          { title: "FreshFlow Purifier", url: "/shop-by-category" },
          { title: "BreatheEasy Pro", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-8",
        title: "Vacuum Cleaner",
        image: "/assets/images/product-img/sidebar-category/category-product-48.webp",
        links: [
          { title: "PowerSweep Pro", url: "/shop-by-category" },
          { title: "UltraClean Cyclone", url: "/shop-by-category" },
          { title: "DustBuster Max", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-9",
        title: "Blender",
        image: "/assets/images/product-img/sidebar-category/category-product-49.webp",
        links: [
          { title: "Smoothie Master Pro", url: "/shop-by-category" },
          { title: "NutriBlend Ultra", url: "/shop-by-category" },
          { title: "EcoBlend Portable Blender", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-10",
        title: "Cooker",
        image: "/assets/images/product-img/sidebar-category/category-product-50.webp",
        links: [
          { title: "PowerMix 3000", url: "/shop-by-category" },
          { title: "Frozen Fusion Blender", url: "/shop-by-category" },
          { title: "UltraSmooth Blender", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-11",
        title: "Iron",
        image: "/assets/images/product-img/sidebar-category/category-product-51.webp",
        links: [
          { title: "Blender & Chop Duo", url: "/shop-by-category" },
          { title: "TurboMix Professional", url: "/shop-by-category" },
          { title: "BlendSmart 2-in-1", url: "/shop-by-category" },
        ],
      },
      {
        id: "6-12",
        title: "Mini Heater",
        image: "/assets/images/product-img/sidebar-category/category-product-52.webp",
        links: [
          { title: "HeatWave Blanket", url: "/shop-by-category" },
          { title: "ThermoCushion", url: "/shop-by-category" },
          { title: "SootheHeat Massager", url: "/shop-by-category" },
        ],
      },
    ],
    banner: {
      image: "/assets/images/product-img/sidebar-category/product-banner.webp",
      text: "Starting From",
      highlight: "11th December",
      title: "Up to 40% Off",
      subtitle: "On All Brands",
      buttonText: "Know More",
      buttonUrl: "/shop-by-category",
    },
  },
];

export const sidebarQuickLinks = [
  { title: "About us", url: "/about" },
  { title: "Reviews", url: "#" },
  { title: "Delivery & payment", url: "#" },
  { title: "Blog Articles", url: "/blog-default" },
];

export const sidebarMoreLinks = [
  { title: "Contacts", url: "/contact" },
  { title: "Information", url: "#" },
  { title: "Terms & Conditions", url: "/terms-policy" },
];

export const sidebarFooterData = {
  address: "Boston, 44 Main street",
  phone: "+1(917)722-7425",
  phoneLabel: "(the call is free)",
  workingHours: "Mon-Sun 9.00 - 18.00",
  email: "demo@example.com",
  mapUrl: "/find-store",
  mapLabel: "View on map",
};
