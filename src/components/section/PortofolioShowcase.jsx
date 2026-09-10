"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Project from "@/components/expertise&works/project/Project"
import Tools from "@/components/expertise&works/tools/Tools"
import { portfolioProjects } from "@/data/portofolioShowcase"

const sections = ["Projects", "Tools", "Skills"]

export default function PortofolioShowcase() {
  const [activeSection, setActiveSection] = useState("Projects")

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#030305] px-5 py-20 text-white sm:px-7 sm:py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pt-8 text-center sm:pt-10"
        >
          <h1 className="text-[3.2rem] font-bold tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[4.5rem]">
            Expertise & Works
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Things I build, use, and understand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <div className="flex items-center rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 backdrop-blur-xl">
            {sections.map((section) => {
              const active = activeSection === section

              return (
                <button
                  key={section}
                  type="button"
                  onClick={() => setActiveSection(section)}
                  className="relative min-w-[92px] rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-300 sm:min-w-[110px] sm:px-6 sm:py-3.5 sm:text-base"
                >
                  {active && (
                    <motion.span
                      layoutId="capabilities-active-tab"
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
                    {section}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-14">
          {activeSection === "Projects" && (
            <Project projects={portfolioProjects} />
          )}

          {activeSection === "Tools" && <Tools />}

          {activeSection === "Skills" && (
            <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-white/[0.05] bg-white/[0.015]">
              <span className="text-xs text-white/30">
                Skills section coming next.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}