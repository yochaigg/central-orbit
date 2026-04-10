"use client";

import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ssr" | "hidden" | "visible">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount, show immediately (no animation)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      setState("visible");
      return;
    }

    // Otherwise, hide and animate on scroll
    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: "80px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(24px)",
    right: "translateX(-24px)",
    none: "none",
  }[direction];

  let style: CSSProperties;
  if (state === "ssr" || state === "visible") {
    // SSR or already visible: show content, no transition flash
    style = {};
  } else {
    // hidden: waiting for scroll
    style = {
      opacity: 0,
      transform: translate,
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    };
  }

  // When transitioning from hidden to visible, we need the transition property
  if (state === "visible") {
    style = {
      opacity: 1,
      transform: "none",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    };
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
