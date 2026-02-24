import { useEffect, useRef } from "react";

export function useScrollReveal(staggerDelay = 0.12) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = Array.from(children).indexOf(el);
            el.style.transitionDelay = `${index * staggerDelay}s`;
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [staggerDelay]);

  return containerRef;
}
