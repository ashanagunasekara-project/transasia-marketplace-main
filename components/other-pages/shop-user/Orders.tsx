"use client";

import Image from "next/image";
import { useState } from "react";
import DropdownSelect from "@/components/common/select/DropdownSelect";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

const orders = [
  {
    sku: "#180036565",
    date: "Feb 1, 2025",
    status: "Delivered",
    statusClass:
      "rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-md rbt-badge-rounded",
    total: "$954.00",
    isLast: false,
    products: [
      {
        src: "/assets/images/catagory-img/cat-transp-img-07.webp",
        width: 93,
        height: 93,
      },
      {
        src: "/assets/images/catagory-img/cat-transp-img-08.webp",
        width: 93,
        height: 93,
      },
    ],
  },
  {
    sku: "#180036233",
    date: "Jan 4, 2025",
    status: "In Progress",
    statusClass:
      "rbt-badge rbt-badge-bg-warning rbt-badge-border rbt-badge-md rbt-badge-rounded",
    total: "$356.00",
    isLast: false,
    products: [
      {
        src: "/assets/images/catagory-img/cat-transp-img-10.webp",
        width: 93,
        height: 93,
      },
    ],
  },
  {
    sku: "#180036434",
    date: "Dec 4, 2025",
    status: "Cancelled",
    statusClass:
      "rbt-badge rbt-badge-bg-danger rbt-badge-border rbt-badge-md rbt-badge-rounded",
    total: "$432.00",
    isLast: false,
    products: [
      {
        src: "/assets/images/catagory-img/cat-transp-img-02.webp",
        width: 142,
        height: 100,
      },
      {
        src: "/assets/images/catagory-img/cat-transp-img-09.webp",
        width: 93,
        height: 93,
      },
      {
        src: "/assets/images/catagory-img/cat-transp-img-01.webp",
        width: 142,
        height: 100,
      },
    ],
  },
  {
    sku: "#180036342",
    date: "Dec 24, 2025",
    status: "Delivered",
    statusClass:
      "rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-md rbt-badge-rounded",
    total: "$353.00",
    isLast: false,
    products: [
      {
        src: "/assets/images/catagory-img/cat-transp-img-11.webp",
        width: 93,
        height: 93,
      },
    ],
  },
  {
    sku: "#180036567",
    date: "Jan 31, 2025",
    status: "Delivered",
    statusClass:
      "rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-md rbt-badge-rounded",
    total: "$559.00",
    isLast: true,
    products: [
      {
        src: "/assets/images/catagory-img/cat-transp-img-05.webp",
        width: 142,
        height: 100,
      },
      {
        src: "/assets/images/catagory-img/cat-transp-img-06.webp",
        width: 142,
        height: 100,
      },
      {
        src: "/assets/images/catagory-img/cat-transp-img-12.webp",
        width: 93,
        height: 93,
      },
    ],
  },
];

export default function Orders() {
  const orderStatusOptions = [
    "Select Status",
    "In Progress",
    "Delivered",
    "Cancelled",
    "Delayed",
  ];
  const [selectedStatus, setSelectedStatus] = useState("Select Status");

  return (
    <div className="rbt-profile-content-area rbt-scrollable-content">
      <div className="row row--12 mt_dec--24">
        <div className="col-12 col-md-7 col-xl-8 mt--24">
          <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
            <h2 className="rbt-title mb--0">
              <span className="rbt-text-bold">My orders</span>
            </h2>
          </div>
        </div>
        <div className="col-12 col-md-5 col-xl-4 mt--24">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="rbt-input-field-grp mb--0">
              <div className="rbt-dropdown-select filter-select rbt-modern-select w-100 rbt-bordered-style search-by-category">
                <DropdownSelect
                  options={orderStatusOptions}
                  selected={selectedStatus}
                  onChange={setSelectedStatus}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt--24" />
      <div className="rbt-transparent-table-one-wrapper">
        <table className="rbt-transparent-table-one table-variation-one m--0 mb--0">
          <thead>
            <tr>
              <th className="pt--0" scope="col">
                <i className="fa-regular fa-hashtag mr--4" />
                Order ID
              </th>
              <th className="pt--0" scope="col">
                <i className="fa-regular fa-calendars mr--4" />
                Date
              </th>
              <th className="pt--0" scope="col">
                <i className="fa-regular fa-truck-fast mr--4" />
                Status
              </th>
              <th className="pt--0" scope="col">
                <i className="fa-regular fa-sack-dollar mr--4" />
                Total Price
              </th>
              <th className="pt--0" scope="col">
                <i className="fa-regular fa-bag-shopping mr--4" />
                Products
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.sku}>
                <td className={order.isLast ? "pb--0" : undefined}>
                  <div className="cart-product-card">
                    <div className="d-flex flex-column">
                      <span className="rbt-product-id rbt-ordered-products-sidenav-activation rbt-cursor-pointer">
                        <span className="rbt-text-semi-bold">SKU:</span>
                        {order.sku}
                      </span>
                    </div>
                  </div>
                </td>
                <td className={order.isLast ? "pb--0" : undefined}>
                  <span>{order.date}</span>
                </td>
                <td className={order.isLast ? "pb--0" : undefined}>
                  <div className={order.statusClass}>{order.status}</div>
                </td>
                <td className={order.isLast ? "pb--0" : undefined}>
                  <div>
                    <h6 className="price-text">
                      <span className="rbt-bold--text">{order.total}</span>
                    </h6>
                  </div>
                </td>
                <td className={order.isLast ? "pb--0" : undefined}>
                  <div className="rbt-order-sum-area rbt-order-sum-area-xm d-flex">
                    <a
                      href="#!"
                      className="ordered-items-wrapper rbt-ordered-products-sidenav-activation d-flex rbt-gap--4 align-items-center ms-auto"
                    >
                      {order.products.map((product, index) => (
                        <div
                          className="ordered-item ordered-item-01"
                          key={`${order.sku}-${index}`}
                        >
                          <Image
                            alt="eCommerce Product"
                            src={product.src}
                            width={product.width}
                            height={product.height}
                          />
                        </div>
                      ))}
                      <ModalTriggerButton
                        openModalName="cartSidebar"
                        className="ordered-item more-icon ms-auto"
                      >
                        <i className="fa-solid fa-chevron-right" />
                      </ModalTriggerButton>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
