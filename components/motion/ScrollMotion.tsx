"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        opacity: 0,
        scale: 0.92,
        rotate: 2,
        duration: 1.15,
        ease: "expo.out",
      });

      gsap.utils.toArray<HTMLElement>(".section-heading, .full-menu-heading, .story-copy, .order-inner").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
          opacity: 0,
          y: 42,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".menu-row, .menu-group, .story-values > div").forEach((element, index) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          opacity: 0,
          y: 24,
          duration: 0.62,
          delay: (index % 4) * 0.045,
          ease: "power2.out",
        });
      });

      gsap.to(".hero-scene", {
        yPercent: 12,
        scale: 0.96,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
      });

      gsap.to(".story-image", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
