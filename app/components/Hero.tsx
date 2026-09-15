"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  const emailLink =
    "mailto:janhavi.rai@example.com?subject=Let's%20work%20together&body=Hi%20Janhavi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0AThanks!";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-[#0a0a1a]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-purple-500/12 blur-[120px] sm:blur-[140px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/12 blur-[120px] sm:blur-[140px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm font-mono text-purple-400 tracking-wider"
            >
              <span className="text-gray-600">$</span> whoami
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight min-h-[140px] sm:min-h-[180px] lg:min-h-[220px] font-mono">
              <span className="block text-white font-bold">
                Janhavi Rai
              </span>
              <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-[0.85em] bg-purple-400 ml-1.5 animate-blink align-middle rounded-full" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base font-mono text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="text-gray-600">//</span> I design and build digital products that are fast, accessible, and genuinely enjoyable to use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-black rounded-full font-mono font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <span className="text-purple-600">./</span>
                see-my-work
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </motion.a>
              <motion.a
                href={emailLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl rounded-full text-white font-mono font-semibold text-xs sm:text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              >
                <Mail size={14} />
                get-in-touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showRest ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start pt-4"
            >
              <span className="text-[10px] sm:text-xs font-mono text-gray-500 mr-1">
                ls socials/
              </span>
              <a
                href="https://github.com/janhavirai19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/janhavi-rai-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={emailLink}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

              <motion.div
                className="absolute inset-[-20px] rounded-full border border-dashed border-purple-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-3 shadow-2xl shadow-black/40">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden">
                  <Image
                    src="/janhavi.jpg"
                    alt="Janhavi Rai"
                    fill
                    priority
                    className="object-cover opacity-60"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 352px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />

                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.06]" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 leading-none mb-1">
                      status
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono font-medium text-white leading-none">
                      open_to_work
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showRest ? 1 : 0, y: showRest ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40"
              >
                <p className="text-[10px] font-mono text-gray-500 leading-none mb-1">
                  location
                </p>
                <p className="text-[11px] sm:text-xs font-mono font-medium text-white leading-none">
                  pune, india
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showRest ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">
            scroll
          </span>
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
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