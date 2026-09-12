"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

const icons = [Code2, User, Globe];
const lineTwo = ["PORTOFOLIO", "WEBSITE"];

const LOADING_START_DELAY = 2200;
const LOADING_DURATION = 1500;
const PROGRESS_TICK = 50;

const easeOut = [0.16, 1, 0.3, 1];

const iconContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const iconItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

const welcomeToVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: easeOut,
    },
  },
};

const myVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: easeOut,
    },
  },
};

const lineTwoContainerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.8,
      staggerChildren: 0.35,
    },
  },
};

const lineTwoItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [barStarted, setBarStarted] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    let tickInterval;
    let completeTimeout;

    const startTimeout = setTimeout(() => {
      const startTime = Date.now();
      setBarStarted(true);

      tickInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        const percentage = Math.min(
          Math.round((elapsed / LOADING_DURATION) * 100),
          100
        );

        setProgress(percentage);

        if (percentage >= 100 && !completedRef.current) {
          completedRef.current = true;
          clearInterval(tickInterval);

          completeTimeout = setTimeout(() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("intro:complete"));
            }

            if (typeof onComplete === "function") {
              onComplete();
            }
          }, 150);
        }
      }, PROGRESS_TICK);
    }, LOADING_START_DELAY);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(completeTimeout);
      clearInterval(tickInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] font-sans text-white"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <motion.div
        variants={iconContainerVariants}
        initial="hidden"
        animate="show"
        className="mb-8 flex items-center gap-4"
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            variants={iconItemVariants}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80"
          >
            <Icon size={15} strokeWidth={1.75} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <motion.span
            variants={welcomeToVariants}
            initial="hidden"
            animate="show"
            className="text-xl font-semibold tracking-wide sm:text-3xl"
          >
            WELCOME TO
          </motion.span>

          <motion.span
            variants={myVariants}
            initial="hidden"
            animate="show"
            className="text-xl font-semibold tracking-wide sm:text-3xl"
          >
            MY
          </motion.span>
        </div>

        <motion.div
          variants={lineTwoContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {lineTwo.map((word, index) => (
            <motion.span
              key={word + index}
              variants={lineTwoItemVariants}
              className="text-xl font-semibold tracking-wide sm:text-3xl"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.2,
          duration: 0.8,
          ease: easeOut,
        }}
        className="mt-8 w-[280px] sm:w-[380px]"
      >
        <div className="mb-2 flex items-center justify-between font-sans text-xs tracking-wide text-white/60">
          <span>Loading.....</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/10">
          <motion.div
            className="h-full rounded-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: barStarted ? "100%" : "0%" }}
            transition={{
              duration: LOADING_DURATION / 1000,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
