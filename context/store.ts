"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist, type StorageValue } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

import type {
  Product as ProductType,
  CartProduct as CartProductType,
} from "@/types";
import { useAuthStore } from "./authStore";
import {
  fetchBackendCart,
  addItemToBackendCart,
  updateBackendCartItemQty,
  removeBackendCartItem,
  clearBackendCart,
  mergeBackendCart,
  validateBackendCart,
  mapBackendCartItemToCartProduct,
  getCartSessionId,
  type CartRequestOptions,
} from "@/lib/api";

export type Product = ProductType;
export type CartProduct = CartProductType;
export type ProductId = number | string;

function getAuthOptions(): CartRequestOptions {
  try {
    const auth = useAuthStore.getState();
    return {
      token: auth.token,
      viewMode: auth.activeView,
      sessionId: getCartSessionId(),
    };
  } catch {
    return { sessionId: getCartSessionId() };
  }
}

interface StoreState {
  cartProducts: CartProduct[];
  wishList: Product[];
  compareItem: Product[];
  quickViewItem: Product;
  quickAddItem: ProductId;
  totalPrice: number;
  activeCartProduct: CartProduct | null;
  isSyncing: boolean;
  cartError: string | null;
  hasStockIssues: boolean;

  // Cart Actions
  setCartProducts: (
    value: CartProduct[] | ((prev: CartProduct[]) => CartProduct[]),
  ) => void;
  addProductToCart: (item: Product, qty?: number) => Promise<void>;
  updateQuantity: (id: ProductId, qty: number) => Promise<void>;
  removeProductFromCart: (id: ProductId) => Promise<void>;
  clearCart: () => Promise<void>;
  syncWithBackend: () => Promise<void>;
  validateCart: () => Promise<{
    valid: boolean;
    issues: Array<{ productId: string; title: string; issue: string; type: string }>;
  }>;
  quantityInCart: (id: ProductId) => number;
  isAddedToCartProducts: (id: ProductId) => boolean;
  clearCartError: () => void;

  // Other Store Actions
  setWishList: (value: Product[] | ((prev: Product[]) => Product[])) => void;
  setQuickViewItem: (item: Product) => void;
  setQuickAddItem: (id: ProductId) => void;
  setCompareItem: (value: Product[] | ((prev: Product[]) => Product[])) => void;
  setActiveCartProduct: (item: CartProduct | null) => void;
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: ProductId) => void;
  addToCompareItem: (item: Product) => void;
  removeFromCompareItem: (id: ProductId) => void;
  isAddedtoWishlist: (id: ProductId) => boolean;
  isAddedToCompareItem: (id: ProductId) => boolean;
}

const getTotalPrice = (cart: CartProduct[]) =>
  cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

