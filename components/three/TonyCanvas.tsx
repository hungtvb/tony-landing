"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TonyScene = dynamic(() => import("./TonyScene"), {
  ssr: false,
  loading: () => <div className="three-loading" aria-hidden="true" />,
});

export default function TonyCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(max-width: 520px) and (pointer: coarse)");
    const update = () => setEnabled(!reduced.matches && !coarse.matches);
    update();
    reduced.addEventListener("change", update);
    coarse.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;
  return <TonyScene />;
}
