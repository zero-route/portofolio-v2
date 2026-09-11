"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

const dotCount = 5

function DifficultyDots({ level }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: dotCount }).map((_, index) => (
        <span
          key={index}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
            index < level ? "bg-white" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  )
}

function IconSkill({ skill, index, expanded, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2 }}
      className={`group relative flex min-h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.045] px-4 py-5 text-center transition-all duration-300 ${
        expanded
          ? "border-white/[0.12] bg-white/[0.025]"
          : "bg-transparent hover:border-white/[0.09] hover:bg-white/[0.012]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-300 ${
          expanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        className={`flex h-12 w-12 items-center justify-center transition-all duration-300 ${
          expanded ? "scale-105" : "group-hover:scale-105"
        }`}
      >
        <img
          src={skill.icon}
          alt=""
          draggable="false"
          className={`h-10 w-10 object-contain transition-all duration-300 ${
            skill.invert ? "brightness-0 invert" : ""
          } ${
            expanded
              ? "opacity-100"
              : "opacity-80 group-hover:opacity-100"
          }`}
        />
      </div>

      <span
        className={`mt-3 text-xs font-medium transition-colors duration-300 sm:text-sm ${
          expanded ? "text-white" : "text-white/70 group-hover:text-white"
        }`}
      >
        {skill.name}
      </span>

      <div
        className={`grid transition-all duration-300 ${
          expanded
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <DifficultyDots level={skill.level} />

          <p className="mt-3 max-w-[190px] text-[10px] leading-4 text-white/40">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.button>
  )
}

function ZigzagSkill({ skill, index, expanded, onToggle }) {
  const zigzagClass =
    index % 4 === 1
      ? "sm:translate-y-4"
      : index % 4 === 2
        ? "sm:-translate-y-2"
        : index % 4 === 3
          ? "sm:translate-y-3"
          : ""

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative min-w-0 rounded-xl border border-white/[0.04] px-4 py-4 text-center transition-all duration-300 ${zigzagClass} ${
        expanded
          ? "border-white/[0.11] bg-white/[0.018]"
          : "hover:border-white/[0.08] hover:bg-white/[0.01]"
      }`}
    >
      <span
        className={`text-xs font-medium transition-colors duration-300 sm:text-sm ${
          expanded ? "text-white" : "text-white/65 group-hover:text-white"
        }`}
      >
        {skill.name}
      </span>

      <div
        className={`grid transition-all duration-300 ${
          expanded
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <DifficultyDots level={skill.level} />

          <p className="mx-auto mt-3 max-w-[190px] text-[10px] leading-4 text-white/40">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.button>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].id
  )
  const [expandedSkill, setExpandedSkill] = useState(null)

  const activeData =
    skillCategories.find(
      (category) => category.id === activeCategory
    ) ?? skillCategories[0]

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setExpandedSkill(null)
  }

  const handleSkillToggle = (skillName) => {
    setExpandedSkill((current) =>
      current === skillName ? null : skillName
    )
  }

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
        className="w-full overflow-x-auto pb-2 scrollbar-none"
      >
        <div className="mx-auto flex w-max items-center rounded-2xl border border-white/[0.06] bg-white/[0.025] p-1.5 backdrop-blur-xl">
          {skillCategories.map((category) => {
            const active = activeCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className="relative rounded-xl px-4 py-3 text-[10px] font-medium transition-colors duration-300 sm:px-5 sm:py-3.5 sm:text-xs"
              >
                {active && (
                  <motion.span
                    layoutId="skills-active-tab"
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
      </motion.div>

      <motion.div
        key={activeData.id}
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-12 sm:mt-14"
      >
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
            {activeData.label}
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-white/35 sm:text-sm">
            Explore the technologies and technical areas I work with.
          </p>
        </div>

        {activeData.type === "icon" ? (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {activeData.skills.map((skill, index) => (
              <IconSkill
                key={skill.name}
                skill={skill}
                index={index}
                expanded={expandedSkill === skill.name}
                onToggle={() => handleSkillToggle(skill.name)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-5"
          >
            {activeData.skills.map((skill, index) => (
              <ZigzagSkill
                key={skill.name}
                skill={skill}
                index={index}
                expanded={expandedSkill === skill.name}
                onToggle={() => handleSkillToggle(skill.name)}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}