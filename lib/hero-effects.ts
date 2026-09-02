export type HeroEffectName = "zoomOut" | "fadeInDown" | "fadeInUp" | "zoomIn";

const HERO_EFFECT_CLASS_MAP: Record<HeroEffectName, string> = {
  zoomOut: "effect_zoomout",
  fadeInDown: "effect_fadeindown",
  fadeInUp: "effect_fadeinup",
  zoomIn: "effect_zoomin",
};

export function getHeroEffectClass(effectName?: HeroEffectName): string {
  if (!effectName) {
    return "";
  }

  return HERO_EFFECT_CLASS_MAP[effectName] ?? "";
}
