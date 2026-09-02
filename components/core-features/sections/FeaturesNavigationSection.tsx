import Image from "next/image";
import Link from "next/link";

type FeatureNavigationItem = {
  href: string;
  colorClassName: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  subtitle: string;
};

const featureNavigationItems: FeatureNavigationItem[] = [
  {
    href: "/header-builder",
    colorClassName: "rbt-color-var-4",
    imageSrc: "/assets/images/splash/feature/feature-list-img4.webp",
    imageWidth: 472,
    imageHeight: 334,
    title: "Ultimate Header Layouts",
    subtitle: "20+ Components, 14+ Variants",
  },
  {
    href: "/footer-builder",
    colorClassName: "rbt-color-var-6",
    imageSrc: "/assets/images/splash/feature/feature-list-img6.webp",
    imageWidth: 472,
    imageHeight: 341,
    title: "Excessive Footer Variation",
    subtitle: "20+ Components, 14+ Variants",
  },
  {
    href: "/advanced-megamenu",
    colorClassName: "rbt-color-var-7",
    imageSrc: "/assets/images/splash/feature/feature-list-img7.webp",
    imageWidth: 472,
    imageHeight: 334,
    title: "Advanced Mega Menu",
    subtitle: "9+ Components, 11+ Variants",
  },
  {
    href: "/popup-builder",
    colorClassName: "rbt-color-var-8",
    imageSrc: "/assets/images/splash/feature/feature-list-img8.webp",
    imageWidth: 464,
    imageHeight: 291,
    title: "Popup & Sidebar Search",
    subtitle: "30+ Components, 15+ Variants",
  },
  {
    href: "/product-display",
    colorClassName: "rbt-color-var-1",
    imageSrc: "/assets/images/splash/feature/feature-list-img21.webp",
    imageWidth: 472,
    imageHeight: 334,
    title: "Product Video & 3D View",
    subtitle: "4 Components, 4+ Variants",
  },
  {
    href: "/variant-switcher",
    colorClassName: "rbt-color-var-3",
    imageSrc: "/assets/images/splash/feature/feature-list-img13.webp",
    imageWidth: 480,
    imageHeight: 334,
    title: "Variant Swatches",
    subtitle: "14+ Components, 10+ Variants",
  },
  {
    href: "/boost-features",
    colorClassName: "rbt-color-var-9",
    imageSrc: "/assets/images/splash/feature/feature-list-img9.webp",
    imageWidth: 513,
    imageHeight: 316,
    title: "All Boost Sales Features",
    subtitle: "10+ Components, 10+ Variants",
  },
  {
    href: "/compare-table-builder",
    colorClassName: "rbt-color-var-4",
    imageSrc: "/assets/images/splash/feature/feature-list-img14.webp",
    imageWidth: 472,
    imageHeight: 362,
    title: "Product Compare",
    subtitle: "1 Components, 1 Variants",
  },
  {
    href: "/product-filtering",
    colorClassName: "rbt-color-var-2",
    imageSrc: "/assets/images/splash/feature/feature-list-img12.webp",
    imageWidth: 493,
    imageHeight: 419,
    title: "Smart Product Filtering",
    subtitle: "10+ Components, 8+ Variants",
  },
  {
    href: "/wishlist-builder",
    colorClassName: "rbt-color-var-5",
    imageSrc: "/assets/images/splash/feature/feature-list-img15.webp",
    imageWidth: 236,
    imageHeight: 167,
    title: "Wishlists Variation",
    subtitle: "4 Components, 4 Variants",
  },
  {
    href: "/size-chart-builder",
    colorClassName: "rbt-color-var-9",
    imageSrc: "/assets/images/splash/feature/feature-list-img19.webp",
    imageWidth: 379,
    imageHeight: 266,
    title: "Size Chart Variation",
    subtitle: "2 Components, 2 Variants",
  },
  {
    href: "/stock-progressbar",
    colorClassName: "rbt-color-var-2",
    imageSrc: "/assets/images/splash/feature/feature-list-img32.webp",
    imageWidth: 476,
    imageHeight: 378,
    title: "Stock Progress Bar",
    subtitle: "3 Components, 3 Variants",
  },
  {
    href: "/page-options",
    colorClassName: "rbt-color-var-2",
    imageSrc: "/assets/images/splash/feature/feature-list-img2.webp",
    imageWidth: 592,
    imageHeight: 429,
    title: "Highly Customizable Elements",
    subtitle: "500+ Ready Components.",
  },
  {
    href: "/customize-options",
    colorClassName: "rbt-color-var-1",
    imageSrc: "/assets/images/splash/feature/feature-list-img1.webp",
    imageWidth: 485,
    imageHeight: 337,
    title: "Easy to Customize Code",
    subtitle: "Built for developers & designers",
  },
  {
    href: "/performance",
    colorClassName: "rbt-color-var-3",
    imageSrc: "/assets/images/splash/feature/feature-list-img3.webp",
    imageWidth: 472,
    imageHeight: 353,
    title: "Fast Performance",
    subtitle: "Optimized for smooth interactions",
  },
  {
    href: "/mobile-first",
    colorClassName: "rbt-color-var-10",
    imageSrc: "/assets/images/splash/feature/feature-list-img10.webp",
    imageWidth: 472,
    imageHeight: 370,
    title: "Mobile-first Experience",
    subtitle: "Seamless experience on all devices",
  },
];

export default function FeaturesNavigationSection() {
  return (
    <>
      {/* Start Features Navigation area */}
      <div
        id="rbt-feature-list-section"
        className="rbt-section-gap rbt-bg-color-gray-light position-relative"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mt_sm--32">
                <span className="subtitle">Enhance Your Website</span>
                <h2 className="mb--12">
                  <span className="rbt-text-bold">
                    More Optionality Details
                    <br />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--12 mt_dec--24 justify-content-center">
            {featureNavigationItems.map((item) => (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24"
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={`rbt-feature-navigation-card ${item.colorClassName} rbt-scroll-trigger fade_in animation-order-1`}
                >
                  <div className="rbt-card-top">
                    <figure>
                      <Image
                        alt="Feature Image"
                        className="image-auto"
                        src={item.imageSrc}
                        width={item.imageWidth}
                        height={item.imageHeight}
                      />
                    </figure>
                  </div>
                  <div className="rbt-shape" />
                  <div className="rbt-card-bottom">
                    <div className="rbt-inner">
                      <div className="rbt-feature-info">
                        <h6 className="rbt-title">
                          <span>{item.title}</span>
                        </h6>
                        <span>{item.subtitle}</span>
                      </div>
                      <span className="rbt-icon-overlay-link-btn">
                        <span className="rbt-btn-overlay">
                          <i className="rbt-icon fa-solid fa-arrow-up-right" />
                          <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="col-12 mt--32 d-flex justify-content-center">
              <Link
                href="/feature-list"
                className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5"
              >
                <span className="icon-left">
                  <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                </span>
                <span>View All Optionality</span>
                <span className="icon-right">
                  <i className="fa-regular fa-up-right-from-square ml--4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Features Navigation area */}
    </>
  );
}
