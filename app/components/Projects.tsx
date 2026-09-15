"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github,
  ArrowUpRight,
  RotateCw,
  Circle,
  Folder,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const initialProjects = [
    {
      title: "SafePath",
      description:
        "AI-powered navigation system that recommends safer routes based on real-time crime data, lighting conditions, and community reports.",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      year: "2024",
      category: "ai-ml",
      color: "#8B5CF6",
      icon: "🛡️",
    },
    {
      title: "HealTech",
      description:
        "Healthcare platform connecting patients with verified doctors for instant consultations, appointment booking, and digital prescriptions.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      category: "healthcare",
      color: "#3B82F6",
      icon: "💊",
    },
    {
      title: "Sweet Crumbs",
      description:
        "Full-stack bakery e-commerce with real-time order tracking, custom cake builder, and inventory management for local bakers.",
      tech: ["React", "Express", "PostgreSQL", "Redis"],
      year: "2023",
      category: "e-commerce",
      color: "#EC4899",
      icon: "🧁",
    },
    {
      title: "GlowUp",
      description:
        "Beauty and wellness booking platform with artist profiles, live availability, and integrated payments for salons and spas.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      year: "2023",
      category: "booking",
      color: "#06B6D4",
      icon: "✨",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  const shuffleDeck = () => {
    setProjects((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0a0a1a] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />

        <motion.div
          className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px]"
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
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
              Projects / selected-work
            </span>
          </div> */}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-5" />

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A stack of things I've built — click to shuffle through the deck
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          <div
            className="relative w-full max-w-[460px] h-[560px] sm:h-[600px]"
            style={{ perspective: "1200px" }}
          >
            {[...projects].reverse().map((project, reversedIndex) => {
              const index = projects.length - 1 - reversedIndex;
              const stackPosition = index;

              const offsetY = stackPosition * 18;
              const offsetX = stackPosition * 8;
              const rotate = stackPosition * 3;
              const scale = 1 - stackPosition * 0.05;
              const opacity = 1 - stackPosition * 0.15;
              const zIndex = 100 - stackPosition;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={false}
                  animate={{
                    y: offsetY,
                    x: offsetX,
                    rotate: rotate,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  style={{
                    zIndex,
                    transformOrigin: "center bottom",
                  }}
                  className="absolute inset-0"
                >
                  <div className="group relative w-full h-full rounded-xl border border-white/[0.08] bg-[#0d0d1f]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50">
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <Circle size={11} className="fill-red-500 text-red-500" />
                        <Circle size={11} className="fill-yellow-500 text-yellow-500" />
                        <Circle size={11} className="fill-green-500 text-green-500" />
                      </div>
                      <div className="flex-1 flex items-center justify-center gap-2">
                        <Folder size={11} style={{ color: project.color }} />
                        <span className="text-[11px] text-gray-500 font-mono">
                          ~/projects/{project.category}
                        </span>
                      </div>
                      <div className="w-10" />
                    </div>

                    <div className="relative flex flex-col h-[calc(100%-44px)] p-6 sm:p-7 overflow-hidden">
                      <div
                        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[110px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                        style={{ backgroundColor: project.color }}
                      />

                      <div className="relative flex items-center gap-2 mb-4">
                        <span className="text-purple-400 font-mono text-sm">$</span>
                        <span className="text-gray-500 font-mono text-xs">
                          cat {project.title.toLowerCase().replace(/\s+/g, "-")}.json
                        </span>
                      </div>

                      <div className="relative flex items-center justify-between gap-4 mb-5">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border"
                            style={{
                              color: project.color,
                              borderColor: `${project.color}40`,
                              backgroundColor: `${project.color}10`,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-gray-500">
                            {project.year}
                          </span>
                        </div>
                        <span
                          className="text-4xl sm:text-5xl font-bold tracking-tighter leading-none opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                          style={{ color: project.color }}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <div
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-5 border transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundColor: `${project.color}10`,
                          borderColor: `${project.color}30`,
                        }}
                      >
                        {project.icon}
                      </div>

                      <h3 className="relative text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-tight">
                        {project.title}
                      </h3>

                      <div
                        className="relative h-[2px] w-12 mb-4 rounded-full group-hover:w-24 transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${project.color}, transparent)`,
                        }}
                      />

                      <p className="relative text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-5 flex-1">
                        {project.description}
                      </p>

                      <div className="relative flex items-center gap-2 mb-3">
                        <span className="text-purple-400 font-mono text-xs">$</span>
                        <span className="text-gray-500 font-mono text-[11px]">
                          ls dependencies/
                        </span>
                      </div>

                      <div className="relative flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono text-gray-400 border border-white/[0.08] rounded bg-white/[0.02]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="relative flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            <Github size={12} />
                            code
                          </a>
                          <a
                            href="#"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={12} />
                            live
                          </a>
                        </div>

                        <span className="text-[10px] font-mono text-gray-600">
                          ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            onClick={shuffleDeck}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-12 sm:mt-16 inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300"
          >
            <RotateCw
              size={14}
              className="text-purple-400 group-hover:rotate-180 transition-transform duration-500"
            />
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">
              $ shuffle --next
            </span>
            <span className="text-[10px] font-mono text-gray-600">
              [{projects.length}]
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[10px] font-mono text-gray-600 mt-4 tracking-widest uppercase"
          >
            click to shuffle deck
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/janhavirai19"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300"
          >
            <Github size={14} className="text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
              git clone github.com/janhavirai19
            </span>
            <ArrowUpRight
              size={12}
              className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;