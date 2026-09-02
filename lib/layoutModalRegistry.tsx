"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ModalNameType } from "@/types/modal";

/**
 * Lazy modal roots for `LayoutModals` (one `SingleManagedModalLayer` per key).
 * Off-canvas / portal-only ids must stay aligned with `OFF_CANVAS_MANAGED_MODAL_IDS`
 * in `lib/managedModalUi.ts`. `dynamic` options must be object literals (Turbopack).
 */
export const LAYOUT_MODAL_LAZY: Partial<Record<ModalNameType, ComponentType>> = {
  cartSidebar: dynamic(() => import("@/components/modals/CartModal"), {
    ssr: false,
  }),
  comparePanel: dynamic(() => import("@/components/modals/Compare"), {
    ssr: false,
  }),
  categorySidebar: dynamic(() => import("@/components/modals/Categories"), {
    ssr: false,
  }),
  mobileMenu: dynamic(() => import("@/components/modals/MobileMenu"), {
    ssr: false,
  }),
  offerSideMenu: dynamic(() => import("@/components/modals/OfferSideMenu"), {
    ssr: false,
  }),
  addedcomparisonModal: dynamic(() => import("@/components/modals/QuickView"), {
    ssr: false,
  }),
  quickViewModal: dynamic(() => import("@/components/modals/QuickView2"), {
    ssr: false,
  }),
  compareReviewModal: dynamic(() => import("@/components/modals/CompareView"), {
    ssr: false,
  }),
  wishlistModal: dynamic(() => import("@/components/modals/WishList"), {
    ssr: false,
  }),
  socialShareModal: dynamic(() => import("@/components/modals/SocialShare"), {
    ssr: false,
  }),
  notifyModal: dynamic(() => import("@/components/modals/NotifyModal"), {
    ssr: false,
  }),
  quickViewSizeGuideModal: dynamic(
    () => import("@/components/modals/QuickViewSizeGuide"),
    { ssr: false },
  ),
  signinModal: dynamic(() => import("@/components/modals/Signin"), { ssr: false }),
  signupModal: dynamic(() => import("@/components/modals/Signup"), { ssr: false }),
  instaModal: dynamic(() => import("@/components/modals/InstaModal"), {
    ssr: false,
  }),
  "recent-viewModal": dynamic(
    () => import("@/components/modals/RecentViewModal"),
    { ssr: false },
  ),
  findStoreModal: dynamic(() => import("@/components/modals/CouponModal"), {
    ssr: false,
  }),
  quickviewEditCartModal: dynamic(() => import("@/components/modals/EditCart"), {
    ssr: false,
  }),
  addedCartModal: dynamic(() => import("@/components/modals/AddedCart"), {
    ssr: false,
  }),
  "popup-cartModal": dynamic(() => import("@/components/modals/CartModal2"), {
    ssr: false,
  }),
  makecallModal: dynamic(() => import("@/components/modals/CallModal"), {
    ssr: false,
  }),
  newsletterModal: dynamic(() => import("@/components/modals/NewsLetterModal"), {
    ssr: false,
  }),
  exampleModal: dynamic(() => import("@/components/modals/TeamMemberModal"), {
    ssr: false,
  }),
};
