import Link from "next/link";

export default function Categories() {
  return (
    <div className="rbt-header-catagories">
      <ul className="rbt-categories-list">
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-chair" />
            <span className="text">Chairs</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-bath" />
            <span className="text">Bathroom</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-lamp" />
            <span className="text">Lamp</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-bed-front" />
            <span className="text">Bedroom</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/shop-by-category`}
            className="rbt-single-catagory-item active"
          >
            <i className="fa-light fa-lamp-street" />
            <span className="text">Lighting</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-booth-curtain" />
            <span className="text">Curtains</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-utensils" />
            <span className="text">Utensils</span>
          </Link>
        </li>
        <li>
          <Link href={`/shop-by-category`} className="rbt-single-catagory-item">
            <i className="fa-light fa-regular fa-flower-daffodil" />
            <span className="text">Flower Pot</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
