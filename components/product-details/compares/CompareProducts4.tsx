"use client";

import { useContextElement } from "@/context/store";
import CompareProducts3 from "./CompareProducts3";

export default function CompareProducts4() {
  const { compareItem, removeFromCompareItem } = useContextElement();
  const products = compareItem;

  return (
    <CompareProducts3
      products={products}
      removeFromCompareItem={removeFromCompareItem}
    />
  );
}
