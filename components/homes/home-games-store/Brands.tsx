import { brandImages } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  return (
    <div className="rbt-component-area rbt-categories-scroll-area">
      <div className="wrapper">
        <div className="rbt-scroll-animation-container">
          <div className="rbt-scroll-animation-wrapper rbt-no-overlay rbt-bg-color-extra-nine p--0">
            <div className="rbt-scroll-animation rbt-scroll-right-left">
              {/* Start Single Testimonial  */}
              <div className="rbt-single-column-100">
                <div className="rbt-category-list rbt-has-brand-img">
                  {brandImages.map((image, index) => (
                    <Link href={`/shop-by-brands`} key={index}>
                      {image.imgSrc && (
                        <Image
                          alt="Brand Image"
                          width={image.width}
                          height={200}
                          src={image.imgSrc}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
