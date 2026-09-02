import Image from "next/image";
import Link from "next/link";

const plantCategories = [
  {
    id: 1,
    title: "Potted Houseplants",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-01.webp",
  },
  {
    id: 2,
    title: "Indoor Plant",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-02.webp",
  },
  {
    id: 3,
    title: "Home & Garden",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-03.webp",
  },
  {
    id: 4,
    title: "Planting Starter",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-04.webp",
  },
  {
    id: 5,
    title: "Plant Arrangements",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-05.webp",
  },
  {
    id: 6,
    title: "Houseplants",
    imgSrc: "/assets/images/catagory-img/cat-plant-bg-a-06.webp",
  },
];

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-catagories-area rbt-bg-color-white rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Discover the{" "}
                <span className="rbt-bold--text">Popular Categories</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href="/categories-list"
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {plantCategories.map((category, index) => (
            <div key={category.id} className="col-xl-2 col-md-4 col-6 mt--24">
              <div
                className={`rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <Link href="/shop-by-category">
                      <Image
                        className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                        alt="Catagory Product Images"
                        src={category.imgSrc}
                        width={400}
                        height={510}
                      />
                    </Link>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <Link href="/shop-by-category" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h6 className="title">
                      <Link href="/shop-by-category">{category.title}</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
