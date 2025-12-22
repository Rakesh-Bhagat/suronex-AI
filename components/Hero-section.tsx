"use client";

import { motion } from "motion/react";

const slow = {
  easing: "ease-in-out",
  direction: "alternate" as const,
  iterations: Infinity,
};

export default function HeroBackground() {
  return (
    <section className="hero">
      <motion.div
        className="orb blue"
        animate={{ x: 120, y: 80, rotate: 12 }}
        transition={{ ...slow, duration: 30 }}
      />

      <motion.div
        className="orb pink"
        animate={{ x: -140, y: -90, rotate: -18 }}
        transition={{ ...slow, duration: 34 }}
      />

      <motion.div
        className="orb cyan"
        animate={{ x: 80, y: -120, scale: 1.15 }}
        transition={{ ...slow, duration: 38 }}
      />

      <div className="hero-content">
        <h1>Animated Hero</h1>
        <p>Optimised Motion One gradient</p>
      </div>
    </section>
  );
}
