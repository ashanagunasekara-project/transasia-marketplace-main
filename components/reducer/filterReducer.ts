import { FilterState, FilterAction, Product } from "@/types";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";

export const DEFAULT_MAX_PRICE = 100000000;

export const initialState: FilterState = {
  price: [0, DEFAULT_MAX_PRICE],
  colors: [], // changed from single "color"
  size: "All",
  tags: [],
  activeFilterOnSale: false,
  activeFilterInStock: false,
  brands: [],
  categories: [],
  ratings: [], // e.g. [4, 3]
  services: [], // e.g. ['Free Delivery', 'Hot Deals']
  filtered: [],
  sortingOption: "Sort by (Default)",
  sorted: [],
  currentPage: 1,
  itemPerPage: 15,
  search: "",
};

function matchesAllFilters(product: Product, state: FilterState): boolean {
  if (state.search && state.search.trim()) {
    const q = state.search.toLowerCase().trim();
    const titleMatch = (product.title || "").toLowerCase().includes(q);
    const descMatch = (product.description || "").toLowerCase().includes(q);
    const skuMatch = String(product.sku || product.id || "").toLowerCase().includes(q);
    const brandMatch = (product.filterBrands || []).some((b) => b.toLowerCase().includes(q));
    const tagMatch = (product.tags || []).some((t) => t.toLowerCase().includes(q));
    const catMatch = [
      ...(product.filterCategory || []),
      ...(product.category || []),
    ].some((c) => String(c).toLowerCase().includes(q));

    if (!titleMatch && !descMatch && !skuMatch && !brandMatch && !tagMatch && !catMatch) {
      return false;
    }
  }

  if (state.brands.length) {
    const prodBrands = (product.filterBrands || []).map((b) => b.toLowerCase().trim());
    const matchesBrand = state.brands.some((selectedBrand) => {
      const lower = selectedBrand.toLowerCase().trim();
      return prodBrands.some((pb) => pb === lower || pb.includes(lower) || lower.includes(pb));
    });
    if (!matchesBrand) return false;
  }

  if (state.categories.length) {
    const prodCategories = [
      ...(product.filterCategory || []),
      ...(product.category || []),
    ].map((c) => String(c).toLowerCase().trim());

    const matchesCategory = state.categories.some((selectedCat) => {
      const lowerSelected = selectedCat.toLowerCase().trim();
      const slugSelected = lowerSelected.replace(/[^a-z0-9]+/g, "-");

      // 1. Direct match on title or slug
      if (prodCategories.some((pc) => pc === lowerSelected || pc === slugSelected)) {
        return true;
      }

      // 2. Contains match
      if (prodCategories.some((pc) => pc.includes(lowerSelected) || lowerSelected.includes(pc))) {
        return true;
      }

      // 3. Hierarchy match: If selected category is a parent, match any of its subcategories
      const docParent = DOCUMENTATION_CATEGORIES.find(
        (dc) => dc.title.toLowerCase() === lowerSelected || dc.slug.toLowerCase() === slugSelected
      );
      if (docParent) {
        if (prodCategories.some((pc) => pc === docParent.slug || pc === docParent.title.toLowerCase())) {
          return true;
        }
        if (
          docParent.subcategories.some(
            (sub) =>
              prodCategories.includes(sub.title.toLowerCase()) ||
              prodCategories.includes(sub.slug.toLowerCase())
          )
        ) {
          return true;
        }
      }

      // 4. Hierarchy match: If selected category is a subcategory, match if product belongs to it
      for (const parent of DOCUMENTATION_CATEGORIES) {
        const docSub = parent.subcategories.find(
          (sub) =>
            sub.title.toLowerCase() === lowerSelected ||
            sub.slug.toLowerCase() === slugSelected
        );
        if (docSub) {
          if (
            prodCategories.some(
              (pc) =>
                pc === docSub.title.toLowerCase() ||
                pc === docSub.slug.toLowerCase()
            )
          ) {
            return true;
          }
        }
      }

      return false;
    });

    if (!matchesCategory) return false;
  }

  if (state.tags.length && !state.tags.some((t) => product.tags?.includes(t)))
    return false;

  if (
    state.colors.length &&
    !state.colors.some((color) => product.filterColor?.includes(color))
  )
    return false;

  const effectiveMin = state.price[0];
  const effectiveMax = state.price[1];
  if (product.price < effectiveMin || product.price > effectiveMax)
    return false;

  if (
    state.ratings.length &&
    !state.ratings.some((minRating) => (product.rating ?? 0) >= minRating)
  )
    return false;

  if (
    state.services.length &&
    !state.services.some((s) => product.services?.includes(s))
  )
    return false;

  if (state.activeFilterOnSale && (product.oldPrice == null || product.oldPrice <= product.price))
    return false;

  if (state.activeFilterInStock) {
    const isInStock =
      product.inStock === true ||
      product.isStockOut === false ||
      (product.inStock == null && product.isStockOut == null);
    if (!isInStock) return false;
  }

  return true;
}

export function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };

    case "SET_CUSTOM_MIN":
      return { ...state, customMin: action.payload };

    case "SET_CUSTOM_MAX":
      return { ...state, customMax: action.payload };

    case "SET_COLORS":
      return { ...state, colors: action.payload };
    case "SET_TAGS":
      return { ...state, tags: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };

    case "SET_BRANDS":
      return { ...state, brands: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_RATINGS":
      return { ...state, ratings: action.payload };

    case "SET_SERVICES":
      return { ...state, services: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload, currentPage: 1 };

    case "SET_SEARCH":
      return { ...state, search: action.payload, currentPage: 1 };

    case "FILTER_PRODUCTS": {
      const productsToFilter = [...action.payload];
      const filtered = productsToFilter.filter((product) =>
        matchesAllFilters(product, state),
      );
      return { ...state, filtered, currentPage: 1 };
    }

    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };

    case "SORT_PRODUCTS": {
      const sorted = [...state.filtered];
      switch (state.sortingOption) {
        case "Price Ascending":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "Price Descending":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "Title Ascending":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Title Descending":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
      return { ...state, sorted, currentPage: 1 };
    }

    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };

    case "TOGGLE_FILTER_IN_STOCK":
      return { ...state, activeFilterInStock: !state.activeFilterInStock };

    case "CLEAR_FILTER":
      return {
        ...state,
        price: [0, DEFAULT_MAX_PRICE],

        colors: [], // changed from single "color"
        size: "All",
        tags: [],
        activeFilterOnSale: false,
        activeFilterInStock: false,
        brands: [],
        categories: [],
        ratings: [], // e.g. [4, 3]
        services: [], // e.g. ['Free Delivery', 'Hot Deals']
        search: "",

        sortingOption: "Sort by (Default)",
      };

    default:
      return state;
  }
}
