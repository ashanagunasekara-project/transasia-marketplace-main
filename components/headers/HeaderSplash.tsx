"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import SplashScrollLink from "@/components/splash/SplashScrollLink";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import TopbarRemover from "./headerComponents/TopbarRemover";
import MobileMenuToggler from "../action-buttons/MobileMenuToggler";
import { useSticky } from "@/hooks/useSticky";

export default function HeaderSplash({ sticky = false, hasBg = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-splash-header-area">
      {/* Start Campain Area */}
      <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-bg-color-yellow splash-header-campaign-area">
        <div className="rbt-corner-portion-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner justify-content-center">
                  <TopbarSwiper color="black" position="start" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-close position-right">
          <TopbarRemover />
        </div>
      </div>
      {/* End Campain Area */}
      <div
        className={`header-space-between ${hasBg ? "rbt-bg-color-white" : "header-transparent"} plr--0`}
      >
        <div className="container">
          <div className="mainbar-row align-items-center">
            <div className="header-left">
              <div className="rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src={
                          hasBg
                            ? "/assets/images/logo/logo.webp"
                            : "/assets/images/logo/logo-blackbg.webp"
                        }
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
                  <MobileMenuToggler parentClass="hamburger-button rbt-splash-hamburger rbt-round-btn" />
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
            </div>
            <div className="rbt-header-content d-none d-xl-block">
              <div className="header-info">
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu has-nav-bg-shape-hover">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right rbt-gap--32">
              <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end">
                <div className="rbt-header-content">
                  <SplashScrollLink
                    section="features"
                    className="rbt-btn splash-btn splash-hcs-btn icon-reverse-right rbt-btn-sm has-left-icon rbt-scroll-trigger fade_in animation-order-6"
                    aria-label="Explore Unimart features"
                    title="Explore Unimart features"
                  >
                    <span className="icon-left">
                      <i className="fa-regular fa-cart-shopping mr--4" />
                    </span>
                    <span className="d-none d-lg-inline-block">
                      Explore Unimart
                    </span>
                    <span className="icon-right">
                      <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                    </span>
                  </SplashScrollLink>
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
          <div className="mainbar-row rbt-mainbar-row-md-height align-items-center">
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
              <a
                href="https://themeforest.net/user/rainbow-themes"
                className="rbt-btn rbt-btn-sm splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-4 splash-hcs-btn"
                aria-label="Buy Unimart"
                title="Buy Unimart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-left">
                  <i className="fa-regular fa-cart-shopping mr--4" />
                </span>
                <span className="text">Buy Unimart</span>
                <span className="icon-right">
                  <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                </span>
              </a>
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
