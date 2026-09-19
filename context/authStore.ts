"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type CustomerViewMode = "REGULAR" | "WHOLESALE";
export type WholesaleStatus = "NONE" | "PENDING" | "APPROVED" | "REJECTED";

export interface CustomerProfile {
  id: string;
  userId: string;
  customerType: "REGULAR" | "WHOLESALE";
  wholesaleCustomerId?: string | null;
  fullName: string;
  businessName?: string | null;
  businessAddress?: string | null;
  ownerName?: string | null;
  brcDocumentUrl?: string | null;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
}

export interface AuthUser {
  id: string;
  phone: string;
  email?: string | null;
  profile?: CustomerProfile | null;
  customerProfile?: CustomerProfile | null;
  hasWholesaleAccount: boolean;
  isWholesaleApproved: boolean;
  activeView: CustomerViewMode;
  wholesaleStatus: WholesaleStatus;
  wholesaleCustomerId?: string | null;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  activeView: CustomerViewMode;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  loginPassword: (identifier: string, password: string) => Promise<{ success: boolean; message?: string }>;
  sendOtp: (phone: string) => Promise<{ success: boolean; message?: string; debugOtp?: string; isLocked?: boolean }>;
  verifyOtp: (phone: string, otpCode: string) => Promise<{ success: boolean; message?: string; isLocked?: boolean }>;
  loginWholesale: (params: { wholesaleCustomerId: string; password?: string; otpCode?: string }) => Promise<{ success: boolean; message?: string }>;
  registerRegular: (data: {
    fullName: string;
    phone: string;
    email?: string;
    password?: string;
    address?: string;
    cityId?: string;
    districtId?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  registerWholesale: (data: {
    fullName: string;
    phone: string;
    email?: string;
    password?: string;
    businessName: string;
    businessAddress: string;
    ownerName?: string;
    brcDocumentUrl?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  applyWholesale: (data: {
    businessName: string;
    businessAddress: string;
    ownerName?: string;
    brcDocumentUrl?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  switchViewMode: (mode: CustomerViewMode) => Promise<{ success: boolean; code?: string; message?: string }>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      activeView: "REGULAR",
      isAuthenticated: false,
      isLoading: false,
      error: null,

      clearError: () => set({ error: null }),

      loginPassword: async (identifier, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/login-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier, password }),
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            set({ isLoading: false, error: data.message || "Invalid credentials" });
            return { success: false, message: data.message || "Invalid credentials" };
          }

          const activeView: CustomerViewMode = data.user.activeView || "REGULAR";
          set({
            user: data.user,
            token: data.token,
            activeView,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("customer-view-changed", { detail: { activeView } }));
          }
          return { success: true };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      sendOtp: async (phone) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone }),
          });
          const data = await res.json();
          set({ isLoading: false, error: data.success ? null : data.message });
          return {
            success: Boolean(data.success),
            message: data.message,
            debugOtp: data.debugOtp,
            isLocked: data.isLocked,
          };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Failed to send code" });
          return { success: false, message: err.message || "Failed to send code" };
        }
      },

      verifyOtp: async (phone, otpCode) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone, otpCode }),
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            set({ isLoading: false, error: data.message || "Verification failed" });
            return { success: false, message: data.message || "Verification failed", isLocked: data.isLocked };
          }

          const activeView: CustomerViewMode = data.user.activeView || "REGULAR";
          set({
            user: data.user,
            token: data.token,
            activeView,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("customer-view-changed", { detail: { activeView } }));
          }
          return { success: true };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      loginWholesale: async (params) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/login-wholesale`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            set({ isLoading: false, error: data.message || "Wholesale login failed" });
            return { success: false, message: data.message || "Wholesale login failed" };
          }

          const activeView: CustomerViewMode = "WHOLESALE";
          set({
            user: data.user,
            token: data.token,
            activeView,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("customer-view-changed", { detail: { activeView } }));
          }
          return { success: true };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      registerRegular: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/register-regular`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const resData = await res.json();
          if (!res.ok || !resData.success) {
            set({ isLoading: false, error: resData.message || "Registration failed" });
            return { success: false, message: resData.message || "Registration failed" };
          }

          const activeView: CustomerViewMode = "REGULAR";
          set({
            user: resData.user,
            token: resData.token,
            activeView,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return { success: true, message: resData.message };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      registerWholesale: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/register-wholesale`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const resData = await res.json();
          if (!res.ok || !resData.success) {
            set({ isLoading: false, error: resData.message || "Wholesale registration failed" });
            return { success: false, message: resData.message || "Wholesale registration failed" };
          }

          const activeView: CustomerViewMode = "REGULAR"; // Default to regular view until approved
          set({
            user: resData.user,
            token: resData.token,
            activeView,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return { success: true, message: resData.message };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      applyWholesale: async (data) => {
        const token = get().token;
        if (!token) return { success: false, message: "Please sign in first" };

        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/apply-wholesale`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          });
          const resData = await res.json();
          if (!res.ok || !resData.success) {
            set({ isLoading: false, error: resData.message || "Failed to submit application" });
            return { success: false, message: resData.message || "Failed to submit application" };
          }

          set({
            user: resData.user,
            token: resData.token,
            isLoading: false,
            error: null,
          });
          return { success: true, message: resData.message };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      switchViewMode: async (nextMode) => {
        const { token, isAuthenticated } = get();
        if (!isAuthenticated || !token) {
          return {
            success: false,
            code: "NOT_AUTHENTICATED",
            message: "Please sign in to switch customer view mode",
          };
        }

        set({ isLoading: true, error: null });
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/switch-view-mode`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ viewMode: nextMode }),
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            set({ isLoading: false });
            return {
              success: false,
              code: data.code || "SWITCH_FAILED",
              message: data.message || "Cannot switch view mode",
            };
          }

          set({
            activeView: nextMode,
            token: data.token,
            user: data.user,
            isLoading: false,
            error: null,
          });

          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("customer-view-changed", { detail: { activeView: nextMode } })
            );
          }

          return { success: true, message: data.message };
        } catch (err: any) {
          set({ isLoading: false, error: err.message || "Network error" });
          return { success: false, message: err.message || "Network error" };
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          activeView: "REGULAR",
          isAuthenticated: false,
          error: null,
        });
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("customer-view-changed", { detail: { activeView: "REGULAR" } })
          );
        }
      },

      fetchProfile: async () => {
        const token = get().token;
        if (!token) return;
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          if (res.ok && data.success && data.user) {
            set({
              user: data.user,
              activeView: data.user.activeView || get().activeView,
              isAuthenticated: true,
            });
          } else {
            get().logout();
          }
        } catch {
          // Ignore network glitch on background profile refresh
        }
      },
    }),
    {
      name: "transasia-customer-auth",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        activeView: state.activeView,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
