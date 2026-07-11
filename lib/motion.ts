import type { Variants } from "motion/react";

export const motionTokens = {
  duration: { fast: 0.18, normal: 0.35, reveal: 0.55, ambient: 8 },
  easing: { standard: [0.16, 1, 0.3, 1] as const },
  distance: { reveal: 24, hover: 4 },
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
