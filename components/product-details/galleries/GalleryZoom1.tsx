"use client";

import DriftZoom from "../../elements/DriftZoom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useUiElement } from "@/context/uiStore";
import "@/lib/lightgallery-styles";
export default function GalleryZoom1({ imageUrl }: { imageUrl: string }) {
  const { isZooming } = useUiElement();
  const currentImageUrl =
    imageUrl || "/assets/images/product-img/fashion/product-a-01.webp";

  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames={`thumbnail rbt-sticky-top-150 section-image-zoom ${isZooming ? "zoom-active" : ""}`}
      speed={400}
      selector="a.rbt-product-single-img"
      zoomFromOrigin={false}
    >
      <a
        href={currentImageUrl}
        data-src={currentImageUrl}
        className="rbt-product-single-img"
      >
        <DriftZoom
          className="rbt-rounded--12 zoom_window tf-image-zoom"
          dataZoom={currentImageUrl}
          alt="Product Images"
          src={currentImageUrl}
          width={624}
          height={846}
        />
      </a>
    </LightGallery>
  );
}
