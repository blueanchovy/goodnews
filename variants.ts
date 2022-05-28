import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

export const phoneWrapper: Variants = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,
    transition: {
      delay: 2.6,
      duration: 0.8,
      type: "spring",
    },
  },
};

export const phone: Variants = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const categoryContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

export const categoryWrapper: Variants = {
  initial: {
    y: -800,
  },
  animate: {
    y: 0,
    transition: {
      delay: 3,
      duration: 6,
      type: "spring",
    },
  },
};

export const category: Variants = {
  initial: {},
  animate: (i: number) => ({
    x: [10, 0, 10],
    transition: {
      delay: 2,
      duration: 3 * i,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};
