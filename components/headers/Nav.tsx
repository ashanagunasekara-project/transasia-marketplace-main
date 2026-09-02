"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  demoData,
  innerPageMenuColumns,
  supportMenuItems,
  elementsMenuColumns,
  uxMenuColumns,
} from "@/data/menu";
import { useMenuHover } from "@/hooks/useMenuHover";
import { isPathActive } from "@/lib/nav";

import NavShopPages from "./headerComponents/NavShopPages";
import NavDemosMenu from "./headerComponents/NavDemosMenu";
import NavPagesMenu from "./headerComponents/NavPagesMenu";
import NavElementsMenu from "./headerComponents/NavElementsMenu";
import NavCoreFeaturesMenu from "./headerComponents/NavCoreFeaturesMenu";
import NavMoreMenu from "./headerComponents/NavMoreMenu";

export default function Nav() {
  const pathname = usePathname();
  // Separate hover state per top-level menu item
  const demosHover = useMenuHover();
  const pagesHover = useMenuHover();
  const elementsHover = useMenuHover();
  const coreFeaturesHover = useMenuHover();
  const moreHover = useMenuHover();
  const [demosMounted, setDemosMounted] = useState(false);
  const [pagesMounted, setPagesMounted] = useState(false);
  const [elementsMounted, setElementsMounted] = useState(false);
  const [coreFeaturesMounted, setCoreFeaturesMounted] = useState(false);

  const handleDemosMouseEnter = () => {
    if (!demosMounted) setDemosMounted(true);
    demosHover.onMouseEnter();
  };
  const handlePagesMouseEnter = () => {
    if (!pagesMounted) setPagesMounted(true);
    pagesHover.onMouseEnter();
  };
  const handleElementsMouseEnter = () => {
    if (!elementsMounted) setElementsMounted(true);
    elementsHover.onMouseEnter();
  };
  const handleCoreFeaturesMouseEnter = () => {
    if (!coreFeaturesMounted) setCoreFeaturesMounted(true);
    coreFeaturesHover.onMouseEnter();
  };

  const isDemosActive = demoData.some((item) =>
    isPathActive(pathname, item.href),
  );

  const pagesMenuItems = innerPageMenuColumns.flatMap((column) => column.items);
  const isPagesActive = pagesMenuItems.some((item) =>
    isPathActive(pathname, item.href),
  );

  const elementsMenuItems = elementsMenuColumns.flatMap(
    (column) => column.items,
  );
  const isElementsActive = elementsMenuItems.some((item) =>
    isPathActive(pathname, item.href),
  );

  const coreFeaturesItems = uxMenuColumns.flatMap((column) => column.items);
  const isCoreFeaturesActive = coreFeaturesItems.some((item) =>
    isPathActive(pathname, item.href),
  );

  const isMoreActive = supportMenuItems.some((item) =>
    isPathActive(pathname, item.href),
  );

  return (
    <>
      <NavDemosMenu
        isHoverOpen={demosHover.isMenuHoverOpen}
        isActive={isDemosActive}
        mounted={demosMounted}
        onMouseEnter={handleDemosMouseEnter}
        onMouseLeave={demosHover.onMouseLeave}
        onWheelInside={demosHover.onWheelInside}
      />
      <NavShopPages />
      <NavPagesMenu
        pathname={pathname}
        isHoverOpen={pagesHover.isMenuHoverOpen}
        isActive={isPagesActive}
        mounted={pagesMounted}
        onMouseEnter={handlePagesMouseEnter}
        onMouseLeave={pagesHover.onMouseLeave}
        onWheelInside={pagesHover.onWheelInside}
      />
      <NavElementsMenu
        pathname={pathname}
        isHoverOpen={elementsHover.isMenuHoverOpen}
        isActive={isElementsActive}
        mounted={elementsMounted}
        onMouseEnter={handleElementsMouseEnter}
        onMouseLeave={elementsHover.onMouseLeave}
        onWheelInside={elementsHover.onWheelInside}
      />
      <NavCoreFeaturesMenu
        pathname={pathname}
        isHoverOpen={coreFeaturesHover.isMenuHoverOpen}
        isActive={isCoreFeaturesActive}
        mounted={coreFeaturesMounted}
        onMouseEnter={handleCoreFeaturesMouseEnter}
        onMouseLeave={coreFeaturesHover.onMouseLeave}
        onWheelInside={coreFeaturesHover.onWheelInside}
      />
      <NavMoreMenu
        pathname={pathname}
        isHoverOpen={moreHover.isMenuHoverOpen}
        isActive={isMoreActive}
        onMouseEnter={moreHover.onMouseEnter}
        onMouseLeave={moreHover.onMouseLeave}
        onWheelInside={moreHover.onWheelInside}
      />
    </>
  );
}
