"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "../../svg-icons";
import Counter from "../../common/ui/Counter";
import { demoData } from "@/data/menu";
import { isPathActive } from "@/lib/nav";

interface NavDemosMenuProps {
  isHoverOpen: boolean;
  isActive: boolean;
  mounted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onWheelInside: () => void;
}

export default function NavDemosMenu({
  isHoverOpen,
  isActive,
  mounted,
  onMouseEnter,
  onMouseLeave,
  onWheelInside,
}: NavDemosMenuProps) {
  const pathname = usePathname();

  return (
    <li
      className={`with-rbt-megamenu has-menu-child-item position-static rbt-initial-odo-count${
        isHoverOpen ? " rbt-menu-hover-open" : ""
      }${isActive ? " active" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onWheel={onWheelInside}
    >
      <a
        href="#!"
        aria-haspopup="true"
        aria-expanded={isHoverOpen}
        onClick={(e) => e.preventDefault()}
      >
        Demos <i className="fa-regular fa-chevron-down" />
      </a>
      {mounted && (
        <div className="rbt-megamenu rbt-presentation-megamenu rbt-width-fullscreen">
          <div className="rbt-megamenu-wrapper">
            <div className="container p_sm--0 p_md--0 p_lg--0">
              <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24">
                {demoData.map((item, index) => {
                  const itemIsActive = isPathActive(pathname, item.href);

                  return (
                    <div
                      key={item.href}
                      className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                    >
                      <div
                        className={`demo-single rbt-scroll-trigger zoom_in animation-order-${
                          index + 1
                        }${itemIsActive ? " active" : ""}`}
                      >
                        <div className="inner">
                          <div className="thumbnail">
                            <Link href={item.href}>
                              <Image
                                alt="Demo Images"
                                src={item.src}
                                width={item.width}
                                height={item.height}
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <h4 className="rbt-title">
                              <Link
                                href={item.href}
                                className={itemIsActive ? "active" : undefined}
                              >
                                {item.title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="load-demo-btn text-center pt--24 pt_sm--0 pt_lg--0 position-relative">
                <Link
                  href="/#rbt-demo-presentation-section"
                  className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2"
                >
                  <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                    <span data-text="View All The Trending Collection">
                      VIEW ALL DEMOS (80+) New drops every month 🔥
                    </span>
                  </span>
                  <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm default-primary-bg p--0">
                    <span className="animated-icon">
                      <ExternalLinkIcon />
                    </span>
                  </span>
                </Link>
                <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                  <Counter max={100} />{" "}
                  <span className="counter-suffix">+</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
