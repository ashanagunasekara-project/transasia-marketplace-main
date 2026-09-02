"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import CompareItemLength from "../store/CompareItemLength";
import WishlistLength from "../store/WishlistLength";
import CartItemsLength from "../store/CartItemsLength";
import CartItemsTotal from "../store/CartItemsTotal";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchDropdown from "./headerComponents/SearchDropdown";
import MegaMenuDropdown from "./headerComponents/MegaMenuDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/hooks/useSticky";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Header14({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-9">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-three">
          <div className="rbt-corner-portion-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
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
        <div className="rbt-wrapper-middle rbt-header-middle-one @@has-bg-transparent">
          <div className="rbt-full-width-wrapper">
            <div className="mainbar-row @@navigationEnd align-items-center">
              <div className="header-left">
                <div className="rbt-header-content rbt-gap--32">
                  {/* Start Mobile-Menu-Bar */}
                  <div className="mobile-menu-bar d-block d-xl-none">
                    <div className="hamburger">
                      <MobileMenuToggler />
                    </div>
                  </div>
                  {/* Start Mobile-Menu-Bar */}
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
                  <div className="header-info p-0 d-none d-xl-flex rbt-category-update rbt-category-update-var-modern">
                    <Link
                      className="rbt-btn-transparent has-bg-shape-hover"
                      href={`/shop-by-categories`}
                    >
                      <i className="fa-solid fa-bars" />
                      <span>Shop by Categories</span>
                    </Link>
                    {/* Start Update Cart Dropdown  */}
                    <MegaMenuDropdown />
                    {/* End Update Cart Dropdown  */}
                  </div>
                </div>
              </div>
              <div className="rbt-header-content">
                <div className="header-info d-none d-xl-block">
                  <nav className="rbt-mainmenu-nav">
                    <ul className="mainmenu has-nav-bg-shape-hover">
                      <Nav />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right rbt-gap--32">
                {/* Navbar Icons */}
                <ul className="rbt-quick-access">
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2">
                    <Tooltip content="Search" placement="bottom">
                      <div className="tooltips tooltip-distance-lg">
                        <SearchToggler />
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
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 rbt-wishlist d-none d-lg-flex">
                    <Tooltip content="Wishlist" placement="bottom">
                      <Link
                        className="rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg"
                        href={`/wishlist`}
                      >
                        <i className="fa-regular fa-heart" />
                        <div className="access-box-count">
                          <WishlistLength />
                        </div>
                      </Link>
                    </Tooltip>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-mini-cart">
                    <Tooltip content="Cart" placement="bottom">
                      <CartSidebarToggler className="rbt-cart-sidenav-activation rbt-round-btn has-rbt-md-fsize tooltips tooltip-distance-lg">
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
        </div>
      </div>
      <SearchDropdown />
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
        <div className="rbt-full-width-wrapper">
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
