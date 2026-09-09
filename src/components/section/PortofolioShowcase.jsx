"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Project from "@/components/capabilities/project/Project"
import { portfolioProjects } from "@/data/portofolioShowcase"

const sections = ["Projects", "Tools", "Skills"]

export default function PortofolioShowcase() {
  const [activeSection, setActiveSection] = useState("Projects")

  return (
    <section
      id="capabilities"
      className="relative w-full py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Capabilities
          </h1>

          <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500 sm:text-sm">
            Things I build, use, and understand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 flex justify-center"
        >
          <div className="flex items-center rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 backdrop-blur-xl">
            {sections.map((section) => {
              const active = activeSection === section

              return (
                <button
                  key={section}
                  type="button"
                  onClick={() => setActiveSection(section)}
                  className="relative min-w-[82px] rounded-xl px-4 py-2.5 text-[10px] font-medium transition-colors duration-300 sm:min-w-[92px]"
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
                      active ? "text-black" : "text-slate-400"
                    }`}
                  >
                    {section}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-9">
          {activeSection === "Projects" && (
            <Project projects={portfolioProjects} />
          )}
        </div>
      </div>
    </section>
  )
}