import Link from "next/link";
export default function Brands() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular By{" "}
                <span className="rbt-bold--text">Mobile Devices</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12">
          <div className="rbt-categories-list-area">
            <ul className="rbt-categories-grp justify-content-center">
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-1"
                >
                  iPhone 13
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-2"
                >
                  iPhone 13 Pro
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-3"
                >
                  iPhone SE
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-4"
                >
                  iPhone 14
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-5"
                >
                  iPhone 14 Pro
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-5"
                >
                  iPhone 16 Pro
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-1"
                >
                  Galaxy S22
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-2"
                >
                  Galaxy S22 Ultra
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-2"
                >
                  Galaxy S23 Ultra
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-3"
                >
                  Galaxy Z Flip 3
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-4"
                >
                  Galaxy Z Flip 4
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop-by-categories`}
                  className="rbt-category-btn rbt-btn rbt-btn-border rbt-scroll-trigger fade_in animation-order-5"
                >
                  Galaxy Z Fold 4 Pro
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
