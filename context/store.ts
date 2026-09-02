"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist, type StorageValue } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

import type {
  Product as ProductType,
  CartProduct as CartProductType,
} from "@/types";

export type Product = ProductType;
export type CartProduct = CartProductType;
export type ProductId = number | string;

interface StoreState {
  cartProducts: CartProduct[];
  wishList: Product[];
  compareItem: Product[];
  quickViewItem: Product;
  quickAddItem: ProductId;
  totalPrice: number;
  activeCartProduct: CartProduct | null;
  setCartProducts: (
    value: CartProduct[] | ((prev: CartProduct[]) => CartProduct[]),
  ) => void;
  setWishList: (value: Product[] | ((prev: Product[]) => Product[])) => void;
  setQuickViewItem: (item: Product) => void;
  setQuickAddItem: (id: ProductId) => void;
  setCompareItem: (value: Product[] | ((prev: Product[]) => Product[])) => void;
  setActiveCartProduct: (item: CartProduct | null) => void;
  isAddedToCartProducts: (id: ProductId) => boolean;
  addProductToCart: (item: Product, qty?: number) => void;
  updateQuantity: (id: ProductId, qty: number) => void;
  quantityInCart: (id: ProductId) => number;
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: ProductId) => void;
  addToCompareItem: (item: Product) => void;
  removeFromCompareItem: (id: ProductId) => void;
  isAddedtoWishlist: (id: ProductId) => boolean;
  isAddedToCompareItem: (id: ProductId) => boolean;
}

const getTotalPrice = (cart: CartProduct[]) =>
  cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

/** Initial quick-view slot before any product is chosen (avoids importing demo catalog into the store module). */
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
        return cart.some((elm) => elm.id == id);
      },

      addProductToCart: (item, qty = 1) => {
        const { cartProducts, isAddedToCartProducts } = get();
        if (isAddedToCartProducts(item.id)) return;
        const cartItem: CartProduct = {
          ...item,
          quantity: qty,
        };
        const next = [...cartProducts, cartItem];
        set({ cartProducts: next, totalPrice: getTotalPrice(next) });
      },

      updateQuantity: (id, qty) => {
        const { cartProducts, isAddedToCartProducts } = get();
        if (!isAddedToCartProducts(id) || qty < 1) return;
        const items = cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item,
        );
        set({ cartProducts: items, totalPrice: getTotalPrice(items) });
      },

      quantityInCart: (id) => {
        const item = get().cartProducts.find((elm) => elm.id === id);
        return item ? item.quantity : 0;
      },

      addToWishlist: (item) => {
        const { wishList } = get();
        const isAlreadyAdded = wishList.some((elm) => elm.id == item.id);
        if (isAlreadyAdded) {
          set({ wishList: wishList.filter((elm) => elm.id != item.id) });
          return;
        }
        set({ wishList: [...wishList, item] });
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          wishList: state.wishList.filter((elm) => elm.id != id),
        }));
      },

      addToCompareItem: (item) => {
        const { compareItem } = get();
        if (compareItem.some((elm) => elm.id == item.id)) return;
        set({ compareItem: [...compareItem, item] });
      },

      removeFromCompareItem: (id) => {
        set((state) => ({
          compareItem: state.compareItem.filter((elm) => elm.id != id),
        }));
      },

      isAddedtoWishlist: (id) => get().wishList.some((elm) => elm.id == id),
      isAddedToCompareItem: (id) =>
        get().compareItem.some((elm) => elm.id == id),
    }),
    {
      name: "unimart-store",
      partialize: (state) => ({
        cartProducts: state.cartProducts,
        wishList: state.wishList,
        compareItem: state.compareItem,
        // Kept for persist typing / older saved blobs; always reconciled in `getItem`.
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
 * without treating every store tick as a new object identity (plain selector would).
 */
export function useContextElement() {
  const store = useStore(useShallow(getContextSnapshot));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
