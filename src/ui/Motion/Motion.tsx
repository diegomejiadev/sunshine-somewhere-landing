"use client";

import { cn } from "@/utils/cn";
import { HTMLMotionProps, useReducedMotion, motion } from "framer-motion";
import { FC, createContext, useContext } from "react";
import { isMobile } from "react-device-detect";

const FadeInStaggerContext = createContext(false);

const viewport = {
  once: true,
  margin: isMobile ? "0px 0px -100px" : "0px 0px -300px",
};

interface FadeProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right" | "bottom" | "top";
}

export const Fade = ({
  children,
  direction = "top",
  viewport: viewportProps,
  transition: transitionProps,
  ...props
}: FadeProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  let directionHidden = {};
  let direcionVisible = {};

  switch (direction) {
    case "top":
      directionHidden = { y: shouldReduceMotion ? 0 : 24 };
      direcionVisible = { y: 0 };
      break;

    case "bottom":
      directionHidden = { y: shouldReduceMotion ? 0 : -24 };
      direcionVisible = { y: 0 };
      break;

    case "left":
      directionHidden = { x: shouldReduceMotion ? 0 : 24 };
      direcionVisible = { x: 0 };
      break;

    case "right":
      directionHidden = { x: shouldReduceMotion ? 0 : -24 };
      direcionVisible = { x: 0 };
      break;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionHidden },
        visible: { opacity: 1, ...direcionVisible },
      }}
      transition={{ duration: 0.3, ...transitionProps }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: { ...viewport, ...viewportProps },
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface MotionStaggerProps extends HTMLMotionProps<"div"> {
  faster?: boolean;
  delayNumber?: number;
}

export const MotionStagger: FC<MotionStaggerProps> = ({
  faster = false,
  delayNumber = 0,
  children,
  className,
  viewport: viewportProps,
  transition,
  ...props
}) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewport, ...viewportProps }}
        transition={{
          staggerChildren: faster ? 0.2 : 0.3,
          delayChildren: delayNumber,
          ...transition,
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};
