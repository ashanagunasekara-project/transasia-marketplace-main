"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Runs global client-side layout effects (animations, tooltips, Fancybox, etc.)
// without wrapping the React tree.
export default function LayoutClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Class names for different scroll and animation states
    const RBT_SCROLL_ACTIVATION = "rbt-scroll-trigger";
    const RBT_SCROLL_OFFSCREEN_ACTIVATION = "rbt-scroll-trigger--offscreen";
    const RBT_SCROLL_ZOOM_IN_ACTIVATION = "animate--zoom-in";
    const RBT_SCROLL_CANCEL_ACTIVATION = "rbt-scroll-trigger--cancel";

    // Handle intersection events for scroll animations
    function onIntersection(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) {
      entries.forEach((entry: IntersectionObserverEntry, index: number) => {
        if (entry.isIntersecting) {
          const elementTarget = entry.target as HTMLElement;
          if (
            elementTarget.classList.contains(RBT_SCROLL_OFFSCREEN_ACTIVATION)
          ) {
            elementTarget.classList.remove(RBT_SCROLL_OFFSCREEN_ACTIVATION);
            if (elementTarget.dataset.cascade) {
              elementTarget.style.setProperty(
                "--animation-order",
                String(index),
              );
            }
          }
          observer.unobserve(elementTarget);
        } else {
          entry.target.classList.add(RBT_SCROLL_OFFSCREEN_ACTIVATION);
          entry.target.classList.remove(RBT_SCROLL_CANCEL_ACTIVATION);
        }
      });
    }

    function initializeScrollAnimationTrigger(
      rootEl: Document | HTMLElement = document,
      isDesignModeEvent = false,
    ) {
      const animationTriggerElements = rootEl.querySelectorAll(
        `.${RBT_SCROLL_ACTIVATION}`,
      );
      if (animationTriggerElements.length === 0) return;

      if (isDesignModeEvent) {
        animationTriggerElements.forEach((element) => {
          element.classList.add("rbt-scroll-trigger--design-mode");
        });
        return;
      }

      const observer = new IntersectionObserver(onIntersection, {
        rootMargin: "0px 0px -50px 0px",
      });
      animationTriggerElements.forEach((element) => {
        observer.observe(element);
      });
    }

    /** Layout reads only — call in a batch before any writes (reduces forced reflow). */
    function percentageSeen(
      element: Element,
      scrollY: number,
      viewportHeight: number,
    ) {
      const elementRect = element.getBoundingClientRect();
      const elementPositionY = elementRect.top + scrollY;
      const elementHeight = elementRect.height;

      if (elementPositionY > scrollY + viewportHeight) return 0;
      if (elementPositionY + elementHeight < scrollY) return 100;

      const percentage =
        (scrollY + viewportHeight - elementPositionY) /
        ((viewportHeight + elementHeight) / 100);
      return Math.round(percentage);
    }

    /**
     * One shared IntersectionObserver + one rAF-scheduled scroll/resize handler.
     * Batches all getBoundingClientRect reads, then applies style writes (avoids layout thrashing).
     */
    function initializeScrollZoomAnimationTrigger(): () => void {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return () => {};
      }

      const nodeList = document.querySelectorAll(
        `.${RBT_SCROLL_ZOOM_IN_ACTIVATION}`,
      );
      if (nodeList.length === 0) return () => {};

      const scaleAmount = 0.2 / 100;
      const elements = Array.from(nodeList) as HTMLElement[];
      const visible = new Set<Element>();

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          });
        },
        { root: null, threshold: 0, rootMargin: "0px" },
      );
      elements.forEach((el) => intersectionObserver.observe(el));

      let rafId = 0;

      const applyZoomRatios = (targets: HTMLElement[]) => {
        if (targets.length === 0) return;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const ratios: number[] = new Array(targets.length);
        for (let i = 0; i < targets.length; i++) {
          ratios[i] =
            1 + scaleAmount * percentageSeen(targets[i], scrollY, viewportHeight);
        }
        for (let i = 0; i < targets.length; i++) {
          targets[i].style.setProperty("--zoom-in-ratio", String(ratios[i]));
        }
      };

      const scheduleUpdate = (onlyVisible: boolean) => {
        if (rafId !== 0) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          const targets = onlyVisible
            ? elements.filter((el) => visible.has(el))
            : elements;
          applyZoomRatios(targets);
        });
      };

      // Initial values (batched read → batched write)
      applyZoomRatios(elements);

      const onScrollOrResize = () => scheduleUpdate(true);

      window.addEventListener("scroll", onScrollOrResize, { passive: true });
      window.addEventListener("resize", onScrollOrResize, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScrollOrResize);
        window.removeEventListener("resize", onScrollOrResize);
        intersectionObserver.disconnect();
        if (rafId !== 0) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      };
    }

    document.querySelectorAll(".swiper-slide.opacity-0").forEach((element) => {
      element.classList.remove("opacity-0");
    });

    initializeScrollAnimationTrigger();
    const cleanupZoom = initializeScrollZoomAnimationTrigger();

    const animates = document.querySelectorAll(".rbt-scroll-trigger");
    const cleanupAnimates: (() => void)[] = [];

    if (animates.length > 0) {
      animates.forEach((animate) => {
        const handler = (e: Event) => {
          setTimeout(() => {
            (e.target as Element)?.setAttribute("animation-ends", "");
          }, 1000);
        };
        animate.addEventListener("animationend", handler);
        cleanupAnimates.push(() =>
          animate.removeEventListener("animationend", handler),
        );
      });
    }

    return () => {
      cleanupZoom();
      cleanupAnimates.forEach((cb) => cb());
    };
  }, [pathname]);

  return null;
}
