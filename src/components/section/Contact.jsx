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
    x: 35,
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
      staggerChildren: 0.09,
    },
  },
}

const socialItemVariants = {
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

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = name.trim()
      ? `Portfolio Contact - ${name.trim()}`
      : "Portfolio Contact"

    const body = [
      `Nama: ${name.trim() || "-"}`,
      `Email Pengirim: ${email.trim() || "-"}`,
      "",
      "Comment:",
      comment.trim() || "-",
    ].join("\n")

    const mailto = `mailto:dimzishere854@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#030305] px-5 py-20 text-white sm:px-7 sm:py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
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
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(380px,0.85fr)] md:gap-14 lg:mt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(430px,0.8fr)] lg:gap-20">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Let&apos;s work together
              </h3>

              <p className="mt-3 max-w-[520px] text-[12px] leading-6 text-white/50 sm:text-[13px] sm:leading-6">
                I&apos;m always looking for exciting new projects. Whether you need a
                website, a web app, or just want to collaborate — feel free to reach
                out!
              </p>
            </motion.div>

            <div className="mt-8 space-y-4">
              <motion.a
                href="mailto:dimzishere854@gmail.com"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={infoVariants}
                className="group flex w-fit items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-purple-400/30 group-hover:bg-purple-500/[0.07] group-hover:text-purple-200">
                  <Mail size={16} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block text-[8px] font-medium uppercase tracking-[0.18em] text-white/30">
                    Email
                  </span>
                  <span className="mt-1 block text-[11px] text-white/70 transition-colors duration-300 group-hover:text-white sm:text-xs">
                    dimzishere854@gmail.com
                  </span>
                </span>
              </motion.a>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 35,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="flex w-fit items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/50">
                  <MapPin size={16} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block text-[8px] font-medium uppercase tracking-[0.18em] text-white/30">
                    Location
                  </span>
                  <span className="mt-1 block text-[11px] text-white/70 sm:text-xs">
                    Barru, Indonesia
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={socialContainerVariants}
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.07] hover:text-white"
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full md:justify-self-end"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[520px] rounded-2xl border border-white/[0.07] bg-white/[0.018] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-5 lg:p-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[9px] text-purple-300/70"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="William"
                    required
                    className="h-10 w-full rounded-lg border border-white/[0.07] bg-black/20 px-3 font-sans text-[11px] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/35 focus:bg-white/[0.025]"
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
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="hello@example.com"
                    required
                    className="h-10 w-full rounded-lg border border-white/[0.07] bg-black/20 px-3 font-sans text-[11px] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/35 focus:bg-white/[0.025]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-comment"
                  className="mb-2 block font-mono text-[9px] text-purple-300/70"
                >
                  Comment
                </label>

                <textarea
                  id="contact-comment"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/[0.07] bg-black/20 px-3 py-3 font-sans text-[11px] leading-5 text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-purple-400/35 focus:bg-white/[0.025]"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 font-sans text-[10px] font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.16)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.28)]"
              >
                <span>Send Message</span>

                <ArrowUpRight
                  size={13}
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