"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useUiStore } from "@/context/uiStore";
import ScrollTop from "@/components/common/other-components/ScrollTop";
import Toasters from "@/components/modals/Toasters";
import CookiesConsent from "@/components/common/other-components/CookiesConsent";
import HoverOverlay from "@/components/modals/HoverOverlay";
import CartToaster from "@/components/modals/CartToaster";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { managedModalUsesPortalOnly } from "@/lib/managedModalUi";
import { LAYOUT_MODAL_LAZY } from "@/lib/layoutModalRegistry";
import type { ModalNameType } from "@/types/modal";
import type { ComponentType } from "react";

export default function LayoutModals() {
  const pathname = usePathname();
  const closeAll = useUiStore((s) => s.closeAll);
  const openBsModal = useUiStore((s) => s.openBsModal);
  const [newsLetterShown, setNewsLetterShown] = useState(false);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  const registeredModals = useMemo(() => {
    return (
      Object.entries(LAYOUT_MODAL_LAZY) as Array<
        [ModalNameType, ComponentType | undefined]
      >
    )
      .filter((e): e is [ModalNameType, ComponentType] => e[1] != null)
      .map(([modalName, Comp]) => [modalName, <Comp key={modalName} />] as const);
  }, []);

  useEffect(() => {
    if (
      pathname !== "/home-electronics" ||
      newsLetterShown ||
      localStorage.getItem("newsletter-dismissed")
    )
      return;
    const timer = setTimeout(() => {
      openBsModal("newsletterModal");
      localStorage.setItem(`newsletter-dismissed`, "true");
      setNewsLetterShown(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [openBsModal, pathname, newsLetterShown]);

  return (
    <div>
      <HoverOverlay />
      <ScrollTop />
      {registeredModals.map(([modalName, node]) => (
        <SingleManagedModalLayer
          key={modalName}
          modalName={modalName}
          withoutWrapper={managedModalUsesPortalOnly(modalName)}
        >
          {node}
        </SingleManagedModalLayer>
      ))}
      <Toasters />
      <CartToaster />
      <CookiesConsent />
    </div>
  );
}
