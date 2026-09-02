"use client";

import { useContextElement } from "@/context/Context";
import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import type { MouseEventHandler } from "react";

interface AddToQuickViewProps {
  product: Product;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  openModalName?: "quickViewModal";
  [key: string]: unknown;
}

export default function AddToQuickViewOne({
  product,
  children,
  onClick,
  openModalName = "quickViewModal",
  ...rest
}: AddToQuickViewProps) {
  const { setQuickViewItem } = useContextElement();

  return (
    <ModalTriggerButton
      openModalName={openModalName}
      onClick={(event) => {
        if (product) {
          setQuickViewItem(product);
        }
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </ModalTriggerButton>
  );
}
