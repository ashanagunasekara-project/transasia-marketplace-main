import Link from "next/link";
import { BRAND_SECTIONS } from "@/data/brands";
import Image from "next/image";

const BRAND_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export default function BrandList() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom rbt-bg-color-gray-light">
      <div className="container">
        <div className="row rbt-brand-char-list-sticky">
          <div className="col-12">
            <div className="rbt-char-area mb--32">
              <div className="inner">
                <nav className="rbt-onepagenav">
                  <ul className="rbt-char-list">
                    {BRAND_LETTERS.map((letter, index) => (
                      <li
                        key={letter}
                        className={index === 0 ? "current" : undefined}
                      >
                        <a
                          href={`#${letter.toLowerCase()}`}
                          className="rbt-char-single"
                        >
                          {letter.toUpperCase()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {BRAND_SECTIONS.map((section) => (
          <div
            key={section.id}
            className="rbt-brand-list-area"
            id={section.title?.toLowerCase()}
          >
            <div className="row">
              <div className="col-12">
                <h2 className="rbt-brand-list-title">
                  <a href="#">{section.title}</a>
                </h2>
                <hr className="rbt-separator rbt-separator-gray200 mb--24" />
              </div>
            </div>
            <div className="row row--12 mt_dec--16">
              {section.columns?.map((column, columnIndex) => (
                <div
                  key={`${section.id}-${columnIndex}`}
                  className="col-12 col-md-6 col-lg-3 mt--16"
                >
                  <ul className="rbt-brand-list">
                    {column.map((brand) => (
                      <li key={`${section.id}-${brand.title}-${brand.logoSrc}`}>
                        <Link href={`/shop-by-brands`}>
                          <span className="icon">
                            {brand.logoSrc && (
                              <Image
                                alt="Brand logo"
                                src={brand.logoSrc}
                                width={brand.width}
                                height={brand.height}
                              />
                            )}
                          </span>
                          <span className="rbt-brand-text rbt-btn-link">
                            {brand.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
