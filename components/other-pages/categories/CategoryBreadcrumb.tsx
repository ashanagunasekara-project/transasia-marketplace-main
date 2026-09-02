import Link from "next/link";

interface CategoryBreadcrumbProps {
  title: string;
  highlighted?: string;
  parentLabel?: string;
  backgroundClassName?: string;
}

export default function CategoryBreadcrumb({
  title,
  highlighted,
  parentLabel = "Categories",
  backgroundClassName = "",
}: CategoryBreadcrumbProps) {
  return (
    <div
      className={`rbt-breadcrumb-default ptb--48 ptb_md--24 ptb_sm--24 ${backgroundClassName || ""
        }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-breadcrumb-inner text-center">
              <h1 className="rbt-breadcrumb-title h1 rbt-text-capitalize">
                {title}
                {highlighted && <span> {highlighted}</span>}
              </h1>
              <ul className="rbt-breadcrumb-page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href="/index">Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item">
                  <a href="#">{parentLabel}</a>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">
                  {title}
                  {highlighted && <span> {highlighted}</span>}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
