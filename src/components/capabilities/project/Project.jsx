"use client"

import { motion } from "framer-motion"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"

export default function Project({ projects = [] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -3,
            transition: {
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.018] shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:bg-white/[0.03]"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index < 2 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

            <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-white sm:text-base">
              {project.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500">
              {project.description}
            </p>

            <div className="mt-4 flex items-end justify-between gap-3">
              <div className="flex min-w-0 flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1 text-[9px] text-slate-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group/visit inline-flex shrink-0 items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-[10px] font-medium text-white transition-all duration-300 hover:bg-indigo-400"
              >
                <span>Kunjungi</span>

                <SquareArrowOutUpRight
                  size={13}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}