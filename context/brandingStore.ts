"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const DEFAULT_FALLBACK_LOGO = "/assets/images/logo/transasia-logo.png";

interface BrandingState {
  logoUrl: string;
  storeName: string;
  isLoaded: boolean;
  fetchBranding: () => Promise<void>;
}

export const useBrandingStore = create<BrandingState>()(
  persist(
    (set) => ({
      logoUrl: DEFAULT_FALLBACK_LOGO,
      storeName: "Transasia",
      isLoaded: false,

      fetchBranding: async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/settings/public`);
          if (res.ok) {
            const json = await res.json();
            if (json.success && json.data) {
              let resolvedLogo = json.data.logoUrl || DEFAULT_FALLBACK_LOGO;
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
          // Keep cached/default fallback
        }
      },
    }),
    {
      name: "transasia_store_branding",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
