'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Download, Github, Layers, FolderGit2, Code2 } from 'lucide-react';

const Lanyard = dynamic(() => import('@/components/reactbits/Lanyard'), {
  ssr: false,
});

const aboutText =
  'A passionate individual in various fields of Information Technology. I combine skills from various IT branches to build reliable systems and clean digital experiences — from network infrastructure to full-stack development.';

const nameWords = 'Dimas Aksa Oktapian'.split(' ');
const labelLetters = 'Who I Am'.split('');

const GITHUB_USERNAME = 'zero-route';

const upVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, duration: 0.55, ease: 'easeOut' },
  }),
};

function TypingParagraph({ text, className, startDelay = 0 }) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
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
  }, [text, startDelay]);

  return (
    <p className={className}>
      {shown}
      <span
        className={`inline-block w-[2px] h-[1em] bg-cyan-400 align-middle ml-[2px] ${
          done ? 'opacity-0' : 'animate-pulse'
        }`}
      />
    </p>
  );
}

export default function About() {
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    let active = true;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && typeof data.public_repos === 'number') {
          setRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        if (active) setRepoCount(null);
      });

    return () => {
      active = false;
    };
  }, []);

  const stats = [
    { icon: Layers, value: '5+', label: 'Multidisciplinary Fields', desc: 'Network, security, full-stack & more' },
    { icon: Code2, value: '19+', label: 'Tech Stack', desc: 'Languages, frameworks & tools mastered' },
    {
      icon: FolderGit2,
      value: repoCount === null ? '—' : `${repoCount}+`,
      label: 'GitHub Projects',
      desc: 'Total public repositories',
    },
  ];

  return (
    <section className="relative w-full px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">About Me</h2>
        <p className="text-gray-400">Transforming ideas into digital experiences</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="flex mb-3">
            {labelLetters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={upVariants}
                className="text-cyan-400 text-lg font-mono inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex flex-wrap gap-x-3">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <TypingParagraph
            text={aboutText}
            className="text-gray-300 leading-relaxed mb-8 min-h-[110px]"
            startDelay={900}
          />

          <div className="flex flex-nowrap items-center gap-3 sm:gap-4">
            <motion.a
              href="/cv-dimas-aksa-oktapian.pdf"
              download
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={upVariants}
              className="group relative inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-70 group-hover:opacity-100 blur-md transition-opacity" />
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600" />
              <span className="absolute inset-0 rounded-xl overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </span>
              <Download size={18} className="relative" />
              <span className="relative">Download CV</span>
            </motion.a>

            <motion.a
              href="https://github.com/zero-route"
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={upVariants}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
            >
              <Github size={18} />
              Github Project
            </motion.a>
          </div>
        </div>

        <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
          <Lanyard frontImage="/images/profile.png" backImage="/images/back_profile.png" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={upVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-white/30 transition-colors"
            >
              <Icon className="mx-auto mb-3 text-indigo-400" size={28} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.desc}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
