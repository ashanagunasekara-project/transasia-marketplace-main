import Link from "next/link";
import Image from "next/image";
import { categories14 } from "@/data/categories";

export default function Categories({ containerFull = false }) {
  return (
    <div className="rbt-component-area rbt-categories-area pt--0 pt_sm--16 pt_md--16 rbt-bg-color-white">
      <div
        className={`${containerFull ? "rbt-full-width-wrapper" : "container"}`}
      >
        {/* Start Component Area */}
        <div className="row row--12 align-items-end">
          {categories14.map((cat, index) => (
            <div
              key={index}
              className="col-lg-1-8 col-md-3 col-sm-3 col-3 mt--12"
            >
              <Link
                className={`rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion">
                    {cat.imgSrc && (
                      <Image
                        alt="Category Product Images"
                        src={cat.imgSrc}
                        width={cat.width}
                        height={cat.height}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h6 className="title">{cat.title}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End Component Area */}
      </div>
    </div>
  );
}
