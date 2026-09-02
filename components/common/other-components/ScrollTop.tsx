"use client";
import { ScrollTopIcon } from "../../svg-icons";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [_showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' or 'instant' as well
    });
  };

  const handleScroll = () => {
    const currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrolled(currentScroll);
    setShowScrollTop(window.scrollY >= window.innerHeight);
    const totalScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollHeight(totalScrollHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`rbt-progress-parent ${
        scrolled > 150 ? "rbt-backto-top-active" : ""
      }`}
      onClick={() => scrollToTop()}
    >
      <ScrollTopIcon scrolled={scrolled} scrollHeight={scrollHeight} />
    </div>
  );
}
