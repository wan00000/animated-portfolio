import type { Variants } from "motion/react";

export const motionTokens = {
  duration: {
    fast: 0.18,
    normal: 0.35,
    reveal: 0.55,
    heroReveal: 0.72,
    ambient: 8,
  },
  delay: {
    heroStatus: 0.12,
    heroName: 0.24,
    heroRole: 0.38,
    heroDescription: 0.5,
    heroActions: 0.62,
    heroMap: 0.3,
  },
  easing: { standard: [0.16, 1, 0.3, 1] as const },
  distance: { reveal: 24, heroReveal: 36, hover: 4 },
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.reveal },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.easing.standard,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distance.heroReveal,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.heroReveal,
      ease: motionTokens.easing.standard,
    },
  },
};

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: motionTokens.delay.heroStatus,
    },
  },
};
