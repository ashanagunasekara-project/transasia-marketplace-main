"use client";

import { create } from "zustand";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface BrandingState {
  logoUrl: string;
  storeName: string;
  isLoaded: boolean;
  fetchBranding: () => Promise<void>;
}

export const useBrandingStore = create<BrandingState>((set, get) => ({
  logoUrl: "/assets/images/logo/logo.webp",
  storeName: "Transasia",
  isLoaded: false,

  fetchBranding: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/settings/public`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          let resolvedLogo = json.data.logoUrl || "/assets/images/logo/logo.webp";
          if (resolvedLogo.startsWith("/uploads/")) {
            resolvedLogo = `${API_BASE_URL}${resolvedLogo}`;
          }
          set({
            logoUrl: resolvedLogo,
            storeName: json.data.storeName || "Transasia",
            isLoaded: true,
          });
        }
      }
    } catch {
      // Keep default fallback
    }
  },
}));
