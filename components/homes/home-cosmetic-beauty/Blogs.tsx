import { blogPosts2 } from "@/data/blogs";

import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
  return (
    <div className="rbt-component-area rbt-blog-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0">
                Blog post
              </span>
              <h2 className="rbt-title">
                <span className="rbt-bold--text">News </span>And Blog post
              </h2>
              <Link
                className="rbt-btn-link rbt-text-color-primary d-flex rbt-text-medium rbt-gap--8 mt--8 justify-content-center"
                href={`/blog-default`}
              >
                <span className="btn-text">View All Blogs</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {blogPosts2.map((post) => (
            <div
              key={post.id}
              className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24"
            >
              <div className="rbt-blog-post-card">
                <div className="rbt-blog-post-card-inner">
                  <Link
                    href={`/blog-single/${post.id}`}
                    className="rbt-blog-thumbnail rbt-curved-style-box"
                  >
                    <Image
                      alt="Ecommerce Blog Images"
                      src={post.imgSrc || ""}
                      width={624}
                      height={474}
                    />
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
                      <Link href={`/blog-single/${post.id}`}>{post.title}</Link>
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
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
