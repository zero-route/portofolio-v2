export const projects = [
  {
    id: "ai-gmail-automation",
    title: "AI Gmail Automation",
    type: "automation",
    typeLabel: "Otomasi",
    nodes: ["Pemicu Gmail", "Ringkasan AI Gemini", "Bot Telegram"],
    description:
      "Otomasi berbasis n8n yang membaca email masuk, merangkum setiap percakapan menggunakan Google Gemini, lalu mengirimkan ringkasannya langsung ke Telegram sehingga isi email penting dapat dipantau tanpa harus membuka inbox satu per satu.",
    complexity: 3,
    impact:
      "Mengurangi waktu untuk memeriksa email dengan menyajikan informasi penting langsung melalui chat.",
    image: "/images/beyond/ai-gmail-automation.png",
  },
  {
    id: "moture-agriculture-monitoring",
    title: "Moture — Agriculture Monitoring (ESP32-S3)",
    type: "hardware",
    typeLabel: "Perangkat Keras",
    nodes: [
      "Sensor (Kelembapan/Suhu/pH/Angin)",
      "Gateway ESP32-S3",
      "Uplink 4G LTE",
      "Server Pusat",
    ],
    description:
      "Perangkat pemantauan lahan berbasis ESP32-S3 yang memantau kelembapan tanah dan udara, suhu, kondisi cuaca, kecepatan angin, serta pH air. Sistem berkomunikasi melalui 4G LTE dan berfungsi sebagai gateway utama untuk mengirim data sekaligus mengendalikan sistem lain di lapangan.",
    complexity: 5,
    impact:
      "Memberikan visibilitas kondisi lahan secara real-time sekaligus memusatkan kendali berbagai sistem lapangan dalam satu gateway.",
    image: "/images/beyond/moture-agriculture.png",
  },
  {
    id: "ai-ticketing-agent",
    title: "AI Ticketing Agent",
    type: "automation",
    typeLabel: "Otomasi",
    nodes: [
      "Pemicu Tiket",
      "Klasifikasi AI Gemini",
      "Bot Telegram",
    ],
    description:
      "Workflow n8n untuk mengelola tiket dukungan IT dan menentukan prioritas SLA. Google Gemini mengklasifikasikan jenis masalah, menentukan tingkat prioritas dan SLA, kemudian menetapkan waktu respons yang sesuai dengan hasil yang dikirim melalui bot Telegram.",
    complexity: 3,
    impact:
      "Mempercepat proses triase tiket dengan membiarkan AI mengklasifikasikan tingkat keparahan dan SLA secara otomatis.",
    image: "/images/beyond/ai-ticketing-agent.png",
  },
  {
    id: "project-dashboard",
    title: "Project Dashboard",
    type: "dashboard",
    typeLabel: "Dasbor",
    nodes: [
      "GitHub / Vercel / Netlify / Cloudflare",
      "Supabase / Backblaze",
      "Status API AI",
      "Dasbor Next.js",
    ],
    description:
      "Dasbor berbasis Next.js yang memantau berbagai project pada GitHub, Vercel, Netlify, Cloudflare, Supabase, dan Backblaze, sekaligus memantau status setiap API AI yang sedang aktif.",
    complexity: 4,
    impact:
      "Menghadirkan satu tampilan untuk memantau kondisi berbagai layanan tanpa harus berpindah-pindah di antara banyak dasbor.",
    image: "/images/beyond/project-dashboard.png",
  },
];