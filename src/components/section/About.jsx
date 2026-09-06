'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Layers, Award, GitBranch } from 'lucide-react';

const aboutText =
  'A passionate individual in various fields of Information Technology. I combine skills from various IT branches to build reliable systems and clean digital experiences — from network infrastructure to full-stack development.';

const nameWords = 'Dimas Aksa Oktapian'.split(' ');
const labelLetters = 'Who I Am'.split('');

const stats = [
  { icon: Layers, value: '5+', label: 'Multidisciplinary Fields', desc: 'Network, security, full-stack & more' },
  { icon: Award, value: '3+', label: 'Certifications', desc: 'Validated professional skills' },
  { icon: GitBranch, value: '14', label: 'GitHub Contributions', desc: 'Active open-source activity' },
];

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
  return (
    <section className="relative w-full px-6 py-24 bg-[#030014] overflow-hidden">
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

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/cv-dimas-aksa-oktapian.pdf"
              download
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={upVariants}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
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
              href="https://github.com/USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={upVariants}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
              Github Project
            </motion.a>
          </div>
        </div>

        <div className="lanyard-slot relative w-full h-[420px] md:h-[480px]" style={{ height: '100%' }} />
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
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-cyan-400/30 transition-colors"
            >
              <Icon className="mx-auto mb-3 text-cyan-400" size={28} />
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
