"use client";

import dynamic from "next/dynamic";
import "@cloudimage/360-view/css";

const CI360Viewer = dynamic(
  () => import("@cloudimage/360-view/react").then((mod) => mod.CI360Viewer),
  { ssr: false },
);

export default function Slider3D() {
  return (
    <CI360Viewer
      className="cloudimage-360 rbt-360-view-thumbnail-height w-100"
      style={{ width: "100%", minHeight: "460px" }}
      folder="https://scaleflex.cloudimg.io/v7/demo/360-nike/"
      filenameX="nike-{index}.jpg"
      amountX={35}
      speed={100}
      dragSpeed={120}
      autoplay
      filenameY="nike-y-{index}.jpg"
      amountY={36}
      autoplayBehavior="spin-xy"
    />
  );
}
