"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { useAuthStore } from "@/context/authStore";
import { useUiStore } from "@/context/uiStore";

export default function UserAccountMenu({ isIconOnly = false }: { isIconOnly?: boolean }) {
  const { user, isAuthenticated, activeView, switchViewMode, logout } = useAuthStore();
  const openBsModal = useUiStore((s) => s.openBsModal);
  const showToaster = useUiStore((s) => s.showToaster);

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted || !isAuthenticated || !user) {
    if (isIconOnly) {
      return (
        <ModalTriggerButton
          className="rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg"
          openModalName="signinModal"
        >
          <i className="fa-regular fa-user" />
        </ModalTriggerButton>
      );
    }
    return (
      <ModalTriggerButton
        as="div"
        className="rbt-access-box-wrapper cursor-pointer"
        openModalName="signinModal"
      >
        <div className="rbt-round-btn rbt-bg-static-gray">
          <i className="fa-regular fa-user" />
        </div>
        <div className="content">
          <p>Log in/Sign Up</p>
          <span>Access Account</span>
        </div>
      </ModalTriggerButton>
    );
  }

  const isWholesale = user.hasWholesaleAccount;
  const isApproved = user.isWholesaleApproved;
  const displayName = user.profile?.fullName || user.phone;

  return (
    <div className="position-relative" ref={menuRef}>
      {isIconOnly ? (
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rbt-round-btn has-rbt-md-fsize border-0"
          style={{ background: isWholesale ? "#ebf8ff" : "#f1f5f9" }}
          title={displayName}
        >
          <i
            className={`fa-solid ${
              isWholesale ? "fa-user-tie text-primary" : "fa-user text-dark"
            }`}
          />
        </button>
      ) : (
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rbt-access-box-wrapper cursor-pointer"
          style={{ cursor: "pointer" }}
        >
          <div
            className="rbt-round-btn"
            style={{
              background: isWholesale ? "#ebf8ff" : "#f1f5f9",
              border: isWholesale ? "1px solid #90cdf4" : "1px solid #cbd5e1",
            }}
          >
            <i
              className={`fa-solid ${
                isWholesale ? "fa-user-tie text-primary" : "fa-user text-dark"
              }`}
            />
          </div>
          <div className="content">
            <p className="text-truncate" style={{ maxWidth: "120px" }}>
              {displayName}
            </p>
            <span className="badge p-0 font-weight-normal text-muted" style={{ fontSize: "11px" }}>
              {user.wholesaleCustomerId
                ? `WS: ${user.wholesaleCustomerId}`
                : isWholesale
                ? "Wholesale (Pending)"
                : "Retail Account"}
            </span>
          </div>
        </div>
      )}

      {/* Account Dropdown Menu */}
      {menuOpen && (
        <div
          className="position-absolute end-0 mt--8 p--16 bg-white rounded shadow-lg border"
          style={{
            minWidth: "260px",
            zIndex: 9999,
            top: "100%",
          }}
        >
          <div className="d-flex align-items-center gap-3 pb--12 border-bottom mb--12">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bold"
              style={{
                width: "40px",
                height: "40px",
                background: isWholesale ? "#3182ce" : "#4a5568",
              }}
            >
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <h6 className="mb--0 text-truncate font-weight-bold" style={{ fontSize: "14px" }}>
                {displayName}
              </h6>
              <span className="b4 text-muted d-block text-truncate">
                {user.email || user.phone}
              </span>
              <span
                className={`badge mt--4 ${
                  isApproved
                    ? "bg-success text-white"
                    : isWholesale
                    ? "bg-warning text-dark"
                    : "bg-secondary text-white"
                }`}
                style={{ fontSize: "10px" }}
              >
                {isApproved
                  ? `Approved Wholesale (${user.wholesaleCustomerId || "Active"})`
                  : isWholesale
                  ? "Wholesale Pending"
                  : "Retail Customer"}
              </span>
            </div>
          </div>

          {/* Pricing View Switcher section */}
          <div className="py--8 border-bottom mb--12">
            <span className="b4 text-muted d-block mb--6 font-weight-bold">
              ACTIVE PRICING VIEW
            </span>
            <div className="d-flex align-items-center justify-content-between">
              <span className="b3">
                {activeView === "WHOLESALE" ? "Wholesale Pricing" : "Retail Pricing"}
              </span>
              {isApproved ? (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  style={{ fontSize: "11px", padding: "2px 8px" }}
                  onClick={async () => {
                    const next = activeView === "WHOLESALE" ? "REGULAR" : "WHOLESALE";
                    const res = await switchViewMode(next);
                    if (res.success) {
                      showToaster(`Switched to ${next === "WHOLESALE" ? "Wholesale" : "Retail"} view`);
                      setMenuOpen(false);
                    }
                  }}
                >
                  <i className="fa-solid fa-repeat mr--4" />
                  {activeView === "WHOLESALE" ? "To Retail" : "To Wholesale"}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning"
                  style={{ fontSize: "11px", padding: "2px 8px" }}
                  onClick={() => {
                    setMenuOpen(false);
                    openBsModal("wholesaleUpgradeModal");
                  }}
                >
                  Apply Wholesale
                </button>
              )}
            </div>
          </div>

          <div className="d-flex flex-column gap-2">
            <Link
              href="/my-order-history"
              className="b3 text-dark d-flex align-items-center gap-2 py--4 hover-primary"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-regular fa-truck text-muted" />
              <span>Order History</span>
            </Link>
            {!isWholesale && (
              <button
                type="button"
                className="b3 text-primary d-flex align-items-center gap-2 py--4 bg-transparent border-0 text-start"
                onClick={() => {
                  setMenuOpen(false);
                  openBsModal("wholesaleUpgradeModal");
                }}
              >
                <i className="fa-solid fa-briefcase text-primary" />
                <span>Register for Wholesale</span>
              </button>
            )}
            <button
              type="button"
              className="b3 text-danger d-flex align-items-center gap-2 py--4 bg-transparent border-0 text-start mt--8 pt--8 border-top"
              onClick={() => {
                logout();
                showToaster("Signed out successfully");
                setMenuOpen(false);
              }}
            >
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
