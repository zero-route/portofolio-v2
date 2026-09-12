"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

const customIcons = {
  windows10: `
    <svg viewBox="0 0 128 128">
      <path fill="#00ADEF" d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"/>
    </svg>
  `,
  windows11: `
    <svg viewBox="0 0 128 128">
      <path fill="#0078d4" d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"/>
    </svg>
  `,
}

const iconOverrides = {
  "Windows 10": "windows10",
  "Windows 11": "windows11",
}

const whiteIcons = new Set(["GitHub", "GitHub Codespaces"])

function SkillIcon({ skill }) {
  const customIcon = iconOverrides[skill.name]

  if (customIcon && customIcons[customIcon]) {
    return (
      <span
        className="block h-9 w-9 [&>svg]:h-full [&>svg]:w-full"
        dangerouslySetInnerHTML={{ __html: customIcons[customIcon] }}
      />
    )
  }

  return (
    <img
      src={skill.icon}
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      decoding="async"
      loading="lazy"
      className={`h-9 w-9 object-contain ${whiteIcons.has(skill.name) ? "brightness-0 invert" : ""}`}
    />
  )
}

function SkillItem({ skill }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <SkillIcon skill={skill} />
      </div>
      <span className="mt-2 max-w-[90px] text-[9px] leading-4 text-white/55 transition-colors duration-500 group-hover:text-white/90 sm:text-[10px]">
        {skill.name}
      </span>
    </div>
  )
}

function SkillBadges({ skills }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="rounded-full border border-cyan-400/25 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/65 transition-colors duration-300 hover:border-cyan-400/60 hover:text-white"
        >
          {skill.name}
        </span>
      ))}
    </div>
  )
}

function SkillCategory({ category }) {
  return (
    <section className="mb-14 last:mb-0 sm:mb-16">
      <h3 className="mb-8 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-400/75">
        {category.title}
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {category.type === "badge" ? (
          <SkillBadges skills={category.skills} />
        ) : (
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-8 xl:grid-cols-10">
            {category.skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default function Skills() {
  return (
    <div className="w-full">
      {skillCategories.map((category) => (
        <SkillCategory key={category.id ?? category.title} category={category} />
      ))}
    </div>
  )
}
