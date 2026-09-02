"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type PaginationEffectProps = {
  totalItems: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  parentClassName?: string;
  highlightClassName?: string;
};

export default function PaginationEffect({
  totalItems,
  perPage,
  currentPage,
  setCurrentPage,
  parentClassName = "rbt-nav-effect-activation text-center",
  highlightClassName = "",
}: PaginationEffectProps) {
  const totalPages = Math.max(
    1,
    Math.ceil(totalItems > 0 ? totalItems / perPage : 1),
  );

  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const [highlightStyle, setHighlightStyle] = useState<
    React.CSSProperties | undefined
  >();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<number, HTMLAnchorElement | null>>({});
  const rafRef = useRef<number | null>(null);

  const updateHighlight = useCallback(() => {
    if (!containerRef.current) return;

    const currentEl = itemRefs.current[currentPage];
    if (!currentEl) return;

    const itemRect = currentEl.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setHighlightStyle({
      width: itemRect.width,
      height: itemRect.height,
      left: 0,
      top: 0,
      transform: `translate(${itemRect.left - containerRect.left}px, ${
        itemRect.top - containerRect.top
      }px)`,
    });
  }, [currentPage]);

  const scheduleHighlightUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateHighlight();
    });
  }, [updateHighlight]);

  useEffect(() => {
    scheduleHighlightUpdate();
  }, [scheduleHighlightUpdate, totalPages]);

  useEffect(() => {
    const handleResize = () => {
      scheduleHighlightUpdate();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scheduleHighlightUpdate]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
  };

  const handlePageClick =
    (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      goToPage(page);
    };

  const handlePrevClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToPage(currentPage - 1);
  };

  const handleNextClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToPage(currentPage + 1);
  };

  return (
    <nav ref={containerRef} className={parentClassName}>
      <ul className="rbt-pagination d-inline-flex">
        <li>
          <a
            href="#!"
            aria-label="Previous"
            className={currentPage === 1 ? "disabled" : "active"}
            onClick={handlePrevClick}
          >
            <i className="fa-regular fa-chevron-left" />
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#!"
              ref={(el) => {
                if (el) {
                  itemRefs.current[page] = el;
                }
              }}
              className={currentPage === page ? "active" : undefined}
              onClick={handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#!"
            aria-label="Next"
            className={currentPage === totalPages ? "disabled" : undefined}
            onClick={handleNextClick}
          >
            <i className="fa-regular fa-chevron-right" />
          </a>
        </li>
      </ul>
      <div
        className={`rbt-bg-highlight rbt-pagination-bg-highlight ${highlightClassName}`}
        style={highlightStyle}
      />
    </nav>
  );
}
