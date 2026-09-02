import { ScaleIcon } from '../../svg-icons';
import Link from "next/link";
import Image from "next/image";
function HeaderStyleTwentyOne() {
  return (
    <>
      <div className="rbt-comparison-message-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 col-xl-2">
              <div className="rbt-compare-title">
                <h6>Compare Product</h6>
                <span>
                  <ScaleIcon />
                </span>
                <p className="rbt-compare-table-text">
                  Find and select products to see the differences and
                  similarities between them
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-8">
              <div className="row rbt-compare-products">
                <div className="col-10 col-md-3 col-lg-3">
                  <div className="rbt-card rbt-comparison-prd-box">
                    <button type="button" className="close-btn rbt-round-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <div className="rbt-comparison-prd-img">
                      <Link href={`/product-single-default`}>
                        <Image
                          alt="Product Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-05-a-1.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                    </div>
                    <h6 className="rbt-product-title">
                      <Link href={`/product-single-default`}>
                        Logitech G Pro X Superlight Wireless Mouse
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="col-10 col-md-3 col-lg-3">
                  <div className="rbt-card rbt-comparison-prd-box">
                    <button type="button" className="close-btn rbt-round-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <div className="rbt-comparison-prd-img">
                      <Link href={`/product-single-default`}>
                        <Image
                          alt="Product Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-06-a-1.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                    </div>
                    <h6 className="rbt-product-title">
                      <Link href={`/product-single-default`}>
                        Sony Alpha A7 IV Full-Frame Camera
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="col-10 col-md-3 col-lg-3">
                  <div className="rbt-card rbt-comparison-prd-box">
                    <button type="button" className="close-btn rbt-round-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <div className="rbt-comparison-prd-img">
                      <Link href={`/product-single-default`}>
                        <Image
                          alt="Product Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-07-a-1.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                    </div>
                    <h6 className="rbt-product-title">
                      <Link href={`/product-single-default`}>
                        Samsung Galaxy Tab S9 Ultra 14.6&quot;
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="col-10 col-md-3 col-lg-3">
                  <div className="rbt-card rbt-comparison-prd-box">
                    <button type="button" className="close-btn rbt-round-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                    <div className="rbt-comparison-prd-img">
                      <Link href={`/product-single-default`}>
                        <Image
                          alt="Product Image"
                          src="/assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp"
                          width={1246}
                          height={976}
                        />
                      </Link>
                    </div>
                    <h6 className="rbt-product-title">
                      <Link href={`/product-single-default`}>
                        Sony Alpha A7 IV Full-Frame Camera
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-2">
              <div className="rbt-popup-action-area justify-content-center">
                <a
                  className="rbt-btn rbt-btn-sm rbt-square-btn has-left-icon mb--12"
                  href="#"
                >
                  <i className="fa-regular fa-scale-balanced" /> Compare Now
                </a>
                <Link
                  className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn has-left-icon mb--12"
                  href={`/shop`}
                >
                  <i className="fa-regular fa-browser" /> Browse Products
                </Link>
                <a href="#!" className="text-decoration-underline text-center">
                  Clear All
                </a>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="close-canvas-btn rbt-round-btn">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </>
  );
}

export default HeaderStyleTwentyOne;
