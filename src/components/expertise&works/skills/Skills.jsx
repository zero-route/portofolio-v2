"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

const customIcons = {
  shield: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4 40 10v12c0 10.5-6.8 18-16 22C14.8 40 8 32.5 8 22V10L24 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="m16 24 5 5 11-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  webshield: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="7"
        y="8"
        width="34"
        height="25"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M7 15h34"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 22 33 25v5c0 5-3.8 8-9 10-5.2-2-9-5-9-10v-5l9-3Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  ),

  networkshield: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="37" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M15 14 21 32M33 14 27 32M15 12h18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m24 20 7 3v4c0 4-3 6.5-7 8-4-1.5-7-4-7-8v-4l7-3Z"
        fill="#030305"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ),

  osint: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle
        cx="21"
        cy="21"
        r="11"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="m29 29 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="21" cy="21" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  wireless: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M8 18c9-9 23-9 32 0M14 24c6-6 14-6 20 0M20 30c2.5-2.5 5.5-2.5 8 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="37" r="2.5" fill="currentColor" />
    </svg>
  ),

  automation: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="10"
        y="10"
        width="28"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M16 24h16M24 16v16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  network: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="9" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="10" cy="37" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="37" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="27" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M24 13v10M21 30l-8 4M27 30l8 4M14 37h20"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

  routing: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M14 24h9c6 0 8-12 11-12M14 24h9c6 0 8 12 11 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  switching: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="7"
        y="15"
        width="34"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M13 24h5M22 24h5M31 24h4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  troubleshoot: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M18 8a9 9 0 0 0 0 13l4 4-7 7 4 4 7-7 4 4a9 9 0 0 0 13-13l-7 7-5-5 7-7A9 9 0 0 0 25 8l-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  monitor: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="9"
        width="36"
        height="27"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M13 28h5l4-10 5 14 4-8h4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  esp32: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="10"
        y="10"
        width="28"
        height="28"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="17" y="17" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 6v4M20 6v4M28 6v4M34 6v4M14 38v4M20 38v4M28 38v4M34 38v4M6 14h4M6 20h4M6 28h4M6 34h4M38 14h4M38 20h4M38 28h4M38 34h4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

  microcontroller: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="13"
        y="13"
        width="22"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 8v5M24 8v5M30 8v5M18 35v5M24 35v5M30 35v5M8 18h5M8 24h5M8 30h5M35 18h5M35 24h5M35 30h5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  embedded: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="11"
        y="11"
        width="26"
        height="26"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="m20 24 4-5 4 5-4 5-4-5ZM8 19h3M8 24h3M8 29h3M37 19h3M37 24h3M37 29h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  electronics: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M10 31h8l4-14 5 20 4-12h7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  antenna: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 36V13M18 40h12M20 13h8M17 19c-3 3-3 7 0 10M31 19c3 3 3 7 0 10M12 14c-6 6-6 14 0 20M36 14c6 6 6 14 0 20"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  sdr: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M7 27h6l3-10 5 20 5-25 4 15h11"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 38h30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  radio: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M15 15a13 13 0 0 0 0 18M33 15a13 13 0 0 1 0 18M9 9a21 21 0 0 0 0 30M39 9a21 21 0 0 1 0 30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  signal: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M7 30h6l4-10 5 18 5-25 4 17h10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  rfmonitor: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect
        x="7"
        y="10"
        width="34"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M12 29h5l3-9 4 13 4-8h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.045,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function SkillIcon({ skill }) {
  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9"
      />
    )
  }

  return (
    <span className="block h-8 w-8 text-cyan-400/80 transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9">
      {customIcons[skill.custom]}
    </span>
  )
}

function SkillCategory({ category }) {
  return (
    <motion.div
      variants={categoryVariants}
      className="mb-10 last:mb-0"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-5 bg-cyan-400/60" />

        <h3 className="text-[10px] font-medium tracking-[0.16em] text-cyan-400 sm:text-[11px]">
          {category.title}
        </h3>

        <span className="h-px flex-1 bg-white/[0.045]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="grid grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
      >
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={skillVariants}
            className="group flex min-w-0 flex-col items-center text-center"
          >
            <div className="flex h-11 w-11 items-center justify-center">
              <SkillIcon skill={skill} />
            </div>

            <span className="mt-2 max-w-[88px] text-[9px] leading-4 text-white/55 transition-colors duration-300 group-hover:text-white/90 sm:text-[10px]">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -60px 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      className="w-full"
    >
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id}
          category={category}
        />
      ))}
    </motion.div>
  )
}