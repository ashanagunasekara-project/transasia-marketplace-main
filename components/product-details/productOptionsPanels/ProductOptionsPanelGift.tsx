"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductOptionsPanelGift() {
  const [selectedGift, setSelectedGift] = useState("");

  const giftImages = [
    {
      id: "gift-1",
      src: "/assets/images/product-img/fashion/product-01.webp",
    },
    {
      id: "gift-2",
      src: "/assets/images/product-img/fashion/product-04.webp",
    },
    {
      id: "gift-3",
      src: "/assets/images/product-img/fashion/product-03.webp",
    },
    {
      id: "gift-4",
      src: "/assets/images/product-img/fashion/product-04.webp",
    },
  ];

  return (
    <div className="rbt-info-wrapper d-flex mt--24">
      <div className="prd-info-section">
        <div className="rbt-product-switch-area flex-column align-items-start">
          <p className="text-bold title">Gift Item/Product :</p>
          <ul className="rbt-switcher-product-list product-switcher-activation">
            {giftImages.map((gift) => (
              <li
                key={gift.id}
                className={selectedGift === gift.id ? "active" : ""}
              >
                <a
                  href="#"
                  className={`rbt-switcher--prd ${gift.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGift(gift.id);
                  }}
                >
                  <Image
                    alt="Product Image"
                    src={gift.src}
                    width={624}
                    height={846}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
