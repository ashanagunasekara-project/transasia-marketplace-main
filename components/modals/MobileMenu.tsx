"use client";

import Image from "next/image";
import Link from "next/link";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { usePathname } from "next/navigation";
import { isPathActive } from "@/lib/nav";
import { mobileMenuSocialLinks } from "@/data/socials";
import { contactInfo } from "@/data/contact";
import { getStackedModalZIndex } from "@/lib/modalStack";

export default function MobileMenu() {
  const {
    activeBsModal,
    isAnimatedOpen: mobileMenuOpen,
    close,
  } = useManagedModalPanel("mobileMenu");
  const pathname = usePathname();

  const closeMenu = () => {
    close();
  };

  const handleBackdropClick = () => {
    if (mobileMenuOpen) closeMenu();
  };

  const isHomeActive = isPathActive(pathname, "/");
  const isShopActive =
    isPathActive(pathname, "/shop") ||
    (typeof pathname === "string" && pathname.startsWith("/product"));
  const isCategoriesActive = isPathActive(pathname, "/categories");
  const isContactActive = isPathActive(pathname, "/contact");

  return (
    <div
      className={`popup-mobile-menu ${mobileMenuOpen ? "active" : ""}`}
      onClick={handleBackdropClick}
      role="presentation"
      style={{
        zIndex: getStackedModalZIndex(activeBsModal, "mobileMenu"),
      }}
    >
      <div className="inner-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-top">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href={`/`} onClick={closeMenu}>
                  <Image
                    alt="Transasia Logo"
                    src="/assets/images/logo/logo.webp"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={closeMenu}
                  aria-label="Close Mobile Menu"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <p className="description">
              Transasia - Your dedicated electronics destination.
            </p>
          </div>
          <nav className="rbt-mainmenu-nav pt--24">
            <ul className="mainmenu">
              <li>
                <Link
                  href="/"
                  className={isHomeActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={isShopActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={isCategoriesActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isContactActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-bottom">
          <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Find With Us</span>
            <ul className="rbt-social-icon-list mt--12">
              {mobileMenuSocialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <i className={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="navbar-top-left rbt-information-list justify-content-center">
            <li>
              <a href={contactInfo.emailHref}>
                <i className="fa-light fa-envelope" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={contactInfo.phoneHref}>
                <i className="fa-regular fa-phone" />
                {contactInfo.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
