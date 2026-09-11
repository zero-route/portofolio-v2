 export const toolCategories = [
  {
    id: "software",
    label: "Software & Development",
    description:
      "Tools yang digunakan untuk pengembangan aplikasi, deployment, automation, API testing, remote access, dan workflow development.",
    accent: "indigo",
    tools: [
      {
        name: "Spck Editor",
        description:
          "Mobile code editor yang digunakan untuk menulis, mengedit, dan mengelola source code ketika melakukan development langsung dari perangkat Android.",
      },
      {
        name: "Acode",
        description:
          "Code editor Android yang digunakan untuk pengembangan web, editing project, dan pengujian source code secara langsung dari perangkat mobile.",
      },
      {
        name: "VS Code",
        description:
          "Code editor utama untuk development dengan dukungan extension, debugging, Git, terminal, dan berbagai bahasa pemrograman.",
      },
      {
        name: "GitHub",
        description:
          "Platform untuk version control, repository management, collaboration, pull request, issue tracking, dan pengelolaan source code.",
      },
      {
        name: "GitLab",
        description:
          "Platform DevOps untuk repository Git, collaboration, CI/CD, issue management, dan automation dalam workflow pengembangan.",
      },
      {
        name: "GitHub Codespaces",
        description:
          "Cloud development environment yang memungkinkan proses coding dan pengembangan project dilakukan melalui environment VS Code berbasis cloud.",
      },
      {
        name: "Vercel",
        description:
          "Platform deployment yang digunakan untuk hosting aplikasi web, khususnya project Next.js, dengan integrasi Git dan environment variables.",
      },
      {
        name: "Supabase",
        description:
          "Backend platform berbasis PostgreSQL yang menyediakan database, authentication, storage, API, dan berbagai layanan backend.",
      },
      {
        name: "Cloudflare",
        description:
          "Platform yang digunakan untuk DNS, CDN, security, reverse proxy, edge services, dan berbagai kebutuhan infrastructure web.",
      },
      {
        name: "ArduinoDroid",
        description:
          "Aplikasi Android untuk menulis, compile, dan melakukan upload sketch Arduino tanpa harus menggunakan komputer desktop.",
      },
      {
        name: "n8n",
        description:
          "Workflow automation platform yang digunakan untuk menghubungkan berbagai service, API, dan proses automation secara visual.",
      },
      {
        name: "AnyDesk",
        description:
          "Remote desktop software yang digunakan untuk mengakses dan mengelola komputer atau perangkat lain secara remote.",
      },
      {
        name: "Postman",
        description:
          "API development dan testing platform untuk mengirim request, menguji endpoint, memeriksa response, serta mendokumentasikan API.",
      },
      {
        name: "Dorfus",
        description:
          "Tool yang digunakan dalam workflow pengembangan dan pengelolaan kebutuhan teknis project sesuai dengan environment yang digunakan.",
      },
      {
        name: "Pydroid 3",
        description:
          "Python development environment pada Android yang digunakan untuk menjalankan script, eksperimen coding, dan pengembangan aplikasi berbasis Python.",
      },
      {
        name: "C++",
        description:
          "Bahasa pemrograman yang digunakan untuk kebutuhan system programming, embedded development, automation, dan aplikasi yang membutuhkan kontrol resource lebih rendah.",
      },
    ],
  },

  {
    id: "cybersecurity",
    label: "Cyber Security",
    description:
      "Tools untuk security assessment, reconnaissance, vulnerability testing, password auditing, network analysis, dan penetration testing.",
    accent: "red",
    tools: [
      {
        name: "Termux",
        description:
          "Terminal environment pada Android yang menyediakan shell dan berbagai package Linux untuk menjalankan scripting, networking, automation, serta security tooling.",
      },
      {
        name: "Metasploit",
        description:
          "Framework penetration testing yang digunakan untuk melakukan vulnerability assessment, exploit testing, payload testing, dan validasi keamanan sistem.",
      },
      {
        name: "Nmap",
        description:
          "Network discovery dan security auditing tool untuk melakukan host discovery, port scanning, service enumeration, dan pemetaan jaringan.",
      },
      {
        name: "Wireshark",
        description:
          "Network protocol analyzer untuk menangkap dan menganalisis packet secara detail guna memahami traffic serta melakukan troubleshooting dan security analysis.",
      },
      {
        name: "Hashcat",
        description:
          "Password recovery dan auditing tool yang digunakan untuk menguji kekuatan password serta melakukan analisis terhadap berbagai jenis hash.",
      },
      {
        name: "Aircrack-ng",
        description:
          "Wireless security suite untuk melakukan monitoring, packet capture, analisis jaringan Wi-Fi, dan security testing pada jaringan wireless.",
      },
      {
        name: "Burp Suite",
        description:
          "Web security testing platform untuk melakukan intercept request, analisis HTTP traffic, vulnerability testing, dan pengujian keamanan aplikasi web.",
      },
      {
        name: "Shodan",
        description:
          "Search engine untuk perangkat dan service yang terhubung ke internet, berguna untuk reconnaissance dan memahami exposure sebuah infrastructure.",
      },
      {
        name: "Sherlock",
        description:
          "OSINT tool untuk melakukan pencarian username pada berbagai platform online sebagai bagian dari reconnaissance dan information gathering.",
      },
      {
        name: "Maigret",
        description:
          "OSINT tool untuk melakukan pencarian dan korelasi username pada berbagai website dan platform internet.",
      },
    ],
  },

  {
    id: "networking",
    label: "Networking",
    description:
      "Tools untuk network configuration, monitoring, troubleshooting, packet analysis, simulation, scanning, dan pengujian performa jaringan.",
    accent: "cyan",
    tools: [
      {
        name: "Termius",
        description:
          "SSH client yang digunakan untuk melakukan remote access ke server, router, Linux machine, dan perangkat jaringan melalui koneksi terminal.",
      },
      {
        name: "Winbox",
        description:
          "Utility untuk melakukan konfigurasi dan management perangkat MikroTik melalui graphical interface yang praktis.",
      },
      {
        name: "WiFi Analyzer",
        description:
          "Tool untuk menganalisis jaringan Wi-Fi di sekitar perangkat, termasuk channel utilization, signal strength, dan potensi interferensi.",
      },
      {
        name: "Wireshark",
        description:
          "Network analyzer untuk menangkap dan membaca packet secara mendalam sehingga membantu troubleshooting, monitoring, dan analisis traffic jaringan.",
      },
      {
        name: "Cisco Packet Tracer",
        description:
          "Network simulation tool untuk merancang topology, melakukan konfigurasi perangkat Cisco, dan menguji konsep jaringan tanpa hardware fisik.",
      },
      {
        name: "GNS3",
        description:
          "Network emulator yang digunakan untuk membangun dan menguji topology jaringan yang lebih kompleks dengan perangkat virtual maupun appliance jaringan.",
      },
      {
        name: "PuTTY",
        description:
          "Terminal client untuk melakukan koneksi remote menggunakan SSH, Telnet, Serial, dan berbagai protokol lain pada perangkat jaringan maupun server.",
      },
      {
        name: "MikroTik RouterOS",
        description:
          "Operating system jaringan MikroTik yang digunakan untuk routing, firewall, bandwidth management, VPN, wireless, dan berbagai fungsi network infrastructure.",
      },
      {
        name: "iperf3",
        description:
          "Network performance testing tool untuk mengukur throughput, bandwidth, dan karakteristik koneksi antara dua endpoint jaringan.",
      },
      {
        name: "Netcat",
        description:
          "Network utility serbaguna untuk melakukan koneksi TCP/UDP, testing port, troubleshooting service, dan pengujian komunikasi antar endpoint.",
      },
      {
        name: "Angry IP Scanner",
        description:
          "Network scanner ringan untuk melakukan host discovery dan melihat perangkat yang aktif pada range alamat IP tertentu.",
      },
    ],
  },

  {
    id: "hardware",
    label: "Hardware & Embedded",
    description:
      "Perangkat dan platform hardware yang digunakan untuk embedded system, wireless experimentation, RF, networking, automation, dan hardware security.",
    accent: "amber",
    tools: [
      {
        name: "RTL-SDR",
        description:
          "Software-defined radio berbasis USB yang digunakan untuk menerima dan menganalisis berbagai sinyal radio pada rentang frekuensi yang didukung perangkat.",
      },
      {
        name: "ESP32-S3",
        description:
          "Microcontroller dengan konektivitas Wi-Fi dan Bluetooth yang digunakan untuk embedded system, IoT, automation, dan eksperimen wireless.",
      },
      {
        name: "Arduino Uno R3",
        description:
          "Microcontroller board yang digunakan untuk prototyping elektronik, sensor, actuator, automation, dan pembelajaran embedded programming.",
      },
      {
        name: "WiFi Adapter",
        description:
          "Wireless adapter yang digunakan untuk kebutuhan konektivitas Wi-Fi serta pengujian jaringan wireless dengan fitur yang didukung chipset perangkat.",
      },
      {
        name: "Hack5",
        description:
          "Perangkat hardware security dan pentesting yang digunakan untuk eksperimen HID, automation, network security, dan security research.",
      },
      {
        name: "ProMark3",
        description:
          "Perangkat RFID/NFC research yang digunakan untuk eksperimen, analisis, dan pengujian terhadap sistem berbasis teknologi RFID yang kompatibel.",
      },
      {
        name: "Flipper Zero",
        description:
          "Multi-tool portable untuk hardware research yang mendukung berbagai interface dan protokol wireless maupun wired untuk eksperimen dan security testing.",
      },
      {
        name: "Raspberry Pi 5",
        description:
          "Single-board computer yang digunakan untuk server ringan, network services, automation, IoT, laboratory environment, dan berbagai eksperimen Linux.",
      },
    ],
  },
]