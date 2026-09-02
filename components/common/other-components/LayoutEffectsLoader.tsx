"use client";
// import dynamic from "next/dynamic";

// Loaded in its own JS chunk, never SSR'd — prevents hydration mismatches
// and keeps this code out of the critical path.
// const LayoutClientEffects = dynamic(
//   () => import("@/components/common/LayoutClientEffects"),
//   { ssr: false },
// );

export default function LayoutEffectsLoader() {
  return null;
  // return <LayoutClientEffects />;
}
