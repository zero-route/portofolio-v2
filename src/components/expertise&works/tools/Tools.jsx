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
    description: "Tools I use to build, develop, deploy, and manage applications.",
    icon: Code2,
    accent: "indigo",
    tools: [
      {
        name: "Spck Editor",
        function: "Mobile code editing",
      },
      {
        name: "Acode",
        function: "Android code editor",
      },
      {
        name: "VS Code",
        function: "Development environment",
      },
      {
        name: "GitHub",
        function: "Code hosting & collaboration",
      },
      {
        name: "Vercel",
        function: "Web deployment",
      },
      {
        name: "Supabase",
        function: "Backend & database",
      },
      {
        name: "Cloudflare",
        function: "DNS, CDN & security",
      },
      {
        name: "ArduinoDroid",
        function: "Mobile Arduino development",
      },
      {
        name: "n8n",
        function: "Workflow automation",
      },
      {
        name: "AnyDesk",
        function: "Remote desktop access",
      },
      {
        name: "Postman",
        function: "API testing",
      },
      {
        name: "Termius",
        function: "SSH client",
      },
      {
        name: "Dorfus",
        function: "Development utility",
      },
      {
        name: "Pydroid 3",
        function: "Python development on Android",
      },
      {
        name: "C++",
        function: "System & embedded programming",
      },
    ],
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Tools used for security testing, reconnaissance, analysis, and assessment.",
    icon: ShieldCheck,
    accent: "red",
    tools: [
      {
        name: "Termux",
        function: "Linux environment on Android",
      },
      {
        name: "Metasploit",
        function: "Security testing framework",
      },
      {
        name: "Hashcat",
        function: "Password recovery & auditing",
      },
      {
        name: "Aircrack-ng",
        function: "Wireless security assessment",
      },
      {
        name: "Burp Suite",
        function: "Web security testing",
      },
      {
        name: "Nmap",
        function: "Network discovery & scanning",
      },
      {
        name: "Shodan",
        function: "Internet asset intelligence",
      },
      {
        name: "Sherlock",
        function: "Username reconnaissance",
      },
      {
        name: "Maigret",
        function: "Username investigation",
      },
    ],
  },
  {
    id: "networking",
    title: "Networking & Hardware",
    description: "Tools and devices I use to explore networks, wireless systems, RF, and hardware.",
    icon: Network,
    accent: "cyan",
    tools: [
      {
        name: "Termius",
        function: "SSH & remote management",
      },
      {
        name: "Winbox",
        function: "MikroTik management",
      },
      {
        name: "WiFi Analyzer",
        function: "Wireless network analysis",
      },
      {
        name: "RTL-SDR",
        function: "Software-defined radio",
      },
      {
        name: "ESP32-S3",
        function: "Embedded & wireless development",
      },
      {
        name: "Arduino Uno R3",
        function: "Microcontroller development",
      },
      {
        name: "WiFi Adapter",
        function: "Monitor & injection capable wireless adapter",
      },
      {
        name: "Hack5",
        function: "Security & hardware experimentation",
      },
      {
        name: "Promark3",
        function: "RF & wireless experimentation",
      },
      {
        name: "Flipper Zero",
        function: "Hardware & wireless research",
      },
      {
        name: "Raspberry Pi 5",
        function: "Mini PC & embedded projects",
      },
    ],
  },
]

const accentStyles = {
  indigo: {
    icon: "text-indigo-400",
    border: "hover:border-indigo-400/30",
    glow: "bg-indigo-500/10",
    line: "bg-indigo-400",
    dot: "bg-indigo-400",
  },
  red: {
    icon: "text-red-400",
    border: "hover:border-red-400/30",
    glow: "bg-red-500/10",
    line: "bg-red-400",
    dot: "bg-red-400",
  },
  cyan: {
    icon: "text-cyan-400",
    border: "hover:border-cyan-400/30",
    glow: "bg-cyan-500/10",
    line: "bg-cyan-400",
    dot: "bg-cyan-400",
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
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

function ToolGroup({ group }) {
  const Icon = group.icon
  const accent = accentStyles[group.accent]

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-5 transition-colors duration-500 sm:p-6 ${accent.border}`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${accent.glow}`}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-white/[0.04]">
        <motion.div
          className={`h-full w-24 ${accent.line}`}
          initial={{ x: "-120%" }}
          whileInView={{ x: "520%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            delay: 0.35,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] ${accent.icon} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon size={21} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
            {group.title}
          </h3>

          <p className="mt-1.5 text-[10px] leading-5 text-white/40 sm:text-[11px]">
            {group.description}
          </p>
        </div>
      </div>

      <div className="relative mt-5 divide-y divide-white/[0.045] border-t border-white/[0.05]">
        {group.tools.map((tool) => (
          <div
            key={tool.name}
            className="group/tool flex items-center justify-between gap-4 py-3 transition-all duration-200 hover:px-1"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-white/85 transition-colors duration-200 group-hover/tool:text-white sm:text-xs">
                {tool.name}
              </p>

              <p className="mt-0.5 truncate text-[9px] text-white/35 sm:text-[10px]">
                {tool.function}
              </p>
            </div>

            <ArrowUpRight
              size={13}
              strokeWidth={1.6}
              className="shrink-0 text-white/15 transition-all duration-200 group-hover/tool:-translate-y-0.5 group-hover/tool:translate-x-0.5 group-hover/tool:text-white/55"
            />
          </div>
        ))}
      </div>

      <div className="relative mt-4 flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${accent.dot} opacity-60`}
        />

        <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
          {group.tools.length} tools
        </span>
      </div>
    </motion.article>
  )
}

export default function Tools() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -80px 0px",
      }}
      className="grid grid-cols-1 gap-5 lg:grid-cols-3"
    >
      {toolGroups.map((group) => (
        <ToolGroup key={group.id} group={group} />
      ))}
    </motion.div>
  )
}