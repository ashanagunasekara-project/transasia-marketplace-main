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
import SearchWithCategory from "./headerComponents/SearchWithCategory";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import { useSticky } from "@/hooks/useSticky";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Header5({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-13">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-one header-space-between rbt-bg-color-gray-100 header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-two">
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
        {/* Start Header Mid */}
        <div className="rbt-header-middle position-relative rbt-header-mid-5 rbt-bg-color-gray-light d-none d-xl-block">
          <div className="container">
            <div className="rbt-header-sec align-items-center justify-content-center">
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu has-nav-bg-shape-hover">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Mid */}
      </div>
      <div className="rbt-wrapper-middle rbt-header-middle-one rbt-bg-color-white">
        <div className="container">
          <div className="row row--12 rbt-container-extended-wider">
            <div className="col-md-12">
              <div className="mainbar-row align-items-center rbt-header-13-mainbar position-relative">
                <div className="header-left">
                  <div className="rbt-header-content rbt-gap--24">
                    <div className="header-info p--0 plr_lg--48 plr_md--24">
                      <div className="logo variation-one">
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
                    <div className="header-info p-0 d-none d-xl-block">
                      <CategorySidebarToggler />
                    </div>
                  </div>
                </div>
                <div className="rbt-header-content d-none d-lg-block">
                  <div className="header-info">
                    <SearchWithCategory parentClass="rbt-search-with-category uni-header-swc-one uni-header-swc-md" />
                  </div>
                </div>
                <div className="header-right">
                  {/* Navbar Icons */}
                  <ul className="rbt-quick-access d-none d-xl-flex">
                    <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-wishlist">
                      <Tooltip content="Wishlist" placement="bottom">
                        <Link
                          className="rbt-round-btn rbt-round-btn rbt-bg-static-gray tooltips tooltip-distance-lg"
                          href={`/wishlist`}
                        >
                          <i className="fa-regular fa-heart" />
                          <div className="access-box-count">
                            <WishlistLength />
                          </div>
                        </Link>
                      </Tooltip>
                    </li>
                    <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 rbt-access-box-has-bg-hover d-none d-lg-flex">
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
                            Total $<CartItemsTotal />
                          </span>
                        </div>
                      </CartSidebarToggler>
                    </li>
                  </ul>
                  {/* Start Mobile-Menu-Bar */}
                  <div className="mobile-menu-bar d-block d-xl-none">
                    <div className="hamburger">
                      <MobileMenuToggler />
                    </div>
                  </div>
                  {/* Start Mobile-Menu-Bar */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
