 "use client";
import { CircleProgressIcon } from '../svg-icons';
import { useEffect, useRef, useState } from "react";

type CircleProgressProps = {
  percent: number;
};

export default function CircleProgress({ percent }: CircleProgressProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 - 1
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const target = isNaN(percent)
      ? 0
      : Math.max(0, Math.min(100, percent)) / 100;

    let observer: IntersectionObserver | null = null;
    let animationFrame: number | null = null;
    let startTime: number | null = null;
    const duration = 800; // ms

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(target * eased);
      if (t < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimatedRef.current) return;
          hasAnimatedRef.current = true;
          animationFrame = window.requestAnimationFrame(animate);
          observer?.disconnect();
        });
      },
      { threshold: 0.75 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer?.disconnect();
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [percent]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);
  const displayPercent = Math.round(progress * 100);

  return (
    <div
      ref={containerRef}
      className="rbt-modern-progress-bar"
      style={{ position: "relative" }}
    >
      <CircleProgressIcon circumference={circumference} offset={offset} />
      <div
        className="progressbar-text"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          padding: 0,
          margin: 0,
          transform: "translate(-50%, -50%)",
          color: "#24BD25",
        }}
      >
        {displayPercent > 0 ? `${displayPercent}%` : ""}
      </div>
    </div>
  );
}

