import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20 mt--60">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-6 mt--24">
            <Link href={`/shop-by-category`}>
              <figure className="rbt-static-product-thumbnail">
                <Image
                  alt="Thumbnail"
                  src="/assets/images/product-banner/product-banner-cyber-monday-sm-01.webp"
                  width={1648}
                  height={1260}
                />
              </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6 mt--24">
            <Link href={`/shop-by-category`}>
              <figure className="rbt-static-product-thumbnail">
                <Image
                  alt="Thumbnail"
                  src="/assets/images/product-banner/product-banner-cyber-monday-sm-02.webp"
                  width={1648}
                  height={1260}
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
