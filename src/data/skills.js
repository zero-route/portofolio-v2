export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    type: "icon",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        level: 4,
        description: "Library utama untuk membangun interface web interaktif.",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        level: 5,
        description: "Membangun struktur semantic dan fondasi halaman web.",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        level: 5,
        description: "Mengatur layout, visual, responsive design, dan styling.",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        level: 4,
        description: "Bahasa utama untuk logic dan interaksi aplikasi web.",
      },
      {
        name: "Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        level: 3,
        description: "Framework frontend untuk membangun interface berbasis component.",
      },
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        level: 4,
        description: "CSS preprocessor untuk styling yang lebih terstruktur.",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        level: 5,
        description: "Utility-first CSS untuk membangun interface secara cepat.",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        level: 4,
        description: "Framework UI untuk membangun layout dan komponen responsive.",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        level: 4,
        description: "Superset JavaScript untuk development dengan type safety.",
      },
    ],
  },

  {
    id: "backend",
    label: "Backend",
    type: "icon",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        level: 4,
        description: "Runtime JavaScript untuk membangun backend dan server-side application.",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        level: 4,
        description: "Bahasa server-side untuk membangun aplikasi dan backend web.",
      },
      {
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
        level: 3,
        description: "Bahasa pemrograman untuk pengembangan aplikasi dan backend.",
      },
    ],
  },

  {
    id: "database",
    label: "Database",
    type: "icon",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        level: 4,
        description: "Relational database untuk menyimpan dan mengelola data aplikasi.",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        level: 4,
        description: "Database relational dengan fitur query dan data management yang kuat.",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        level: 4,
        description: "NoSQL database berbasis document untuk aplikasi modern.",
      },
    ],
  },

  {
    id: "programming",
    label: "Programming",
    type: "icon",
    skills: [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        level: 3,
        description: "Bahasa low-level untuk memahami system programming dan memory.",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        level: 4,
        description: "Bahasa programming untuk system, embedded, dan aplikasi performa tinggi.",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        level: 3,
        description: "Bahasa object-oriented untuk aplikasi dan software development.",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        level: 4,
        description: "Bahasa serbaguna untuk automation, scripting, development, dan security.",
      },
    ],
  },

  {
    id: "git",
    label: "Git & Collaboration",
    type: "icon",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        level: 5,
        description: "Version control untuk mengelola perubahan source code.",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        level: 5,
        invert: true,
        description: "Platform repository dan collaboration untuk software development.",
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
        level: 4,
        description: "Platform Git untuk repository, collaboration, dan DevOps workflow.",
      },
      {
        name: "Codespaces",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg",
        level: 4,
        invert: true,
        description: "Cloud development environment untuk coding berbasis browser.",
      },
    ],
  },

  {
    id: "os",
    label: "Operating Systems",
    type: "zigzag",
    skills: [
      {
        name: "Windows 10",
        level: 5,
        description: "Desktop operating system untuk kebutuhan development dan general computing.",
      },
      {
        name: "Windows 11",
        level: 5,
        description: "Modern Windows environment untuk development dan daily workflow.",
      },
      {
        name: "Ubuntu",
        level: 4,
        description: "Linux distribution untuk development, server, dan infrastructure.",
      },
      {
        name: "Linux Mint",
        level: 4,
        description: "Linux desktop environment untuk development dan general Linux workflow.",
      },
      {
        name: "Kali Linux",
        level: 4,
        description: "Linux distribution yang berfokus pada security assessment dan penetration testing.",
      },
      {
        name: "Gentoo Linux",
        level: 3,
        description: "Linux distribution dengan kontrol konfigurasi dan package yang sangat fleksibel.",
      },
      {
        name: "Red Hat Linux",
        level: 3,
        description: "Linux ecosystem yang banyak digunakan pada server dan enterprise infrastructure.",
      },
      {
        name: "Arch Linux",
        level: 3,
        description: "Linux distribution minimalis dengan kontrol konfigurasi sistem yang tinggi.",
      },
      {
        name: "Artix Linux",
        level: 3,
        description: "Linux distribution berbasis Arch dengan pendekatan init system alternatif.",
      },
      {
        name: "Parrot OS",
        level: 4,
        description: "Linux environment untuk security, privacy, development, dan forensic workflow.",
      },
      {
        name: "Debian",
        level: 4,
        description: "Linux distribution yang dikenal stabil untuk server dan berbagai infrastructure.",
      },
    ],
  },

  {
    id: "cybersecurity",
    label: "Cybersecurity",
    type: "zigzag",
    skills: [
      {
        name: "Penetration Testing",
        level: 4,
        description: "Menguji keamanan sistem dengan pendekatan offensive security.",
      },
      {
        name: "Web Security",
        level: 4,
        description: "Menganalisis dan menguji keamanan aplikasi serta layanan web.",
      },
      {
        name: "Network Security",
        level: 4,
        description: "Memahami proteksi, monitoring, dan pengujian keamanan jaringan.",
      },
      {
        name: "Wireless Security",
        level: 4,
        description: "Menganalisis keamanan jaringan wireless dan protokol Wi-Fi.",
      },
      {
        name: "OSINT",
        level: 4,
        description: "Mengumpulkan dan menganalisis informasi dari sumber terbuka.",
      },
      {
        name: "Reconnaissance",
        level: 4,
        description: "Mengidentifikasi informasi dan attack surface sebelum security testing.",
      },
      {
        name: "Vulnerability Assessment",
        level: 4,
        description: "Mengidentifikasi dan mengevaluasi potensi kelemahan pada sistem.",
      },
      {
        name: "Security Analysis",
        level: 3,
        description: "Menganalisis sistem, konfigurasi, dan traffic untuk menemukan risiko keamanan.",
      },
    ],
  },

  {
    id: "networking",
    label: "Networking",
    type: "zigzag",
    skills: [
      {
        name: "TCP/IP",
        level: 5,
        description: "Memahami dasar komunikasi jaringan berbasis TCP/IP.",
      },
      {
        name: "Subnetting",
        level: 4,
        description: "Membagi dan merancang addressing network secara efisien.",
      },
      {
        name: "Routing",
        level: 4,
        description: "Mengatur jalur komunikasi antar network dan menentukan path traffic.",
      },
      {
        name: "Switching",
        level: 4,
        description: "Memahami forwarding traffic dan komunikasi antar perangkat jaringan.",
      },
      {
        name: "DNS",
        level: 4,
        description: "Mengelola dan memahami resolusi nama domain pada jaringan.",
      },
      {
        name: "DHCP",
        level: 4,
        description: "Memahami pemberian konfigurasi IP secara otomatis kepada client.",
      },
      {
        name: "VPN",
        level: 4,
        description: "Memahami koneksi network private melalui jaringan publik.",
      },
      {
        name: "Firewall",
        level: 4,
        description: "Mengatur filtering dan kontrol traffic berdasarkan security policy.",
      },
      {
        name: "Wireless Networking",
        level: 4,
        description: "Memahami konfigurasi, analisis, dan troubleshooting jaringan wireless.",
      },
      {
        name: "Network Troubleshooting",
        level: 4,
        description: "Menganalisis masalah konektivitas dan performa pada jaringan.",
      },
    ],
  },

  {
    id: "embedded",
    label: "Embedded & Electrical",
    type: "zigzag",
    skills: [
      {
        name: "Arduino",
        level: 4,
        description: "Platform microcontroller untuk prototyping dan automation.",
      },
      {
        name: "ESP32",
        level: 4,
        description: "Microcontroller dengan wireless connectivity untuk IoT dan embedded system.",
      },
      {
        name: "Raspberry Pi",
        level: 4,
        description: "Single-board computer untuk server ringan, automation, dan embedded project.",
      },
      {
        name: "Microcontroller",
        level: 4,
        description: "Memahami penggunaan microcontroller dalam sistem elektronik dan automation.",
      },
      {
        name: "GPIO",
        level: 4,
        description: "Menggunakan pin digital dan interface hardware pada embedded system.",
      },
      {
        name: "Sensors",
        level: 4,
        description: "Mengintegrasikan sensor untuk membaca kondisi lingkungan atau perangkat.",
      },
      {
        name: "Actuators",
        level: 3,
        description: "Mengendalikan perangkat output seperti motor, relay, dan actuator lainnya.",
      },
      {
        name: "Automation",
        level: 4,
        description: "Menghubungkan hardware dan software untuk menjalankan proses otomatis.",
      },
      {
        name: "Basic Electronics",
        level: 4,
        description: "Memahami komponen, rangkaian, tegangan, arus, dan dasar elektronika.",
      },
      {
        name: "Serial Communication",
        level: 4,
        description: "Menggunakan komunikasi serial untuk pertukaran data antar perangkat.",
      },
    ],
  },

  {
    id: "rf",
    label: "RF & Wireless",
    type: "zigzag",
    skills: [
      {
        name: "RTL-SDR",
        level: 4,
        description: "Menggunakan software-defined radio untuk menerima dan menganalisis sinyal RF.",
      },
      {
        name: "RF Signal Analysis",
        level: 3,
        description: "Menganalisis karakteristik dan pola sinyal radio pada domain RF.",
      },
      {
        name: "Frequency Analysis",
        level: 3,
        description: "Menganalisis frekuensi dan komponen sinyal untuk memahami karakteristik transmisi.",
      },
      {
        name: "Spectrum Monitoring",
        level: 3,
        description: "Mengamati aktivitas sinyal pada rentang frekuensi tertentu.",
      },
      {
        name: "Wireless Communication",
        level: 3,
        description: "Memahami dasar komunikasi data melalui media wireless.",
      },
      {
        name: "Wireless Protocols",
        level: 3,
        description: "Memahami karakteristik dan mekanisme berbagai protokol komunikasi wireless.",
      },
    ],
  },
]