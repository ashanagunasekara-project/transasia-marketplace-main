"use client";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import CompareItemLength from "../store/CompareItemLength";
import CartItemsLength from "../store/CartItemsLength";
import WishlistLength from "../store/WishlistLength";
import CartItemsTotal from "../store/CartItemsTotal";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchWithCategory from "./headerComponents/SearchWithCategory";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import { useSticky } from "@/hooks/useSticky";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Header2({ sticky = false }) {
  const isSticky = useSticky();
  const isStickyActive = sticky && isSticky;
  const stickyClass = isStickyActive ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-2">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-wrapper-middle rbt-header-middle-one">
          <div className="container">
            <div className="mainbar-row @@navigationEnd align-items-center">
              <div className="header-left">
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
                  <div className="header-info p-0 d-none d-xl-block ml--28">
                    {/* Category Dropdown Area */}
                    {!isStickyActive && (
                      <CategorySidebarToggler parentClass="rbt-offcanvas-trigger-btn rbt-offcanvas-trigger-transparent-btn rbt-cat-offcanvas-activation rbt-burger-menu-bar" />
                    )}
                  </div>
                </div>
              </div>
              {!isStickyActive && (
                <div className="rbt-header-content d-none d-xl-block">
                  <div className="header-info">
                    <SearchWithCategory parentClass="rbt-search-with-category uni-header-swc-one" />
                  </div>
                </div>
              )}
              <div className="header-right">
                {/* Navbar Icons */}
                <ul className="rbt-quick-access">
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                    <a
                      href="tel:0773392727"
                      className="rbt-access-box-wrapper"
                    >
                      <div className="rbt-round-btn rbt-bg-static-gray">
                        <i className="fa-regular fa-phone" />
                      </div>
                      <div className="content p-0">
                        <p>Hotline</p>
                        <span>077 339 2727</span>
                      </div>
                    </a>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 rbt-access-box-has-bg-hover">
                    <ModalTriggerButton
                      as="div"
                      className="rbt-access-box-wrapper"
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
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 rbt-access-box-has-bg-hover rbt-mini-cart">
                    <CartSidebarToggler className="rbt-access-box-wrapper rbt-cart-sidenav-activation">
                      <div className="rbt-round-btn rbt-bg-static-gray">
                        <i className="fa-regular fa-bag-shopping" />
                        <span className="access-box-count rbt-shiny">
                          <CartItemsLength />
                        </span>
                      </div>
                      <div className="content p-0">
                        <p>Total Cart</p>
                        <span>
                          Total <CartItemsTotal />
                        </span>
                      </div>
                    </CartSidebarToggler>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Header Mid */}
      <div className="rbt-header-middle position-relative rbt-header-mid-1 rbt-bg-color-primary d-none d-xl-block">
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
              <div className="rbt-header-content m--0">
                <ul className="rbt-quick-access rbt-quick-access-var-one">
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-link d-flex align-items-center">
                    <Link
                      href="/find-store"
                      className="text-portion header-info text-white d-flex align-items-center"
                    >
                      <i className="fa-regular fa-location-dot mr--6" />
                      <span>Store Location</span>
                    </Link>
                    <span className="text-white opacity-50 mlr--12">|</span>
                    <Link
                      href="/my-order-history"
                      className="text-portion header-info text-white d-flex align-items-center"
                    >
                      <i className="fa-regular fa-truck-fast mr--6" />
                      <span>Track Your Order</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}
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
          <div className="mainbar-row rbt-mainbar-row-md-height  align-items-center">
            <div className="header-left">
              <div className="rbt-header-content d-flex">
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
