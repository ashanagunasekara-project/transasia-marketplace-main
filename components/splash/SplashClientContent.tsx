"use client";

import dynamic from "next/dynamic";
import { useSplashSectionNav } from "@/components/splash/SplashSectionNavContext";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

const Demos = dynamic(() => import("@/components/splash/Demos"), {
  ssr: false,
});
const HeaderVariations = dynamic(
  () => import("@/components/splash/HeaderVariations"),
  { ssr: false },
);
const FooterVariations = dynamic(
  () => import("@/components/splash/FooterVariations"),
  { ssr: false },
);
const InnerPages = dynamic(() => import("@/components/splash/InnerPages"), {
  ssr: false,
});
const CartOptionArea = dynamic(
  () => import("@/components/splash/CartOptionArea"),
  { ssr: false },
);
const Blocs = dynamic(() => import("@/components/splash/Blocs"), {
  ssr: false,
});
const MobileViewArea = dynamic(
  () => import("@/components/splash/MobileViewArea"),
  { ssr: false },
);
const Flexibility = dynamic(() => import("@/components/splash/Flexibility"), {
  ssr: false,
});
const MobileResponsive = dynamic(
  () => import("@/components/splash/MobileResponsive"),
  { ssr: false },
);
const SpeedPerformance = dynamic(
  () => import("@/components/splash/SpeedPerformance"),
  { ssr: false },
);
const AdminDashboard = dynamic(
  () => import("@/components/splash/AdminDashboard"),
  { ssr: false },
);
const Costing = dynamic(() => import("@/components/splash/Costing"), {
  ssr: false,
});
const Features2 = dynamic(() => import("@/components/splash/Features2"), {
  ssr: false,
});
const FeaturesSlider = dynamic(
  () => import("@/components/splash/FeaturesSlider"),
  { ssr: false },
);
const Testimonials = dynamic(() => import("@/components/splash/Testimonials"), {
  ssr: false,
});
const Faqs = dynamic(() => import("@/components/splash/Faqs"), { ssr: false });
const Variations = dynamic(() => import("@/components/splash/Variations"), {
  ssr: false,
});
const Cta = dynamic(() => import("@/components/splash/Cta"), { ssr: false });
const MarqueeSection = dynamic(
  () => import("@/components/splash/MarqueeSection"),
  { ssr: false },
);
const Support = dynamic(() => import("@/components/splash/Support"), {
  ssr: false,
});

