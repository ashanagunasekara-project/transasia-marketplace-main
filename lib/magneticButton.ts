export const DEFAULT_STRENGTH = 80;
export const DEFAULT_SCALE = 1.09;
export const DEFAULT_SCALE_REST = 1;

export interface MagneticOffset {
  x: number;
  y: number;
}

export function getMagneticOffset(
  clientX: number,
  clientY: number,
  rect: DOMRect,
  strength: number = DEFAULT_STRENGTH
): MagneticOffset {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const maxDistance = Math.min(strength, distance);
  const angle = Math.atan2(deltaY, deltaX);
  return {
    x: maxDistance * Math.cos(angle),
    y: maxDistance * Math.sin(angle),
  };
}

export function getMagneticTransform(
  offset: MagneticOffset,
  scale: number = DEFAULT_SCALE
): string {
  return `translate(${offset.x}px, ${offset.y}px) scale(${scale})`;
}

export function getMagneticRestTransform(
  scale: number = DEFAULT_SCALE_REST
): string {
  return `translate(0, 0) scale(${scale})`;
}

export const MAGNETIC_TRANSITION = "transform 0.3s ease-out";
