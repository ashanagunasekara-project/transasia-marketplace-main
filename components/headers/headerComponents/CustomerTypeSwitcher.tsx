"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/context/authStore";
import { useUiStore } from "@/context/uiStore";

export default function CustomerTypeSwitcher({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { user, activeView, isAuthenticated, switchViewMode, isLoading } =
    useAuthStore();
  const openBsModal = useUiStore((s) => s.openBsModal);
  const showToaster = useUiStore((s) => s.showToaster);

  const [mounted, setMounted] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`customer-type-switcher ${className}`}>
        <div className="rbt-btn rbt-btn-sm rbt-btn-border opacity-75">
          <i className="fa-solid fa-store mr--6" />
          <span>Pricing: Retail</span>
        </div>
      </div>
    );
  }

  const handleToggle = async () => {
    if (!isAuthenticated) {
      showToaster("Please sign in or register to access wholesale pricing");
      openBsModal("signinModal");
      return;
    }

    if (activeView === "WHOLESALE") {
      // Switch back to Retail View
      setLocalLoading(true);
      const res = await switchViewMode("REGULAR");
      setLocalLoading(false);
      if (res.success) {
        showToaster("Switched to Retail View (Standard Retail Prices)");
      }
      return;
    }

    // Attempting to switch to WHOLESALE View
    if (!user?.hasWholesaleAccount) {
      // Must already be registered with a wholesale account
      showToaster("Wholesale registration required to view wholesale prices");
      openBsModal("wholesaleUpgradeModal");
      return;
    }

    if (user.wholesaleStatus === "PENDING") {
      showToaster("Your wholesale application is pending review by TransAsia");
      openBsModal("wholesaleUpgradeModal");
      return;
    }

    if (user.wholesaleStatus === "REJECTED") {
      showToaster("Your wholesale application was not approved. Contact support.");
      return;
    }

    // User is approved wholesale customer
    setLocalLoading(true);
    const res = await switchViewMode("WHOLESALE");
    setLocalLoading(false);
    if (res.success) {
      showToaster("Wholesale Pricing Activated!");
    } else {
      showToaster(res.message || "Could not switch to wholesale pricing");
    }
  };

  const isWholesaleActive = activeView === "WHOLESALE";

  return (
    <div
      className={`customer-type-switcher d-inline-flex align-items-center ${className}`}
      style={{ userSelect: "none" }}
    >
      <button
        type="button"
        onClick={handleToggle}
        disabled={isLoading || localLoading}
        className={`rbt-btn rbt-btn-sm d-inline-flex align-items-center gap-2 transition-all ${
          isWholesaleActive
            ? "rbt-btn-gradient text-white shadow-sm"
            : "rbt-btn-border bg-white text-dark"
        }`}
        style={{
          borderRadius: "50px",
          padding: compact ? "4px 12px" : "6px 16px",
          fontSize: compact ? "12px" : "13px",
          fontWeight: 600,
          border: isWholesaleActive
            ? "1px solid transparent"
            : "1px solid #e2e8f0",
          cursor: "pointer",
        }}
        title={
          isWholesaleActive
            ? "Currently viewing Wholesale Prices. Click to switch to Retail view."
            : "Currently viewing Retail Prices. Click to switch to Wholesale view."
        }
      >
        <i
          className={`fa-solid ${
            isWholesaleActive ? "fa-tags text-warning" : "fa-store text-primary"
          }`}
        />
        <span>
          {isWholesaleActive ? "Wholesale View" : "Retail View"}
        </span>
        <span
          className="d-inline-flex align-items-center justify-content-center"
          style={{
            background: isWholesaleActive
              ? "rgba(255, 255, 255, 0.25)"
              : "#edf2f7",
            borderRadius: "12px",
            padding: "2px 8px",
            fontSize: "11px",
            marginLeft: "4px",
          }}
        >
          {localLoading ? (
            <i className="fa-solid fa-spinner fa-spin" />
          ) : (
            <>
              <i className="fa-solid fa-repeat mr--4" style={{ fontSize: "9px" }} />
              {isWholesaleActive ? "Switch to Retail" : "Switch to Wholesale"}
            </>
          )}
        </span>
      </button>
    </div>
  );
}
