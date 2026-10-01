import { Product } from "@/types/product";
import { Category } from "@/types/categories";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export function resolveImageUrl(url?: string | null): string {
  if (!url) return "/assets/images/catagory-img/banner-cat-01.webp";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/uploads/")) return `${API_BASE_URL}${url}`;
  if (url.startsWith("uploads/")) return `${API_BASE_URL}/${url}`;
  return url;
}

export interface BackendCategory {
  id: string;
  title: string;
  name?: string;
  slug: string;
  imgSrc?: string | null;
  image?: string | null;
  description?: string | null;
  parentId?: string | null;
  subCategories?: any[];
  productCount?: number;
  count?: number;
  status?: string;
}

export interface BackendProduct {
  id: string;
  sku?: string;
  posItemCode?: string | null;
  title: string;
  slug: string;
  description?: string | null;
  price: number;
  retailPrice?: number | null;
  wholesalePrice?: number | null;
  isWholesalePricingApplied?: boolean;
  stockQuantity: number;
  stockLabel?: string;
  isAvailable: boolean;
  category?: BackendCategory | null;
  brand?: {
    id: string;
    name: string;
    slug: string;
    imgSrc?: string;
  } | null;
  images?: { id: string; url: string; isPrimary: boolean }[];
  primaryImage?: string | null;
}

export interface FetchProductsOptions {
  token?: string | null;
  viewMode?: "REGULAR" | "WHOLESALE" | null;
}

function buildProductAuthHeaders(options?: FetchProductsOptions): HeadersInit {
  const headers: Record<string, string> = {};
  if (options?.token) {
    headers["Authorization"] = `Bearer ${options.token}`;
  }
  if (options?.viewMode) {
    headers["x-customer-view"] = options.viewMode;
  }
  return headers;
}

export function mapBackendProductToStorefront(item: BackendProduct): Product {
  const primaryImg =
    item.primaryImage || item.images?.find((img) => img.isPrimary)?.url || item.images?.[0]?.url;
  const hoverImg =
    item.images && item.images.length > 1
      ? item.images.find((img) => img.url !== primaryImg)?.url
      : undefined;

  const resolvedPrimaryImg = resolveImageUrl(primaryImg);
  const resolvedHoverImg = hoverImg ? resolveImageUrl(hoverImg) : resolvedPrimaryImg;

  const categoryTitle = item.category?.title || "Electronics";
  const brandName = item.brand?.name || "Transasia";

  const isInStock = item.isAvailable && item.stockQuantity > 0;

  // Wholesale pricing: if wholesale pricing is applied, show wholesale price;
  // retailPrice (the original base price) becomes the crossed-out oldPrice.
  const isWholesale = item.isWholesalePricingApplied === true;
  const effectivePrice = Number(item.price);
  const originalRetailPrice = item.retailPrice ? Number(item.retailPrice) : null;

  // Show discount badge when: wholesaler sees reduced price vs retail, or a general sale
  const hasDiscount = isWholesale
    ? originalRetailPrice !== null && originalRetailPrice > effectivePrice
    : originalRetailPrice !== null && originalRetailPrice > effectivePrice;

  const discountPct = hasDiscount && originalRetailPrice
    ? Math.round(((originalRetailPrice - effectivePrice) / originalRetailPrice) * 100)
    : null;

  return {
    id: item.id,
    title: item.title,
    price: effectivePrice,
    oldPrice: hasDiscount ? originalRetailPrice : null,
    discount: discountPct,
    discountPercentage: discountPct,
    wholesalePrice: item.wholesalePrice ? Number(item.wholesalePrice) : null,
    isWholesalePricingApplied: isWholesale,
    imgSrc: resolvedPrimaryImg,
    hoverImgSrc: resolvedHoverImg,
    category: [categoryTitle],
    filterCategory: [categoryTitle],
    filterBrands: [brandName],
    inStock: isInStock,
    isStockOut: !isInStock,
    rating: 5,
    ratingCount: 15,
    reviewCount: 15,
    demoTab: ["best-sellers", "new-arrivals", "on-sale", "view-all"],
    badges: [
      {
        text: isInStock ? "In Stock" : "Out of Stock",
        bg: isInStock ? "rbt-product-badge-bg-green" : "rbt-product-badge-bg-gray",
      },
      ...(isWholesale
        ? [{ text: "Wholesale", bg: "rbt-product-badge-bg-secondary-gradient" }]
        : hasDiscount
        ? [{ text: `-${discountPct}%`, bg: "rbt-product-badge-bg-secondary-gradient" }]
        : []),
    ],
    pricingBadges: [
      {
        text: item.stockLabel || `${item.stockQuantity} in stock`,
        bg: "rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded",
      },
    ],
    extraInfo: [
      {
        icon: "fa-solid fa-boxes-stacked",
        text: item.stockLabel || `${item.stockQuantity} Available`,
      },
      {
        icon: "fa-solid fa-truck",
        text: "Islandwide Delivery",
      },
      {
        icon: "fa-solid fa-shield",
        text: "Official Warranty",
      },
    ],
    productDetails: [
      { label: "SKU", text: item.sku || "N/A" },
      { label: "Category", text: categoryTitle },
      { label: "Brand", text: brandName },
      ...(item.posItemCode ? [{ label: "POS Code", text: item.posItemCode }] : []),
    ],
  };
}

