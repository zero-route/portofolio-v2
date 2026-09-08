"use client";

import { motion } from "framer-motion";
import { X, ImageOff } from "lucide-react";

function ComplexityDots({ level = 0, max = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < level ? "bg-indigo-400" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14] font-sans text-white"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-black/70"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="flex aspect-video w-full items-center justify-center bg-white/[0.03]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className="hidden h-full w-full items-center justify-center text-white/25"
            style={{ display: project.image ? "none" : "flex" }}
          >
            <ImageOff size={32} />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <p className="text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <span className="text-xs font-medium text-white/50">
              Kerumitan
            </span>
            <ComplexityDots level={project.complexity} />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <span className="text-xs font-medium text-white/50">Dampak</span>
            <p className="mt-1 text-sm text-white/75">{project.impact}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
