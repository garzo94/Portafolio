import { Variants } from "framer-motion";

export const sectionName: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 3.5,
      },
    },
  };