import Image from "next/image";

const brandItems = [
  { src: "/assets/images/brands/brand-e-01.webp", title: "Timeless", order: 1 },
  { src: "/assets/images/brands/brand-e-02.webp", title: "Iconic", order: 2 },
  { src: "/assets/images/brands/brand-e-03.webp", title: "Conscious", order: 3 },
  { src: "/assets/images/brands/brand-e-04.webp", title: "Specialty", order: 4 },
  { src: "/assets/images/brands/brand-e-05.webp", title: "Active", order: 5 },
  {
    src: "/assets/images/brands/brand-e-06.webp",
    title: "Smartwatches",
    order: 5,
  },
];

export default function Brands({
  parentClass = "rbt-component-area rbt-section-gapBottom",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular By <span className="rbt-bold--text">Brands</span>
              </h2>
              <p className="b1 rbt-text-color-gray-600 mb--0">
                Enjoy free standard shipping for all orders within Continental
                <br />
                States. Need it sooner
              </p>
            </div>
          </div>
        </div>
        {/* Start Brands Area */}
        <div className="row row--12 mt_dec--24">
          {brandItems.map((brand) => (
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24" key={brand.src}>
              <div
                className={`rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-${brand.order}`}
              >
                <div className="inner">
                  <div
                    className={`brand-image rbt-scroll-trigger zoom_in animation-order-${brand.order}`}
                  >
                    <Image
                      alt="Ecommerce Brand Images"
                      src={brand.src}
                      width={400}
                      height={144}
                    />
                  </div>
                  <p className="rbt-text-color-black b1">{brand.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
