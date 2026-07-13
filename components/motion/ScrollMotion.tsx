"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      gsap.to(".scroll-progress span", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
      if (reduced) return;

      gsap.from(".hero-line i", { yPercent: 110, rotate: 3, duration: 1.05, stagger: 0.1, ease: "expo.out" });
      gsap.from(".reveal-line, .hero-stats, .scroll-cue", { opacity: 0, y: 22, duration: 0.75, stagger: 0.09, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-stage", { opacity: 0, scale: 0.82, rotate: 4, duration: 1.35, delay: 0.08, ease: "expo.out" });
      gsap.to(".hero-stage", { yPercent: 13, scale: 0.94, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 } });
      gsap.to(".orb-a", { xPercent: 35, yPercent: 45, ease: "none", scrollTrigger: { trigger: ".hero", scrub: 1.2 } });
      gsap.to(".orb-b", { xPercent: -30, yPercent: -25, ease: "none", scrollTrigger: { trigger: ".hero", scrub: 1.2 } });

      gsap.from(".signature-intro > *", { opacity: 0, y: 32, stagger: 0.1, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: ".signature-intro", start: "top 78%" } });
      gsap.utils.toArray<HTMLElement>(".drink-card").forEach((card, index) => {
        gsap.from(card, { opacity: 0, x: index % 2 ? 60 : -45, rotate: index % 2 ? 3 : -3, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%" } });
      });

      gsap.from(".mood-heading > *", { opacity: 0, y: 36, stagger: 0.11, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: ".mood-heading", start: "top 80%" } });
      gsap.utils.toArray<HTMLElement>(".menu-group").forEach((card, index) => {
        gsap.from(card, { opacity: 0, y: 80 + index * 18, rotate: (index - 1) * 2, duration: 0.95, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 90%" } });
      });

      gsap.from(".story-frame", { clipPath: "inset(18% 12% 18% 12% round 42px)", scale: 0.88, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".story", start: "top 75%" } });
      gsap.to(".story-frame img", { yPercent: 9, scale: 1.08, ease: "none", scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: 0.9 } });
      gsap.utils.toArray<HTMLElement>("[data-story-step]").forEach((step) => {
        ScrollTrigger.create({ trigger: step, start: "top 58%", end: "bottom 45%", toggleClass: "is-active" });
      });

      gsap.from(".order-inner > *:not(.order-grid):not(.order-bubble)", { opacity: 0, y: 36, stagger: 0.09, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".order-inner", start: "top 76%" } });
      gsap.to(".bubble-one", { yPercent: -45, xPercent: 20, ease: "none", scrollTrigger: { trigger: ".order", scrub: 0.8 } });
      gsap.to(".bubble-two", { yPercent: 35, xPercent: -20, ease: "none", scrollTrigger: { trigger: ".order", scrub: 0.8 } });
    });

    if (finePointer && !reduced) {
      const aura = document.querySelector<HTMLElement>(".pointer-aura");
      const moveAura = (event: PointerEvent) => gsap.to(aura, { x: event.clientX, y: event.clientY, duration: 0.5, ease: "power3.out", overwrite: true });
      window.addEventListener("pointermove", moveAura, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", moveAura));

      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const xTo = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          xTo(((event.clientX - rect.left) / rect.width - 0.5) * 8);
          yTo(((event.clientY - rect.top) / rect.height - 0.5) * -8);
          card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
          card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        };
        const leave = () => { xTo(0); yTo(0); };
        card.addEventListener("pointermove", move); card.addEventListener("pointerleave", leave);
        cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); });
      });

      document.querySelectorAll<HTMLElement>(".magnetic").forEach((item) => {
        const xTo = gsap.quickTo(item, "x", { duration: 0.45, ease: "elastic.out(1, .45)" });
        const yTo = gsap.quickTo(item, "y", { duration: 0.45, ease: "elastic.out(1, .45)" });
        const move = (event: PointerEvent) => { const rect = item.getBoundingClientRect(); xTo((event.clientX - rect.left - rect.width / 2) * 0.15); yTo((event.clientY - rect.top - rect.height / 2) * 0.15); };
        const leave = () => { xTo(0); yTo(0); };
        item.addEventListener("pointermove", move); item.addEventListener("pointerleave", leave);
        cleanups.push(() => { item.removeEventListener("pointermove", move); item.removeEventListener("pointerleave", leave); });
      });

      document.querySelectorAll<HTMLElement>(".spotlight").forEach((item) => {
        const move = (event: PointerEvent) => { const rect = item.getBoundingClientRect(); item.style.setProperty("--spot-x", `${event.clientX - rect.left}px`); item.style.setProperty("--spot-y", `${event.clientY - rect.top}px`); };
        item.addEventListener("pointermove", move); cleanups.push(() => item.removeEventListener("pointermove", move));
      });
    }

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    return () => { context.revert(); cleanups.forEach((cleanup) => cleanup()); window.removeEventListener("load", refresh); };
  }, []);

  return null;
}
