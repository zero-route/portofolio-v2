"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const hobbies = [
  {
    id: "hobby-1",
    title: "Hobby 1",
    image: "/images/Hobby1.jpg",
    position: "left",
    direction: -1,
  },
  {
    id: "hobby-2",
    title: "Hobby 2",
    image: "/images/Hobby2.jpg",
    position: "right",
    direction: 1,
  },
  {
    id: "hobby-3",
    title: "Hobby 3",
    image: "/images/Hobby3.jpg",
    position: "left",
    direction: -1,
  },
  {
    id: "hobby-4",
    title: "Hobby 4",
    image: "/images/Hobby4.jpg",
    position: "right",
    direction: 1,
  },
  {
    id: "hobby-5",
    title: "Hobby 5",
    image: "/images/Hobby5.jpg",
    position: "left",
    direction: -1,
  },
];

function HobbyImage({ hobby, index }) {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 22,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 22,
    mass: 0.6,
  });

  const imageX = useTransform(springX, [-1, 1], [-7, 7]);
  const imageY = useTransform(springY, [-1, 1], [-6, 6]);

  const handleMouseMove = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: hobby.direction * 55,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex w-full ${
        hobby.position === "left"
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.018,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative aspect-[9/16] w-[255px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:w-[285px] lg:w-[330px] xl:w-[350px]"
      >
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            x: imageX,
            y: imageY,
          }}
        >
          <motion.img
            src={hobby.image}
            alt={hobby.title}
            className="h-full w-full object-cover"
            initial={{
              scale: 1.05,
            }}
            whileInView={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.045,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/5 transition-all duration-700 group-hover:bg-black/25" />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-[55%] w-[38%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 blur-2xl"
          whileHover={{
            left: "125%",
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-5 top-5 sm:left-6 sm:top-6"
          initial={{
            opacity: 0,
            y: -8,
          }}
          whileHover={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="text-[9px] font-medium tracking-[0.3em] text-white/55">
            BEYOND
          </span>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileHover={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <span className="block text-sm font-medium tracking-wide text-white sm:text-base">
                {hobby.title}
              </span>

              <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-white/40">
                Personal Interest
              </span>
            </div>

            <span className="text-[10px] font-medium tracking-[0.2em] text-white/45">
              0{index + 1}
            </span>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/0 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_0_45px_rgba(255,255,255,0.08)]" />
      </motion.div>
    </motion.div>
  );
}

export default function HobyPanel() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-1 py-2 sm:gap-16 lg:gap-20">
      {hobbies.map((hobby, index) => (
        <HobbyImage
          key={hobby.id}
          hobby={hobby}
          index={index}
        />
      ))}
    </div>
  );
}