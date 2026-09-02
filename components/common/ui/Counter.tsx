"use client";

import { useEffect, useRef, useState } from "react";

interface OdometerInstance {
  update(value: number): void;
}

const Counter = ({ max = 100 }) => {
  const odometerRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  const odometerInstanceRef = useRef<OdometerInstance | null>(null);

  // Dynamically import odometer and init when ref is ready
  useEffect(() => {
    const el = odometerRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const initOdometer = async () => {
      const Odometer = (await import("odometer")).default;
      if (!odometerRef.current) return;
      odometerInstanceRef.current = new Odometer({
        el: odometerRef.current,
        value: 0,
      });
      setMounted(true);
    };

    const startCountup = () => setValue(max);

    const handleIntersection: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          obs.unobserve(entry.target);
        }
      });
    };

    initOdometer().then(() => {
      if (!el) return;
      observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      });
      observer.observe(el);
    });

    return () => {
      if (el && observer) {
        observer.unobserve(el);
      }
      observer?.disconnect();
    };
  }, [max]);

  // Update odometer when value changes
  useEffect(() => {
    if (mounted && odometerInstanceRef.current) {
      odometerInstanceRef.current.update(value);
    }
  }, [value, mounted]);

  return (
    <span ref={odometerRef} className="odometer">
      0
    </span>
  );
};

export default Counter;
