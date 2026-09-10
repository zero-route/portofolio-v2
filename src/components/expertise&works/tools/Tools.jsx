"use client"

import {
  Code2,
  ShieldCheck,
  Network,
  ArrowUpRight,
} from "lucide-react"

const toolCategories = [
  {
    id: "software",
    title: "Software & Development",
    description:
      "Applications and platforms I use to write code, build applications, deploy projects, automate workflows, and manage development environments.",
    icon: Code2,
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    border: "hover:border-indigo-400/20",
    tools: [
      {
        name: "Spck Editor",
        description:
          "Mobile code editor used for writing, editing, and testing web projects directly from Android devices.",
      },
      {
        name: "Acode",
        description:
          "Lightweight Android code editor for developing websites and editing HTML, CSS, JavaScript, and other project files.",
      },
      {
        name: "VS Code",
        description:
          "Primary development environment for building applications, managing source code, extensions, debugging, and project workflows.",
      },
      {
        name: "GitHub",
        description:
          "Platform for hosting repositories, managing source code, collaborating on projects, and maintaining development history.",
      },
      {
        name: "Vercel",
        description:
          "Deployment platform used to publish and operate modern web applications with automated builds and production deployments.",
      },
      {
        name: "Supabase",
        description:
          "Backend platform used for databases, authentication, APIs, storage, and supporting application infrastructure.",
      },
      {
        name: "Cloudflare",
        description:
          "Infrastructure and edge platform used for DNS, CDN, security, traffic management, and web application services.",
      },
      {
        name: "ArduinoDroid",
        description:
          "Android development environment used to write, compile, and upload Arduino sketches without relying on a desktop computer.",
      },
      {
        name: "n8n",
        description:
          "Workflow automation platform used to connect services, process data, trigger actions, and build automated workflows.",
      },
      {
        name: "AnyDesk",
        description:
          "Remote desktop software used to access and manage computers remotely for administration, troubleshooting, and support.",
      },
      {
        name: "Postman",
        description:
          "API development and testing environment used to send requests, inspect responses, and validate backend services.",
      },
      {
        name: "Termius",
        description:
          "SSH client used to connect to remote servers, manage terminal sessions, and perform remote system administration.",
      },
      {
        name: "Dorfus",
        description:
          "Development utility used as part of the broader workflow for working with software projects and technical environments.",
      },
      {
        name: "Pydroid 3",
        description:
          "Python development environment for Android used to write, execute, and experiment with Python programs on mobile devices.",
      },
      {
        name: "C++",
        description:
          "Programming language used for system-level programming, embedded development, performance-oriented applications, and hardware projects.",
      },
    ],
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Security tools used for reconnaissance, vulnerability assessment, web testing, wireless analysis, password auditing, and security research.",
    icon: ShieldCheck,
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    border: "hover:border-red-400/20",
    tools: [
      {
        name: "Termux",
        description:
          "Android terminal environment used to run Linux utilities, scripting tools, networking commands, and security-related workflows.",
      },
      {
        name: "Metasploit",
        description:
          "Security testing framework used for controlled vulnerability validation, exploitation research, payload testing, and penetration testing.",
      },
      {
        name: "Hashcat",
        description:
          "Password recovery and auditing tool used to evaluate password strength through controlled hash analysis and recovery techniques.",
      },
      {
        name: "Aircrack-ng",
        description:
          "Wireless security toolkit used for Wi-Fi analysis, packet capture, monitoring, and authorized wireless security assessments.",
      },
      {
        name: "Burp Suite",
        description:
          "Web security testing platform used to inspect, intercept, modify, and analyze HTTP requests during authorized application assessments.",
      },
      {
        name: "Nmap",
        description:
          "Network discovery and scanning utility used to identify hosts, services, ports, and exposed network surfaces.",
      },
      {
        name: "Shodan",
        description:
          "Internet intelligence platform used to discover publicly exposed services, devices, and infrastructure for reconnaissance research.",
      },
      {
        name: "Sherlock",
        description:
          "Username reconnaissance utility used to search for the presence of a username across multiple online platforms.",
      },
      {
        name: "Maigret",
        description:
          "Username investigation tool used to discover accounts and digital footprints associated with usernames across online services.",
      },
    ],
  },
  {
    id: "networking",
    title: "Networking & Hardware",
    description:
      "Tools and devices used to work with networks, wireless systems, RF experimentation, embedded platforms, and hardware-oriented projects.",
    icon: Network,
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    border: "hover:border-cyan-400/20",
    tools: [
      {
        name: "Termius",
        description:
          "SSH client used for remote access, server administration, terminal sessions, and managing network-connected systems.",
      },
      {
        name: "Winbox",
        description:
          "Management utility used to configure and monitor MikroTik routers, interfaces, firewall rules, routing, and network services.",
      },
      {
        name: "WiFi Analyzer",
        description:
          "Wireless analysis utility used to inspect nearby Wi-Fi networks, signal strength, channels, and wireless conditions.",
      },
      {
        name: "RTL-SDR",
        description:
          "Software-defined radio hardware used to explore radio signals, frequency ranges, spectrum activity, and wireless communication systems.",
      },
      {
        name: "ESP32-S3",
        description:
          "Microcontroller platform used for embedded development, wireless projects, IoT systems, automation, and hardware experimentation.",
      },
      {
        name: "Arduino Uno R3",
        description:
          "Microcontroller board used for electronics prototyping, sensor integration, automation, and learning embedded programming.",
      },
      {
        name: "WiFi Adapter",
        description:
          "Wireless adapter capable of supporting monitor and injection features for authorized wireless testing and network research.",
      },
      {
        name: "Hack5",
        description:
          "Hardware ecosystem used for security experimentation, network research, automation, and exploring specialized security workflows.",
      },
      {
        name: "Proxmark3",
        description:
          "RF research platform used to study and experiment with RFID and NFC technologies in controlled environments.",
      },
      {
        name: "Flipper Zero",
        description:
          "Portable hardware research device used for exploring wireless protocols, RFID, NFC, infrared, GPIO, and embedded systems.",
      },
      {
        name: "Raspberry Pi 5",
        description:
          "Compact single-board computer used for network services, automation, Linux environments, monitoring systems, and embedded projects.",
      },
    ],
  },
]