const EMPTY_QUICK_VIEW_PRODUCT: Product = {
  id: 0,
  title: "",
  price: 0,
  imgSrc: "",
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cartProducts: [],
      wishList: [],
      compareItem: [],
      quickViewItem: EMPTY_QUICK_VIEW_PRODUCT,
      quickAddItem: 0,
      totalPrice: 0,
      activeCartProduct: null,
      isSyncing: false,
      cartError: null,
      hasStockIssues: false,

      clearCartError: () => set({ cartError: null }),

      setCartProducts: (value) =>
        set((state) => {
          const next =
            typeof value === "function" ? value(state.cartProducts) : value;
          return { cartProducts: next, totalPrice: getTotalPrice(next) };
        }),

      setWishList: (value) =>
        set((state) => ({
          wishList: typeof value === "function" ? value(state.wishList) : value,
        })),

      setQuickViewItem: (item) => set({ quickViewItem: item }),
      setQuickAddItem: (id) => set({ quickAddItem: id }),
      setCompareItem: (value) =>
        set((state) => ({
          compareItem:
            typeof value === "function" ? value(state.compareItem) : value,
        })),
      setActiveCartProduct: (item) => set({ activeCartProduct: item }),

      isAddedToCartProducts: (id) => {
        const cart = get().cartProducts;
        return cart.some((elm) => String(elm.id) === String(id));
      },

      quantityInCart: (id) => {
        const item = get().cartProducts.find((elm) => String(elm.id) === String(id));
        return item ? item.quantity : 0;
      },

      syncWithBackend: async () => {
        try {
          const options = getAuthOptions();
          set({ isSyncing: true, cartError: null });
          const backendCart = await fetchBackendCart(options);

          if (backendCart) {
            if (backendCart.items.length > 0) {
              const mapped = backendCart.items.map(mapBackendCartItemToCartProduct);
              set({
                cartProducts: mapped,
                totalPrice: backendCart.subtotal,
                hasStockIssues: backendCart.hasStockIssues,
                isSyncing: false,
              });
            } else {
              // If backend cart is empty but local storage has items, merge them up
              const localItems = get().cartProducts;
              if (localItems.length > 0) {
                const guestItems = localItems
                  .filter((item) => typeof item.id === "string" && item.id.length > 10)
                  .map((item) => ({ productId: String(item.id), quantity: item.quantity }));

                if (guestItems.length > 0) {
                  const merged = await mergeBackendCart(
                    options.sessionId || undefined,
                    guestItems,
                    options
                  );
                  if (merged.success && merged.data) {
                    const mapped = merged.data.items.map(mapBackendCartItemToCartProduct);
                    set({
                      cartProducts: mapped,
                      totalPrice: merged.data.subtotal,
                      hasStockIssues: merged.data.hasStockIssues,
                      isSyncing: false,
                    });
                    return;
                  }
                }
              }
              set({ isSyncing: false });
            }
          } else {
            set({ isSyncing: false });
          }
        } catch (err: any) {
          console.error("syncWithBackend error:", err);
          set({ isSyncing: false });
        }
      },

      addProductToCart: async (item, qty = 1) => {
        const { cartProducts } = get();
        const existing = cartProducts.find((elm) => String(elm.id) === String(item.id));
        const newQty = Math.min(20, (existing ? existing.quantity : 0) + Math.max(1, qty));

        // Optimistic update
        let next: CartProduct[];
        if (existing) {
          next = cartProducts.map((p) =>
            String(p.id) === String(item.id) ? { ...p, quantity: newQty } : p
          );
        } else {
          const cartItem: CartProduct = {
            ...item,
            quantity: newQty,
          };
          next = [...cartProducts, cartItem];
        }
        set({ cartProducts: next, totalPrice: getTotalPrice(next) });

        // If product ID is a backend UUID, sync to backend
        if (typeof item.id === "string" && item.id.length > 10) {
          const options = getAuthOptions();
          const res = await addItemToBackendCart(String(item.id), qty, options);
          if (res.success && res.data) {
            const mapped = res.data.items.map(mapBackendCartItemToCartProduct);
            set({
              cartProducts: mapped,
              totalPrice: res.data.subtotal,
              hasStockIssues: res.data.hasStockIssues,
              cartError: null,
            });
          } else if (res.message) {
            set({ cartError: res.message });
          }
        }
      },

      updateQuantity: async (id, qty) => {
        const clampedQty = Math.max(1, Math.min(20, qty));
        const { cartProducts } = get();
        const targetItem = cartProducts.find((p) => String(p.id) === String(id));
        if (!targetItem) return;

        const items = cartProducts.map((item) =>
          String(item.id) === String(id) ? { ...item, quantity: clampedQty } : item
        );
        set({ cartProducts: items, totalPrice: getTotalPrice(items) });

        const options = getAuthOptions();
        if (targetItem.cartItemId) {
          const res = await updateBackendCartItemQty(
            targetItem.cartItemId,
            clampedQty,
            options
          );
          if (res.success && res.data) {
            const mapped = res.data.items.map(mapBackendCartItemToCartProduct);
            set({
              cartProducts: mapped,
              totalPrice: res.data.subtotal,
              hasStockIssues: res.data.hasStockIssues,
            });
          }
        } else if (typeof id === "string" && id.length > 10) {
          const delta = clampedQty - targetItem.quantity;
          if (delta !== 0) {
            await addItemToBackendCart(id, delta, options);
          }
        }
      },

      removeProductFromCart: async (id) => {
        const { cartProducts } = get();
        const targetItem = cartProducts.find((p) => String(p.id) === String(id));
        const remaining = cartProducts.filter((elm) => String(elm.id) !== String(id));
        set({ cartProducts: remaining, totalPrice: getTotalPrice(remaining) });

        if (targetItem?.cartItemId) {
          const options = getAuthOptions();
          const res = await removeBackendCartItem(targetItem.cartItemId, options);
          if (res.success && res.data) {
            const mapped = res.data.items.map(mapBackendCartItemToCartProduct);
            set({
              cartProducts: mapped,
              totalPrice: res.data.subtotal,
              hasStockIssues: res.data.hasStockIssues,
            });
          }
        }
      },

      clearCart: async () => {
        set({ cartProducts: [], totalPrice: 0, hasStockIssues: false });
        const options = getAuthOptions();
        await clearBackendCart(options);
      },

      validateCart: async () => {
        const options = getAuthOptions();
        const res = await validateBackendCart(options);
        if (res.cart) {
          const mapped = res.cart.items.map(mapBackendCartItemToCartProduct);
          set({
            cartProducts: mapped,
            totalPrice: res.cart.subtotal,
            hasStockIssues: res.cart.hasStockIssues,
          });
        }
        return { valid: res.valid, issues: res.issues || [] };
      },

      addToWishlist: (item) => {
        const { wishList } = get();
        const isAlreadyAdded = wishList.some((elm) => String(elm.id) === String(item.id));
        if (isAlreadyAdded) {
          set({ wishList: wishList.filter((elm) => String(elm.id) !== String(item.id)) });
          return;
        }
        set({ wishList: [...wishList, item] });
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          wishList: state.wishList.filter((elm) => String(elm.id) !== String(id)),
        }));
      },

      addToCompareItem: (item) => {
        const { compareItem } = get();
        if (compareItem.some((elm) => String(elm.id) === String(item.id))) return;
        set({ compareItem: [...compareItem, item] });
      },

      removeFromCompareItem: (id) => {
        set((state) => ({
          compareItem: state.compareItem.filter((elm) => String(elm.id) !== String(id)),
        }));
      },

      isAddedtoWishlist: (id) =>
        get().wishList.some((elm) => String(elm.id) === String(id)),
      isAddedToCompareItem: (id) =>
        get().compareItem.some((elm) => String(elm.id) === String(id)),
    }),
    {
      name: "unimart-store",
      partialize: (state) => ({
        cartProducts: state.cartProducts,
        wishList: state.wishList,
        compareItem: state.compareItem,
        totalPrice: state.totalPrice,
      }),
      storage: {
        getItem: (
          name,
        ): StorageValue<{
          cartProducts: CartProduct[];
          wishList: Product[];
          compareItem: Product[];
          totalPrice: number;
        }> | null => {
          if (typeof window === "undefined") return null;
          const str = window.localStorage.getItem(name);
          if (str) {
            try {
              type PersistedSlice = {
                cartProducts: CartProduct[];
                wishList: Product[];
                compareItem: Product[];
                totalPrice: number;
              };
              const parsed = JSON.parse(str) as StorageValue<
                Partial<PersistedSlice> & { state?: Partial<PersistedSlice> }
              >;
              if (!parsed?.state || typeof parsed.state !== "object") {
                return null;
              }
              const cart = Array.isArray(parsed.state.cartProducts)
                ? (parsed.state.cartProducts as CartProduct[])
                : [];
              parsed.state.cartProducts = cart;
              parsed.state.wishList = normalizeStoredProductList(
                parsed.state.wishList,
              );
              parsed.state.compareItem = normalizeStoredProductList(
                parsed.state.compareItem,
              );
              parsed.state.totalPrice = getTotalPrice(cart);
              return parsed as StorageValue<PersistedSlice>;
            } catch {
              return null;
            }
          }

          return null;
        },
        setItem: (
          name,
          value: StorageValue<{
            cartProducts: CartProduct[];
            wishList: Product[];
            compareItem: Product[];
            totalPrice: number;
          }>,
        ) => {
          if (typeof window !== "undefined") {
            window.localStorage.setItem(name, JSON.stringify(value));
          }
        },
        removeItem: (name) => {
          if (typeof window !== "undefined") {
            window.localStorage.removeItem(name);
          }
        },
      },
    },
  ),
);

