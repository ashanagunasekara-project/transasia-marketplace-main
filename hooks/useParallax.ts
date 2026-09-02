'use client';

import { useEffect, useRef } from 'react';

interface ParallaxConfig {
  x?: number;
  y?: number;
  z?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  scaleX?: number;
  scaleY?: number;
  scaleZ?: number;
  scale?: number;
  'from-scroll'?: number;
  'to-scroll'?: number;
  distance?: number;
  duration?: number;
  'duration-return'?: number;
  easing?: string;
  'easing-return'?: string;
  smoothness?: number;
  perspective?: number;
}

const PROPERTIES = ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'] as const;
const ROUND = 1000;

const toNumber = (value: unknown, fallback = 0) => {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return value;
  }
  const parsed = Number(value ?? fallback);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export function useParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestAnimationFrameId = useRef<number | null>(null);
  const elementDataCache = useRef<Map<Element, any>>(new Map());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const applyParallaxEffect = () => {
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;

      const parallaxElements = container.querySelectorAll('[data-parallax]');

      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        
        // Get or cache the original style
        let cache = elementDataCache.current.get(el);
        if (!cache) {
          cache = {
            originalStyle: element.getAttribute('style') || '',
            elementData: new Map(),
          };
          elementDataCache.current.set(el, cache);
        }

        const { originalStyle, elementData } = cache;
        let properties: Partial<Record<typeof PROPERTIES[number], number>> = {};
        let applyProperties = false;

        // Parse data-parallax attributes
        const dataAttributes: ParallaxConfig[] = [];
        
        // Get the main data-parallax
        const parallaxAttr = element.getAttribute('data-parallax');
        if (parallaxAttr) {
          try {
            dataAttributes.push(JSON.parse(parallaxAttr));
          } catch (e) {
            console.warn('Failed to parse data-parallax:', parallaxAttr);
          }
        }

        // Get any additional data-parallax[N] attributes
        for (let i = 2; ; i++) {
          const attr = element.getAttribute(`data-parallax${i}`);
          if (!attr) break;
          try {
            dataAttributes.push(JSON.parse(attr));
          } catch (e) {
            console.warn(`Failed to parse data-parallax${i}:`, attr);
          }
        }

        // Process each parallax data config
        dataAttributes.forEach((data) => {
          let scrollFrom = data['from-scroll'];
          if (scrollFrom === undefined) {
            scrollFrom = Math.max(0, element.getBoundingClientRect().top + scroll - windowHeight);
          }
          scrollFrom = Math.floor(scrollFrom);

          let scrollDistance = data['distance'];
          let scrollTo = data['to-scroll'];

          if (scrollDistance === undefined && scrollTo === undefined) {
            scrollDistance = windowHeight;
          }

          if (scrollDistance !== undefined) {
            scrollDistance = Math.max(Math.floor(scrollDistance), 1);
          }

          if (scrollTo === undefined && scrollDistance !== undefined) {
            scrollTo = scrollFrom + scrollDistance;
          }
          scrollTo = Math.floor(scrollTo || 0);

          const smoothness = Math.floor(data['smoothness'] ?? 30) || 1;

          let scrollCurrent = scroll;
          scrollCurrent = Math.max(scrollCurrent, scrollFrom);
          scrollCurrent = Math.min(scrollCurrent, scrollTo);

          // Calculate progress between scrollFrom and scrollTo
          const progress =
            scrollTo > scrollFrom
              ? (scrollCurrent - scrollFrom) / (scrollTo - scrollFrom)
              : 0;

          PROPERTIES.forEach((prop) => {
            const toRaw = data[prop as keyof ParallaxConfig];
            if (toRaw === undefined) return;
            let to = toNumber(toRaw);

            let defaultProp = 0;
            if (prop === 'scale' || prop === 'scaleX' || prop === 'scaleY' || prop === 'scaleZ') {
              defaultProp = 1;
            }

            let prev = elementData.get(`_${prop}`) ?? defaultProp;
            const next = (to - defaultProp) * progress + defaultProp;
            let val = prev + (next - prev) / smoothness;

            val = Math.ceil(val * ROUND) / ROUND;
            if (val === prev && next === to) {
              val = to;
            }

            if (!properties[prop]) {
              properties[prop] = 0;
            }
            properties[prop]! += val;

            if (prev !== properties[prop]) {
              elementData.set(`_${prop}`, properties[prop]);
              applyProperties = true;
            }
          });
        });

        if (applyProperties) {
          // Ensure scale values exist
          if (properties.scaleX === undefined) properties.scaleX = 1;
          if (properties.scaleY === undefined) properties.scaleY = 1;
          if (properties.scaleZ === undefined) properties.scaleZ = 1;

          // Apply scale multiplier if scale is defined
          if (properties.scale !== undefined) {
            properties.scaleX = (properties.scaleX || 1) * properties.scale;
            properties.scaleY = (properties.scaleY || 1) * properties.scale;
            properties.scaleZ = (properties.scaleZ || 1) * properties.scale;
          }

          const translate3d = `translate3d(${properties.x || 0}px, ${properties.y || 0}px, ${properties.z || 0}px)`;
          const rotate3d = `rotateX(${properties.rotateX || 0}deg) rotateY(${properties.rotateY || 0}deg) rotateZ(${properties.rotateZ || 0}deg)`;
          const scale3d = `scaleX(${properties.scaleX}) scaleY(${properties.scaleY}) scaleZ(${properties.scaleZ})`;
          const cssTransform = `${translate3d} ${rotate3d} ${scale3d}`;

          element.setAttribute(
            'style',
            `transform: ${cssTransform}; -webkit-transform: ${cssTransform}; ${originalStyle}`
          );
        }
      });

      if (window.requestAnimationFrame) {
        requestAnimationFrameId.current = window.requestAnimationFrame(applyParallaxEffect);
      }
    };

    // Initial application
    applyParallaxEffect();

    return () => {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, []);

  return containerRef;
}
