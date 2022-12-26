import { Variants } from "framer-motion";

export const sectionName: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 2.8,
      },
    },
  };