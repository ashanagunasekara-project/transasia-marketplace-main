import { blogCards } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs() {
  return (
    <div className="rbt-component-area rbt-recent-blog-posted-area rbt-bg-color-gray-light rbt-section-gap2Bottom rbt-section-gap2Top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--40">
              <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                <h4 className="rbt-title">
                  <span className="rbt-bold--text">Related Posts</span>
                </h4>
              </div>
              <Link
                className="rbt-link rbt-text-color-primary d-flex rbt-text-medium rbt-gap--8 justify-content-center rbt-btn-link"
                href={`/blog-default`}
              >
                <span className="btn-text">View All Blogs</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square rbt-color-primary" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          {/* Start blog card */}
          {blogCards.slice(0, 4).map((card, idx) => (
            <div
              key={idx}
              className="col-12 col-md-6 col-xl-4 col-xxl-3 mt--24"
            >
              <div className="rbt-blog-post-card">
                <div className="rbt-blog-post-card-inner">
                  <Link
                    href={`/blog-single/${card.id}`}
                    className="rbt-blog-thumbnail rbt-curved-style-box"
                  >
                    {card.imgSrc && (
                      <Image
                        alt={card.alt || ""}
                        src={card.imgSrc}
                        width={624}
                        height={474}
                      />
                    )}
                  </Link>
                  <div className="rbt-blog-content">
                    <div className="rbt-blog-details-meta">
                      <ul className="rbt-blog-details-meta-list">
                        <li>{card.category}</li>
                        <li>{card.date}</li>
                      </ul>
                    </div>
                    <h6 className="rbt-blog-title">
                      <Link href={`/blog-single/${card.id}`}>{card.title}</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End blog card */}
        </div>
      </div>
    </div>
  );
}
