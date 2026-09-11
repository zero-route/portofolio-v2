"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Network,
  ShieldCheck,
} from "lucide-react"
import { toolCategories } from "@/data/tools"

const categoryIcons = {
  software: Code2,
  cybersecurity: ShieldCheck,
  networking: Network,
  hardware: Cpu,
}

const accentStyles = {
  indigo: {
    text: "text-indigo-400",
    dot: "bg-indigo-400",
    line: "from-transparent via-indigo-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_35px_rgba(99,102,241,0.08)]",
    hover: "group-hover:text-indigo-300",
  },
  red: {
    text: "text-red-400",
    dot: "bg-red-400",
    line: "from-transparent via-red-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_35px_rgba(248,113,113,0.08)]",
    hover: "group-hover:text-red-300",
  },
  cyan: {
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    line: "from-transparent via-cyan-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]",
    hover: "group-hover:text-cyan-300",
  },
  amber: {
    text: "text-amber-400",
    dot: "bg-amber-400",
    line: "from-transparent via-amber-400/60 to-transparent",
    glow: "group-hover:shadow-[0_0_35px_rgba(251,191,36,0.08)]",
    hover: "group-hover:text-amber-300",
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: index * 0.035,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState(toolCategories[0].id)

  const activeData =
    toolCategories.find((category) => category.id === activeCategory) ??
    toolCategories[0]

  const CategoryIcon = categoryIcons[activeData.id]
  const accent = accentStyles[activeData.accent]

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex justify-center"
      >
        <div className="w-full overflow-x-auto pb-1 scrollbar-none">
          <div className="mx-auto flex w-max items-center rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 backdrop-blur-xl">
            {toolCategories.map((category) => {
              const active = activeCategory === category.id

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className="relative min-w-[120px] rounded-xl px-4 py-3 text-[11px] font-medium transition-colors duration-300 sm:min-w-[150px] sm:px-5 sm:py-3.5 sm:text-sm"
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
                    className={`relative z-10 whitespace-nowrap ${
                      active ? "text-black" : "text-white/50"
                    }`}
                  >
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        key={activeData.id}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-12 sm:mt-14"
      >
        <div className="mb-7 flex items-start gap-4 sm:mb-9">
          <div
            className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] ${accent.text}`}
          >
            <CategoryIcon size={21} strokeWidth={1.7} />
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
              {activeData.label}
            </h3>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
              {activeData.description}
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeData.tools.map((tool, index) => (
            <motion.article
              key={tool.name}
              custom={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.018] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.03] ${accent.glow}`}
            >
              <div
                className={`pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accent.line}`}
              />

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h4
                    className={`text-sm font-semibold text-white transition-colors duration-300 ${accent.hover}`}
                  >
                    {tool.name}
                  </h4>

                  <p className="mt-2 text-[11px] leading-5 text-white/40">
                    {tool.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className={`mt-0.5 shrink-0 text-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${accent.hover}`}
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`h-1 w-1 rounded-full opacity-50 transition-opacity duration-300 group-hover:opacity-100 ${accent.dot}`}
                />

                <span className="text-[9px] uppercase tracking-[0.16em] text-white/20">
                  Tool
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}