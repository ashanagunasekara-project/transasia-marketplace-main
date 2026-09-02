"use client";
import { useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";

const TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

function TitlesWithNav() {
  const [activeTab, setActiveTab] = useState<string>("this-week");
  return (
    <>
      <div className="rbt-component-area rbt-bg-color-white rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--0 align-items-center">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                >
                  Subtitle Text
                </a>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Titles With</span> Nav
                </h2>
                <p className="description rbt-scroll-trigger fade_in animation-order-2">
                  Thoughtfully crafted looks with premium fabrics and tailored
                  finishing touches that feel polished in person and on camera.
                  Shop more.
                </p>
                <div className="mobile-horizontal-scroll-section">
                  <NavEffectTabs
                    parentClassName="rbt-product-nav-section  rbt-scroll-trigger fade_in animation-order-3 justify-content-center"
                    options={TABS}
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitlesWithNav;
