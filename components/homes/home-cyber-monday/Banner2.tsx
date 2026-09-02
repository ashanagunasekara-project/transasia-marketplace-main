import Link from "next/link";
import Image from "next/image";
export default function Banner2() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="row">
          <div className="col-12">
            <Link href={`/shop`}>
              <figure>
                <Image
                  alt="Banner Thumbnail"
                  src="/assets/images/product-banner/product-banner-cyber-monday-02.webp"
                  width={3384}
                  height={1054}
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
