'use client';

import Image from "next/image";
import { pluginItems } from "@/data/splash";
import { useParallax } from "@/hooks/useParallax";

export default function Costing() {
  const parallaxRef = useParallax();

  return (
    <div ref={parallaxRef} className="splash-section-gap rbt-plugin-presentation-area rbt-splash-common-sec-bg-2 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mb--56">
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                Empower Your Website
              </span>
              <h2 className="rbt-title mb--24">
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  In-Built Unimart Features
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="rbt-feature-plugin-wrapper">
          {pluginItems.map((plugin, index) => (
            <div
              key={plugin.title}
              className={`rbt-feature-plugin rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              data-parallax={`{"x": 0, "y": ${plugin.parallaxY}}`}
            >
              <div className="inner">
                <div className="thumbnail rbt-scroll-trigger zoom_in animation-order-4">
                  <Image
                    alt="Plugin Images"
                    src={plugin.image}
                    width={plugin.width}
                    height={plugin.height}
                  />
                </div>
                <div className="content">
                  <h5 className="rbt-title">{plugin.title}</h5>
                  <div className="rbt-product-badge rbt-bg-color-brand-200 rbt-text-color-brand-600">
                    {plugin.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
