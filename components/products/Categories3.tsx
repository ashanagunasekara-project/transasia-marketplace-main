"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Category } from "@/types/categories";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import { resolveImageUrl } from "@/lib/api";

type CategoryCardItem = {
  id: string | number;
  title: string;
  slug: string;
  viewAllHref: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  columns: Array<Array<{ label: string; href: string }>>;
};

function formatCategories(
  categories?: Category[]
): CategoryCardItem[] {
  if (categories && categories.length > 0) {
    return categories.map((cat, index) => {
      const slug =
        cat.slug ||
        cat.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const viewAllHref = `/shop?category=${encodeURIComponent(slug)}`;
      const fallbackImg = `/assets/images/catagory-img/categories-list-card/category-list-image-${
        (index % 12) + 1
      }.webp`;
      const imgSrc = resolveImageUrl(cat.imgSrc || cat.image) || fallbackImg;

      const subs = cat.subCategories || [];
      const half = Math.ceil(subs.length / 2);
      const col1 = subs.slice(0, half).map((s) => ({
        label: s.title,
        href:
          s.href ||
          `/shop?category=${encodeURIComponent(slug)}&subCategory=${encodeURIComponent(
            s.slug || s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
          )}`,
      }));
      const col2 = subs.slice(half).map((s) => ({
        label: s.title,
        href:
          s.href ||
          `/shop?category=${encodeURIComponent(slug)}&subCategory=${encodeURIComponent(
            s.slug || s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
          )}`,
      }));

      return {
        id: cat.id || `cat-${index + 1}`,
        title: cat.title,
        slug,
        viewAllHref,
        image: {
          src: imgSrc,
          alt: `${cat.title} Category Thumbnail`,
          width: 144,
          height: 144,
        },
        columns: col2.length > 0 ? [col1, col2] : [col1],
      };
    });
  }

  // Fallback to official categories-list.md dataset
  return DOCUMENTATION_CATEGORIES.map((cat) => {
    const half = Math.ceil(cat.subcategories.length / 2);
    const col1 = cat.subcategories.slice(0, half).map((s) => ({
      label: s.title,
      href: s.href,
    }));
    const col2 = cat.subcategories.slice(half).map((s) => ({
      label: s.title,
      href: s.href,
    }));

    return {
      id: cat.id,
      title: cat.title,
      slug: cat.slug,
      viewAllHref: cat.viewAllHref,
      image: {
        src: cat.imgSrc,
        alt: `${cat.title} Category Thumbnail`,
        width: 144,
        height: 144,
      },
      columns: col2.length > 0 ? [col1, col2] : [col1],
    };
  });
}

export default function Categories3({
  initialCategories,
}: {
  initialCategories?: Category[];
}) {
  const cards = formatCategories(initialCategories);

  // Pagination state: display 12 per page if desired, or all
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const displayedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rbt-component-area rbt-nav-box-area rbt-section-gapBottom rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {displayedCards.map((cat) => (
            <div key={cat.id} className="col-12 col-md-6 col-xl-4 mt--24">
              <div className="rbt-nav-box h-100">
                <div className="inner h-100 d-flex flex-column">
                  <div className="rbt-nav-box-top">
                    <div className="rbt-nav-box-title-part">
                      <h6 className="rbt-nav-box-title">{cat.title}</h6>
                      <Link
                        href={cat.viewAllHref}
                        className="rbt-underline-btn"
                      >
                        View All
                        <i className="fa-regular fa-chevron-right ml--4" />
                      </Link>
                    </div>

                    <div
                      className="rbt-categories-box-img"
                      style={{
                        position: "relative",
                        width: "100px",
                        height: "100px",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        alt={cat.image.alt}
                        src={cat.image.src}
                        width={cat.image.width}
                        height={cat.image.height}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>

                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--16 rbt-bg-color-gray-100" />

                  <div className="rbt-nav-items flex-grow-1">
                    {cat.columns.map((items, colIndex) => (
                      <ul
                        key={`${cat.id}-col-${colIndex}`}
                        className="rbt-nav-item-list"
                      >
                        {items.map((item, itemIndex) => (
                          <li key={`${cat.id}-${colIndex}-${itemIndex}`}>
                            <Link href={item.href} className="rbt-btn-link">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="rbt-pagination-area mt--32">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="Categories pagination">
                    <ul className="rbt-pagination justify-content-center d-flex align-items-center gap-2 list-unstyled">
                      <li>
                        <button
                          type="button"
                          aria-label="Previous page"
                          className="rbt-btn-link"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          style={{
                            padding: "8px 16px",
                            borderRadius: "6px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: currentPage === 1 ? "#f1f5f9" : "#ffffff",
                            cursor: currentPage === 1 ? "not-allowed" : "pointer",
                            color: currentPage === 1 ? "#94a3b8" : "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          <i className="fa-regular fa-chevron-left mr--4" /> Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                          <button
                            type="button"
                            onClick={() => setCurrentPage(page)}
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "6px",
                              border:
                                currentPage === page
                                  ? "1px solid var(--color-primary, #0066cc)"
                                  : "1px solid #e2e8f0",
                              backgroundColor:
                                currentPage === page
                                  ? "var(--color-primary, #0066cc)"
                                  : "#ffffff",
                              color: currentPage === page ? "#ffffff" : "#1e293b",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          type="button"
                          aria-label="Next page"
                          className="rbt-btn-link"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          style={{
                            padding: "8px 16px",
                            borderRadius: "6px",
                            border: "1px solid #e2e8f0",
                            backgroundColor:
                              currentPage === totalPages ? "#f1f5f9" : "#ffffff",
                            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                            color: currentPage === totalPages ? "#94a3b8" : "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Next <i className="fa-regular fa-chevron-right ml--4" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
