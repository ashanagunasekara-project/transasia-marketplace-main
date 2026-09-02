"use client";

import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import {
  categorySidebarData,
  sidebarQuickLinks,
  sidebarMoreLinks,
  sidebarFooterData,
} from "@/data/categorySidebar";
import { getStackedModalZIndex } from "@/lib/modalStack";

export default function Categories() {
  const { activeBsModal, isAnimatedOpen, close } =
    useManagedModalPanel("categorySidebar");
  const defaultCategoryId = categorySidebarData[0]?.id ?? "";
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategoryId);
  const categorySidebarOpen = isAnimatedOpen;
  const categorySidebarLayerZIndex = getStackedModalZIndex(
    activeBsModal,
    "categorySidebar",
  );

  return (
    <div
      className={`rbt-offcanvas-cat-side-menu rbt-category-sidemenu${categorySidebarOpen ? " side-menu-active" : ""}`}
      style={{
        zIndex: categorySidebarLayerZIndex,
      }}
    >
      <div className="inner-wrapper">
        <div className="rbt-categories-sidebar d-flex">
          <div className="rbt-sidebar-left-content">
            <div className="rbt-sidebar-left-inner">
              {/* Start sidebar left header */}
              <div className="rbt-sidebar-left-content-head">
                <div className="rbt-categories-sidebar-top-content mb--24">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Unimart Logo"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <button
                    className="rbt-sidebar-close-btn"
                    onClick={() => close()}
                  >
                    <i className="fa-sharp fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover rbt-access-box-has-bg-hover-white d-inline-block">
                  <ModalTriggerButton
                    as="div"
                    openModalName="signinModal"
                    className="rbt-access-box-wrapper"
                  >
                    <div className="rbt-round-btn rbt-bg-color-brand-300 rbt-text-color-primary has-rbt-sm-fsize">
                      <i className="fa-regular fa-user" />
                    </div>
                    <div className="content">
                      <p>Log in/Sign Up</p>
                      <span>Access Account</span>
                    </div>
                  </ModalTriggerButton>
                </div>
              </div>
              {/* End sidebar left header */}
              <div className="rbt-sidebar-tabs-wrapper">
                <div className="rbt-sidebar-tabs-inner">
                  {/* Start tabs */}
                  <ul
                    className="rbt-sidebar-sub-categories nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {categorySidebarData.map((category) => (
                      <li key={category.id}>
                        <button
                          className={`rbt-nav-link nav-link${activeCategoryId === category.id ? " active" : ""}`}
                          onClick={() => {
                            setActiveCategoryId(category.id);
                          }}
                        >
                          <span className="rbt-round-btn">
                            <i className={`fa-regular ${category.icon}`} />
                          </span>
                          <span className="rbt-content">
                            <span className="rbt-sub-category-title">
                              <span>{category.title}</span>
                              {category.badge && (
                                <span
                                  className={`rbt-product-badge ${category.badge.class}`}
                                >
                                  {category.badge.text}
                                </span>
                              )}
                            </span>
                            <span className="description">
                              {category.description}
                            </span>
                          </span>
                          <span className="icon">
                            <i className="fa-regular fa-chevron-right" />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {/* End tabs */}
                  {/* Start quick links */}
                  <div className="rbt-sidebar-quick-links-part">
                    <div className="rbt-sidebar-bottom-inner">
                      <hr className="rbt-separator rbt-separator-gray200 mb--24" />
                      <nav className="rbt-sidebar-nav">
                        <h6 className="rbt-sub-category-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            Quick Links
                            <span className="icon">
                              <i className="fa-regular fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                        <div className="collapse" id="collapseExample">
                          <ul className="rbt-sidebar-quick-links">
                            {sidebarQuickLinks.map((link, idx) => (
                              <li key={idx}>
                                {link.url.startsWith("/") ? (
                                  <Link href={link.url}>{link.title}</Link>
                                ) : (
                                  <a href={link.url}>{link.title}</a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </nav>
                      <hr className="rbt-separator rbt-separator-gray200 mb--24 mt--24" />
                      <nav className="rbt-sidebar-nav">
                        <h6 className="rbt-sub-category-title">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample2"
                          >
                            More Links
                            <span className="icon">
                              <i className="fa-regular fa-chevron-down" />
                            </span>
                          </a>
                        </h6>
                        <div className="collapse" id="collapseExample2">
                          <ul className="rbt-sidebar-quick-links">
                            {sidebarMoreLinks.map((link, idx) => (
                              <li key={idx}>
                                {link.url.startsWith("/") ? (
                                  <Link href={link.url}>{link.title}</Link>
                                ) : (
                                  <a href={link.url}>{link.title}</a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {/* End quick links */}
                </div>
              </div>
              {/* Start sidebar footer */}
              <div className="rbt-sidebar-left-content-footer">
                <div className="rbt-sidebar-contact-area">
                  <div className="rbt-sidebar-contact-inner rbt-link-hover">
                    <p className="rbt-contact-text">
                      {sidebarFooterData.address}
                    </p>
                    <a
                      className="rbt-contact-links"
                      href={`tel:${sidebarFooterData.phone}`}
                    >
                      {sidebarFooterData.phone} {sidebarFooterData.phoneLabel}
                    </a>
                    <p className="rbt-contact-text mt--12">
                      {sidebarFooterData.workingHours}
                    </p>
                    <a
                      className="rbt-contact-links"
                      href={`mailto:${sidebarFooterData.email}`}
                    >
                      {sidebarFooterData.email}
                    </a>
                    <Link
                      className="rbt-contact-links d-block"
                      href={sidebarFooterData.mapUrl}
                    >
                      {sidebarFooterData.mapLabel}
                    </Link>
                  </div>
                </div>
              </div>
              {/* End sidebar footer */}
            </div>
          </div>
          <div
            className={`rbt-sidebar-right-content${categorySidebarOpen ? " active" : ""}`}
            style={{
              zIndex:
                categorySidebarLayerZIndex !== undefined
                  ? categorySidebarLayerZIndex + 1
                  : undefined,
              transitionDelay: categorySidebarOpen ? "0.85s, 0s" : "0s, 0s",
            }}
          >
            <div className="rbt-sidebar-right-inner">
              {/* Start tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                {categorySidebarData.map((category) => (
                  <div
                    key={category.id}
                    className={`rbt-tab-content tab-pane fade${activeCategoryId === category.id ? " show active" : ""}`}
                    id={`rbt-nav-pill-${category.id}`}
                    role="tabpanel"
                    aria-labelledby={`rbt-tab-cat-sidebar-${category.id}`}
                    tabIndex={0}
                  >
                    <div className="rbt-sub-category-products">
                      <div className="rbt-category-products-inner">
                        {category.subCategories.map((sub) => (
                          <div
                            key={sub.id}
                            className="rbt-sub-category-product"
                          >
                            <Link
                              href="/shop-by-categories"
                              className="rbt-sidebar-category-img"
                            >
                              <Image
                                alt="Product Image"
                                src={sub.image}
                                width={176}
                                height={176}
                              />
                            </Link>
                            <h6 className="rbt-header">
                              <Link href={`/shop-by-categories`}>
                                {sub.title}
                              </Link>
                            </h6>
                            <ul className="rbt-product-features has-link-underline-effect">
                              {sub.links.map((link, lIndex) => (
                                <li key={lIndex}>
                                  <Link href={link.url}>{link.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Start banner */}
                      {category.banner && (
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <Image
                              alt="Banner Image"
                              src={category.banner.image}
                              width={593}
                              height={240}
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              {category.banner.text}
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                {category.banner.highlight}
                              </span>
                            </p>
                            <h4 className="rbt-sidebar-banner-titile">
                              {category.banner.title}
                              <span className="rbt-text-regular">
                                {category.banner.subtitle}
                              </span>
                            </h4>
                            <Link
                              href={category.banner.buttonUrl}
                              className="rbt-btn rbt-btn-sm"
                            >
                              {category.banner.buttonText}
                            </Link>
                          </div>
                        </div>
                      )}
                      {/* End banner */}
                    </div>
                  </div>
                ))}
              </div>
              {/* End tab content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
