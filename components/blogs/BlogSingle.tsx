import Image from "next/image";
import BlogSidebar from "./BlogSidebar";
import { BlogPost } from "@/types/blog";
import { blogSocialLinks } from "@/data/socials";
import { dummyBlogComments } from "@/data/comments";
import type { Comment } from "@/types/misc";

const CommentItem = ({ comment, isChild = false }: { comment: Comment; isChild?: boolean }) => (
  <li className={`comment${isChild ? '' : ''}`}>
    <div className="comment-body">
      <div className="single-comment">
        <div className="comment-img">
          <Image
            alt="Author Images"
            src={comment.imgSrc}
            width={96}
            height={96}
          />
        </div>
        <div className="comment-inner">
          <h6 className="commenter">
            <a href="#">{comment.author}</a>
          </h6>
          <div className="comment-meta">
            <div className="time-spent">{comment.date}</div>
          </div>
          <div className="comment-text">
            <p className="b1">{comment.content}</p>
          </div>
          <div className="reply-edit">
            <div className="reply">
              <a className="comment-reply-link" href="#">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {comment.replies && comment.replies.length > 0 && (
      <ul className="rbt-child-comment">
        {comment.replies.map((reply: Comment) => (
          <CommentItem key={reply.id} comment={reply} isChild />
        ))}
      </ul>
    )}
  </li>
);

export default function BlogSingle({ blog }: { blog: BlogPost }) {
  if (!blog) {
    return null;
  }
  const imgSrc = blog.imgSrc || blog.images?.[0];
  return (
    <div className="rbt-component-area rbt-section-gap3Top rbt-blog-details-area rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--12">
          <div className="col-xl-9">
            {/* start thumbnail part */}
            <div className="rbt-blog-thumbnail rbt-curved-style-box">
              {imgSrc && (
                <div className="rbt-curved-style-box rbt-thumbnail-inner-image">
                  <Image
                    alt="Blog thumbnail"
                    src={imgSrc || "/assets/images/blog-details/blog-thumb-img-1.webp"}
                    width={1872}
                    height={916}
                  />
                </div>
              )}
            </div>
            {/* end thumbnail part */}
            {/* start meta part */}
            <div className="rbt-blog-post-meta">
              <ul className="rbt-blog-details-meta-list">
                <li>{blog.category}</li>
                <li className="single-post-meta-post-views">{blog.date}</li>
              </ul>
            </div>
            {/* end meta part */}
            <div className="rbt-blog-details-content">
              <div className="rbt-entry-content">
                <h1>{blog.title}</h1>
                <p>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum urna non ligula tempor aliquet. Fusce tincidunt est magna, id malesuada massa imperdiet ut. Nunc non nisi urna. Nam consequat est nec turpis eleifend ornare. Vestibulum eu justo lobortis mauris commodo efficitur. Nunc pulvinar pulvinar.</p>
                <p>Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae dapibus tempor.</p>
                <blockquote className="rbt-block-quote">
                  <p>Aliquam purus enim, fringilla vel nunc imperdiet, consequat ultricies massa. Praesent sed turpis sollicitudin, dignissim justo vel, fringilla mi.</p>
                  <cite><a href="https://rainbowthemes.net/">Mark Twain</a></cite>
                </blockquote>
                <p>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum urna non ligula tempor aliquet. Fusce tincidunt est magna, id malesuada massa imperdiet ut. Nunc non nisi urna. Nam consequat est nec turpis eleifend ornare. Vestibulum eu justo lobortis mauris commodo efficitur. Nunc pulvinar pulvinar.</p>
                <p>Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae dapibus tempor.</p>
                <hr />
                <h2>Tables</h2>
                <table>
                  <tbody>
                    <tr><th>Employee</th><th className="views">Salary</th><th /></tr>
                    <tr className="odd"><td><a href="http://john.do/">John Saddington</a></td><td>$1</td><td>Because that’s all Steve Job’ needed for a salary.</td></tr>
                    <tr className="even"><td><a href="http://tommcfarlin.com/">Tom McFarlin</a></td><td>$100K</td><td>For all the blogging he does.</td></tr>
                    <tr className="odd"><td><a href="http://jarederickson.com/">Jared Erickson</a></td><td>$100M</td><td>Pictures are worth a thousand words, right? So Tom x 1,000.</td></tr>
                    <tr className="even"><td><a href="http://chrisam.es/">Chris Ames</a></td><td>$100B</td><td>With hair like that?! Enough said…</td></tr>
                  </tbody>
                </table>
                <h2>Definition Lists</h2>
                <dl>
                  <dt>Definition List Title</dt>
                  <dd>Definition list division.</dd>
                  <dt>Startup</dt>
                  <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
                  <dt>#dowork</dt>
                  <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>
                  <dt>Do It Live</dt>
                  <dd>I’ll let Bill O’Reilly will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>
                </dl>
                <h2>Typography</h2>
                <h1>Header Level 3</h1>
                <h2>Header Level 2</h2>
                <h3>Header Level 3</h3>
                <h4>Header Level 4</h4>
                <h5>Header Level 5</h5>
                <h6>Header Level 6</h6>
                <h2>Unordered Lists (Nested)</h2>
                <ul>
                  <li>List item one
                    <ul>
                      <li>List item one
                        <ul>
                          <li>List item one</li>
                          <li>List item two</li>
                          <li>List item three</li>
                          <li>List item four</li>
                        </ul>
                      </li>
                      <li>List item two</li>
                      <li>List item three</li>
                      <li>List item four</li>
                    </ul>
                  </li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ul>
                <div className="rbt-blog-categories-share">
                  <div className="rbt-blog-categories">
                    <ul className="rbt-blog-categories-list">
                      {["Cameras", "Gaming", "Mobile", "Accessories"].map((cat) => (
                        <li key={cat}>
                          <a href="#">{cat}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="rbt-blog-social-share">
                    {blogSocialLinks.map((social) => (
                      <li key={social.id}>
                        <a href={social.url} className={social.className} target="_blank" rel="noopener noreferrer">
                          <i className={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                {/* Start comment part */}
                <div className="rbt-blog-comment-area">
                  <ul className="rbt-comment-list">
                    {dummyBlogComments.map((comment) => (
                      <CommentItem key={comment.id} comment={comment} />
                    ))}
                  </ul>
                </div>
                {/* End comment part */}
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
