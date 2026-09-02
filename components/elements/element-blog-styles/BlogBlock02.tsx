import Link from "next/link";
import Image from "next/image";
import { blogPosts6 } from "@/data/blogs";
function BlogBlock02() {
  return (
    <>
      <div
        id="rbt-blog-area-02"
        className="rbt-component-area rbt-bg-color-white rbt-section-gap"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">
                    Blog Grid Three Columns
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24 rbt-mobile-row">
            {/* Start Single Card  */}
            {blogPosts6.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-4 col-sm-12 col-12 mt--24"
              >
                <div className="rbt-blog-post-card">
                  <div className="rbt-blog-post-card-inner">
                    <Link
                      href={`/blog-single/${post.id}`}
                      className="rbt-blog-thumbnail rbt-curved-style-box"
                    >
                      {post.imgSrc && (
                        <Image
                          alt={post.alt || "Ecommerce Blog Images"}
                          src={post.imgSrc}
                          width={624}
                          height={474}
                        />
                      )}
                    </Link>
                    <div className="rbt-blog-content">
                      <div className="rbt-blog-meta-area">
                        <ul className="rbt-blog-details-meta-list">
                          <li>
                            <a href="#">{post.category}</a>
                          </li>
                          <li>
                            <a href="#">{post.date}</a>
                          </li>
                        </ul>
                      </div>
                      <h6 className="rbt-blog-title">
                        <Link href={`/blog-single/${post.id}`}>
                          {post.title}
                        </Link>
                      </h6>
                      <div className="rbt-blog-meta-area mt--8">
                        <ul className="rbt-blog-details-meta-list has-no-separator">
                          <li>
                            <p className="d-flex rbt-gap--4">
                              <span className="icon">
                                <i className="fa-regular fa-clock" />
                              </span>
                              {post.readTime}
                            </p>
                          </li>
                          <li>
                            <p className="d-flex rbt-gap--4">
                              <span className="icon">
                                <i className="fa-regular fa-user" />
                              </span>
                              {post.author}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <Link
                        className="rbt-btn rbt-btn-secondary rbt-btn-md mt--16"
                        href={`/blog-single/${post.id}`}
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
    </>
  );
}

export default BlogBlock02;
