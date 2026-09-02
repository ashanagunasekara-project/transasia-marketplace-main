import Image from "next/image";
import Link from "next/link";
import { widerSixCategories } from "@/data/categories";

export default function CategoriesWider() {
  return (
    <div className="rbt-component-area rbt-categories-area pt--0 pt_sm--16 pt_md--16 rbt-bg-color-white">
      <div className="rbt-full-width-wrapper">
        <div className="row row--12 align-items-end">
          {widerSixCategories.map((category, index) => (
            <div key={`${category.title}-${index}`} className="col-lg-1 col-md-3 col-sm-3 col-3 mt--12">
              <Link
                href="/shop-by-categories"
                className={`rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div className="rbt-image-portion">
                    <Image
                      src={category.imgSrc}
                      alt="Catagory Product Images"
                      width={226}
                      height={207}
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">{category.title}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
