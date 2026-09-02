"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "../common/select/LanguageSelect";
import CurrencySelect from "../common/select/CurrencySelect";
import CompareItemLength from "../store/CompareItemLength";
import CartItemsLength from "../store/CartItemsLength";
import CartItemsTotal from "../store/CartItemsTotal";
import WishlistLength from "../store/WishlistLength";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SerchWithCategory2 from "./headerComponents/SerchWithCategory2";
import MegaMenuDropdown from "./headerComponents/MegaMenuDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import { useSticky } from "@/hooks/useSticky";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import Tooltip from "@/components/common/ui/Tooltip";
import { productCategories } from "@/data/menu";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Header4({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-4">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one header-space-between rbt-bg-color-gray-light header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-topbar-section rbt-topbar-one">
          <div className="container">
            <div className="row align-items-center d-none d-md-flex mlr--0 row--0">
              <div className="col-lg-3 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-left rbt-fancy-item fancy-menu-address fancy-menu-start">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access">
                      <li className="rbt-access-box">
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
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="inner d-flex justify-content-center">
                  <TopbarSwiper position="start" color="heading" />
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access">
                      <li className="rbt-access-box">
                        <div className="header-info">
                          <a
                            href="https://www.pinterest.com/"
                            className="rbt-access-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-pinterest mr--4" /> 180k
                            Followers
                          </a>
                        </div>
                        <div className="header-info">
                          <a
                            href="https://www.facebook.com/"
                            className="rbt-access-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-facebook mr--4" /> 300k
                            Followers
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <hr className="rbt-separator rbt-separator-gray100 m-0" />
        </div>
        <div className="rbt-wrapper-middle rbt-header-middle-one">
          <div className="container">
            <div className="mainbar-row @@navigationEnd align-items-center">
              <div className="header-left">
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
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamburger">
                    <MobileMenuToggler />
                  </div>
                </div>
                {/* End Mobile-Menu-Bar */}
              </div>
              <SerchWithCategory2 />
              <div className="header-right">
                {/* Navbar Icons */}
                <ul className="rbt-quick-access has-separator has-separator-lg-space">
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                    <a
                      href="tel:+800300-353-569"
                      className="rbt-access-box-wrapper"
                    >
                      <div className="rbt-round-btn rbt-bg-static-gray">
                        <i className="fa-regular fa-phone" />
                      </div>
                      <div className="content p-0">
                        <p>Hotline</p>
                        <span>+800 300-353-569</span>
                      </div>
                    </a>
                  </li>
                  <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover rbt-mini-cart">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Header Mid */}
      <div className="rbt-header-middle position-relative rbt-header-mid-3 rbt-bg-color-white d-none d-xl-block">
        <div className="container">
          <div className="rbt-header-sec align-items-center rbt-gap--48 justify-content-between mainbar-row">
            <div className="header-info">
              <div className="rbt-category-menu-wrapper rbt-category-update">
                <div className="rbt-category-btn">
                  <div className="rbt-offcanvas-trigger md-size icon">
                    <span className="d-none d-xl-block">
                      <i className="fa-regular fa-bars" />
                      <i className="fa-regular fa-chevron-down" />
                    </span>
                    <i
                      title="Category"
                      className="fa-regular fa-bars d-block d-xl-none"
                    />
                  </div>
                  <span className="category-text d-none d-xl-block">
                    All Categories
                  </span>
                </div>
                {/* Start Update Cart Dropdown  */}
                <MegaMenuDropdown />
                {/* End Update Cart Dropdown  */}
              </div>
            </div>
            <div className="header-info rbt-header-nav-space-between">
              <nav className="rbt-mainmenu-nav">
                <ul className="mainmenu mainmenu has-nav-bg-shape-hover">
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="header-info">
              <ul className="rbt-quick-access rbt-gap--12">
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 d-none d-lg-flex">
                  <Tooltip content="Search" placement="bottom">
                    <div className="tooltips tooltip-distance-lg">
                      <CommonSearchToggler />
                    </div>
                  </Tooltip>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                  <ModalTriggerButton
                    as="div"
                    className="rbt-access-box-wrapper"
                    openModalName="compareReviewModal"
                  >
                    <span className="rbt-round-btn rbt-bg-static-gray has-rbt-md-fsize">
                      <i className="fa-regular fa-code-compare" />
                      <div className="access-box-count">
                        {" "}
                        <CompareItemLength />
                      </div>
                    </span>
                    <div className="content">
                      <span className="title-text">Compare</span>
                    </div>
                  </ModalTriggerButton>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                  <ModalTriggerButton
                    as="div"
                    className="rbt-access-box-wrapper"
                    openModalName="wishlistModal"
                  >
                    <span className="rbt-round-btn rbt-bg-static-gray has-rbt-md-fsize">
                      <i className="fa-regular fa-heart" />
                      <span className="access-box-count">
                        <WishlistLength />
                      </span>
                    </span>
                    <div className="content">
                      <span className="title-text">Wishlist</span>
                    </div>
                  </ModalTriggerButton>
                </li>
                <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover d-none d-lg-flex">
                  <ModalTriggerButton
                    as="div"
                    className="rbt-access-box-wrapper"
                    openModalName="signinModal"
                  >
                    <span className="rbt-round-btn rbt-bg-static-gray has-rbt-md-fsize">
                      <i className="fa-regular fa-user" />
                    </span>
                    <div className="content">
                      <span className="title-text">Log In/Register</span>
                    </div>
                  </ModalTriggerButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Mid */}
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
              {/* End Mobile-Menu-Bar */}
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
      <div className="rbt-categories-area d-none d-xl-block">
        <hr className="rbt-separator rbt-separator-gray50 mb--16" />
        <div className="container">
          <ul className="rbt-cat-box-grp d-flex justify-content-center liststyle justify-content-between">
            {productCategories.map((category) => (
              <li key={category.id}>
                <a className="rbt-cat-cat-box-1" href={category.href}>
                  <span className="rbt-cat-icon">
                    <i className={category.icon} />
                  </span>
                  <span className="title">{category.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
