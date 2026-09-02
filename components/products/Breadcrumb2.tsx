import Link from "next/link";

export default function Breadcrumb2() {
  return (
    <div
      className="rbt-breadcrumb-default ptb--92 ptb_md--40 ptb_sm--40 bg-image rbt-breadcrumb-bg-1"
      data-black-overlay={5}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-breadcrumb-inner text-center">
              <h2 className="rbt-breadcrumb-title h1">
                Small <span>Category Shop</span>
              </h2>
              <ul className="rbt-breadcrumb-page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item">
                  <a href="#">Elements</a>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
