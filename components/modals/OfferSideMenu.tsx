"use client";

import Link from "next/link";
import Image from "next/image";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { offerCardItems } from "@/data/offerModal";
import { getStackedModalZIndex } from "@/lib/modalStack";

export default function OffersSideMenu() {
  const { activeBsModal, isAnimatedOpen: offerSideMenuOpen, close } =
    useManagedModalPanel("offerSideMenu");

  return (
    <div
      className={`rbt-special-offprds-side-menu rbt-special-offer-sidemenu ${
        offerSideMenuOpen ? "side-menu-active" : ""
      }`}
      style={{
        zIndex: getStackedModalZIndex(activeBsModal, "offerSideMenu"),
      }}
    >
      <div className="inner-wrapper p--0">
        <aside className="rbt-sidebar">
          <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one">
            <div className="rbt-sidebar-top sticky-top-0 rbt-bg-color-white">
              <h6 className="rbt-sidebar-title mb--0 h-auto">
                <i className="fa-sharp fa-regular fa-filter-list mr--4" />
                Special Offers
              </h6>
              <button
                className="rbt-sidebar-close-btn"
                id="btn_filtersideNavClose"
                type="button"
                onClick={() => close()}
              >
                <i className="fa-sharp fa-solid fa-xmark" />
              </button>
            </div>
            <div className="rbt-sidebar-bottom border-0">
              <div className="row row--12 mt_dec--24">
                {offerCardItems.map((offer) => (
                  <div key={offer.id} className="col-12 mt--24">
                    <div className="rbt-card rbt-offer-card">
                      <div className="inner">
                        <div className="rbt-card-img">
                          <Link href={offer.href}>
                            <Image
                              alt={offer.title}
                              src={offer.imgSrc}
                              width={720}
                              height={720}
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body">
                          <div className="ofr-meta-part">
                            <div className="single-meta">
                              <i className="fa-sharp fa-regular fa-calendar" />
                              {offer.dateRange}
                            </div>
                            <div className="single-meta">
                              <Link href={`/find-store`}>
                                <i className="fa-regular fa-shop mr--4" />
                                All Outlet
                              </Link>
                            </div>
                          </div>
                          <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                          <div className="rbt-ofr-card-content text-center mb--8">
                            <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                              <Link href={offer.href}>{offer.title}</Link>
                            </h6>
                            <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                              {offer.desc}
                            </p>
                            <Link className="rbt-btn rbt-btn-md active" href={offer.href}>
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
