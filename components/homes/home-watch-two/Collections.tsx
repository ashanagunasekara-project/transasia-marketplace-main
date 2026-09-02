import Link from "next/link";
import Image from "next/image";

export default function Collections() {
  return (
    <div className="rbt-component-area rbt-products-area">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="grid-product-banner-grp">
          <div className="container">
            <div className="row row--12 mt_dec--24">
              <div className="col-md-6 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-four rbt-rounded--0 rbt-scroll-trigger fade_in animation-order-1">
                  <div className="inner">
                    <div className="content">
                      <p className="subtitle">Stay Hydrated Always</p>
                      <h5 className="title">
                        <Link href={`/shop-by-categories`}>
                          <span className="rbt-bold--text">
                            Pure refreshment - get your hydration set-up!
                          </span>
                        </Link>
                      </h5>
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-btn rbt-btn-md radius-round-6"
                      >
                        Shop Collection
                      </Link>
                    </div>
                    <div className="rbt-image-portion">
                      <Link href={`/shop-by-categories`}>
                        <Image
                          className="rbt-scroll-trigger zoom_in animation-order-1"
                          alt="Category Product Images"
                          src="/assets/images/product-banner/product-banner-thumbnail-img-watch-b-sm-02.webp"
                          width={1296}
                          height={864}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-four rbt-rounded--0 rbt-scroll-trigger fade_in animation-order-1">
                  <div className="inner">
                    <div className="content">
                      <p className="subtitle">Are Your A Vegan</p>
                      <h5 className="title">
                        <Link href={`/shop-by-categories`}>
                          <span className="rbt-bold--text">
                            Discover our world of purely plant-based products
                          </span>
                        </Link>
                      </h5>
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-btn rbt-btn-md radius-round-6"
                      >
                        Shop Collection
                      </Link>
                    </div>
                    <div className="rbt-image-portion">
                      <Link href={`/shop-by-categories`}>
                        <Image
                          className="rbt-scroll-trigger zoom_in animation-order-1"
                          alt="Category Product Images"
                          src="/assets/images/product-banner/product-banner-thumbnail-img-watch-b-sm-01.webp"
                          width={1296}
                          height={864}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
