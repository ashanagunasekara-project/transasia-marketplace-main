"use client";
import Tooltip from "@/components/common/ui/Tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutHandler({ column }: { column?: number }) {
  const pathname = usePathname();
  return (
    <>
      <Tooltip content="List Style" placement="top">
        <Link
          href="/shop-filter-list-left-sidebar"
          className={
            pathname === "/shop-filter-list-left-sidebar"
              ? "active tooltips"
              : "tooltips"
          }
        >
          <i className="fa-regular fa-list" />
        </Link>
      </Tooltip>
      <Tooltip content="Two Column" placement="top">
        <Link
          href="/shop-filter-grid-two"
          className={column === 2 ? "active tooltips" : "tooltips"}
        >
          <i className="fa-regular fa-grid-2" />
        </Link>
      </Tooltip>
      <Tooltip content="Three Column" placement="top">
        <Link
          href="/shop-filter-grid-three"
          className={column === 3 ? "active tooltips" : "tooltips"}
        >
          <i className="fa-sharp fa-light fa-grid" />
        </Link>
      </Tooltip>
      <Tooltip content="Four Column" placement="top">
        <Link
          href="/shop-filter-grid-four"
          className={column === 4 ? "active tooltips" : "tooltips"}
        >
          <i className="fa-sharp fa-light fa-grid-4" />
        </Link>
      </Tooltip>
    </>
  );
}
