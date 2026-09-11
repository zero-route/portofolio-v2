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

  kali: `
    <svg viewBox="0 0 128 128">
      <path fill="#2777ff" d="M68.15 31.699s-10.512-.7-28.411 4.901c-18.242 5.708-28.587 13.798-28.587 13.798s27.188-15.18 57.876-16.043zm39.206 16.505 1.367-.09s-7.83-9.499-22.815-14.126c8.424 3.424 15.756 7.961 21.448 14.215zm2.237 3.946c.21-.364.888 1.158 1.403 1.797.022.128.058.205-.24.144-.026-.131-.069-.17-.069-.17s-.72-.428-.942-.732c-.22-.305-.26-.837-.152-1.039m18.39 45.218s1.662-19.081-28.317-23.48a97.5 97.5 0 0 0-13.465-1c-24.029.318-24.905-27.713-6.798-29.128 7.503-.62 16.463 3.429 25.223 7.508-.033 1.088.012 2.055.727 2.948s3.46 1.867 4.336 2.37 3.687 2.29 5.409 4.531c.373-.698 3.491-2.728 3.491-2.728s-.747.016-2.485-.633c-1.738-.65-3.8-2.615-3.849-2.728-.048-.114-.08-.292.325-.374.309-.26-.39-1.104-.698-1.412-.309-.309-2.371-3.816-2.42-3.898-.049-.08-.065-.162-.211-.26-.455-.146-2.453.212-2.453.212s-3.072-1.51-4.13-4.762c.015.57-.527 1.192 0 2.5-1.603-.677-2.978-1.833-4.064-4.689-.646 1.625 0 2.658 0 2.658s-3.772-1.054-4.375-4.533c-.662 1.562 0 2.5 0 2.5s-6.15-3.208-16.367-3.254c-6.841-.628-8.265-12.662-7.631-14.688 0 0-9.867-5.2-29.29-7.497-19.424-2.298-35.353-.346-35.353-.346s34.4-1.651 61.96 9.506c.936 4.19 3.754 11.169 5.272 14.523-4.343 3.004-9.241 5.827-10.004 15.843s7.848 18.824 18.526 19.095c10.139.54 17.144.617 25.635 5.02 8.105 4.48 14.75 18.136 15.408 30.417.71-9.112-2.71-28.707-18.666-34.656 22.302 3.902 24.264 20.436 24.264 20.436zM67.624 30.202l-.802-2.588s-13.241-2.351-31.044-1.086C17.975 27.794 0 34.025 0 34.025s36.78-9.254 67.624-3.823"/>
    </svg>
  `,

  arch: `
    <svg viewBox="0 0 128 128">
      <path fill="#1791cf" d="M61.113 4.886C55.82 17.788 52.629 26.23 46.738 38.749c3.613 3.805 8.047 8.242 15.246 13.25-7.742-3.168-13.02-6.347-16.969-9.648-7.539 15.644-19.351 37.933-43.324 80.77 18.844-10.817 33.45-17.485 47.059-20.032a33.989 33.989 0 0 1-.895-8.023l.024-.602c.296-12.004 6.578-21.238 14.015-20.61 7.438.626 13.223 10.872 12.922 22.876-.055 2.261-.312 4.433-.762 6.449 13.465 2.621 27.914 9.273 46.5 19.941-3.664-6.707-6.933-12.757-10.058-18.52-4.922-3.792-10.055-8.726-20.524-14.073 7.196 1.863 12.348 4.007 16.364 6.406C74.578 38.12 72.004 30.308 61.113 4.886Z"/>
    </svg>
  `,

  artix: `
    <svg viewBox="0 0 128 128">
      <path fill="#10a0cc" d="m64.002 0-22.01 45.13 60.572 33.936ZM35.341 58.764 1.573 127.999l100.2-41.397Zm73.842 33.876-31.602 18.142 48.846 17.217Z"/>
    </svg>
  `,

  linuxMint: `
    <svg viewBox="0 0 128 128">
      <path fill="#69b53f" d="M118 64a54 54 0 0 1-54 54 54 54 0 0 1-54-54 54 54 0 0 1 54-54 54 54 0 0 1 54 54"/>
      <path fill="#f8f8f8" d="M29 31.5v45a20.06 20.06 0 0 0 20 20h30a20.06 20.06 0 0 0 20-20v-25c-.05-8.25-6.75-14.95-15-15-3.7 0-7.25 1.4-10 3.95-2.75-2.5-6.3-3.9-10-3.95-8.25.05-14.95 6.75-15 15v25h10v-25c0-2.75 2.25-5 5-5s5 2.25 5 5v25h10v-25c0-2.75 2.25-5 5-5s5 2.25 5 5v25c.05 5.5-4.4 9.95-9.85 10H49c-5.5.05-9.95-4.4-10-9.85V31.5z"/>
    </svg>
  `,

  ubuntu: `
    <svg viewBox="0 0 128 128">
      <path fill="#E95420" d="M104.663 0H24v128h80.663V0Z"/>
      <path fill="#fff" d="M42.443 90.31c4.611 0 8.35-3.768 8.35-8.416 0-4.648-3.739-8.416-8.35-8.416-4.612 0-8.35 3.768-8.35 8.416 0 4.648 3.738 8.416 8.35 8.416Z"/>
    </svg>
  `,

  gentoo: `
    <svg viewBox="0 0 128 128">
      <path fill="#554c7d" d="M2.876 102.069c.014-5.4 4.604-12.939 11.127-19.788 4.358-4.577 8.785-8.594 18.435-16.822-6.675-3.663-17.057-8.082-22.265-13.87-1.928-2.14-5.421-6.992-4.744-13.473C6.81 24.905 23.116 4.857 46.293.619c7.711-1.41 16.565-.393 23.852 2.883 22.861 10.278 50.819 35.812 54.259 48.28 1.21 4.387.978 11.382-1.11 15.28-2.586 4.833-11.542 14.646-23.795 24.773-19.225 15.889-46.166 32.95-66.282 35.82-6.5.929-13.141-.039-17.801-2.668-7.292-4.115-9.713-9.608-10.563-11.254-2.263-4.378-1.982-9.925-1.977-11.664Z"/>
    </svg>
  `,

  shield: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M32 5 53 13v16c0 14-8.7 24.8-21 30C19.7 53.8 11 43 11 29V13L32 5Z" stroke="#27c7e8" stroke-width="3"/>
      <path d="m22 31 7 7 14-15" stroke="#27c7e8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  webshield: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="10" y="8" width="44" height="48" rx="5" stroke="#31b9dc" stroke-width="3"/>
      <path d="M10 19h44" stroke="#31b9dc" stroke-width="3"/>
      <circle cx="17" cy="14" r="1.5" fill="#31b9dc"/>
      <path d="M24 36c4-8 12-8 16 0-4 8-12 8-16 0Z" stroke="#31b9dc" stroke-width="2.5"/>
      <path d="M32 30v12M26 36h12" stroke="#31b9dc" stroke-width="2"/>
    </svg>
  `,

  networkshield: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M32 7 51 14v14c0 13-7.6 23-19 29-11.4-6-19-16-19-29V14L32 7Z" stroke="#24c6dc" stroke-width="3"/>
      <circle cx="24" cy="29" r="3" stroke="#24c6dc" stroke-width="2"/>
      <circle cx="40" cy="25" r="3" stroke="#24c6dc" stroke-width="2"/>
      <circle cx="39" cy="40" r="3" stroke="#24c6dc" stroke-width="2"/>
      <path d="m27 28 10-3M27 31l9 7" stroke="#24c6dc" stroke-width="2"/>
    </svg>
  `,

  osint: `
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="27" cy="27" r="14" stroke="#32c4df" stroke-width="3"/>
      <path d="m38 38 14 14" stroke="#32c4df" stroke-width="4" stroke-linecap="round"/>
      <circle cx="27" cy="27" r="5" stroke="#32c4df" stroke-width="2"/>
      <path d="M27 16v5M27 33v5M16 27h5M33 27h5" stroke="#32c4df" stroke-width="2"/>
    </svg>
  `,

  wireless: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M12 24c11-11 29-11 40 0M18 30c8-8 20-8 28 0M25 37c4-4 10-4 14 0" stroke="#29bfdc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="44" r="3" fill="#29bfdc"/>
      <path d="M32 44v11" stroke="#29bfdc" stroke-width="2"/>
    </svg>
  `,

  automation: `
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="10" stroke="#27c7e8" stroke-width="3"/>
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" stroke="#27c7e8" stroke-width="3" stroke-linecap="round"/>
      <path d="m28 32 3 3 6-7" stroke="#27c7e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  network: `
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="11" r="5" stroke="#25c4dc" stroke-width="2.5"/>
      <circle cx="12" cy="46" r="5" stroke="#25c4dc" stroke-width="2.5"/>
      <circle cx="52" cy="46" r="5" stroke="#25c4dc" stroke-width="2.5"/>
      <circle cx="32" cy="46" r="5" stroke="#25c4dc" stroke-width="2.5"/>
      <path d="M29 15 15 42M35 15l14 27M32 16v25" stroke="#25c4dc" stroke-width="2.5"/>
    </svg>
  `,

  routing: `
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="13" cy="32" r="5" stroke="#31c6df" stroke-width="2.5"/>
      <circle cx="51" cy="18" r="5" stroke="#31c6df" stroke-width="2.5"/>
      <circle cx="51" cy="46" r="5" stroke="#31c6df" stroke-width="2.5"/>
      <path d="M18 31h15c7 0 8-13 13-13M18 33h15c7 0 8 13 13 13" stroke="#31c6df" stroke-width="2.5"/>
      <path d="m42 15 4 3-4 3M42 43l4 3-4 3" stroke="#31c6df" stroke-width="2"/>
    </svg>
  `,

  switching: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="9" y="20" width="46" height="24" rx="4" stroke="#2dc2dc" stroke-width="3"/>
      <path d="M17 28h10M17 35h6M36 28h11M36 35h7" stroke="#2dc2dc" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="29" cy="35" r="2" fill="#2dc2dc"/>
    </svg>
  `,

  mikrotik: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="8" y="16" width="48" height="32" rx="5" stroke="#31c6df" stroke-width="3"/>
      <path d="M16 25h8l4 8 5-8h15M16 39h32" stroke="#31c6df" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="19" cy="39" r="2" fill="#31c6df"/>
    </svg>
  `,

  troubleshoot: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M23 11a14 14 0 0 0 0 28h7v9h11v-9h3a14 14 0 0 0 0-28" stroke="#29bfdc" stroke-width="3"/>
      <path d="M22 25h5l3-6 5 13 4-7h6" stroke="#29bfdc" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
  `,

  monitor: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="8" y="12" width="48" height="36" rx="4" stroke="#2fc5df" stroke-width="3"/>
      <path d="M15 36h7l4-12 5 17 5-10 4 5h9" stroke="#2fc5df" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 55h14" stroke="#2fc5df" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  arduino: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M14 39c-7-4-7-14 0-18 7-4 13 1 18 7 5-6 11-11 18-7 7 4 7 14 0 18-7 4-13-1-18-7-5 6-11 11-18 7Z" stroke="#2fc5df" stroke-width="3"/>
      <circle cx="24" cy="32" r="3" stroke="#2fc5df" stroke-width="2"/>
      <circle cx="40" cy="32" r="3" stroke="#2fc5df" stroke-width="2"/>
      <path d="M32 25v14M27 32h10" stroke="#2fc5df" stroke-width="2"/>
    </svg>
  `,

  esp32: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="16" y="14" width="32" height="36" rx="5" stroke="#2bc4df" stroke-width="3"/>
      <rect x="24" y="22" width="16" height="20" rx="2" stroke="#2bc4df" stroke-width="2"/>
      <path d="M11 22h5M11 31h5M11 40h5M48 22h5M48 31h5M48 40h5" stroke="#2bc4df" stroke-width="2.5"/>
      <path d="M28 27h8M28 32h8M28 37h8" stroke="#2bc4df" stroke-width="2"/>
    </svg>
  `,

  microcontroller: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="17" y="17" width="30" height="30" rx="4" stroke="#30c6df" stroke-width="3"/>
      <rect x="25" y="25" width="14" height="14" rx="2" stroke="#30c6df" stroke-width="2"/>
      <path d="M22 10v7M32 10v7M42 10v7M22 47v7M32 47v7M42 47v7M10 22h7M10 32h7M10 42h7M47 22h7M47 32h7M47 42h7" stroke="#30c6df" stroke-width="2"/>
    </svg>
  `,

  embedded: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="13" y="13" width="38" height="38" rx="6" stroke="#29c3dc" stroke-width="3"/>
      <path d="M23 23h18v18H23z" stroke="#29c3dc" stroke-width="2"/>
      <path d="M27 30h10M27 35h6M8 24h5M8 40h5M51 24h5M51 40h5" stroke="#29c3dc" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  electronics: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M7 35h10l5-14 7 25 7-18 5 9h16" stroke="#30c6df" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="22" cy="21" r="3" stroke="#30c6df" stroke-width="2"/>
    </svg>
  `,

  antenna: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M32 38V14M26 50h12M29 44h6" stroke="#2fc5df" stroke-width="3" stroke-linecap="round"/>
      <path d="M20 24a17 17 0 0 0 0 20M44 24a17 17 0 0 1 0 20M13 17a27 27 0 0 0 0 34M51 17a27 27 0 0 1 0 34" stroke="#2fc5df" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="32" cy="10" r="3" fill="#2fc5df"/>
    </svg>
  `,

  sdr: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M7 34h10l5-14 7 28 7-20 5 6h16" stroke="#2bc4df" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 49h38" stroke="#2bc4df" stroke-width="2"/>
    </svg>
  `,

  radio: `
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="5" stroke="#2fc6df" stroke-width="2.5"/>
      <path d="M22 22a14 14 0 0 0 0 20M42 22a14 14 0 0 1 0 20M15 15a24 24 0 0 0 0 34M49 15a24 24 0 0 1 0 34" stroke="#2fc6df" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M32 37v15" stroke="#2fc6df" stroke-width="2.5"/>
    </svg>
  `,

  signal: `
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M6 34h10l5-13 7 26 7-20 5 7h18" stroke="#2bc4df" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="28" cy="47" r="2" fill="#2bc4df"/>
    </svg>
  `,

  rfmonitor: `
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="8" y="12" width="48" height="36" rx="4" stroke="#2fc5df" stroke-width="3"/>
      <path d="M14 34h7l4-9 5 16 5-12 4 5h7" stroke="#2fc5df" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 55h16" stroke="#2fc5df" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
}

const iconOverrides = {
  "Windows 10": "windows10",
  "Windows 11": "windows11",
  "Kali Linux": "kali",
  "Arch Linux": "arch",
  "Artix Linux": "artix",
  "Linux Mint": "linuxMint",
  Ubuntu: "ubuntu",
  "Gentoo Linux": "gentoo",

  "Penetration Testing": "shield",
  "Web Security": "webshield",
  "Network Security": "networkshield",
  OSINT: "osint",
  "Wireless Security": "wireless",
  "Security Automation": "automation",

  "TCP/IP": "network",
  Routing: "routing",
  Switching: "switching",
  MikroTik: "mikrotik",
  "Network Troubleshooting": "troubleshoot",
  "Network Monitoring": "monitor",

  Arduino: "arduino",
  ESP32: "esp32",
  Microcontroller: "microcontroller",
  "Embedded Systems": "embedded",
  Electronics: "electronics",
  Automation: "automation",

  RF: "antenna",
  SDR: "sdr",
  "Radio Frequency": "radio",
  Wireless: "wireless",
  "Signal Analysis": "signal",
  "RF Monitoring": "rfmonitor",
}

const whiteIcons = new Set([
  "GitHub",
  "GitHub Codespaces",
])

function SkillIcon({ skill }) {
  const customIcon = skill.custom || iconOverrides[skill.name]

  if (customIcon && customIcons[customIcon]) {
    return (
      <span
        className="block h-9 w-9 [&>svg]:h-full [&>svg]:w-full"
        dangerouslySetInnerHTML={{
          __html: customIcons[customIcon],
        }}
      />
    )
  }

  return (
    <img
      src={skill.icon}
      alt=""
      aria-hidden="true"
      className={`h-9 w-9 object-contain ${
        whiteIcons.has(skill.name)
          ? "brightness-0 invert"
          : ""
      }`}
      loading="lazy"
    />
  )
}

function SkillItem({ skill, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 34,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: 1,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col items-center text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <SkillIcon skill={skill} />
      </div>

      <span className="mt-2 max-w-[90px] text-[9px] leading-4 text-white/55 transition-colors duration-500 group-hover:text-white/90 sm:text-[10px]">
        {skill.name}
      </span>
    </motion.div>
  )
}

function SkillCategory({ category }) {
  return (
    <section className="mb-14 last:mb-0 sm:mb-16">
      <motion.h3
        initial={{
          opacity: 0,
          y: 22,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-8 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-400/75"
      >
        {category.title}
      </motion.h3>

      <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-8 xl:grid-cols-10">
        {category.skills.map((skill, index) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default function Skills() {
  return (
    <div className="w-full">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id ?? category.title}
          category={category}
        />
      ))}
    </div>
  )
}