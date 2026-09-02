"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { capsuleTexts } from "@/data/splash";

export default function ThrowableCapsuleList() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engine = useRef(Matter.Engine.create());
  const capsuleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const capsuleBodies = useRef<(Matter.Body | null)[]>([]);
  const capsuleDims = useRef<{ w: number; h: number }[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const {
      Engine,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;
    const container = sceneRef.current;
    if (!container) return;
    const currentEngine = engine.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create thicker boundaries
    const wallThickness = 200;
    const walls = [
      Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, {
        isStatic: true,
      }), // top
      Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width,
        wallThickness,
        { isStatic: true }
      ), // bottom
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, {
        isStatic: true,
      }), // left
      Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        { isStatic: true }
      ), // right
    ];
    Composite.add(currentEngine.world, walls);

    // Create DOM-based physics bodies
    capsuleBodies.current = capsuleRefs.current.map((el, index) => {
      if (!el) return null;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      capsuleDims.current[index] = { w, h };
      const body = Bodies.rectangle(
        Math.random() * (width - w) + w / 2,
        Math.random() * (height - h) + h / 2,
        w,
        h,
        {
          restitution: 0.3,
          friction: 0.2,
          frictionAir: 0.05,
          density: 0.01,
        }
      );
      Composite.add(currentEngine.world, body);
      return body;
    });

    // Add MouseConstraint to DOM container
    const mouse = Mouse.create(container as HTMLElement);
    const mouseConstraint = MouseConstraint.create(currentEngine, {
      mouse,
      constraint: {
        stiffness: 0.05,
        render: { visible: false },
      },
    });
    Composite.add(currentEngine.world, mouseConstraint);

    // Limit velocity before each update
    Events.on(currentEngine, "beforeUpdate", () => {
      const maxVelocity = 10;
      capsuleBodies.current.forEach((body) => {
        if (!body) return;
        body.velocity.x = Math.max(
          -maxVelocity,
          Math.min(body.velocity.x, maxVelocity)
        );
        body.velocity.y = Math.max(
          -maxVelocity,
          Math.min(body.velocity.y, maxVelocity)
        );
      });
    });

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, currentEngine);

    // Sync DOM elements to physics bodies
    const update = () => {
      capsuleBodies.current.forEach((body, i) => {
        const el = capsuleRefs.current[i];
        const dim = capsuleDims.current[i];
        if (!body || !el || !dim) return;
        el.style.transform = `translate(${
          body.position.x - dim.w / 2
        }px, ${body.position.y - dim.h / 2}px) rotate(${body.angle}rad)`;
      });
      frameRef.current = requestAnimationFrame(update);
    };
    update();

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      Runner.stop(runner);
      Engine.clear(currentEngine);
      Composite.clear(currentEngine.world, false);
    };
  }, []);

  return (
    <div className="rbt-feature-capsule-list-wrapper">
      <div ref={sceneRef} className="rbt-feature-capsule-list">
        {capsuleTexts.map((text, index) => (
          <div
            key={index}
            ref={(el) => { capsuleRefs.current[index] = el; }}
            className={`rbt-capsule-item ${
              text === "24/7 Support" ? "rbt-capsule-highlight" : ""
            }`}
          >
            <span>
              {text.includes("Support") || text.includes("Team") ? (
                <>
                  <i className="fa-sharp fa-regular fa-headset" /> {text}
                </>
              ) : (
                text
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
