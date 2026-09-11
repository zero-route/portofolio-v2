"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills"

const deviconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const devicons = {
  html5: `${deviconBase}/html5/html5-original.svg`,
  css3: `${deviconBase}/css3/css3-original.svg`,
  javascript: `${deviconBase}/javascript/javascript-original.svg`,
  typescript: `${deviconBase}/typescript/typescript-original.svg`,
  react: `${deviconBase}/react/react-original.svg`,
  vuejs: `${deviconBase}/vuejs/vuejs-original.svg`,
  tailwindcss: `${deviconBase}/tailwindcss/tailwindcss-original.svg`,
  sass: `${deviconBase}/sass/sass-original.svg`,
  bootstrap: `${deviconBase}/bootstrap/bootstrap-original.svg`,
  nodejs: `${deviconBase}/nodejs/nodejs-original.svg`,
  php: `${deviconBase}/php/php-original.svg`,
  ruby: `${deviconBase}/ruby/ruby-original.svg`,
  mysql: `${deviconBase}/mysql/mysql-original.svg`,
  postgresql: `${deviconBase}/postgresql/postgresql-original.svg`,
  mongodb: `${deviconBase}/mongodb/mongodb-original.svg`,
  c: `${deviconBase}/c/c-original.svg`,
  cplusplus: `${deviconBase}/cplusplus/cplusplus-original.svg`,
  java: `${deviconBase}/java/java-original.svg`,
  python: `${deviconBase}/python/python-original.svg`,
  git: `${deviconBase}/git/git-original.svg`,
  github: `${deviconBase}/github/github-original.svg`,
  gitlab: `${deviconBase}/gitlab/gitlab-original.svg`,
  githubcodespaces:
    `${deviconBase}/githubcodespaces/githubcodespaces-original.svg`,
  windows8: `${deviconBase}/windows8/windows8-original.svg`,
  windows11: `${deviconBase}/windows11/windows11-original.svg`,
  ubuntu: `${deviconBase}/ubuntu/ubuntu-original.svg`,
  linuxmint: `${deviconBase}/linuxmint/linuxmint-original.svg`,
  kalilinux: `${deviconBase}/kalilinux/kalilinux-original.svg`,
  gentoo: `${deviconBase}/gentoo/gentoo-original.svg`,
  redhat: `${deviconBase}/redhat/redhat-original.svg`,
  archlinux: `${deviconBase}/archlinux/archlinux-original.svg`,
  artix: `${deviconBase}/artix/artix-original.svg`,
  debian: `${deviconBase}/debian/debian-original.svg`,
  arduino: `${deviconBase}/arduino/arduino-original.svg`,
  esp32: `${deviconBase}/esp32/esp32-original.svg`,
  raspberrypi: `${deviconBase}/raspberrypi/raspberrypi-original.svg`,
}

