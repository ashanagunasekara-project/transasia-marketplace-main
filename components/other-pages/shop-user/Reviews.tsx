"use client";

import { GiftIcon } from "../../svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DropdownSelect from "@/components/common/select/DropdownSelect";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import ReviewModal from "@/components/modals/ReviewModal";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";

const reviewRows = [
  {
    id: 1,
    image: {
      src: "/assets/images/wishlist/wishlist-prd-1.webp",
      width: 278,
      height: 212,
    },
    name: "JBL PartyBox Essential 100W Speaker",
    price: "$218.42",
    sku: "#180036565",
    bonusText: null,
    actionType: "button",
    rating: null,
  },
  {
    id: 2,
    image: {
      src: "/assets/images/wishlist/wishlist-prd-2.webp",
      width: 278,
      height: 213,
    },
    name: "Apple Watch Ultra 2 with Ocean Band",
    price: "$359.00",
    sku: "#180036565",
    bonusText: null,
    actionType: "rating",
    rating: { rated: 5, total: 5 },
  },
  {
    id: 3,
    image: {
      src: "/assets/images/catagory-img/cat-transp-img-06.webp",
      width: 142,
      height: 100,
    },
    name: "PlayStation Pulse Wireless Headphone",
    price: "$299.00",
    sku: "#180036565",
    bonusText: "100 bonuses for a review",
    actionType: "button",
    rating: null,
  },
  {
    id: 4,
    image: {
      src: "/assets/images/catagory-img/cat-transp-img-01.webp",
      width: 142,
      height: 100,
    },
    name: "Awei CL-115M Micro USB 2.4A Cable",
    price: "$364.28",
    sku: "#180036565",
    bonusText: null,
    actionType: "rating",
    rating: { rated: 4, total: 5 },
  },
  {
    id: 5,
    image: {
      src: "/assets/images/catagory-img/cat-transp-img-02.webp",
      width: 142,
      height: 100,
    },
    name: "MaxGreen 45W MagSafe 1 Power Adapter",
    price: "$371.56",
    sku: "#180036565",
    bonusText: null,
    actionType: "rating",
    rating: { rated: 5, total: 5 },
  },
  {
    id: 6,
    image: {
      src: "/assets/images/catagory-img/cat-transp-img-03.webp",
      width: 142,
      height: 100,
    },
    name: "Havit PB90 10000mAh Power Bank",
    price: "$378.84",
    sku: "#180036565",
    bonusText: null,
    actionType: "rating",
    rating: { rated: 3, total: 5 },
  },
];

export default function Reviews() {
  const reviewFilterOptions = [
    "My Reviews",
    "Products awaiting reviews",
    "Products and reviews",
  ];
  const [selectedReviewFilter, setSelectedReviewFilter] =
    useState("My Reviews");

  return (
    <>
      <div className="rbt-profile-content-area">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-7 col-xl-8 mt--24">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title mb--0">
                <span className="rbt-text-bold">My Reviews</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-5 col-xl-4 mt--24">
            <form>
              <div className="rbt-input-field-grp mb--0">
                <div className="rbt-dropdown-select filter-select rbt-modern-select w-100 rbt-bordered-style search-by-category">
                  <DropdownSelect
                    options={reviewFilterOptions}
                    selected={selectedReviewFilter}
                    onChange={setSelectedReviewFilter}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="mt--24" />
        <div className="rbt-scrollable-content hide-scrollbar">
          <div className="rbt-transparent-table-one-wrapper pt--0 pb--0 mb--0">
            <table className="rbt-transparent-table-one rbt-wishlist-table mb--0">
              <tbody>
                {reviewRows.map((row) => (
                  <tr key={row.id}>
                    <td className="product-thumbnail">
                      <Link href={`/product-single-default`}>
                        <Image
                          alt="Product image"
                          src={row.image.src}
                          width={row.image.width}
                          height={row.image.height}
                        />
                      </Link>
                    </td>
                    <td className="rbt-wish-product-info">
                      <h6 className="rbt-wish-product-name">
                        <Link href={`/product-single-default`}>{row.name}</Link>
                      </h6>
                      <div className="rbt-product-price-text rbt-text-color-primary">
                        <span>{row.price}</span>
                      </div>
                      <span className="rbt-product-id">
                        <span className="rbt-text-semi-bold">SKU:</span>
                        {row.sku}
                      </span>
                    </td>
                    <td>
                      {row.bonusText && (
                        <div className="nav flex-nowrap text-nowrap min-w-0">
                          <span className="d-flex align-items-center">
                            <GiftIcon />
                            <span>{row.bonusText}</span>
                          </span>
                        </div>
                      )}
                    </td>
                    <td>
                      {row.actionType === "button" && (
                        <div className="rbt-button-group">
                          <ModalTriggerButton
                            openModalName={ModalName.leaveReviewModal}
                            className="rbt-btn rbt-btn-sm rbt-btn-secondary"
                          >
                            Leave a review
                          </ModalTriggerButton>
                        </div>
                      )}
                      {row.actionType === "rating" && row.rating && (
                        <div className="rbt-order-sum-area rbt-order-sum-area-xm d-flex">
                          <a
                            href="#!"
                            className="ordered-items-wrapper rbt-review-sidenav-activation d-flex rbt-gap--16 align-items-center ms-auto"
                          >
                            <ul className="rbt-rating-icon-list">
                              {Array.from({ length: row.rating.total }).map(
                                (_, index) => (
                                  <li key={index}>
                                    <i
                                      className={
                                        index < row.rating.rated
                                          ? "fa-solid fa-star rbt-rated-icon"
                                          : "fa-solid fa-star"
                                      }
                                    />
                                  </li>
                                ),
                              )}
                            </ul>
                            <div className="ordered-item more-icon ms-auto">
                              <i className="fa-solid fa-chevron-right" />
                            </div>
                          </a>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <nav className="rbt-nav-effect-activation text-center mt--32">
          <ul className="rbt-pagination d-inline-flex rbt-pagination-bg-brand">
            <li>
              <a href="#" aria-label="Previous">
                <i className="fa-regular fa-chevron-left" />
              </a>
            </li>
            <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a className="" href="#">
                2
              </a>
            </li>
            <li>
              <a href="#" className="">
                3
              </a>
            </li>
            <li>
              <a href="#" aria-label="Next" className="">
                <i className="fa-regular fa-chevron-right" />
              </a>
            </li>
          </ul>
          <div className="rbt-bg-highlight rbt-pagination-bg-highlight rbt-bg-color-primary" />
        </nav>
      </div>
      <SingleManagedModalLayer modalName={ModalName.leaveReviewModal}>
        <ReviewModal />
      </SingleManagedModalLayer>
    </>
  );
}
