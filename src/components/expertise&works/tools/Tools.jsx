"use client"

import { motion } from "framer-motion"
import {
  Code2,
  ShieldCheck,
  Network,
  Cpu,
  ArrowUpRight,
} from "lucide-react"

const toolGroups = [
  {
    id: "software",
    title: "Software & Development",
    description:
      "Perangkat lunak yang digunakan untuk membangun, mengembangkan, menguji, melakukan deployment, dan mengelola aplikasi.",
    icon: Code2,
    accent: "indigo",
    tools: [
      {
        name: "Spck Editor",
        description:
          "Editor kode mobile untuk mengembangkan dan mengedit project web langsung dari perangkat Android.",
      },
      {
        name: "Acode",
        description:
          "Editor kode Android untuk mengerjakan HTML, CSS, JavaScript, dan berbagai file project secara mobile.",
      },
      {
        name: "VS Code",
        description:
          "Development environment utama untuk menulis kode, mengelola project, debugging, dan menggunakan berbagai extension.",
      },
      {
        name: "GitHub",
        description:
          "Platform untuk menyimpan repository, mengelola source code, melakukan version control, dan berkolaborasi.",
      },
      {
        name: "Vercel",
        description:
          "Platform deployment yang digunakan untuk menjalankan dan mempublikasikan aplikasi web berbasis Next.js.",
      },
      {
        name: "Supabase",
        description:
          "Backend platform untuk database PostgreSQL, authentication, storage, dan layanan backend lainnya.",
      },
      {
        name: "Cloudflare",
        description:
          "Digunakan untuk DNS, keamanan, CDN, dan berbagai layanan infrastructure untuk aplikasi web.",
      },
      {
        name: "ArduinoDroid",
        description:
          "Aplikasi Android untuk menulis, compile, dan mengunggah program Arduino langsung dari perangkat mobile.",
      },
      {
        name: "n8n",
        description:
          "Platform workflow automation untuk menghubungkan berbagai layanan dan membangun proses otomatis.",
      },
      {
        name: "AnyDesk",
        description:
          "Remote desktop untuk mengakses dan mengelola perangkat lain dari jarak jauh.",
      },
      {
        name: "Postman",
        description:
          "Tool untuk menguji API, memeriksa request dan response, serta melakukan debugging layanan backend.",
      },
      {
        name: "Dorfus",
        description:
          "Utility yang digunakan untuk mendukung proses pengembangan dan pekerjaan teknis sehari-hari.",
      },
      {
        name: "Pydroid 3",
        description:
          "Environment Python pada Android untuk menjalankan script, eksperimen, dan pengembangan aplikasi sederhana.",
      },
      {
        name: "C++",
        description:
          "Bahasa pemrograman yang digunakan untuk pengembangan sistem, embedded, dan kebutuhan pemrograman tingkat rendah.",
      },
    ],
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Tool yang digunakan untuk security testing, reconnaissance, analisis, auditing, dan assessment.",
    icon: ShieldCheck,
    accent: "red",
    tools: [
      {
        name: "Termux",
        description:
          "Terminal environment pada Android untuk menjalankan Linux tools, scripting, networking, dan security utilities.",
      },
      {
        name: "Metasploit",
        description:
          "Framework security testing untuk melakukan validasi vulnerability dan pengujian keamanan secara terkontrol.",
      },
      {
        name: "Hashcat",
        description:
          "Tool password recovery dan auditing untuk menguji kekuatan hash dalam proses security assessment.",
      },
      {
        name: "Aircrack-ng",
        description:
          "Suite wireless security untuk menganalisis jaringan Wi-Fi dan melakukan pengujian keamanan wireless.",
      },
      {
        name: "Burp Suite",
        description:
          "Platform web security testing untuk menganalisis request, response, dan keamanan aplikasi web.",
      },
      {
        name: "Nmap",
        description:
          "Network scanner untuk melakukan discovery host, service enumeration, dan pemetaan jaringan.",
      },
      {
        name: "Shodan",
        description:
          "Search engine untuk perangkat dan layanan yang terekspos di internet dalam kebutuhan reconnaissance.",
      },
      {
        name: "Sherlock",
        description:
          "Tool username reconnaissance untuk mencari keberadaan username pada berbagai platform online.",
      },
      {
        name: "Maigret",
        description:
          "Tool OSINT untuk melakukan pencarian dan korelasi username pada berbagai layanan internet.",
      },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Perangkat dan software yang digunakan untuk mengelola, mengakses, menganalisis, dan memahami jaringan.",
    icon: Network,
    accent: "cyan",
    tools: [
      {
        name: "Termius",
        description:
          "SSH client untuk mengakses dan mengelola server, router, maupun perangkat jaringan secara remote.",
      },
      {
        name: "Winbox",
        description:
          "Utility untuk melakukan konfigurasi dan management perangkat jaringan MikroTik.",
      },
      {
        name: "WiFi Analyzer",
        description:
          "Digunakan untuk menganalisis channel Wi-Fi, kekuatan sinyal, dan kondisi jaringan wireless di sekitar.",
      },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & Embedded",
    description:
      "Perangkat hardware dan platform embedded yang digunakan untuk eksperimen, wireless, RF, IoT, dan penelitian perangkat.",
    icon: Cpu,
    accent: "amber",
    tools: [
      {
        name: "RTL-SDR",
        description:
          "Software-defined radio untuk menerima dan mengeksplorasi berbagai sinyal radio pada rentang frekuensi tertentu.",
      },
      {
        name: "ESP32-S3",
        description:
          "Microcontroller untuk eksperimen embedded, IoT, wireless communication, dan pengembangan perangkat.",
      },
      {
        name: "Arduino Uno R3",
        description:
          "Platform microcontroller untuk prototyping elektronik, sensor, automation, dan eksperimen embedded.",
      },
      {
        name: "WiFi Adapter",
        description:
          "Adapter wireless dengan dukungan monitor mode dan packet injection untuk kebutuhan wireless testing.",
      },
      {
        name: "Hack5",
        description:
          "Perangkat dan platform hardware yang digunakan untuk eksperimen keamanan, jaringan, dan wireless.",
      },
      {
        name: "ProMark3",
        description:
          "Perangkat RFID research yang digunakan untuk eksplorasi, analisis, dan eksperimen sistem RFID.",
      },
      {
        name: "Flipper Zero",
        description:
          "Multi-tool hardware untuk eksplorasi berbagai teknologi wireless, RFID, NFC, infrared, dan interface perangkat.",
      },
      {
        name: "Raspberry Pi 5",
        description:
          "Mini PC yang digunakan untuk server ringan, networking, automation, embedded project, dan eksperimen sistem.",
      },
    ],
  },
]

const accentStyles = {
  indigo: {
    icon: "text-indigo-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(99,102,241,0.12)]",
    line: "bg-indigo-400",
    dot: "bg-indigo-400",
    hover: "group-hover:border-indigo-400/20",
  },
  red: {
    icon: "text-red-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(248,113,113,0.11)]",
    line: "bg-red-400",
    dot: "bg-red-400",
    hover: "group-hover:border-red-400/20",
  },
  cyan: {
    icon: "text-cyan-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,0.11)]",
    line: "bg-cyan-400",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-400/20",
  },
  amber: {
    icon: "text-amber-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(251,191,36,0.1)]",
    line: "bg-amber-400",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-400/20",
  },
}

const groupVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ToolItem({ tool, accent }) {
  const styles = accentStyles[accent]

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        x: 4,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className={`group relative overflow-hidden rounded-xl border border-white/[0.055] bg-white/[0.012] px-4 py-3.5 transition-all duration-300 ${styles.hover} ${styles.glow}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className={`absolute -left-20 top-0 h-full w-32 -skew-x-12 blur-2xl ${styles.line} opacity-[0.045]`}
        />
      </div>

      <div className="relative flex items-center gap-3">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full opacity-40 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 ${styles.dot}`}
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-[12px] font-medium text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[13px]">
            {tool.name}
          </h3>

          <p className="mt-1 max-w-3xl text-[10px] leading-[1.65] text-white/35 transition-colors duration-300 group-hover:text-white/50 sm:text-[11px]">
            {tool.description}
          </p>
        </div>

        <ArrowUpRight
          size={14}
          strokeWidth={1.6}
          className={`shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60 ${styles.icon}`}
        />
      </div>

      <span
        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${styles.line} opacity-50`}
      />
    </motion.div>
  )
}

function ToolGroup({ group }) {
  const Icon = group.icon
  const styles = accentStyles[group.accent]

  return (
    <motion.section
      variants={groupVariants}
      className="mb-14 last:mb-0"
    >
      <div className="mb-5 flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] ${styles.icon}`}
        >
          <Icon size={18} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold tracking-tight text-white sm:text-base">
            {group.title}
          </h2>

          <p className="mt-1 max-w-2xl text-[10px] leading-5 text-white/35 sm:text-[11px]">
            {group.description}
          </p>
        </div>
      </div>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.035,
              delayChildren: 0.05,
            },
          },
        }}
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
      >
        {group.tools.map((tool) => (
          <ToolItem
            key={tool.name}
            tool={tool}
            accent={group.accent}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default function Tools() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -60px 0px",
      }}
      className="w-full"
    >
      {toolGroups.map((group) => (
        <ToolGroup
          key={group.id}
          group={group}
        />
      ))}
    </motion.div>
  )
}