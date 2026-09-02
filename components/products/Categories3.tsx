import Image from "next/image";
import Link from "next/link";

import PaginationComponent from "../common/ui/PaginationComponent";

const categoriesData = [
  {
    id: 1,
    title: "Baby, Child & Toys",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-1.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 2,
    title: "Dairy, Chilled & Eggs",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-2.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Twix", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
        { label: "Tony’s Chocolonely", href: "/shop-by-category" },
        { label: "Bittersweet Chocolate", href: "/shop-by-category" },
        { label: "Ruby Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
      ],
      [
        { label: "Green & Black’s Organic", href: "/shop-by-category" },
        { label: "Nestle Crunch", href: "/shop-by-category" },
        { label: "Twix", href: "/shop-by-category" },
        { label: "Gianduja Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Green & Black’s Organic", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 3,
    title: "Beauty & Personal Care",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-3.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Lindt Excellence", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Milk Chocolate", href: "/shop-by-category" },
      ],
      [
        { label: "Godiva Chocolatier", href: "/shop-by-category" },
        { label: "Milk Chocolate", href: "/shop-by-category" },
        { label: "Ruby Chocolate", href: "/shop-by-category" },
        { label: "Snickers", href: "/shop-by-category" },
        { label: "Toblerone", href: "/shop-by-category" },
        { label: "Nestle Crunch", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 4,
    title: "Food Cupboard",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-4.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Mars Bar", href: "/shop-by-category" },
        { label: "Milky Way", href: "/shop-by-category" },
        { label: "Lindt Excellence", href: "/shop-by-category" },
        { label: "Nestle Crunch", href: "/shop-by-category" },
      ],
      [
        { label: "Ruby Chocolate", href: "/shop-by-category" },
        { label: "Bittersweet Chocolate", href: "/shop-by-category" },
        { label: "Mars Bar", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "M&M’s", href: "/shop-by-category" },
        { label: "Ruby Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 5,
    title: "Health Wellness",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-5.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
      ],
      [
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 6,
    title: "Fruits & Vegetables",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-6.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
      ],
      [
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 7,
    title: "Meat & Seafood",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-7.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Green & Black’s Organic", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 8,
    title: "Snacks & Confectionery",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-8.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 9,
    title: "Rice, Noodles & Cooking",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-9.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Couverture", href: "/shop-by-category" },
      ],
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 10,
    title: "Pet Supplies",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-10.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 11,
    title: "All Kind Of Frozen Foods",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-11.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Alter Eco", href: "/shop-by-category" },
        { label: "M&M’s", href: "/shop-by-category" },
        { label: "Alter Eco", href: "/shop-by-category" },
        { label: "Ruby Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Ferrero Rocher", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
      ],
    ],
  },
  {
    id: 12,
    title: "Bakery Items",
    viewAllHref: "/shop-by-categories",
    image: {
      src: "/assets/images/catagory-img/categories-list-card/category-list-image-12.webp",
      alt: "Product Category Thumbnail",
      width: 144,
      height: 144,
    },
    columns: [
      [
        { label: "Couverture", href: "/shop-by-category" },
        { label: "Semisweet Chocolate", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ritter Sport", href: "/shop-by-category" },
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Kit Kat", href: "/shop-by-category" },
      ],
      [
        { label: "Cadbury Dairy Milk", href: "/shop-by-category" },
        { label: "Ghirardelli Intense Dark", href: "/shop-by-category" },
        { label: "Dove Chocolate", href: "/shop-by-category" },
        { label: "Dark Chocolate", href: "/shop-by-category" },
        { label: "Hershey’s Milk Chocolate", href: "/shop-by-category" },
        { label: "Ferrero Rocher", href: "/shop-by-category" },
      ],
    ],
  },
];

export default function Categories3() {
  return (
    <div className="rbt-component-area rbt-nav-box-area rbt-section-gapBottom rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="col-12 col-md-6 col-xl-4 mt--24">
              <div className="rbt-nav-box">
                <div className="inner">
                  <div className="rbt-nav-box-top">
                    <div className="rbt-nav-box-title-part">
                      <h6 className="rbt-nav-box-title">{cat.title}</h6>
                      <Link
                        href={cat.viewAllHref}
                        className="rbt-underline-btn"
                      >
                        View All
                        <i className="fa-regular fa-chevron-right" />
                      </Link>
                    </div>

                    <div className="rbt-categories-box-img">
                      <Image
                        alt={cat.image.alt}
                        src={cat.image.src}
                        width={cat.image.width}
                        height={cat.image.height}
                      />
                    </div>
                  </div>

                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--16 rbt-bg-color-gray-100" />

                  <div className="rbt-nav-items">
                    {cat.columns.map((items, colIndex) => (
                      <ul
                        key={`${cat.id}-col-${colIndex}`}
                        className="rbt-nav-item-list"
                      >
                        {items.map((item, itemIndex) => (
                          <li key={`${cat.id}-${colIndex}-${itemIndex}`}>
                            <Link href={item.href} className="rbt-btn-link">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="rbt-pagination-area mt--32">
            <div className="row">
              <div className="col-12">
                <PaginationComponent />
              </div>
            </div>
          </div>
          {/* End Pagination */}
        </div>
      </div>
    </div>
  );
}
