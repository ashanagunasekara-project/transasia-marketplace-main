"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type MediaGalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  thumbSrc: string;
  alt: string;
};

interface MediaGalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: readonly MediaGalleryItem[] | MediaGalleryItem[];
  initialIndex?: number;
}

export default function MediaGalleryModal({
  open,
  onOpenChange,
  items,
  initialIndex = 0,
}: MediaGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [swiperRef, setSwiperRef] = useState<SwiperInstance | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      video?.pause();
    });
  };

  const playVideoAt = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      void video.play().catch(() => {
        // ignore autoplay errors due to browser policies
      });
    }
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="rbt-media-gallery-modal"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: 2500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => onOpenChange(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          height: "80vh",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Slide counter */}
          <div
            style={{
              position: "absolute",
              top: -28,
              left: 0,
              color: "#ffffff",
              fontSize: 14,
              opacity: 0.85,
            }}
          >
            {currentIndex + 1} / {items.length}
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => onOpenChange(false)}
            style={{
              position: "absolute",
              top: -40,
              right: 24,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "2px solid #ffffff",
              background: "rgba(0, 0, 0, 0.4)",
              color: "#ffffff",
              fontSize: 24,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <Swiper
            initialSlide={currentIndex}
            onSwiper={(swiper) => {
              setSwiperRef(swiper);
              playVideoAt(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
              pauseAllVideos();
              playVideoAt(swiper.activeIndex);
            }}
            loop
            className="h-100"
          >
            {items.map((item, index) => (
              <SwiperSlide key={item.id}>
                {item.type === "image" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Image
                      alt={item.alt}
                      src={item.src}
                      width={1200}
                      height={1600}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <video
                      ref={(node) => {
                        videoRefs.current[index] = node;
                      }}
                      src={item.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button
            type="button"
            aria-label="Previous"
            onClick={(event) => {
              event.stopPropagation();
              swiperRef?.slidePrev();
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: 28,
              transform: "translateY(-50%)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 32, lineHeight: 1 }}>‹</span>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={(event) => {
              event.stopPropagation();
              swiperRef?.slideNext();
            }}
            style={{
              position: "absolute",
              top: "50%",
              right: 28,
              transform: "translateY(-50%)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 32, lineHeight: 1 }}>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
