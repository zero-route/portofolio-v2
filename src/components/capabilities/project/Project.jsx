"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Project({ projects = [] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{
            opacity: 0,
            y: 28,
            scale: 0.97,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.65,
            delay: index * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -5,
            transition: {
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.018] shadow-[0_10px_35px_rgba(0,0,0,0.16)] transition-colors duration-500 hover:bg-white/[0.035]"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

            <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:text-base">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500">
                  {project.description}
                </p>
              </div>

              <motion.div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-slate-500"
                whileHover={{
                  rotate: 45,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ArrowUpRight size={14} />
              </motion.div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1 text-[9px] text-slate-500"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group/visit inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:bg-white hover:text-black"
              >
                Kunjungi

                <span className="flex h-4 w-4 items-center justify-center transition-transform duration-300 group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5">
                  <ArrowUpRight size={12} />
                </span>
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}