import Link from "next/link";
import Image from "next/image";
import PaginationComponent from "../common/ui/PaginationComponent";

export default function OfferList() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-1.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      26 Mar 2025 - 16 April 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Smartphone Mega Fest
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Grab top-brand smartphones at unbeatable prices.
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-2.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      25 Feb 2025 - 16 Mar 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>Gadget Fiesta</Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Shop the latest gadgets at massive discounts.
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-3.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      28 Feb 2025 - 16 Mar 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>Tech Gear Fest</Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Upgrade your tech with unbeatable deals on gadgets!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-4.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      24 April 2025 - 16 May 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Electro Deals Carnival
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Grab top electronics at electrifying discounts.
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-5.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      26 May 2025 - 16 Jun 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Gadget Galaxy Fest
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Explore the gadgets with out-of-this-world discounts!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-6.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      26 April 2025 - 16 May 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Digital Wonderland
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Dive into a world of tech deals on must-have gadgets!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-7.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      26 May 2025 - 16 Jun 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>Future Tech Expo</Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Discover cutting-edge gadgets and futuristic tech!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-8.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      26 Feb 2025 - 15 April 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Summer Mobile Fest
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Hot deals on the latest smartphones for a limited time!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-12 col-md-6 col-lg-4 mt--24">
            <div className="rbt-card rbt-offer-card">
              <div className="inner">
                <div className="rbt-card-img">
                  <Link href={`/shop-by-categories`}>
                    <Image
                      alt="Offer Thumbnail"
                      src="/assets/images/offer-list/offer-card-image-9.webp"
                      width={720}
                      height={720}
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="ofr-meta-part">
                    <div className="single-meta">
                      <i className="fa-sharp fa-regular fa-calendar" />
                      25 April 2025 - 16 Jun 2025
                    </div>
                    <div className="single-meta">
                      <Link href={`/find-store`}>
                        <i className="fa-regular fa-shop mr--4" />
                        All Outlet
                      </Link>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                  <div className="rbt-ofr-card-content text-center mb--8">
                    <h6 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold">
                      <Link href={`/shop-by-categories`}>
                        Smartphone Mega Fest
                      </Link>
                    </h6>
                    <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                      Grab the hottest smartphones at unbeatable prices!
                    </p>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-md active"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
        </div>
        {/* Start Pagination */}
        <div className="rbt-pagination-area mt--32">
          <div className="row">
            <div className="col-12">
              <PaginationComponent />
            </div>
          </div>
        </div>
        {/* End Pagination */}
      </div>
    </div>
  );
}
