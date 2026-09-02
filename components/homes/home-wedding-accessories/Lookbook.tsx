import Link from "next/link";
import { lookbookProducts4 } from "@/data/products/lookbook";
import LookbookBanner from "./LookbookBanner";

export default function Lookbook() {
  const banners = [
    ...new Set(
      lookbookProducts4
        .map((item) => item.bannerImg)
        .filter((img): img is string => !!img),
    ),
  ];

  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--48 mb_sm--24 mb_md--32 border-0">
              <span className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Explore product
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Product collections</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop`}
            >
              <span className="btn-text">View All Product</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(0, 2).map((banner, index) => (
              <LookbookBanner
                key={index}
                banner={banner}
                products={lookbookProducts4}
                index={index}
                isSecondary={index === 1}
              />
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(2, 3).map((banner, index) => (
              <LookbookBanner
                key={index}
                banner={banner}
                products={lookbookProducts4}
                index={index}
              />
            ))}
            <div className="rbt-lookbook-box-content box-content-bg-green mt--24 rbt-scroll-trigger fade_in animation-order-3">
              <h3 className="title">Steel Package</h3>
              <p className="desc b2">
                Make yours celebrations even more special this years with
                beautiful items .
              </p>
              <Link
                className="rbt-btn rbt-btn-border rbt-square-btn rbt-btn-md"
                href={`/shop-by-brands`}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(3, 5).map((banner, index) => (
              <LookbookBanner
                key={index}
                banner={banner}
                products={lookbookProducts4}
                index={index}
                isSecondary={index === 1}
              />
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-8 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-lookbook-box-content box-content-bg-yellow rbt-scroll-trigger fade_in animation-order-4">
              <h3 className="title">Festival Shop</h3>
              <p className="desc b2">
                Enhance your festive moments season with gorgeous products from
                our store
              </p>
              <Link
                className="rbt-btn rbt-btn-border rbt-square-btn rbt-btn-md"
                href={`/shop-by-brands`}
              >
                Shop Now
              </Link>
            </div>
            {banners.slice(5, 6).map((banner, index) => (
              <LookbookBanner
                key={index}
                banner={banner}
                products={lookbookProducts4}
                index={index}
                isSecondary={true}
              />
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(6, 8).map((banner, index) => (
              <LookbookBanner
                key={index}
                banner={banner}
                products={lookbookProducts4}
                index={index}
                isSecondary={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
