"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { showcaseProjects } from "@/data/showcaseProjects"

const filters = ["All", "Client Project", "Utility"]

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? showcaseProjects
      : showcaseProjects.filter((project) => project.category === activeFilter)

  return (
    <section className="w-full">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Projects
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-6 text-slate-400">
            A selection of web projects built for clients, experiments, and practical use.
          </p>
        </div>

        <div className="flex w-fit items-center gap-1 rounded-xl border border-white/5 bg-white/[0.025] p-1 backdrop-blur-md">
          {filters.map((filter) => {
            const active = activeFilter === filter

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative rounded-lg px-3 py-2 text-[10px] font-medium transition-colors duration-300"
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-active"
                    className="absolute inset-0 rounded-lg bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 ${
                    active ? "text-black" : "text-slate-400"
                  }`}
                >
                  {filter}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] transition-colors duration-300 hover:border-cyan-400/20"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md">
                  {project.category}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-slate-500 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1 text-[9px] text-slate-500"
                    >
                      {technology}
                    </span>
                  ))}

                  <span className="ml-auto text-[9px] text-slate-600">
                    {project.platform}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}