"use client";

import { useContextElement } from "@/context/Context";

export default function CompareItemLength() {
  const { compareItem } = useContextElement();
  return <>{compareItem.length}</>;
}
