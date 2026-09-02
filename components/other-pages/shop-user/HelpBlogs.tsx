import { blogCards } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function HelpBlogs() {
  return (
    <div className="rbt-component-area rbt-blogs-area rbt-bg-color-white rbt-section-gap2Bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Blog posts
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-capitalize">
                <span className="rbt-bold--text">Help related </span>articles
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
              href="/blog-default"
            >
              <span className="btn-text">View All Blogs</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          {blogCards.slice(0, 4).map((blog, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24"
            >
              <div className="rbt-blog-post-card">
                <div className="rbt-blog-post-card-inner">
                  <Link
                    href={`/blog-single/${blog.id}`}
                    className="rbt-blog-thumbnail rbt-curved-style-box"
                  >
                    {blog.imgSrc && (
                      <Image
                        alt={blog.alt || ""}
                        src={blog.imgSrc}
                        width={624}
                        height={474}
                      />
                    )}
                  </Link>
                  <div className="rbt-blog-content">
                    <div className="rbt-blog-meta-area">
                      <ul className="rbt-blog-details-meta-list">
                        <li>
                          <a href="#">{blog.category}</a>
                        </li>
                        <li>
                          <a href="#">{blog.date}</a>
                        </li>
                      </ul>
                    </div>
                    <h6 className="rbt-blog-title">
                      <Link href={`/blog-single/${blog.id}`}>{blog.title}</Link>
                    </h6>
                    <div className="rbt-blog-meta-area mt--8">
                      <ul className="rbt-blog-details-meta-list has-no-separator">
                        <li>
                          <p className="d-flex rbt-gap--4">
                            <span className="icon">
                              <i className="fa-regular fa-clock" />
                            </span>
                            {blog.readMins != null
                              ? `${blog.readMins} Min To Read`
                              : blog.readTime ?? ""}
                          </p>
                        </li>
                        <li>
                          <p className="d-flex rbt-gap--4">
                            <span className="icon">
                              <i className="fa-regular fa-user" />
                            </span>
                            {blog.author}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <Link
                      className="rbt-btn rbt-btn-secondary rbt-btn-md mt--16"
                      href={`/blog-single/${blog.id}`}
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
          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
