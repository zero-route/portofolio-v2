export const projects = [
  {
    id: "ai-gmail-automation",
    title: "AI Gmail Automation",
    type: "automation",
    typeLabel: "Automation",
    nodes: ["Gmail Trigger", "Gemini AI Summary", "Telegram Bot"],
    description:
      "An n8n-based automation that reads incoming emails, summarizes each conversation with Google Gemini, and delivers the digest straight to Telegram — so you never have to open your inbox just to catch the gist.",
    complexity: 3,
    impact:
      "Cuts down email-checking time by surfacing only what matters, straight into chat.",
    image: "/images/beyond/ai-gmail-automation.png",
  },
  {
    id: "moture-agriculture-monitoring",
    title: "Moture — Agriculture Monitoring (ESP32-S3)",
    type: "hardware",
    typeLabel: "Hardware",
    nodes: [
      "Sensors (Humidity/Temp/pH/Wind)",
      "ESP32-S3 Gateway",
      "4G LTE Uplink",
      "Central Server",
    ],
    description:
      "A field-monitoring device built on ESP32-S3 that tracks soil/air humidity, temperature, weather, wind speed, and water pH. It communicates over 4G LTE, acting as the main gateway for both sending farm data and controlling other systems in the field.",
    complexity: 5,
    impact:
      "Gives real-time visibility into farmland conditions and centralizes control of field systems from one gateway.",
    image: "/images/beyond/moture-agriculture.png",
  },
  {
    id: "ai-ticketing-agent",
    title: "AI Ticketing Agent",
    type: "automation",
    typeLabel: "Automation",
    nodes: ["Ticket Trigger", "Gemini AI Classifier", "Telegram Bot"],
    description:
      "An n8n workflow that manages IT support tickets and SLA priority. Google Gemini classifies the issue type, determines priority/SLA level, and sets the response time — with results delivered through a Telegram bot.",
    complexity: 3,
    impact:
      "Speeds up ticket triage by letting AI pre-classify severity and SLA instead of doing it manually.",
    image: "/images/beyond/ai-ticketing-agent.png",
  },
  {
    id: "project-dashboard",
    title: "Project Dashboard",
    type: "dashboard",
    typeLabel: "Dashboard",
    nodes: [
      "GitHub / Vercel / Netlify / Cloudflare",
      "Supabase / Backblaze",
      "AI API Status",
      "Next.js Dashboard",
    ],
    description:
      "A Next.js dashboard that keeps an eye on every project across multiple platforms — GitHub, Vercel, Netlify, Cloudflare, Supabase, Backblaze — plus the status of every active AI API.",
    complexity: 4,
    impact:
      "One single screen to check the health of every service instead of switching between six different dashboards.",
    image: "/images/beyond/project-dashboard.png",
  },
];
