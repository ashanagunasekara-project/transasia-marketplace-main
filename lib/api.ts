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

export function mapBackendProductToStorefront(item: BackendProduct): Product {
  const primaryImg =
    item.primaryImage || item.images?.find((img) => img.isPrimary)?.url || item.images?.[0]?.url;
  const hoverImg =
    item.images && item.images.length > 1
      ? item.images.find((img) => img.url !== primaryImg)?.url
      : undefined;

  const resolvedPrimaryImg = resolveImageUrl(primaryImg);
  const resolvedHoverImg = hoverImg ? resolveImageUrl(hoverImg) : resolvedPrimaryImg;

  const allImages =
    item.images && item.images.length > 0
      ? item.images.map((img) => resolveImageUrl(img.url))
      : [resolvedPrimaryImg];

  const categoryTitle = item.category?.title || "Electronics";
  const brandName = item.brand?.name || "Transasia";

  const isInStock = item.isAvailable && item.stockQuantity > 0;
  const hasDiscount =
    item.retailPrice && item.retailPrice > item.price;
  const discountPct = hasDiscount
    ? Math.round(((item.retailPrice! - item.price) / item.retailPrice!) * 100)
    : null;

  return {
    id: item.id,
    title: item.title,
    description: item.description || "",
    sku: item.sku || "",
    brandName: brandName,
    categoryName: categoryTitle,
    gallery: allImages,
    stockLabel: item.stockLabel || `${item.stockQuantity} Available`,
    price: Number(item.price),
    oldPrice: hasDiscount ? Number(item.retailPrice) : null,
    discount: discountPct,
    discountPercentage: discountPct,
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
      ...(item.isWholesalePricingApplied
        ? [
            {
              text: "Wholesale Price",
              bg: "rbt-product-badge-bg-primary",
            },
          ]
        : []),
      {
        text: isInStock ? "In Stock" : "Out of Stock",
        bg: isInStock ? "rbt-product-badge-bg-green" : "rbt-product-badge-bg-gray",
      },
      ...(hasDiscount
        ? [
            {
              text: `-${discountPct}%`,
              bg: "rbt-product-badge-bg-secondary-gradient",
            },
          ]
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

export async function fetchStorefrontProducts(options?: {
  token?: string | null;
  viewMode?: string;
}): Promise<Product[]> {
  try {
    const headers: Record<string, string> = {};
    if (options?.token) {
      headers["Authorization"] = `Bearer ${options.token}`;
    }
    if (options?.viewMode) {
      headers["x-customer-view"] = options.viewMode;
    }

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
  options?: {
    token?: string | null;
    viewMode?: string;
  }
): Promise<Product | null> {
  try {
    const headers: Record<string, string> = {};
    if (options?.token) {
      headers["Authorization"] = `Bearer ${options.token}`;
    }
    if (options?.viewMode) {
      headers["x-customer-view"] = options.viewMode;
    }

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
