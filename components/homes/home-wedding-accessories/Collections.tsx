import Image from "next/image";
import Link from "next/link";
import { weddingCollections } from "@/data/collections";

export default function Collections() {
  const leftItem = weddingCollections[0];
  const rightItems = weddingCollections.slice(1);

  return (
    <div className="rbt-component-area rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {/* Left Column */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 variation-three rbt-scroll-trigger fade_in animation-order-2">
              <div className="inner h-100">
                <div className="rbt-image-portion h-100">
                  <Link className="h-100" href={`/shop-by-category`}>
                    {leftItem.imgSrc && (
                      <Image
                        alt={leftItem.title ?? ""}
                        src={leftItem.imgSrc}
                        width={leftItem.width}
                        height={leftItem.height}
                        className="h-100"
                      />
                    )}
                  </Link>
                </div>
                <div className="content text-center">
                  <h6 className="title rbt-text-color-white mb--0">
                    <Link href={`/shop-by-category`}>{leftItem.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="col-12 col-md-6 col-lg-8 mt--24">
            <div className="row row--12 mt_dec--24">
              {rightItems.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    index === 0 ? "col-12 mt--24" : "col-12 col-md-6 mt--24"
                  }
                >
                  <div className="rbt-cat-box rbt-cat-box-5 variation-three rbt-scroll-trigger fade_in animation-order-2">
                    <div className="inner">
                      <div className="rbt-image-portion">
                        <Link href={`/shop-by-category`}>
                          {item.imgSrc && (
                            <Image
                              alt={item.title ?? ""}
                              src={item.imgSrc}
                              width={item.width}
                              height={item.height}
                            />
                          )}
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h6 className="title rbt-text-color-white mb--0">
                          <Link href={`/shop-by-category`}>{item.title}</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
