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
      className="relative w-full py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-400">
            Capabilities
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Things I build, use, and understand.
          </h1>
        </div>

        <div className="mb-10 flex w-fit items-center rounded-2xl border border-white/[0.07] bg-white/[0.035] p-1.5 backdrop-blur-xl">
          {sections.map((section) => {
            const active = activeSection === section

            return (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className="relative min-w-[82px] rounded-xl px-4 py-2.5 text-[10px] font-medium transition-colors duration-300"
              >
                {active && (
                  <motion.span
                    layoutId="capabilities-active-tab"
                    className="absolute inset-0 rounded-xl bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
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

        {activeSection === "Projects" && (
          <Project projects={portfolioProjects} />
        )}
      </div>
    </section>
  )
}