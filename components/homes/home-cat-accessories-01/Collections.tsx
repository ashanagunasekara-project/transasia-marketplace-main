import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <div className="rbt-component-area">
      <div className="rbt-full-width-wrapper">
        <div className="grid-product-banner-grp">
          <div className="row row--0">
            <div className="col-xl-6 col-12">
              <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-one rbt-rounded--0 rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="content">
                    <p className="subtitle">Embrace Comfy Wear</p>
                    <h2 className="title">
                      <Link href={`/shop-by-categories`}>
                        <span className="rbt-bold--text rbt-text-capitalize">
                          How to Take care of <br />
                          Your Special Cat
                        </span>
                      </Link>
                    </h2>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-white rbt-btn-md"
                    >
                      Shop Collection
                    </Link>
                  </div>
                  <div className="rbt-image-portion">
                    <Link href={`/shop-by-categories`}>
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src="/assets/images/product-banner/cat-bg-cats-a-2.webp"
                        width={1672}
                        height={1260}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-one rbt-rounded--0 rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="content">
                    <p className="subtitle">Explore the Cat</p>
                    <h2 className="title">
                      <Link href={`/shop-by-categories`}>
                        <span className="rbt-bold--text rbt-text-capitalize">
                          Ready to fall in love with <br />
                          Autumn collection!
                        </span>
                      </Link>
                    </h2>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-white rbt-btn-md"
                    >
                      Shop Collection
                    </Link>
                  </div>
                  <div className="rbt-image-portion">
                    <Link href={`/shop-by-categories`}>
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src="/assets/images/product-banner/cat-bg-cats-a-1.webp"
                        width={1672}
                        height={1260}
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
  );
}
