import Image from "next/image";
import Link from "next/link";
import { plantBlogPosts } from "@/data/blogs";

export default function Blogs() {
  return (
    <div className="rbt-component-area rbt-Blog-grid-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center rbt-section-gap3Bottom flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">News &amp; updates</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
              href="/blogs"
            >
              <span className="btn-text">View All Blog</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {plantBlogPosts.map((blog) => (
            <div
              key={blog.id}
              className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24"
            >
              <div className="rbt-blog-post-card">
                <div className="rbt-blog-post-card-inner">
                  <Link
                    href={`/blog-single${blog.id}`}
                    className="rbt-blog-thumbnail"
                  >
                    <Image
                      alt="Ecommerce Blog Images"
                      src={
                        blog.imgSrc ??
                        "/assets/images/blog-post-img/blog-post-01.webp"
                      }
                      width={624}
                      height={474}
                    />
                  </Link>
                  <div className="rbt-blog-content">
                    <div className="rbt-blog-meta-area">
                      <ul className="rbt-blog-details-meta-list">
                        <li>
                          <Link href="#">{blog.category}</Link>
                        </li>
                        <li>
                          <Link href="#">{blog.date}</Link>
                        </li>
                      </ul>
                    </div>
                    <h6 className="rbt-blog-title">
                      <Link href={`/blog-single${blog.id}`}>{blog.title}</Link>
                    </h6>
                    <div className="rbt-blog-meta-area mt--8">
                      <ul className="rbt-blog-details-meta-list has-no-separator">
                        <li>
                          <p className="d-flex rbt-gap--4">
                            <span className="icon">
                              <i className="fa-regular fa-clock" />
                            </span>
                            {blog.readTime}
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
                      href={`/blog-single${blog.id}`}
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
        {/* End Card Area */}
      </div>
    </div>
  );
}
