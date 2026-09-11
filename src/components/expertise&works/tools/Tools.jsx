"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ShieldHalf, Network, Cpu } from "lucide-react";
import { toolCategories } from "@/data/tools";

const ICONS = { Code2, ShieldHalf, Network, Cpu };

const COLOR_STYLES = {
  indigo: {
    dot: "bg-indigo-400",
    border: "hover:border-indigo-400/40",
    icon: "text-indigo-300",
  },
  rose: {
    dot: "bg-rose-400",
    border: "hover:border-rose-400/40",
    icon: "text-rose-300",
  },
  sky: {
    dot: "bg-sky-400",
    border: "hover:border-sky-400/40",
    icon: "text-sky-300",
  },
  emerald: {
    dot: "bg-emerald-400",
    border: "hover:border-emerald-400/40",
    icon: "text-emerald-300",
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Tools() {
  const [activeId, setActiveId] = useState(toolCategories[0].id);
  const activeCategory = toolCategories.find((c) => c.id === activeId);
  const CategoryIcon = ICONS[activeCategory.icon] || Code2;
  const colors = COLOR_STYLES[activeCategory.color];

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {toolCategories.map((category) => {
          const active = category.id === activeId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className="relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              {active && (
                <motion.span
                  layoutId="tools-active-tab"
                  className="absolute inset-0 rounded-xl bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                    mass: 0.7,
                  }}
                />
              )}

              <span
                className={`relative z-10 ${
                  active ? "text-black" : "text-white/55"
                }`}
              >
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-6 mt-10 flex items-center justify-center gap-2">
        <CategoryIcon size={18} className={colors.icon} />
        <span className="text-sm font-medium text-white/70">
          {activeCategory.label}
        </span>
      </div>

      <motion.div
        key={activeId}
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {activeCategory.items.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            className={`group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05] ${colors.border}`}
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125 ${colors.dot}`}
            />
            <div>
              <p className="font-sans text-sm font-semibold text-white">
                {item.name}
              </p>
              <p className="font-sans text-xs text-white/50">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
