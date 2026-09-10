"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Command } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Creative Developer", "UI/UX Designer", "Problem Solver", "Code Artist"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    if (displayText.length > 8) setShowRest(true);
  }, [displayText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0a0a1a]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/15 blur-[140px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[140px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-8 border-b border-white/[0.05] bg-black/20 backdrop-blur-sm flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[10px] font-mono text-gray-600">
            <span className="flex items-center gap-2">
              <Terminal size={10} />
              <span className="hidden sm:inline">janhavi@portfolio</span>
              <span>:~$</span>
              <span className="text-purple-400/70">whoami</span>
            </span>
            <span className="hidden sm:flex items-center gap-3">
              <span className="text-green-400/60">● online</span>
              <span className="text-gray-700">|</span>
              <span>v2.0</span>
            </span>
          </div>
        </div>

        <div className="hidden sm:block absolute top-12 left-4 w-4 h-4 border-l border-t border-purple-500/20" />
        <div className="hidden sm:block absolute top-12 right-4 w-4 h-4 border-r border-t border-purple-500/20" />
        <div className="hidden sm:block absolute bottom-4 left-4 w-4 h-4 border-l border-b border-purple-500/20" />
        <div className="hidden sm:block absolute bottom-4 right-4 w-4 h-4 border-r border-b border-purple-500/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight min-h-[120px] sm:min-h-[160px] lg:min-h-[180px]">
              <span className="block text-white font-semibold tracking-tight">
                I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-[0.85em] bg-purple-400 ml-1 animate-blink align-middle rounded-full" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Hi, I'm{" "}
              <span className="text-white font-medium">Janhavi Rai</span> —
              crafting clean interfaces and scalable systems with modern web
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showRest ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:flex items-center gap-2 text-xs font-mono text-gray-600"
            >
              <span className="text-purple-400">$</span>
              <span>echo "code · design · ship"</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
              <motion.a
                href="mailto:janhavi.rai@example.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <Mail size={15} />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl rounded-full text-white font-medium text-sm hover:bg-white/[0.08] transition-all duration-300"
              >
                <Command size={15} />
                View Projects
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showRest ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 justify-center lg:justify-start pt-3"
            >
              <a
                href="https://github.com/janhavirai19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/janhavi-rai-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:janhavi.rai@example.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
              <motion.div
                className="absolute inset-[-16px] rounded-full border border-dashed border-purple-500/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#8b5cf6,#ec4899,#3b82f6,#8b5cf6)] opacity-40 blur-md" />

              <div className="absolute inset-[2px] rounded-full bg-[#0a0a1a]" />

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse" />

              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#12122a] to-[#0a0a1a] flex items-center justify-center shadow-2xl shadow-purple-500/10">
                <span className="text-7xl sm:text-8xl">👩‍💻</span>

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.06]" />

                <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-purple-400/30" />
                <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-purple-400/30" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-purple-400/30" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-purple-400/30" />
              </div>

              <motion.div
                className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 px-3 py-1.5 rounded-lg bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/[0.08] flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-300 tracking-wider">
                  build: passing
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-1 -left-1 sm:-bottom-3 sm:-left-3 px-3 py-1.5 rounded-lg bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/[0.08] flex items-center gap-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-purple-400 font-mono text-[11px]">$</span>
                <span className="text-[10px] font-mono text-gray-300 tracking-wider">
                  ~/janhavi
                </span>
              </motion.div>

              <div className="absolute top-1/3 -left-6 sm:-left-8 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/[0.06]">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                  node.active
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showRest ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-600">
          scroll
        </span>
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 hover:text-purple-400 transition-colors"
        >
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        :global(.animate-blink) { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Hero;