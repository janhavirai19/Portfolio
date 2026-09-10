"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Coffee,
  Code2,
  Terminal,
  Circle,
  Folder,
  FileCode,
  Cpu,
} from "lucide-react";

const About = () => {
  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Tailwind", color: "#38BDF8" },
    { name: "Framer", color: "#E64BFF" },
  ];

  const facts = [
    { icon: MapPin, label: "Based in", value: "Pune, India" },
    { icon: Coffee, label: "Fueled by", value: "Coffee" },
    { icon: Code2, label: "Open to", value: "Collaborations" },
  ];

  const nowItems = [
    { label: "Learning", value: "System Design & Cloud Architecture" },
    { label: "Building", value: "AI-powered developer tools" },
    { label: "Reading", value: "Designing Data-Intensive Applications" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0a0a1a] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />

        <motion.div
          className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

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

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
              About / Janhavi Rai
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Know Me </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Better
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-5" />

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Passionate developer creating innovative digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <Circle size={11} className="fill-red-500 text-red-500" />
                  <Circle size={11} className="fill-yellow-500 text-yellow-500" />
                  <Circle size={11} className="fill-green-500 text-green-500" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <Terminal size={12} className="text-gray-500" />
                  <span className="text-[11px] text-gray-500 font-mono">
                    janhavi@portfolio: ~/about
                  </span>
                </div>
                <div className="w-12" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-400 font-mono text-sm">$</span>
                  <span className="text-gray-400 font-mono text-sm">
                    whoami
                  </span>
                </div>

                <div className="pl-4 mb-6 border-l border-white/[0.06]">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3 font-mono">
                    Janhavi Rai
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px] font-light mb-4">
                    I'm a passionate{" "}
                    <span className="text-white font-medium">
                      full-stack developer
                    </span>{" "}
                    based in Pune, India — crafting clean interfaces and scalable
                    systems for the modern web. I love turning complex ideas into
                    simple, elegant experiences.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    When I'm not coding, you'll find me exploring new design
                    trends, experimenting with side projects, or writing about my
                    learnings. I believe great products are born from curiosity
                    and iteration.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-400 font-mono text-sm">$</span>
                  <span className="text-gray-400 font-mono text-sm">
                    cat facts.json
                  </span>
                </div>

                <div className="pl-4 mb-6 border-l border-white/[0.06] flex flex-wrap gap-x-6 gap-y-2">
                  {facts.map((fact, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <fact.icon size={14} className="text-purple-400" />
                      <span className="font-mono text-xs text-gray-500">
                        {fact.label}:
                      </span>
                      <span className="text-gray-300 font-mono">{fact.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-400 font-mono text-sm">$</span>
                  <span className="text-gray-400 font-mono text-sm">
                    ls tech-stack/
                  </span>
                </div>

                <div className="pl-4 mb-6 border-l border-white/[0.06] flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-gray-300 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-400 font-mono text-sm">$</span>
                  <motion.a
                    href="#experience"
                    className="group inline-flex items-center gap-1.5 text-sm font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="text-purple-400">cd</span>
                    <span>../experience</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
                <Folder size={12} className="text-purple-400" />
                <span className="text-[11px] text-gray-500 font-mono">
                  ~/currently
                </span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    live
                  </span>
                </span>
              </div>

              <div className="p-5 space-y-4">
                {nowItems.map((item, i) => (
                  <div
                    key={i}
                    className={`${i < nowItems.length - 1 ? "pb-4 border-b border-white/[0.05]" : ""}`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1.5 font-mono">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-medium leading-snug font-mono">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
                <Cpu size={12} className="text-blue-400" />
                <span className="text-[11px] text-gray-500 font-mono">
                  ~/stats
                </span>
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
                <div className="p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-mono">
                    2+
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-mono">
                    Years
                  </p>
                </div>
                <div className="p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-mono">
                    15+
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-mono">
                    Projects
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
                <FileCode size={12} className="text-green-400" />
                <span className="text-[11px] text-gray-500 font-mono">
                  ~/tree
                </span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed">
                <p className="text-gray-500">portfolio/</p>
                <p className="text-gray-500 pl-3">
                  ├── <span className="text-blue-400">hero.tsx</span>
                </p>
                <p className="text-gray-500 pl-3">
                  ├── <span className="text-blue-400">about.tsx</span>{" "}
                  <span className="text-purple-400">← here</span>
                </p>
                <p className="text-gray-500 pl-3">
                  ├── <span className="text-blue-400">skills.tsx</span>
                </p>
                <p className="text-gray-500 pl-3">
                  └── <span className="text-blue-400">projects.tsx</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;