export function mapBackendCategoryToStorefront(cat: BackendCategory, index: number = 0): Category {
  return {
    id: index + 1,
    title: cat.title,
    imgSrc: resolveImageUrl(cat.image || cat.imgSrc),
    qty: cat.productCount ?? cat.count ?? 0,
    subCategories: (cat.subCategories || []).map((sub: any) => ({
      title: sub.title || sub.name || "Subcategory",
      href: `/shop?category=${encodeURIComponent(sub.slug || sub.title)}`,
    })),
  };
}

export async function fetchStorefrontProducts(
  options?: FetchProductsOptions
): Promise<Product[]> {
  try {
    const headers = buildProductAuthHeaders(options);
    const res = await fetch(`${API_BASE_URL}/api/products?limit=100`, {
      cache: "no-store",
      headers,
    });
    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return [];
    }
    const json = await res.json();
    const data: BackendProduct[] = json.data || [];
    return data.map(mapBackendProductToStorefront);
  } catch (error) {
    console.error("Error fetching storefront products:", error);
    return [];
  }
}

export async function fetchStorefrontCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/categories`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
      return [];
    }
    const json = await res.json();
    const data: BackendCategory[] = json.data || [];
    return data.map((cat, idx) => mapBackendCategoryToStorefront(cat, idx));
  } catch (error) {
    console.error("Error fetching storefront categories:", error);
    return [];
  }
}

export async function fetchStorefrontProductByIdOrSlug(
  idOrSlug: string,
  options?: FetchProductsOptions
): Promise<Product | null> {
  try {
    const headers = buildProductAuthHeaders(options);
    const res = await fetch(`${API_BASE_URL}/api/products/${encodeURIComponent(idOrSlug)}`, {
      cache: "no-store",
      headers,
    });
    if (!res.ok) {
      return null;
    }
    const json = await res.json();
    if (!json.success || !json.data) return null;
    return mapBackendProductToStorefront(json.data);
  } catch (error) {
    console.error("Error fetching product by ID/slug:", error);
    return null;
  }
}

// ----------------------------------------------------
// Storefront Banner APIs
// ----------------------------------------------------

export interface StorefrontHeroBanner {
  id: string;
  subtitle?: string;
  title: string;
  oldPrice?: number | string;
  price: number | string;
  savePercent?: string;
  imgSrc: string;
  mobileImgSrc?: string;
  width?: number;
  height?: number;
  link?: string;
  btnText?: string;
  hasCurvedPortion?: boolean;
  order?: number;
}

export interface StorefrontHeroResponse {
  data: StorefrontHeroBanner[];
  autoShift: boolean;
  autoShiftDelay: number;
}

export async function fetchStorefrontHeroBanners(): Promise<StorefrontHeroResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/banners/hero`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch hero banners");
    const json = await res.json();
    return {
      data: json.data || [],
      autoShift: json.autoShift ?? true,
      autoShiftDelay: json.autoShiftDelay ?? 3500,
    };
  } catch (err) {
    return {
      data: [],
      autoShift: true,
      autoShiftDelay: 3500,
    };
  }
}

