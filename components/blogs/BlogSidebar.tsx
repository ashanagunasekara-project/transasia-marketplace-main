import { WaveFatIcon } from '../svg-icons';
import Image from "next/image";
import { recentBlogs } from "@/data/blogs";
import Link from "next/link";
export default function BlogSidebar() {
  return (
    <aside className="rbt-sidebar position-sticky sticky-top has-rbt-fshape">
      <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one">
        <div className="rbt-sidebar-top">
          <h6 className="rbt-sidebar-title">
            <i className="fa-regular fa-sliders" />
            Sidebar
            <span className="rbt-fshape-right-portion">
              <WaveFatIcon />
            </span>
          </h6>
        </div>
        <div className="rbt-sidebar-bottom">
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
                Recent Posts
              </h4>
              {recentBlogs.map((item, idx) => (
                <div className="rbt-recent-blog-single" key={idx}>
                  <div className="rbt-recent-blog-single-thumb">
                    <Link href={`/blog-single/${item.id}`}>
                      {item.imgSrc && (
                        <Image
                          alt={item.alt || ""}
                          width={160}
                          height={160}
                          src={item.imgSrc}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="rbt-blog-recent-info">
                    <div className="rbt-blog-post-meta">
                      <ul className="rbt-blog-details-meta-list">
                        <li>
                          <a href="#">{item.category}</a>
                        </li>
                        <li>
                          <a href="#">{item.date}</a>
                        </li>
                      </ul>
                    </div>

                    <h6 className="rbt-recent-blog-title">
                      <Link href={`/blog-single/${item.id}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Widget Area  */}
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
                Categories
              </h4>
              <ul className="rbt-sidebar-list-wrapper rbt-sidebar-categories-list">
                <li>
                  <a href="#">
                    <span>Food</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Animal</span>
                    <span>20</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Business</span>
                    <span>14</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Art</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Technology</span>
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Architecture</span>
                    <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Space</span>
                    <span>10</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Texture</span>
                    <span>0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Plant</span>
                    <span>07</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Widget Area  */}
          {/* Start Widget Area  */}
          <div className="rbt-single-widget">
            <div className="bt-single-widget-inner">
              <div className="rbt-sidebar-widget-img">
                <Image
                  alt="Sidebar Banner"
                  width={548}
                  height={688}
                  src="/assets/images/blog-details/blog-thumb-img-6.webp"
                />
              </div>
            </div>
          </div>
          {/* End Widget Area  */}
        </div>
      </div>
    </aside>
  );
}