function RenderOnView({
  stepIndex,
  eagerThrough,
  scrollTargetRef,
  children,
  minHeight = 280,
  active = true,
  onVisible,
  scrollAnchorId,
}: {
  stepIndex: number;
  eagerThrough: number;
  scrollTargetRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  minHeight?: number;
  active?: boolean;
  onVisible?: () => void;
  scrollAnchorId?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);

  const setWrapperRef = useCallback(
    (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (scrollTargetRef) {
        scrollTargetRef.current = node;
      }
    },
    [scrollTargetRef],
  );

  const mounted = isVisible || (eagerThrough > 0 && stepIndex <= eagerThrough);

  useEffect(() => {
    if (!active || isVisible) return;
    if (eagerThrough > 0 && stepIndex <= eagerThrough) return;

    const node = localRef.current;
    if (!node) return;

    const markVisible = () => {
      setIsVisible(true);
      onVisible?.();
    };

    const rect = node.getBoundingClientRect();
    const alreadyInView =
      rect.top < window.innerHeight + 200 && rect.bottom > -200;
    if (alreadyInView) {
      markVisible();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markVisible();
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [active, isVisible, eagerThrough, stepIndex, onVisible]);

  return (
    <div ref={setWrapperRef} id={scrollAnchorId}>
      {mounted ? children : <div style={{ minHeight }} />}
    </div>
  );
}

export default function SplashClientContent() {
  const nav = useSplashSectionNav();
  if (!nav) return null;

  const {
    deepestEagerStep,
    unlockNext,
    demoSectionRef,
    featureListSectionRef,
    adminDashboardSectionRef,
  } = nav;

  return (
    <>
      <RenderOnView
        stepIndex={1}
        eagerThrough={deepestEagerStep}
        scrollTargetRef={demoSectionRef}
        minHeight={800}
        onVisible={() => unlockNext(1)}
        scrollAnchorId="rbt-demo-presentation-section"
      >
        <Demos />
      </RenderOnView>

      <RenderOnView
        stepIndex={2}
        eagerThrough={deepestEagerStep}
        minHeight={700}
        onVisible={() => unlockNext(2)}
      >
        <HeaderVariations />
      </RenderOnView>

      <RenderOnView
        stepIndex={3}
        eagerThrough={deepestEagerStep}
        minHeight={700}
        onVisible={() => unlockNext(3)}
      >
        <FooterVariations />
      </RenderOnView>

      <RenderOnView
        stepIndex={4}
        eagerThrough={deepestEagerStep}
        minHeight={680}
        onVisible={() => unlockNext(4)}
      >
        <div className="rbt-bg-color-black">
          <InnerPages />
        </div>
      </RenderOnView>

      <RenderOnView
        stepIndex={5}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(5)}
      >
        <CartOptionArea />
      </RenderOnView>

      <RenderOnView
        stepIndex={6}
        eagerThrough={deepestEagerStep}
        minHeight={700}
        onVisible={() => unlockNext(6)}
      >
        <Blocs />
      </RenderOnView>

      <RenderOnView
        stepIndex={7}
        eagerThrough={deepestEagerStep}
        minHeight={560}
        onVisible={() => unlockNext(7)}
      >
        <div className="rbt-splash-dark-bg">
          <MobileViewArea />
        </div>
      </RenderOnView>

      <RenderOnView
        stepIndex={8}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(8)}
      >
        <Flexibility />
      </RenderOnView>

      <RenderOnView
        stepIndex={9}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(9)}
      >
        <MobileResponsive />
      </RenderOnView>

      <RenderOnView
        stepIndex={10}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(10)}
      >
        <SpeedPerformance />
      </RenderOnView>


      

      <RenderOnView
        stepIndex={11}
        eagerThrough={deepestEagerStep}
        scrollTargetRef={adminDashboardSectionRef}
        minHeight={620}
        onVisible={() => unlockNext(11)}
        scrollAnchorId="admin-dashboard"
      >
        <AdminDashboard />
      </RenderOnView>

      <RenderOnView
        stepIndex={12}
        eagerThrough={deepestEagerStep}
        minHeight={480}
        onVisible={() => unlockNext(12)}
      >
        <Costing />
      </RenderOnView>

      <RenderOnView
        stepIndex={13}
        eagerThrough={deepestEagerStep}
        minHeight={760}
        onVisible={() => unlockNext(13)}
      >
        <div className="rbt-splash-dark-bg position-relative">
          <Features2 />

          <FeaturesSlider />
        </div>
      </RenderOnView>

      <RenderOnView
        stepIndex={14}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(14)}
      >
        <Testimonials />
      </RenderOnView>

      <RenderOnView
        stepIndex={15}
        eagerThrough={deepestEagerStep}
        minHeight={520}
        onVisible={() => unlockNext(15)}
      >
        <Faqs />
      </RenderOnView>

      <RenderOnView
        stepIndex={16}
        eagerThrough={deepestEagerStep}
        scrollTargetRef={featureListSectionRef}
        minHeight={520}
        onVisible={() => unlockNext(16)}
        scrollAnchorId="rbt-feature-list-section"
      >
        <Variations />
      </RenderOnView>

      <RenderOnView
        stepIndex={17}
        eagerThrough={deepestEagerStep}
        minHeight={420}
        onVisible={() => unlockNext(17)}
      >
        <Cta />
      </RenderOnView>

      <RenderOnView
        stepIndex={18}
        eagerThrough={deepestEagerStep}
        minHeight={220}
        onVisible={() => unlockNext(18)}
      >
        <MarqueeSection />
      </RenderOnView>

      <RenderOnView
        stepIndex={19}
        eagerThrough={deepestEagerStep}
        minHeight={420}
        onVisible={() => unlockNext(19)}
      >
        <Support />
      </RenderOnView>
    </>
  );
}
