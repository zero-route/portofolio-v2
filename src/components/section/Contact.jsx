"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Gitlab,
  Linkedin,
  Send,
  Instagram,
  Music2,
  Mail,
  MapPin,
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

const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const socialItem = {
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
    message: "",
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

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) return

    const subject = `Portfolio Contact — ${name}`

    const body = `Hello Dimas,

I would like to contact you through your portfolio.

Name:
${name}

Email:
${email}

Comment:
${message}

Regards,
${name}`

    const mailto = `mailto:dimzishere854@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#030305] px-5 pb-16 pt-24 text-white sm:px-7 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-32 xl:px-14"
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

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-2xl font-bold tracking-[-0.03em] text-white sm:text-[1.7rem]">
                Let&apos;s work together
              </h3>

              <p className="mt-3 max-w-md text-[12px] leading-6 text-white/50 sm:text-[13px]">
                I&apos;m always looking for exciting new projects. Whether you need a
                website, a web app, or just want to collaborate — feel free to reach out!
              </p>
            </motion.div>

            <div className="mt-8 space-y-3">
              <motion.a
                href="mailto:dimzishere854@gmail.com"
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex w-fit items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-purple-400/30 group-hover:bg-purple-500/[0.08] group-hover:text-purple-200">
                  <Mail size={16} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                    Email
                  </span>

                  <span className="mt-1 block text-[11px] font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:text-xs">
                    dimzishere854@gmail.com
                  </span>
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex w-fit items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45">
                  <MapPin size={16} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                    Location
                  </span>

                  <span className="mt-1 block text-[11px] font-medium text-white/75 sm:text-xs">
                    Barru, Indonesia
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={socialContainer}
              className="mt-8 flex flex-wrap gap-2.5"
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
                    variants={socialItem}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-white hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)]"
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-6 lg:p-7"
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
                    placeholder="William"
                    required
                    className="h-11 w-full rounded-lg border border-white/[0.07] bg-black/20 px-3 text-[11px] text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
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
                    placeholder="hello@example.com"
                    required
                    className="h-11 w-full rounded-lg border border-white/[0.07] bg-black/20 px-3 text-[11px] text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-[9px] text-purple-300/70"
                >
                  Comment
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={7}
                  className="w-full resize-none rounded-lg border border-white/[0.07] bg-black/20 px-3 py-3 text-[11px] leading-5 text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-purple-400/40 focus:bg-white/[0.025] focus:ring-1 focus:ring-purple-400/10"
                />
              </div>

              <button
                type="submit"
                className="group mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-[10px] font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]"
              >
                Send Message
                <ArrowUpRight
                  size={14}
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