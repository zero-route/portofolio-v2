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
      "Perangkat lunak dan platform yang digunakan untuk menulis kode, mengembangkan aplikasi, deployment, otomasi, serta mengelola lingkungan pengembangan.",
    icon: Code2,
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    accentBorder: "hover:border-indigo-400/30",
    glow: "rgba(99,102,241,0.10)",
    line: "bg-indigo-400",
    tools: [
      {
        name: "Spck Editor",
        description:
          "Editor kode berbasis Android yang saya gunakan untuk menulis, mengedit, dan mengembangkan project web secara langsung melalui perangkat mobile.",
      },
      {
        name: "Acode",
        description:
          "Code editor ringan di Android untuk mengerjakan HTML, CSS, JavaScript, dan berbagai file project ketika membutuhkan lingkungan coding mobile.",
      },
      {
        name: "VS Code",
        description:
          "Editor utama untuk pengembangan aplikasi, pengelolaan source code, debugging, extension, terminal, serta berbagai workflow development.",
      },
      {
        name: "GitHub",
        description:
          "Platform yang digunakan untuk menyimpan repository, mengelola source code, melakukan version control, kolaborasi, dan mendokumentasikan project.",
      },
      {
        name: "Vercel",
        description:
          "Platform deployment yang digunakan untuk menjalankan dan mempublikasikan aplikasi web, terutama project Next.js dengan proses build dan deployment otomatis.",
      },
      {
        name: "Supabase",
        description:
          "Backend platform yang digunakan untuk database, autentikasi, API, storage, serta berbagai kebutuhan backend pada aplikasi web.",
      },
      {
        name: "Cloudflare",
        description:
          "Platform infrastruktur yang digunakan untuk DNS, CDN, keamanan, proxy, traffic management, serta layanan edge untuk aplikasi web.",
      },
      {
        name: "ArduinoDroid",
        description:
          "Aplikasi Android yang digunakan untuk menulis, melakukan compile, dan mengunggah program Arduino langsung melalui perangkat mobile.",
      },
      {
        name: "n8n",
        description:
          "Platform workflow automation yang digunakan untuk menghubungkan berbagai layanan, memproses data, membuat trigger, dan menjalankan proses otomatis.",
      },
      {
        name: "AnyDesk",
        description:
          "Aplikasi remote desktop yang digunakan untuk mengakses komputer dari jarak jauh, troubleshooting, administrasi, dan kebutuhan dukungan teknis.",
      },
      {
        name: "Postman",
        description:
          "Platform untuk menguji dan mengembangkan API dengan mengirim request, memeriksa response, serta melakukan validasi terhadap layanan backend.",
      },
      {
        name: "Termius",
        description:
          "SSH client yang digunakan untuk terhubung ke server atau perangkat jaringan secara remote melalui terminal dan melakukan administrasi sistem.",
      },
      {
        name: "Dorfus",
        description:
          "Utility yang digunakan dalam workflow pengembangan dan kebutuhan teknis tertentu sebagai bagian dari lingkungan kerja development.",
      },
      {
        name: "Pydroid 3",
        description:
          "Lingkungan pemrograman Python untuk Android yang digunakan untuk menulis, menjalankan, dan bereksperimen dengan program Python melalui perangkat mobile.",
      },
      {
        name: "C++",
        description:
          "Bahasa pemrograman yang digunakan untuk system programming, pengembangan embedded, aplikasi yang membutuhkan performa tinggi, dan berbagai project berbasis hardware.",
      },
    ],
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Tools yang digunakan untuk reconnaissance, analisis keamanan, vulnerability assessment, pengujian aplikasi web, wireless assessment, dan security research.",
    icon: ShieldCheck,
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "hover:border-red-400/30",
    glow: "rgba(248,113,113,0.10)",
    line: "bg-red-400",
    tools: [
      {
        name: "Termux",
        description:
          "Lingkungan terminal Linux di Android yang digunakan untuk menjalankan command-line tools, scripting, networking utility, dan berbagai workflow security.",
      },
      {
        name: "Metasploit",
        description:
          "Framework pengujian keamanan yang digunakan untuk melakukan validasi kerentanan, penelitian exploit, pengujian payload, dan penetration testing secara terkontrol.",
      },
      {
        name: "Hashcat",
        description:
          "Tool password recovery dan auditing yang digunakan untuk menguji kekuatan password melalui analisis hash dalam lingkungan pengujian yang terkontrol.",
      },
      {
        name: "Aircrack-ng",
        description:
          "Toolkit keamanan wireless yang digunakan untuk melakukan analisis jaringan Wi-Fi, packet capture, monitoring, dan pengujian keamanan wireless secara authorized.",
      },
      {
        name: "Burp Suite",
        description:
          "Platform pengujian keamanan aplikasi web untuk melakukan intercept, inspeksi, modifikasi, dan analisis HTTP request maupun response.",
      },
      {
        name: "Nmap",
        description:
          "Tool network discovery dan scanning yang digunakan untuk mengetahui host aktif, port terbuka, service, serta permukaan jaringan yang dapat dianalisis.",
      },
      {
        name: "Shodan",
        description:
          "Platform internet intelligence yang digunakan untuk reconnaissance terhadap perangkat, service, dan infrastruktur yang terekspos secara publik di internet.",
      },
      {
        name: "Sherlock",
        description:
          "Utility OSINT yang digunakan untuk mencari keberadaan username tertentu pada berbagai platform dan layanan online.",
      },
      {
        name: "Maigret",
        description:
          "Tool username investigation yang digunakan untuk melakukan pencarian akun dan jejak digital berdasarkan username di berbagai layanan internet.",
      },
    ],
  },
  {
    id: "networking",
    title: "Networking & Hardware",
    description:
      "Tools dan perangkat yang digunakan untuk eksplorasi jaringan, wireless, RF, embedded system, mikrokontroler, serta eksperimen hardware.",
    icon: Network,
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "hover:border-cyan-400/30",
    glow: "rgba(34,211,238,0.10)",
    line: "bg-cyan-400",
    tools: [
      {
        name: "Termius",
        description:
          "SSH client yang digunakan untuk remote access, administrasi server, mengakses perangkat jaringan, dan menjalankan perintah melalui terminal.",
      },
      {
        name: "Winbox",
        description:
          "Utility untuk mengelola perangkat MikroTik, termasuk konfigurasi interface, firewall, routing, wireless, serta berbagai layanan jaringan.",
      },
      {
        name: "WiFi Analyzer",
        description:
          "Aplikasi analisis wireless yang digunakan untuk melihat jaringan Wi-Fi di sekitar, kekuatan sinyal, channel, dan kondisi lingkungan wireless.",
      },
      {
        name: "RTL-SDR",
        description:
          "Perangkat software-defined radio yang digunakan untuk mengeksplorasi spektrum frekuensi, menangkap sinyal radio, dan mempelajari sistem komunikasi wireless.",
      },
      {
        name: "ESP32-S3",
        description:
          "Platform mikrokontroler yang digunakan untuk pengembangan embedded system, IoT, wireless project, otomasi, sensor, dan berbagai eksperimen hardware.",
      },
      {
        name: "Arduino Uno R3",
        description:
          "Board mikrokontroler yang digunakan untuk prototyping elektronik, membaca sensor, mengendalikan perangkat, otomasi, dan mempelajari embedded programming.",
      },
      {
        name: "WiFi Adapter",
        description:
          "Adapter wireless dengan dukungan monitor mode dan packet injection yang digunakan untuk pengujian keamanan wireless secara authorized.",
      },
      {
        name: "Hack5",
        description:
          "Perangkat dan ekosistem hardware yang digunakan untuk eksperimen keamanan, network research, automation, serta eksplorasi teknologi security-oriented.",
      },
      {
        name: "Promark3",
        description:
          "Perangkat yang digunakan untuk eksperimen dan penelitian pada teknologi RFID maupun sistem komunikasi berbasis frekuensi radio.",
      },
      {
        name: "Flipper Zero",
        description:
          "Perangkat hardware portable untuk mengeksplorasi berbagai teknologi wireless, RFID, NFC, infrared, GPIO, dan sistem embedded.",
      },
      {
        name: "Raspberry Pi 5",
        description:
          "Mini PC berbasis Linux yang digunakan untuk menjalankan server, network service, monitoring, automation, lab environment, dan berbagai project embedded.",
      },
    ],
  },
]