function ToolCard({ tool, index, category }) {
  return (
    <article
      className={`tool-card group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] px-4 py-4 transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.028] ${category.border}`}
      style={{
        "--tool-delay": `${index * 35}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-sm font-medium tracking-[-0.01em] text-white">
            {tool.name}
          </h3>

          <p className="mt-1.5 max-w-xl text-[11px] leading-[1.65] text-white/40 sm:text-xs">
            {tool.description}
          </p>
        </div>

        <ArrowUpRight
          size={15}
          strokeWidth={1.7}
          className={`mt-0.5 shrink-0 opacity-20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70 ${category.accent}`}
        />
      </div>

      <div
        className={`pointer-events-none absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 ${category.accentBg}`}
      />
    </article>
  )
}

function ToolCategory({ category }) {
  const Icon = category.icon

  return (
    <section className="mb-14 last:mb-0">
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] ${category.accentBg}`}
        >
          <Icon
            size={17}
            strokeWidth={1.7}
            className={category.accent}
          />
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
            {category.title}
          </h2>

          <p className="mt-0.5 max-w-2xl text-[10px] leading-5 text-white/35 sm:text-[11px]">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mb-5 h-px w-full bg-white/[0.05]" />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {category.tools.map((tool, index) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            index={index}
            category={category}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/20">
        <span className={`h-1.5 w-1.5 rounded-full ${category.accentBg}`} />
        <span>{category.tools.length} tools</span>
      </div>
    </section>
  )
}

export default function Tools() {
  return (
    <div className="tools-section">
      {toolCategories.map((category) => (
        <ToolCategory key={category.id} category={category} />
      ))}
    </div>
  )
}