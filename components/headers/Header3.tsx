"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "../common/select/LanguageSelect";
import CurrencySelect from "../common/select/CurrencySelect";
import CompareItemLength from "../store/CompareItemLength";
import WishlistLength from "../store/WishlistLength";
import CartItemsLength from "../store/CartItemsLength";
import CartItemsTotal from "../store/CartItemsTotal";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchDropdown from "./headerComponents/SearchDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/hooks/useSticky";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import NavFilterTab from "./headerComponents/NavFilterTab";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Header3({ showFeatures = true, sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-3">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-one w-100">
          <div className="rbt-corner-portion-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="inner justify-content-center">
                    <TopbarSwiper position="start" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-close position-right">
            <TopbarRemover />
          </div>
        </div>
        <div className="rbt-wrapper-middle rbt-header-middle-one position-relative">
          <div className="container">
            <div className="mainbar-row @@navigationEnd align-items-center">
              <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end d-none d-xl-block">
                <div className="rbt-header-content">
                  <ul className="rbt-quick-access d-none d-lg-flex">
                    <li className="rbt-access-box">
                      <div className="header-info">
                        <Link href={`/find-store`} className="rbt-access-link">
                          Store Location
                        </Link>
                      </div>
                      <div className="header-info">
                        <Link
                          href={`/my-order-history`}
                          className="rbt-access-link"
                        >
                          Track Your Order
                        </Link>
                      </div>
                      <div className="header-info">
                        <CurrencySelect />
                      </div>
                      <div className="header-info">
                        <LanguageSelect />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamburger">
                  <MobileMenuToggler />
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-right rbt-gap--32">
                {/* Navbar Icons */}
                <ul className="rbt-quick-access">
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 d-none d-lg-flex">
                    <Tooltip content="Search" placement="bottom">
                      <div className="tooltips tooltip-distance-lg">
                        <SearchToggler />
                      </div>
                    </Tooltip>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex">
                    <Tooltip content="Profile" placement="bottom">
                      <ModalTriggerButton
                        className="rbt-round-btn rbt-bg-static-gray tooltips tooltip-distance-lg"
                        openModalName="signinModal"
                      >
                        <i className="fa-regular fa-user" />
                      </ModalTriggerButton>
                    </Tooltip>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4">
                    <Tooltip content="Compare" placement="bottom">
                      <ModalTriggerButton
                        as="div"
                        className="rbt-round-btn rbt-bg-static-gray has-rbt-sm-fsize tooltips tooltip-distance-lg"
                        openModalName="compareReviewModal"
                      >
                        <i className="fa-regular fa-code-compare" />
                        <div className="access-box-count">
                          {" "}
                          <CompareItemLength />
                        </div>
                      </ModalTriggerButton>
                    </Tooltip>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-wishlist d-none d-lg-flex">
                    <Tooltip content="Wishlist" placement="bottom">
                      <Link
                        className="rbt-round-btn rbt-bg-static-gray tooltips tooltip-distance-lg"
                        href={`/wishlist`}
                      >
                        <i className="fa-regular fa-heart" />
                        <div className="access-box-count">
                          <WishlistLength />
                        </div>
                      </Link>
                    </Tooltip>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-mini-cart d-none d-lg-flex">
                    <Tooltip content="Cart" placement="bottom">
                      <CartSidebarToggler className="rbt-cart-sidenav-activation rbt-round-btn rbt-bg-static-gray tooltips tooltip-distance-lg">
                        <i className="fa-regular fa-bag-shopping" />
                        <span className="access-box-count rbt-shiny">
                          <CartItemsLength />
                        </span>
                      </CartSidebarToggler>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <SearchDropdown />
        </div>
      </div>
      {/* Start Header Mid */}
      <div className="rbt-header-middle position-relative rbt-header-mid-3 rbt-bg-color-white d-none d-xl-block">
        <div className="container">
          <div className="rbt-header-sec align-items-center @@flexDirection">
            <div className="rbt-main-navigation d-none d-xl-block">
              <nav className="rbt-mainmenu-nav">
                <ul className="mainmenu has-nav-bg-shape-hover">
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="rbt-header-sec-col rbt-header-right">
              <div className="rbt-header-cat-link-section rbt-gap--12 align-items-center d-none d-lg-flex justify-content-end">
                <div className="rbt-cat-link-title">Choose Gender :</div>
                <NavFilterTab />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}
      {/* Start Header Bottom */}
      {showFeatures && (
        <div className="rbt-header-bottom position-relative rbt-header-bottom-2 rbt-bg-color-gray-light d-none d-xl-flex ptb--16">
          <div className="container">
            <div className="rbt-inf-box-wrapper">
              <ul className="rbt-inf-box-wrapper-list justify-content-center">
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-truck-fast" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Free Shipping</h6>
                      <p className="rbt-inf-box-desc">
                        From all orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Quality Support</h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-box" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Return &amp; Refund</h6>
                      <p className="rbt-inf-box-desc">
                        Return money within 30 days
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-ticket" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Gift Voucher</h6>
                      <p className="rbt-inf-box-desc">
                        20% off when you shop online
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-5">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Quality Support</h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* End Header Bottom */}
      <div
        className={`rbt-header-common-sticky-activation rbt-header-wrapper-common justify-content-between rbt-bg-color-white${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-one w-100">
          <div className="rbt-corner-portion-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="inner justify-content-center">
                    <TopbarSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-close position-right">
            <TopbarRemover />
          </div>
        </div>
        <div className="container">
          <div className="mainbar-row rbt-mainbar-row-md-height @@navigationEnd align-items-center">
            <div className="header-left">
              <div className="rbt-header-content d-flex">
                <div className="header-info p-0 d-none d-xxl-flex mr--24">
                  <CategorySidebarToggler />
                </div>
                <div className="header-info d-xl-block d-none">
                  <div className="logo rbt-logo-height-sm">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamburger">
                  <MobileMenuToggler />
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
            </div>
            <div className="header-info d-xl-none d-block">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    alt="Ecommerce Logo Images"
                    src="/assets/images/logo/logo.webp"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
            </div>
            <div className="rbt-header-content d-none d-xl-block">
              <div className="header-info">
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu mainmenu has-nav-bg-shape-hover">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* Navbar Icons */}
              <ul className="rbt-quick-access rbt-gap--12">
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2">
                  <Tooltip content="Search" placement="bottom">
                    <div className="tooltips tooltip-distance-lg">
                      <CommonSearchToggler />
                    </div>
                  </Tooltip>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex">
                  <Tooltip content="Sign In" placement="bottom">
                    <ModalTriggerButton
                      className="rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg"
                      openModalName="signinModal"
                    >
                      <i className="fa-regular fa-user" />
                    </ModalTriggerButton>
                  </Tooltip>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 d-none d-lg-flex">
                  <Tooltip content="Compare" placement="bottom">
                    <ModalTriggerButton
                      as="div"
                      className="rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg"
                      openModalName="compareReviewModal"
                    >
                      <i className="fa-regular fa-code-compare" />
                      <div className="access-box-count">
                        {" "}
                        <CompareItemLength />
                      </div>
                    </ModalTriggerButton>
                  </Tooltip>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-wishlist d-none d-lg-flex">
                  <Tooltip content="Wishlist" placement="bottom">
                    <ModalTriggerButton
                      as="div"
                      className="rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg"
                      openModalName="wishlistModal"
                    >
                      <i className="fa-regular fa-heart" />
                      <div className="access-box-count">
                        <WishlistLength />
                      </div>
                    </ModalTriggerButton>
                  </Tooltip>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-access-box-has-bg-hover rbt-mini-cart">
                  <Tooltip content="Cart" placement="bottom">
                    <span>
                      <CartSidebarToggler className="rbt-access-box-wrapper rbt-cart-sidenav-activation tooltips tooltip-distance-lg">
                        <span className="rbt-round-btn has-rbt-md-fsize">
                          <i className="fa-regular fa-bag-shopping" />
                          <span className="access-box-count rbt-shiny">
                            <CartItemsLength />
                          </span>
                        </span>
                        <div className="content ml--4">
                          <span className="title-text">
                            $<CartItemsTotal />
                          </span>
                        </div>
                      </CartSidebarToggler>
                    </span>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start Search Dropdown  */}
        <SearchDropdownCommon />
        {/* End Search Dropdown  */}
      </div>
    </header>
  );
}
