"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { hobbies } from "@/data/hobbies";

const ROTATIONS = [-6, 4, -3, 7, -8, 2, 5, -4, 6, -2, 3, -7];

function Polaroid({ photo, index }) {
  const baseRotate = ROTATIONS[index % ROTATIONS.length];
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const revealed = hovered || pinned;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: baseRotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ rotate: 0, y: -8 }}
      className="w-[150px] select-none bg-white p-2 pb-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:w-[180px]"
      style={{ transformOrigin: "center bottom" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPinned((p) => !p)}
        className="relative aspect-square w-full cursor-pointer overflow-hidden bg-black/5"
      >
        <img
          src={photo.src}
          alt={photo.caption || "Hobby photo"}
          className="h-full w-full object-cover transition-all duration-300 ease-out"
          style={{
            filter: revealed ? "blur(0px)" : "blur(12px)",
            transform: revealed ? "scale(1.08)" : "scale(1)",
          }}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.opacity = "0";
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: revealed ? 0 : 1 }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
            <Eye size={16} />
          </span>
        </div>
      </div>

      {photo.caption && (
        <p className="mt-2 text-center font-arial text-[18px] text-black/60">
          {photo.caption}
        </p>
      )}
    </motion.div>
  );
}

export default function HobyPanel() {
  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-x-6 gap-y-10 px-2">
      {hobbies.map((photo, index) => (
        <Polaroid key={photo.id} photo={photo} index={index} />
      ))}
    </div>
  );
}