function ToolCard({ tool, index, category }) {
  return (
    <article
      className={`tool-card group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] px-4 py-4 transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.028] ${category.accentBorder}`}
      style={{
        "--tool-delay": `${index * 35}ms`,
        "--tool-glow": category.glow,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${category.glow} 0%, transparent 65%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <span
          className={`absolute left-0 top-0 h-full w-0 ${category.line} opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-70`}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/[0.025] blur-md transition-transform duration-700 group-hover:translate-x-[500px]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-sm font-medium tracking-[-0.01em] text-white transition-transform duration-300 group-hover:translate-x-0.5">
            {tool.name}
          </h3>

          <p className="mt-1.5 max-w-xl text-[11px] leading-[1.7] text-white/40 transition-colors duration-300 group-hover:text-white/55 sm:text-xs">
            {tool.description}
          </p>
        </div>

        <div className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
          <span
            className={`absolute inset-0 scale-50 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${category.accentBg}`}
          />

          <ArrowUpRight
            size={14}
            strokeWidth={1.7}
            className={`relative z-10 opacity-20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-90 ${category.accent}`}
          />
        </div>
      </div>

      <div
        className={`pointer-events-none absolute bottom-0 left-4 h-px w-0 ${category.line} opacity-0 transition-all duration-500 group-hover:w-16 group-hover:opacity-60`}
      />
    </article>
  )
}

function ToolCategory({ category }) {
  const Icon = category.icon

  return (
    <section className="mb-16 last:mb-0">
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

          <p className="mt-0.5 max-w-3xl text-[10px] leading-5 text-white/35 sm:text-[11px]">
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
        <span
          className={`h-1.5 w-1.5 rounded-full ${category.accentBg}`}
        />
        <span>{category.tools.length} tools</span>
      </div>
    </section>
  )
}

export default function Tools() {
  return (
    <div className="tools-section">
      {toolCategories.map((category) => (
        <ToolCategory
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}