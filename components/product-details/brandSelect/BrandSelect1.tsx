import Image from "next/image";

export default function BrandSelect1() {
  return (
    <div className="rbt-info-wrapper d-flex mt--24">
      <div className="prd-info-section">
        <div className="prd-id-text">
          <p className="text-bold rbt-variation-label">
            Brand: <span className="rbt-text">No Selection</span>
          </p>
          <div
            data-type="list"
            data-variation_key="rbt_product_attribute_layout"
            className="rbt-product-switch-area"
          >
            <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
              <li>
                <a
                  data-value="/assets/images/product-single/fashion/product-type/prd-type-a-1.webp"
                  className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                  href="#0"
                >
                  <Image
                    className="rbt-h-unset"
                    alt="Cotton"
                    src="/assets/images/product-single/fashion/product-type/prd-type-a-1.webp"
                    width="128"
                    height="128"
                  />
                  <div className="rbt-image-tooltip-box">
                    <Image
                      className="rbt-h-unset"
                      alt="Cotton"
                      src="/assets/images/product-single/fashion/product-type/prd-type-a-1.webp"
                      width="128"
                      height="128"
                    />
                    <span className="img-desc-text">Cotton</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  data-value="/assets/images/product-single/fashion/product-type/prd-type-a-2.webp"
                  className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                  href="#0"
                >
                  <Image
                    className="rbt-h-unset"
                    alt="Fine wool"
                    src="/assets/images/product-single/fashion/product-type/prd-type-a-2.webp"
                    width="128"
                    height="128"
                  />
                  <div className="rbt-image-tooltip-box">
                    <Image
                      className="rbt-h-unset"
                      alt="Fine wool"
                      src="/assets/images/product-single/fashion/product-type/prd-type-a-2.webp"
                      width="128"
                      height="128"
                    />
                    <span className="img-desc-text">Fine wool</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  data-value="/assets/images/product-single/fashion/product-type/prd-type-a-3.webp"
                  className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                  href="#0"
                >
                  <Image
                    className="rbt-h-unset"
                    alt="SoftBlend"
                    src="/assets/images/product-single/fashion/product-type/prd-type-a-3.webp"
                    width="128"
                    height="128"
                  />
                  <div className="rbt-image-tooltip-box">
                    <Image
                      className="rbt-h-unset"
                      alt="SoftBlend"
                      src="/assets/images/product-single/fashion/product-type/prd-type-a-3.webp"
                      width="128"
                      height="128"
                    />
                    <span className="img-desc-text">SoftBlend</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  data-value="/assets/images/product-single/fashion/product-type/prd-type-a-4.webp"
                  className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                  href="#0"
                >
                  <Image
                    className="rbt-h-unset"
                    alt="Natural Textures"
                    src="/assets/images/product-single/fashion/product-type/prd-type-a-4.webp"
                    width="128"
                    height="128"
                  />
                  <div className="rbt-image-tooltip-box">
                    <Image
                      className="rbt-h-unset"
                      alt="Natural Textures"
                      src="/assets/images/product-single/fashion/product-type/prd-type-a-4.webp"
                      width="128"
                      height="128"
                    />
                    <span className="img-desc-text">Natural Textures</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
