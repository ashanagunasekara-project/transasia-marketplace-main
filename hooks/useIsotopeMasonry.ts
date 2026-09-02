"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { IsotopeInstance, IsotopeOptions } from "@/types/isotope";

type ImagesLoadedInstance = {
  on: (event: string, cb: () => void) => void;
  off: (event: string, cb: () => void) => void;
};

type ImagesLoadedFn = (elem: Element) => ImagesLoadedInstance;

export type UseIsotopeMasonryOptions = {
  itemSelector: string;
  layoutMode?: string;
  percentPosition?: boolean;
  initDelay?: number;
  onReady?: (instance: IsotopeInstance) => void;
  onRelayout?: (instance: IsotopeInstance) => void;
};

function unbindImagesLoaded(
  instance: ImagesLoadedInstance | null,
  handler: (() => void) | null,
) {
  if (!instance || !handler) return;
  instance.off("progress", handler);
  instance.off("always", handler);
}

export function useIsotopeMasonry(
  gridRef: RefObject<HTMLElement | null>,
  {
    itemSelector,
    layoutMode = "masonry",
    percentPosition = true,
    initDelay = 100,
    onReady,
    onRelayout,
  }: UseIsotopeMasonryOptions,
  relayoutDeps: unknown[] = [],
): RefObject<IsotopeInstance | null> {
  const isotopeRef = useRef<IsotopeInstance | null>(null);
  const layoutRafRef = useRef<number | null>(null);
  const imagesLoadedHandlerRef = useRef<(() => void) | null>(null);
  const imagesLoadedInstanceRef = useRef<ImagesLoadedInstance | null>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;
  const onRelayoutRef = useRef(onRelayout);
  onRelayoutRef.current = onRelayout;

  useEffect(() => {
    let isMounted = true;

    const scheduleLayout = () => {
      if (layoutRafRef.current !== null) return;
      layoutRafRef.current = window.requestAnimationFrame(() => {
        layoutRafRef.current = null;
        isotopeRef.current?.layout();
      });
    };

    const bindImagesLoaded = (grid: HTMLElement) => {
      unbindImagesLoaded(
        imagesLoadedInstanceRef.current,
        imagesLoadedHandlerRef.current,
      );

      const handler = () => scheduleLayout();
      imagesLoadedHandlerRef.current = handler;

      void import("imagesloaded").then(({ default: imagesloaded }) => {
        if (!isMounted) return;
        const instance = (imagesloaded as ImagesLoadedFn)(grid);
        imagesLoadedInstanceRef.current = instance;
        instance.on("progress", handler);
        instance.on("always", handler);
      });
    };

    async function init() {
      if (!gridRef.current) return;

      const { default: IsotopeCtor } = await import("isotope-layout");
      const Isotope = IsotopeCtor as unknown as new (
        element: Element,
        options?: IsotopeOptions,
      ) => IsotopeInstance;

      if (!isMounted || !gridRef.current) return;

      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector,
        layoutMode,
        percentPosition,
      });

      bindImagesLoaded(gridRef.current);
      onReadyRef.current?.(isotopeRef.current);
    }

    const initTimeoutId = window.setTimeout(() => {
      void init();
    }, initDelay);

    return () => {
      isMounted = false;
      window.clearTimeout(initTimeoutId);
      if (layoutRafRef.current !== null) {
        window.cancelAnimationFrame(layoutRafRef.current);
        layoutRafRef.current = null;
      }
      unbindImagesLoaded(
        imagesLoadedInstanceRef.current,
        imagesLoadedHandlerRef.current,
      );
      imagesLoadedInstanceRef.current = null;
      imagesLoadedHandlerRef.current = null;
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
        isotopeRef.current = null;
      }
    };
  }, [gridRef, itemSelector, layoutMode, percentPosition, initDelay]);

  useEffect(() => {
    if (!gridRef.current || !isotopeRef.current) return;

    const scheduleLayout = () => {
      if (layoutRafRef.current !== null) return;
      layoutRafRef.current = window.requestAnimationFrame(() => {
        layoutRafRef.current = null;
        isotopeRef.current?.layout();
      });
    };

    isotopeRef.current.reloadItems?.();
    onRelayoutRef.current?.(isotopeRef.current);
    isotopeRef.current.layout();

    unbindImagesLoaded(
      imagesLoadedInstanceRef.current,
      imagesLoadedHandlerRef.current,
    );

    const handler = () => scheduleLayout();
    imagesLoadedHandlerRef.current = handler;

    void import("imagesloaded").then(({ default: imagesloaded }) => {
      if (!gridRef.current || !isotopeRef.current) return;
      const instance = (imagesloaded as ImagesLoadedFn)(gridRef.current);
      imagesLoadedInstanceRef.current = instance;
      instance.on("progress", handler);
      instance.on("always", handler);
    });
    // Relayout when grid content changes (load more, filter, etc.)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, relayoutDeps);

  return isotopeRef;
}
