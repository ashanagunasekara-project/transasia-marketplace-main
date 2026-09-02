"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { blogCards } from "@/data/blogs";
import BlogSidebar from "./BlogSidebar";
import PaginationEffect from "@/components/common/ui/PaginationEffect";

const PAGE_SIZE = 9;
const LOAD_MORE_STEP = 3;

export default function Blogs1({ isLoadMore = false }) {
  const [visibleCount, setVisibleCount] = useState(LOAD_MORE_STEP * 3);
  const [currentPage, setCurrentPage] = useState(1);

  const visibleBlogs = useMemo(() => {
    if (isLoadMore) {
      return blogCards.slice(0, visibleCount);
    }

    const start = (currentPage - 1) * PAGE_SIZE;
    return blogCards.slice(start, start + PAGE_SIZE);
  }, [currentPage, visibleCount, isLoadMore]);

  const canLoadMore = isLoadMore && visibleCount < blogCards.length;
  return (
    <div className="rbt-component-area rbt-blog-post-card-area rbt-bg-color-gray-light rbt-section-gap3Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-9">
            <div className="row mt_dec--24">
              {visibleBlogs.map((card, idx) => (
                <div className="col-12 col-md-6 col-xl-4 mt--24" key={idx}>
                  <div className="rbt-blog-post-card">
                    <div className="rbt-blog-post-card-inner">
                      <Link
                        href={`/blog-single`}
                        className="rbt-blog-thumbnail rbt-curved-style-box"
                      >
                        {card.imgSrc && (
                          <Image
                            alt={card.alt || ""}
                            width={624}
                            height={474}
                            src={card.imgSrc}
                          />
                        )}
                      </Link>

                      <div className="rbt-blog-content">
                        <div className="rbt-blog-meta-area">
                          <ul className="rbt-blog-details-meta-list">
                            <li>
                              <a href="#">{card.category}</a>
                            </li>
                            <li>
                              <a href="#">{card.date}</a>
                            </li>
                          </ul>
                        </div>

                        <h6 className="rbt-blog-title">
                          <Link href={`/blog-single/${card.id}`}>
                            {card.title}
                          </Link>
                        </h6>

                        <div className="rbt-blog-meta-area mt--8">
                          <ul className="rbt-blog-details-meta-list has-no-separator">
                            <li>
                              <p className="d-flex rbt-gap--4">
                                <span className="icon">
                                  <i className="fa-regular fa-clock" />
                                </span>
                                {card.readMins} Min To Read
                              </p>
                            </li>
                            <li>
                              <p className="d-flex rbt-gap--4">
                                <span className="icon">
                                  <i className="fa-regular fa-user" />
                                </span>
                                {card.author}
                              </p>
                            </li>
                          </ul>
                        </div>

                        <Link
                          className="rbt-btn rbt-btn-secondary rbt-btn-md mt--16"
                          href={`/blog-single/${card.id}`}
                        >
                          <span className="btn-text">Read More</span>
                          <span className="btn-icon">
                            <i className="ml--4 fa-solid fa-arrow-up-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Start Pagination */}
            <div className="rbt-pagination-area mt--40">
              <div className="row">
                <div className="col-12">
                  {isLoadMore ? (
                    canLoadMore && (
                      <div className="rbt-load-morebtn-area text-center">
                        <button
                          type="button"
                          className="rbt-btn"
                          onClick={() =>
                            setVisibleCount((prev) =>
                              Math.min(prev + LOAD_MORE_STEP, blogCards.length),
                            )
                          }
                        >
                          Load More
                        </button>
                      </div>
                    )
                  ) : (
                    <PaginationEffect
                      totalItems={blogCards.length}
                      perPage={PAGE_SIZE}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* End Pagination */}
          </div>
          <div className="col-xl-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
