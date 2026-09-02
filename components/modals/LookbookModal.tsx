"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlocsImageEntry } from "@/data/splash";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import type { ModalNameType } from "@/types/modal";
import {
  blocsLookbookCol1, blocsLookbookCol2, blocsLookbookCol3,
} from "@/data/splash";

interface LookbookModalProps {
  id: string;
  title: string;
  count: string;
}

/** Renders a single image entry as either a Next.js Link or plain <a> */
function BlocsEntry({ entry }: { entry: BlocsImageEntry }) {
  const img = (
    <Image
      alt="Element Image"
      src={entry.src}
      width={entry.width}
      height={entry.height}
    />
  );
  const isInternalLink = entry.href.startsWith("/");

  return isInternalLink ? (
    <Link href={entry.href} className="rbt-element d-block mt--24">
      {img}
    </Link>
  ) : (
    <a href={entry.href} className="rbt-element d-block mt--24">
      {img}
    </a>
  );
}

export default function LookbookModal({ id, title, count }: LookbookModalProps) {
  const { close } = useManagedModalPanel(id as ModalNameType);

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered container-size">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              onClick={close}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-bg-color-white rbt-content-trs-portion rbt-element-block-presentation">
              <h4 className="rbt-title mb--0 text-center" id={`${id}-label`}>
                {title}
                <span className="element-count">{count}</span>
              </h4>
              <div className="rbt-vertical-scroll">
                <div className="container">
                  <div className="row row--12 mt_dec--24">
                    <div className="col-12 col-md-6 col-lg-4 mt--24">
                      {blocsLookbookCol1.map((entry, index) => (
                        <BlocsEntry key={index} entry={entry} />
                      ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt--24">
                      {blocsLookbookCol2.map((entry, index) => (
                        <BlocsEntry key={index} entry={entry} />
                      ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt--24">
                      {blocsLookbookCol3.map((entry, index) => (
                        <BlocsEntry key={index} entry={entry} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
