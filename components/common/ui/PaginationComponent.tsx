"use client";

import { useState } from "react";
import PaginationEffect from "./PaginationEffect";

const PAGE_SIZE = 9;
const TOTAL_ITEMS = 27;

type PaginationComponentProps = {
  parentClassName?: string;
  highlightClassName?: string;
};

export default function PaginationComponent({
  parentClassName = "rbt-nav-effect-activation text-center",
  highlightClassName = "",
}: PaginationComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationEffect
      totalItems={TOTAL_ITEMS}
      perPage={PAGE_SIZE}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      parentClassName={parentClassName}
      highlightClassName={highlightClassName}
    />
  );
}
