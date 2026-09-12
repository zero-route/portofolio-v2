"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Github,
  Gitlab,
  Linkedin,
  Send,
  Instagram,
  Music2,
  ArrowUpRight,
} from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/zero-route",
    label: "GitHub",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/zero-route",
    label: "GitLab",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dimas-aksa-oktapian-096541406?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
  {
    icon: Send,
    href: "https://t.me/Tehpucuts",
    label: "Telegram",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/uknown.1982",
    label: "Instagram",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@altera1975?_r=1&_t=ZS-99ffkzffnuL",
    label: "TikTok",
  },
]

const infoVariants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const socialItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = "Contact from Portfolio"

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Comment:",
      form.comment,
    ].join("\n")

    const mailto = `mailto:dimzishere854@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030305] px-5 py-24 text-white sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <h2 className="text-[3.2rem] font-bold tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[4.5rem]">
            Contact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 xl:grid-cols-[0.8fr_1.2fr] xl:gap-20">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Let&apos;s work together
              </h3>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/45 sm:text-sm sm:leading-7">
                I&apos;m always looking for exciting new projects. Whether you
                need a website, a web app, or just want to collaborate — feel
                free to reach out!
              </p>
            </motion.div>

            <motion.div
              variants={infoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-3"
            >
              <a
                href="mailto:dimzishere854@gmail.com"
                className="group flex w-fit items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/50 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/[0.08] group-hover:text-white">
                  <Mail size={15} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Email
                  </span>
                  <span className="mt-0.5 block text-[11px] text-white/70 transition-colors duration-300 group-hover:text-white sm:text-xs">
                    dimzishere854@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex w-fit items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/50">
                  <MapPin size={15} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Location
                  </span>
                  <span className="mt-0.5 block text-[11px] text-white/70 sm:text-xs">
                    Barru, Indonesia
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={socialContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    variants={socialItemVariants}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-white hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)]"
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </motion.a>
                )
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-md text-[10px] leading-5 text-white/30 sm:text-xs"
            >
              Whether it&apos;s a technical project, collaboration, or simply
              an interesting idea, feel free to reach out.
            </motion.p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)] sm:p-5 lg:p-6"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[9px] text-purple-300/70"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="William"
                    className="h-11 w-full rounded-xl border border-white/[0.07] bg-black/20 px-3 text-[11px] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[9px] text-purple-300/70"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="hello@example.com"
                    className="h-11 w-full rounded-xl border border-white/[0.07] bg-black/20 px-3 text-[11px] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-comment"
                  className="mb-2 block font-mono text-[9px] text-purple-300/70"
                >
                  Comment
                </label>

                <textarea
                  id="contact-comment"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 text-[11px] leading-5 text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
                />
              </div>

              <button
                type="submit"
                className="group mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-[10px] font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.18)] transition-all duration-300 hover:from-purple-500 hover:to-indigo-400 hover:shadow-[0_10px_35px_rgba(124,58,237,0.28)]"
              >
                <span>Send Message</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}