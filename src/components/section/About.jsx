"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, Github, Layers, FolderGit2, Code2 } from "lucide-react";
import BorderGlow from "@/components/reactbits/BorderGlow";

const Lanyard = dynamic(() => import("@/components/reactbits/Lanyard"), {
  ssr: false,
});

const aboutText =
  "A passionate individual in various fields of Information Technology. I combine skills from various IT branches to build reliable systems and clean digital experiences — from network infrastructure to full-stack development.";

const nameWords = "Dimas Aksa Oktapian".split(" ");
const labelLetters = "Who I Am".split("");

const GITHUB_USERNAME = "zero-route";

const upVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

function TypingParagraph({
  text,
  className,
  startDelay = 0,
  enabled = false,
}) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setShown("");
      setDone(false);
      return;
    }

    let index = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setShown(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 18);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, enabled]);

  return (
    <p className={className}>
      {shown}
      {enabled && (
        <span
          className={`ml-[2px] inline-block h-[1em] w-[2px] align-middle ${
            done ? "opacity-0" : "animate-pulse"
          } bg-cyan-400`}
        />
      )}
    </p>
  );
}

export default function About() {
  const [revealed, setRevealed] = useState(false);
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const reveal = () => {
      setRevealed(true);
    };

    window.addEventListener("intro:complete", reveal);

    const fallback = setTimeout(() => {
      setRevealed(true);
    }, 6000);

    return () => {
      window.removeEventListener("intro:complete", reveal);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    let active = true;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && typeof data.public_repos === "number") {
          setRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        if (active) {
          setRepoCount(null);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const stats = [
    {
      icon: Layers,
      value: "5+",
      label: "Multidisciplinary Fields",
      desc: "Network, security, full-stack & more",
    },
    {
      icon: Code2,
      value: "19+",
      label: "Tech Stack",
      desc: "Languages, frameworks & tools mastered",
    },
    {
      icon: FolderGit2,
      value: repoCount === null ? "—" : `${repoCount}+`,
      label: "GitHub Projects",
      desc: "Total public repositories",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-6 py-24"
    >
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-3 text-4xl font-bold text-white md:text-5xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-gray-400"
        >
          Transforming ideas into digital experiences
        </motion.p>
      </div>

      <div className="mx-auto mb-20 grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <motion.div
            initial="hidden"
            animate={revealed ? "visible" : "hidden"}
            className="mb-3 flex"
          >
            {labelLetters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                custom={i}
                variants={upVariants}
                className="inline-block font-mono text-lg text-cyan-400"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.h3
            initial="hidden"
            animate={revealed ? "visible" : "hidden"}
            className="mb-4 flex flex-wrap gap-x-3 font-sans text-[3rem] font-bold tracking-[-0.045em] text-[#f4f4f5] sm:text-[3.5rem] lg:text-[4rem]"
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h3>

          <TypingParagraph
            text={aboutText}
            enabled={revealed}
            className="mb-8 min-h-[110px] max-w-[680px] font-mono text-[12px] leading-6 text-white/55 sm:text-[13px] sm:leading-7 lg:text-[14px]"
            startDelay={900}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              revealed
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 1.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-nowrap items-center gap-3 sm:gap-4"
          >
            <a
              href="/data/CV-DIMAS.pdf"
              download
              className="group relative inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 font-mono text-sm text-white sm:px-6 sm:py-3 sm:text-base"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-70 blur-md transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600" />
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </span>

              <span className="relative">Download CV</span>
              <Download size={18} className="relative" />
            </a>

            <a
              href="https://github.com/zero-route"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-sm text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
            >
              Github Project
              <Github size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
          }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: 45,
                }
          }
          transition={{
            duration: 1,
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[420px] w-full overflow-hidden md:h-[480px]"
        >
          <Lanyard
            frontImage="/images/profile.png"
            backImage="/images/back_profile.png"
          />
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              variants={upVariants}
              className="h-full"
            >
              <BorderGlow
                backgroundColor="#0d0d14"
                borderRadius={16}
                glowRadius={36}
                glowIntensity={1}
                edgeSensitivity={30}
                coneSpread={25}
                colors={["#8b5cf6", "#6366f1", "#38bdf8"]}
                className="h-full w-full"
              >
                <div className="p-6 text-center">
                  <Icon
                    className="mx-auto mb-3 text-indigo-400"
                    size={28}
                  />

                  <div className="mb-1 text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="mb-1 font-semibold text-white">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-500">
                    {stat.desc}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}