function normalizeStoredProductList(value: unknown): Product[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) =>
      typeof item === "object" && item !== null && "id" in item
        ? (item as Product)
        : undefined,
    )
    .filter((item): item is Product => Boolean(item));
}

function getContextSnapshot(state: StoreState) {
  return state;
}

/**
 * Same API as the old useContextElement() for drop-in replacement in existing components.
 * `useShallow` compares selected fields so we re-render when cart/wishlist/etc. change,
 * without treating every store tick as a new object identity.
 */
export function useContextElement() {
  const store = useStore(useShallow(getContextSnapshot));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial background sync with backend
    store.syncWithBackend();

    // Re-sync cart on customer view mode changes (REGULAR <-> WHOLESALE)
    const handleViewChange = () => {
      store.syncWithBackend();
    };

    window.addEventListener("customer-view-changed", handleViewChange);
    return () => {
      window.removeEventListener("customer-view-changed", handleViewChange);
    };
  }, []);

  return {
    ...store,
    mounted,
    // Provide wrapped hydration-safe checks
    isAddedToCartProducts: (id: ProductId) =>
      mounted ? store.isAddedToCartProducts(id) : false,
    isAddedtoWishlist: (id: ProductId) =>
      mounted ? store.isAddedtoWishlist(id) : false,
    isAddedToCompareItem: (id: ProductId) =>
      mounted ? store.isAddedToCompareItem(id) : false,
    quantityInCart: (id: ProductId) => (mounted ? store.quantityInCart(id) : 0),
  };
}