export interface StorefrontPopularCategory {
  id: string;
  title: string;
  imgSrc: string;
  link: string;
  subCategories?: Array<{ title: string; href?: string }>;
}

export interface StorefrontDealBanner {
  subtitle: string;
  title: string;
  secondaryTitle: string;
  imgSrc: string;
  link: string;
}

export interface StorefrontPopularCategoriesResponse {
  sectionTitle: string;
  viewAllLink: string;
  categories: StorefrontPopularCategory[];
  dealBanner: StorefrontDealBanner;
}

export async function fetchStorefrontPopularCategories(): Promise<StorefrontPopularCategoriesResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/banners/popular-categories`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch popular categories");
    const json = await res.json();
    return json.data || null;
  } catch (err) {
    return null;
  }
}

export interface StorefrontTopbarSlide {
  id: string;
  text: string;
  linkText: string;
  link: string;
}

export interface StorefrontTopbarResponse {
  slides: StorefrontTopbarSlide[];
  delay: number;
}

export async function fetchStorefrontTopbar(): Promise<StorefrontTopbarResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/banners/topbar`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch topbar ticker");
    const json = await res.json();
    return {
      slides: json.data?.slides || [],
      delay: json.data?.delay || 3500,
    };
  } catch (err) {
    return {
      slides: [
        {
          id: "1",
          text: "The best-selling watch —all under $100.",
          linkText: "Shop Now",
          link: "/shop",
        },
        {
          id: "2",
          text: "The best-selling camera —all under $100.",
          linkText: "Shop Now",
          link: "/shop",
        },
        {
          id: "3",
          text: "The best-selling mobile —all under $100.",
          linkText: "Shop Now",
          link: "/shop",
        },
      ],
      delay: 3500,
    };
  }
}

export interface StorefrontHighlightProductItem {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number | null;
  imgSrc: string;
  mobileImgSrc?: string;
  rating?: number;
  ratingCount?: number;
  link?: string;
}

export interface StorefrontPromotionalBannerItem {
  sectionTitle?: string;
  subtitle: string;
  titleBold: string;
  titleRegular: string;
  secondarySubtitle: string;
  imgSrc: string;
  mobileImgSrc?: string;
  btnText: string;
  link: string;
}

export interface StorefrontPromotionsResponse {
  powerUpBanner: StorefrontPromotionalBannerItem;
  highlightsBanner: StorefrontPromotionalBannerItem;
  highlightsProducts?: StorefrontHighlightProductItem[];
  showTodaysBestDeals: boolean;
}

export async function fetchStorefrontPromotions(): Promise<StorefrontPromotionsResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/banners/promotions`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch promotional banners");
    const json = await res.json();
    return json.data;
  } catch (err) {
    return {
      powerUpBanner: {
        subtitle: "Power Up Deals",
        titleBold: "NEW DEVICE",
        titleRegular: "COMING SOON",
        secondarySubtitle: "Land major deals",
        imgSrc: "/assets/images/product-banner/product-banner-img-08.webp",
        mobileImgSrc: "/assets/images/product-banner/product-banner-img-08.webp",
        btnText: "SHOP NOW",
        link: "/shop",
      },
      highlightsBanner: {
        sectionTitle: "This Week’s Highlights",
        subtitle: "Power Up Deals",
        titleBold: "THE NEXT GEN",
        titleRegular: "OF SMARTPHONE",
        secondarySubtitle: "Grab huge savings",
        imgSrc: "/assets/images/product-banner/product-banner-img-09.webp",
        mobileImgSrc: "/assets/images/product-banner/product-banner-img-09.webp",
        btnText: "SHOP NOW",
        link: "/shop",
      },
      showTodaysBestDeals: false,
    };
  }
}


