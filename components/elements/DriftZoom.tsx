"use client";
import React, { useEffect, useRef } from "react";

import Drift from "drift-zoom";
import { useUiElement } from "@/context/uiStore";
import Image, { type ImageProps } from "next/image";

export type ZoomType = "default" | "magnifying" | "inner";

const MAGNIFY_NAMESPACE = "drift-magnify";

type DriftZoomProps = Omit<ImageProps, "width" | "height"> & {
  dataZoom: string;
  width?: number;
  height?: number;
  zoomType?: ZoomType;
};


const DriftZoom: React.FC<DriftZoomProps> = ({
  dataZoom,
  width = 400,
  height = 600,
  zoomType = "default",
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { pane, setIsZooming } = useUiElement();

  useEffect(() => {
    if (!imgRef.current || !pane) return;

    let drift: Drift | null = null;

    const setupDrift = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1200px)").matches;
      if (isLargeScreen) {
        if (!drift) {
          drift = new Drift(imgRef.current!, {
            paneContainer:
              zoomType === "inner"
                ? imgRef.current?.parentElement || (pane as HTMLElement)
                : (pane as HTMLElement),
            zoomFactor: zoomType === "magnifying" ? 3 : 2,
            inlinePane: zoomType === "magnifying",
            handleTouch: false,
            hoverBoundingBox: zoomType === "default",
            containInline: true,
            inlineOffsetX: 0,
            inlineOffsetY: 0,
            namespace: zoomType === "magnifying" ? MAGNIFY_NAMESPACE : undefined,
          });
        }
      } else {
        if (drift) {
          drift.destroy();
          drift = null;
        }
      }
    };

    setupDrift();
    window.addEventListener("resize", setupDrift);

    return () => {
      window.removeEventListener("resize", setupDrift);
      if (drift) {
        drift.destroy();
      }
    };
  }, [pane, props.src, zoomType]);

  const handleMouseEnter = () => setIsZooming(true);
  const handleMouseLeave = () => setIsZooming(false);

  return (
    <Image
      width={width}
      height={height}
      ref={imgRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-zoom={dataZoom}
      {...props}
      className={props.className}
      alt={props.alt ?? ""}
    />
  );
};

export default DriftZoom;
