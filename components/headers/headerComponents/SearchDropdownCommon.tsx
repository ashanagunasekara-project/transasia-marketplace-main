"use client";

import ProductCard10 from "@/components/product-cards/ProductCard10";
import { useUiElement } from "@/context/uiStore";
import { electronicsHoverVideoData } from "@/data/products/electronics";
import Tooltip from "@/components/common/ui/Tooltip";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import Link from "next/link";

const POPULAR_SEARCHES = [
  "Fashion",
  "Interior",
  "Nature",
  "Elementor",
  "Art",
  "Aliexpress",
  "Technology",
  "Texture",
  "Architecture",
  "Business",
  "Elementor",
  "Aliexpress",
];

export default function SearchDropdownCommon() {
  const { commonSearchOpen } = useUiElement();
  const { registerInputRef, getTooltip, copyFromRef, isCopied } =
    useCopyToClipboard({ defaultTooltip: "Copy" });
  return (
    <div
      id="header-common-search-dropdown"
      role="dialog"
      aria-modal="false"
      aria-label="Sticky header product search panel"
      className={`rbt-search-dropdown rbt-common-search-dropdown-activation${commonSearchOpen ? " active" : ""}`}
    >
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title border-0 p-0 text-center">
              <h4 className="rbt-title text-start text-md-center">
                <span className="rbt-bold--text">Search For Products</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              className="rbt-search-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-section position-relative w-100 mr--12 mr_sm--4">
                <input
                  className="search-input"
                  type="text"
                  placeholder="What Are You Looking For?"
                  aria-label="Search products"
                />
                <i
                  className="fa-sharp fa-regular inner-search-icon fa-magnifying-glass"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  aria-label="Search by image"
                  className="media-search-btn media-search-popup-activation"
                >
                  <i className="fa-sharp fa-regular fa-camera" aria-hidden="true" />
                </button>
              </div>
              <div className="submit-btn">
                <button type="submit" className="rbt-btn btn-md">
                  Search
                </button>
              </div>
              <div className="rbt-media-search-section">
                <div className="rbt-media-wrapper">
                  <div className="section-title">
                    <span className="title b1">
                      Find product inspiration with Image Search
                    </span>
                  </div>
                  <div className="rbt-file-upload-container">
                    <input type="file" className="fileInput" multiple hidden />
                    <div className="file-upload-area fileUploadArea">
                      <div className="file-upload-content">
                        <span className="rbt-icon">
                          <i
                            className="fa-solid fa-cloud-arrow-up"
                            aria-hidden="true"
                          />
                        </span>
                        <p className="rbt-title">
                          Drag &amp; Drop Files Here{" "}
                          <span className="rbt-text-color-gray-400">Or</span>
                        </p>
                        <button
                          type="button"
                          className="browseFilesButton rbt-btn rbt-btn-sm"
                        >
                          Browse Files
                        </button>
                      </div>
                      <div className="fileList file-list" />
                    </div>
                    <p className="fileCount">0 of 10</p>
                  </div>
                  <div className="rbt-copy-link-part rbt-text-copy-activation">
                    <input
                      ref={registerInputRef("search-dropdown-common-link")}
                      className="rbt-copy-value-field"
                      type="text"
                      defaultValue="https://unimart.template/wishlist"
                      readOnly
                    />
                    <Tooltip
                      content={getTooltip("search-dropdown-common-link")}
                      placement="top"
                      forceOpen={isCopied("search-dropdown-common-link")}
                    >
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-xs has-left-icon rbt-copy-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          void copyFromRef("search-dropdown-common-link");
                        }}
                      >
                        <i className="fa-regular fa-copy" aria-hidden="true" />
                        <span className="rbt-btn-text">Copy</span>
                      </button>
                    </Tooltip>
                  </div>
                  <button
                    type="button"
                    className="rbt-round-btn rbt-ms-dismiss-btn"
                    aria-label="Close image search panel"
                  >
                    <i className="fa-solid fa-xmark" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="rbt-ms-dismiss-outsider"
                aria-label="Close search dropdown"
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Popular searches</span>
              </h6>
            </div>
          </div>
          <div className="rbt-search-list-wrapper rbt-tag-list rbt-tag-list-rounded-lg">
            {POPULAR_SEARCHES.map((keyword, index) => (
              <Link key={`${keyword}-${index}`} href="/shop-by-categories">
                {keyword}
              </Link>
            ))}
          </div>
        </div>
        <div className="rbt-separator-mid ptb--24">
          <hr className="rbt-separator m-0" />
        </div>
        {/* Start Card Area */}
        <div className="row">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Trending Products</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          {electronicsHoverVideoData.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard10 product={product} />
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