function CustomIcon({ type }) {
  const common =
    "fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'"

  const icons = {
    penetration: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" dangerouslySetInnerHTML={{ __html: `
        <path d="M10 24h28"/>
        <path d="M15 18l-5 6 5 6"/>
        <path d="M33 18l5 6-5 6"/>
        <path d="M24 12l-4 24"/>
      ` }} />
    ),

    websecurity: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M10 13h28v22H10z" />
        <path {...parseSvgProps(common)} d="M10 19h28M16 16h.01M21 16h.01" />
        <path {...parseSvgProps(common)} d="M24 25l7 3-7 7-7-7z" />
      </svg>
    ),

    networksecurity: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M24 7l15 6v10c0 9-6 15-15 18C15 38 9 32 9 23V13z" />
        <path {...parseSvgProps(common)} d="M16 24l5 5 11-12" />
      </svg>
    ),

    wirelesssecurity: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M9 19c8-8 22-8 30 0" />
        <path {...parseSvgProps(common)} d="M14 24c5-5 15-5 20 0" />
        <path {...parseSvgProps(common)} d="M19 29c3-3 7-3 10 0" />
        <circle cx="24" cy="34" r="2" fill="currentColor" />
      </svg>
    ),

    osint: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="21" cy="21" r="11" />
        <path {...parseSvgProps(common)} d="M29 29l10 10" />
        <circle {...parseSvgProps(common)} cx="21" cy="21" r="4" />
      </svg>
    ),

    reconnaissance: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="15" />
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="7" />
        <path {...parseSvgProps(common)} d="M24 9v6M24 33v6M9 24h6M33 24h6" />
      </svg>
    ),

    vulnerability: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M24 7l16 8v10c0 9-7 15-16 18C15 40 8 34 8 25V15z" />
        <path {...parseSvgProps(common)} d="M24 16v9" />
        <circle cx="24" cy="31" r="1.5" fill="currentColor" />
      </svg>
    ),

    securityanalysis: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M10 34V23M18 34V17M26 34V27M34 34V12" />
        <path {...parseSvgProps(common)} d="M8 39h32" />
      </svg>
    ),

    tcpip: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="8" y="16" width="12" height="16" rx="2" />
        <rect {...parseSvgProps(common)} x="28" y="16" width="12" height="16" rx="2" />
        <path {...parseSvgProps(common)} d="M20 24h8" />
        <path {...parseSvgProps(common)} d="M25 20l4 4-4 4" />
      </svg>
    ),

    subnetting: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle cx="24" cy="10" r="4" fill="currentColor" />
        <circle cx="13" cy="36" r="4" fill="currentColor" />
        <circle cx="35" cy="36" r="4" fill="currentColor" />
        <path {...parseSvgProps(common)} d="M24 14v8M24 22L13 32M24 22l11 10" />
      </svg>
    ),

    routing: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="11" cy="24" r="4" />
        <circle {...parseSvgProps(common)} cx="37" cy="13" r="4" />
        <circle {...parseSvgProps(common)} cx="37" cy="35" r="4" />
        <path {...parseSvgProps(common)} d="M15 24h10l8-11M25 24l8 11" />
      </svg>
    ),

    switching: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="8" y="15" width="32" height="18" rx="3" />
        <path {...parseSvgProps(common)} d="M14 22h6M28 22h6M14 28h6M28 28h6" />
      </svg>
    ),

    dns: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <ellipse {...parseSvgProps(common)} cx="24" cy="12" rx="13" ry="5" />
        <path {...parseSvgProps(common)} d="M11 12v12c0 3 6 5 13 5s13-2 13-5V12" />
        <path {...parseSvgProps(common)} d="M11 24v12c0 3 6 5 13 5s13-2 13-5V24" />
      </svg>
    ),

    dhcp: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="9" y="10" width="30" height="28" rx="4" />
        <path {...parseSvgProps(common)} d="M15 18h18M15 25h7M28 25h5M15 31h18" />
      </svg>
    ),

    vpn: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="11" y="21" width="26" height="19" rx="3" />
        <path {...parseSvgProps(common)} d="M16 21v-5a8 8 0 0116 0v5" />
        <circle cx="24" cy="30" r="2" fill="currentColor" />
        <path {...parseSvgProps(common)} d="M24 32v4" />
      </svg>
    ),

    firewall: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M9 12h30v24H9z" />
        <path {...parseSvgProps(common)} d="M9 20h30M9 28h30M19 12v8M29 12v8M19 28v8M29 28v8" />
      </svg>
    ),

    wireless: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 18c9-9 23-9 32 0" />
        <path {...parseSvgProps(common)} d="M14 24c6-6 14-6 20 0" />
        <path {...parseSvgProps(common)} d="M20 30c2-2 6-2 8 0" />
        <circle cx="24" cy="35" r="2" fill="currentColor" />
      </svg>
    ),

    troubleshooting: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 30l8-8 7 6 10-13" />
        <path {...parseSvgProps(common)} d="M30 15h7v7" />
        <path {...parseSvgProps(common)} d="M9 38h30" />
      </svg>
    ),

    arduino: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="8" y="13" width="32" height="22" rx="3" />
        <path {...parseSvgProps(common)} d="M14 19h5M14 25h5M14 31h5M29 19h5M29 25h5M29 31h5" />
        <circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),

    esp32: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="12" y="12" width="24" height="24" rx="3" />
        <path {...parseSvgProps(common)} d="M18 12V7M24 12V7M30 12V7M18 41v-5M24 41v-5M30 41v-5M12 18H7M12 24H7M12 30H7M41 18h-5M41 24h-5M41 30h-5" />
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="6" />
      </svg>
    ),

    raspberrypi: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M24 12c-7 0-13 6-13 13s6 13 13 13 13-6 13-13-6-13-13-13z" />
        <path {...parseSvgProps(common)} d="M18 19c2-4 10-4 12 0M17 27c3 4 11 4 14 0" />
      </svg>
    ),

    microcontroller: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="14" y="14" width="20" height="20" rx="2" />
        <path {...parseSvgProps(common)} d="M18 14V8M24 14V8M30 14V8M18 40v-6M24 40v-6M30 40v-6M14 18H8M14 24H8M14 30H8M40 18h-6M40 24h-6M40 30h-6" />
      </svg>
    ),

    gpio: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="12" y="8" width="24" height="32" rx="3" />
        <circle cx="18" cy="15" r="2" fill="currentColor" />
        <circle cx="24" cy="15" r="2" fill="currentColor" />
        <circle cx="30" cy="15" r="2" fill="currentColor" />
        <circle cx="18" cy="23" r="2" fill="currentColor" />
        <circle cx="24" cy="23" r="2" fill="currentColor" />
        <circle cx="30" cy="23" r="2" fill="currentColor" />
      </svg>
    ),

    sensor: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M24 8v8M24 32v8M8 24h8M32 24h8" />
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),

    actuator: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="10" />
        <path {...parseSvgProps(common)} d="M24 14V8M24 40v-6M14 24H8M40 24h-6" />
        <path {...parseSvgProps(common)} d="M19 20l10 4-10 4z" />
      </svg>
    ),

    automation: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="8" />
        <path {...parseSvgProps(common)} d="M24 8v5M24 35v5M8 24h5M35 24h5M12.7 12.7l3.5 3.5M31.8 31.8l3.5 3.5M35.3 12.7l-3.5 3.5M16.2 31.8l-3.5 3.5" />
      </svg>
    ),

    electronics: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 24h7l3-8 5 16 4-11 3 3h8" />
      </svg>
    ),

    serial: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 16h32M8 24h32M8 32h32" />
        <circle cx="14" cy="16" r="2" fill="currentColor" />
        <circle cx="26" cy="24" r="2" fill="currentColor" />
        <circle cx="34" cy="32" r="2" fill="currentColor" />
      </svg>
    ),

    rtlsdr: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <rect {...parseSvgProps(common)} x="10" y="16" width="28" height="16" rx="3" />
        <path {...parseSvgProps(common)} d="M16 16V9M32 16V9M18 24h12" />
        <circle cx="16" cy="24" r="2" fill="currentColor" />
        <circle cx="32" cy="24" r="2" fill="currentColor" />
      </svg>
    ),

    rfsignal: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M6 28c5 0 5-12 10-12s5 16 10 16 5-20 10-20 5 8 6 8" />
      </svg>
    ),

    frequency: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 34V25M15 34V18M22 34V11M29 34V21M36 34V15M43 34V27" />
        <path {...parseSvgProps(common)} d="M6 39h36" />
      </svg>
    ),

    spectrum: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M7 34c6-12 8 6 13-5s8-19 13-7 6 3 8 0" />
        <path {...parseSvgProps(common)} d="M7 39h34" />
      </svg>
    ),

    wirelesscommunication: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path {...parseSvgProps(common)} d="M8 18c9-9 23-9 32 0M14 24c6-6 14-6 20 0M20 30c2-2 6-2 8 0" />
        <circle cx="24" cy="35" r="2" fill="currentColor" />
      </svg>
    ),

    wirelessprotocol: (
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <circle {...parseSvgProps(common)} cx="24" cy="24" r="5" />
        <circle {...parseSvgProps(common)} cx="10" cy="12" r="3" />
        <circle {...parseSvgProps(common)} cx="38" cy="12" r="3" />
        <circle {...parseSvgProps(common)} cx="10" cy="36" r="3" />
        <circle {...parseSvgProps(common)} cx="38" cy="36" r="3" />
        <path {...parseSvgProps(common)} d="M20 20L12 14M28 20l8-6M20 28l-8 6M28 28l8 6" />
      </svg>
    ),
  }

  return icons[type] ?? null
}

function parseSvgProps(value) {
  const props = {}

  value
    .replace(/'/g, "")
    .split(" ")
    .forEach((item) => {
      const [key, val] = item.split("=")

      if (key && val) {
        props[key.replace("stroke-width", "strokeWidth").replace("stroke-linecap", "strokeLinecap").replace("stroke-linejoin", "strokeLinejoin")] = val
      }
    })

  return props
}

function SkillItem({ skill, index }) {
  const isCustom = !devicons[skill.icon]

  return (
    <motion.div
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex min-w-0 flex-col items-center justify-center py-3 sm:py-4"
    >
      <div className="flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
        {isCustom ? (
          <div className="text-white/65 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
            <CustomIcon type={skill.icon} />
          </div>
        ) : (
          <img
            src={devicons[skill.icon]}
            alt=""
            draggable="false"
            className={`h-9 w-9 object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 sm:h-10 sm:w-10 ${
              skill.invert ? "brightness-0 invert" : ""
            }`}
          />
        )}
      </div>

      <span className="mt-2 text-[9px] font-medium leading-tight text-white/55 transition-colors duration-300 group-hover:text-white sm:text-[10px]">
        {skill.name}
      </span>
    </motion.div>
  )
}

function Category({ category, categoryIndex }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-9 sm:mb-11"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-xs">
          {category.label}
        </span>

        <span className="h-px flex-1 bg-white/[0.045]" />
      </div>

      <div
        className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ${
          category.zigzag ? "gap-x-3 gap-y-1 sm:gap-x-5 sm:gap-y-2" : "gap-x-3 gap-y-1 sm:gap-x-5 sm:gap-y-1"
        }`}
      >
        {category.skills.map((skill, index) => (
          <div
            key={skill.name}
            className={
              category.zigzag
                ? index % 4 === 1
                  ? "sm:translate-y-2"
                  : index % 4 === 3
                    ? "sm:-translate-y-1"
                    : ""
                : ""
            }
          >
            <SkillItem skill={skill} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <Category
            key={category.id}
            category={category}
            categoryIndex={index}
          />
        ))}
      </div>
    </section>
  )
}