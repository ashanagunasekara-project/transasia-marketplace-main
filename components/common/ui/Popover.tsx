"use client";

import * as RadixPopover from "@radix-ui/react-popover";
import { useState } from "react";

type PopoverSide = "top" | "right" | "bottom" | "left";
type PopoverTriggerMode = "click" | "hover";

interface PopoverProps {
  content: React.ReactNode;
  placement?: PopoverSide;
  trigger?: PopoverTriggerMode;
  children: React.ReactNode;
}

export default function Popover({
  content,
  placement = "top",
  trigger = "click",
  children,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const isHoverTrigger = trigger === "hover";

  return (
    <RadixPopover.Root
      open={isHoverTrigger ? open : undefined}
      onOpenChange={isHoverTrigger ? setOpen : undefined}
    >
      <RadixPopover.Trigger
        asChild
        onMouseEnter={isHoverTrigger ? () => setOpen(true) : undefined}
        onMouseLeave={isHoverTrigger ? () => setOpen(false) : undefined}
      >
        {children}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={placement}
          align="center"
          sideOffset={0}
          className="rbt-popover-bubble"
          onMouseEnter={isHoverTrigger ? () => setOpen(true) : undefined}
          onMouseLeave={isHoverTrigger ? () => setOpen(false) : undefined}
        >
          <div className="rbt-popover-body">{content}</div>
          <RadixPopover.Arrow
            className="rbt-popover-arrow"
            width={14}
            height={8}
          />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
