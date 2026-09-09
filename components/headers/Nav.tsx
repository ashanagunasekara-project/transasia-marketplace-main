"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isPathActive } from "@/lib/nav";

export default function Nav() {
  const pathname = usePathname();

  const isHomeActive = isPathActive(pathname, "/");
  const isShopActive =
    isPathActive(pathname, "/shop") ||
    (typeof pathname === "string" && pathname.startsWith("/product"));
  const isCategoriesActive = isPathActive(pathname, "/categories");
  const isContactActive = isPathActive(pathname, "/contact");

  return (
    <>
      <li className={isHomeActive ? "active" : ""}>
        <Link className={isHomeActive ? "active" : ""} href="/">
          Home
        </Link>
      </li>
      <li className={isShopActive ? "active" : ""}>
        <Link className={isShopActive ? "active" : ""} href="/shop">
          Shop
        </Link>
      </li>
      <li className={isCategoriesActive ? "active" : ""}>
        <Link className={isCategoriesActive ? "active" : ""} href="/categories">
          Categories
        </Link>
      </li>
      <li className={isContactActive ? "active" : ""}>
        <Link className={isContactActive ? "active" : ""} href="/contact">
          Contact Us
        </Link>
      </li>
    </>
  );
}

