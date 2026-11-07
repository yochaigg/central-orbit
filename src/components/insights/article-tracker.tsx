"use client";

import { useEffect } from "react";

type UmamiWindow = Window & {
  umami?: { track: (event: string, data?: Record<string, string | number>) => void };
};

// Records one custom "article view" event with the slug and cluster so views can
// be segmented. The standard Umami pageview is recorded separately by the script.
export function ArticleViewTracker({ slug, cluster }: { slug: string; cluster: string }) {
  useEffect(() => {
    const w = window as UmamiWindow;
    const fire = () => {
      if (!w.umami) return false;
      w.umami.track("insights-article-view", { slug, cluster });
      return true;
    };
    if (fire()) return;
    let tries = 0;
    const id = window.setInterval(() => {
      tries += 1;
      if (fire() || tries >= 20) window.clearInterval(id);
    }, 500);
    return () => window.clearInterval(id);
  }, [slug, cluster]);
  return null;
}
