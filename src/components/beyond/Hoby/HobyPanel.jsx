"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/data/hobbies";

const ROTATIONS = [-6, 4, -3, 7, -8, 2, 5, -4, 6, -2, 3, -7];

function Polaroid({ photo, index }) {
  const baseRotate = ROTATIONS[index % ROTATIONS.length];

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
      whileHover={{ rotate: 0, scale: 1.06, y: -8 }}
      className="w-[150px] cursor-pointer select-none bg-white p-2 pb-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:w-[180px]"
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="aspect-square w-full overflow-hidden bg-black/5">
        <img
          src={photo.src}
          alt={photo.caption || "Hobby photo"}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.opacity = "0";
          }}
        />
      </div>

      {photo.caption && (
        <p className="mt-2 text-center font-sans text-[11px] text-black/60">
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
