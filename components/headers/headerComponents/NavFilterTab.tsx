"use client";

import { useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";

export default function NavFilterTab() {
  const [active, setActive] = useState<string>("women");

  return (
    <NavEffectTabs
      parentClassName="rbt-product-nav-section rbt-product-nav-var-black rbt-scroll-trigger fade_in animation-order-2"
      options={[
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
      ]}
      active={active}
      setActive={(id) => setActive(id)}
    />
  );
}
