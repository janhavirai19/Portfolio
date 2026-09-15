"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  TrendingUp,
  Code2,
  BarChart3,
  Award,
  Brain,
  ShieldCheck,
  ExternalLink,
  Lock,
  Boxes,
  Globe,
  LineChart,
  ChevronLeft,
  ChevronRight,
  Folder,
  Circle,
  Terminal,
} from "lucide-react";

const Experience = () => {
  const certScrollRef = useRef<HTMLDivElement>(null);

  const experiencePairs = [
    {
      left: {
        title: "Web Developer Intern",
        company: "Digital Learning",
        location: "Remote",
        period: "3 Months",
        type: "Internship",
        color: "#8B5CF6",
        icon: Code2,
        description: [
          "Built responsive web interfaces using React and Tailwind CSS",
          "Collaborated with the design team to convert Figma designs into pixel-perfect pages",
          "Worked on real client projects and improved site performance",
        ],
        skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
      },
      right: {
        title: "Power BI Intern",
        company: "Power BI Program",
        location: "Remote",
        period: "1 Month",
        type: "Internship",
        color: "#F2C811",
        icon: BarChart3,
        description: [
          "Created dynamic dashboards and data visualizations using Power BI",
          "Connected multiple data sources and built data models with DAX",
          "Delivered a capstone dashboard project on business KPIs",
        ],
        skills: ["Power BI", "DAX", "Data Modeling", "Visualization"],
      },
    },
  ];

  const certifications = [
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      period: "Jun 2025",
      color: "#8B5CF6",
      icon: Brain,
      link: "#",
    },
    {
      title: "Introduction to Responsible AI",
      issuer: "Google Cloud",
      period: "Jun 2025",
      color: "#3B82F6",
      icon: ShieldCheck,
      link: "#",
    },
    {
      title: "Angular Certification",
      issuer: "Angular Program",
      period: "2024",
      color: "#DD0031",
      icon: Boxes,
      link: "#",
    },
    {
      title: "Cyber Security Fundamentals",
      issuer: "Security Program",
      period: "2024",
      color: "#10B981",
      icon: Lock,
      link: "#",
    },
    {
      title: "Web Development",
      issuer: "Update Issuer",
      period: "2024",
      color: "#06B6D4",
      icon: Globe,
      link: "#",
    },
    {
      title: "R Programming",
      issuer: "Update Issuer",
      period: "2024",
      color: "#276DC3",
      icon: LineChart,
      link: "#",
    },
  ];

  const scrollCerts = (direction: "left" | "right") => {
    if (certScrollRef.current) {
      const scrollAmount = 320;
      certScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderCard = (exp: any) => (
    <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40 h-full">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <Circle size={10} className="fill-red-500 text-red-500" />
          <Circle size={10} className="fill-yellow-500 text-yellow-500" />
          <Circle size={10} className="fill-green-500 text-green-500" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2">
          <Folder size={10} style={{ color: exp.color }} />
          <span className="text-[10px] text-gray-500 font-mono">
            ~/experience/{exp.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <div className="w-8" />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 font-mono text-xs">$</span>
          <span className="text-gray-500 font-mono text-[11px]">
            cat position.json
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center border flex-shrink-0"
            style={{
              backgroundColor: `${exp.color}15`,
              borderColor: `${exp.color}40`,
            }}
          >
            <exp.icon size={18} style={{ color: exp.color }} />
          </div>

          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase border"
            style={{
              borderColor: `${exp.color}40`,
              backgroundColor: `${exp.color}10`,
              color: exp.color,
            }}
          >
            <Calendar size={9} />
            {exp.period}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 font-mono">
          {exp.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Briefcase size={11} style={{ color: exp.color }} />
            {exp.company}
          </span>
          <span className="flex items-center gap-1.5 text-gray-500">
            <MapPin size={10} />
            {exp.location}
          </span>
        </div>

        <span
          className="inline-block px-2 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase mb-4"
          style={{
            backgroundColor: `${exp.color}15`,
            color: exp.color,
          }}
        >
          {exp.type}
        </span>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-purple-400 font-mono text-[11px]">$</span>
          <span className="text-gray-500 font-mono text-[10px]">
            cat responsibilities.txt
          </span>
        </div>

        <ul className="space-y-1.5 mb-4 pl-3 border-l border-white/[0.06]">
          {exp.description.map((item: string, i: number) => (
            <li
              key={i}
              className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-mono flex items-start gap-2"
            >
              <span
                className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: exp.color }}
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-purple-400 font-mono text-[11px]">$</span>
          <span className="text-gray-500 font-mono text-[10px]">
            ls skills/
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
          {exp.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-1.5 py-0.5 text-[9px] font-mono tracking-wide text-gray-400 border border-white/[0.08] rounded bg-white/[0.02]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0a0a1a] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />
        <motion.div
          className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-5" />

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-mono">
            $ git log --author="janhavi" --oneline
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-pink-500/30 to-blue-500/40" />

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 z-10"
              style={{
                boxShadow: "0 0 12px #a855f7, 0 0 4px #a855f7",
              }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {experiencePairs.map((pair, pairIndex) => (
              <motion.div
                key={pairIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: pairIndex * 0.15 }}
                className="relative"
              >
                <div className="hidden sm:block absolute left-1/2 top-6 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: pairIndex * 0.15 + 0.2,
                      type: "spring",
                    }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md bg-purple-500/60"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative w-6 h-6 rounded-full border-2 border-purple-400 bg-[#0a0a1a] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                  </motion.div>
                </div>

                <div className="hidden sm:grid grid-cols-2 gap-8">
                  <div className="pr-12">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: pairIndex * 0.15 + 0.1 }}
                    >
                      {renderCard(pair.left)}
                    </motion.div>
                  </div>

                  <div className="pl-12">
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: pairIndex * 0.15 + 0.2 }}
                    >
                      {renderCard(pair.right)}
                    </motion.div>
                  </div>
                </div>

                <div className="sm:hidden space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-6">
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 rounded-full blur-md bg-purple-500/60"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative w-5 h-5 rounded-full border-2 border-purple-400 bg-[#0a0a1a] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">{renderCard(pair.left)}</div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-6">
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 rounded-full blur-md bg-yellow-500/60"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <div className="relative w-5 h-5 rounded-full border-2 border-yellow-400 bg-[#0a0a1a] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">{renderCard(pair.right)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 sm:mt-32"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div className="text-center sm:text-left">


              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                <span className="text-white">Certifi</span>
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  cations
                </span>
              </h3>

              <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 sm:mx-0 mx-auto" />

              <p className="text-gray-500 text-xs max-w-md font-mono">
                $ find ./certificates -type verified
              </p>
            </div>

            <div className="flex items-center gap-2 justify-center sm:justify-end">
              <button
                onClick={() => scrollCerts("left")}
                className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollCerts("right")}
                className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={certScrollRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          >
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex-shrink-0 w-[280px] snap-start rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40 hover:border-white/[0.15] transition-colors duration-300"
              >
                <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border-b border-white/[0.06]">
                  <div className="flex items-center gap-1">
                    <Circle size={9} className="fill-red-500 text-red-500" />
                    <Circle size={9} className="fill-yellow-500 text-yellow-500" />
                    <Circle size={9} className="fill-green-500 text-green-500" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1.5">
                    <Terminal size={9} className="text-gray-500" />
                    <span className="text-[9px] text-gray-500 font-mono">
                      ~/certificates
                    </span>
                  </div>
                  <div className="w-6" />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 font-mono text-[10px]">$</span>
                    <span className="text-gray-500 font-mono text-[9px]">
                      view {cert.issuer.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0"
                      style={{
                        backgroundColor: `${cert.color}15`,
                        borderColor: `${cert.color}40`,
                      }}
                    >
                      <cert.icon size={16} style={{ color: cert.color }} />
                    </div>

                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase border"
                      style={{
                        borderColor: `${cert.color}40`,
                        backgroundColor: `${cert.color}10`,
                        color: cert.color,
                      }}
                    >
                      <Calendar size={8} />
                      {cert.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white tracking-tight mb-1.5 leading-snug min-h-[2.5rem] font-mono">
                    {cert.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-3 font-mono">
                    <Award size={10} style={{ color: cert.color }} />
                    {cert.issuer}
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06]">
                    <span className="text-[9px] font-mono tracking-wider uppercase text-gray-500">
                      ✓ verified
                    </span>
                    <ExternalLink
                      size={11}
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-center text-[10px] text-gray-600 mt-2 font-mono tracking-widest uppercase">
            ← scroll to explore →
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl">
            <TrendingUp size={12} className="text-blue-400" />
            <span className="text-[10px] font-mono text-gray-400">
              <span className="text-purple-400">$</span> echo{" "}
              <span className="text-gray-400">"journey continues..."</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xs text-gray-500 mt-16 font-mono"
        >
          <span className="text-purple-400">$</span> status --open-to-work
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes soft-float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes soft-float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        :global(.animate-soft-float-1) {
          animation: soft-float-1 14s ease-in-out infinite;
        }
        :global(.animate-soft-float-2) {
          animation: soft-float-2 16s ease-in-out infinite;
        }
        :global(.scrollbar-hide) {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        :global(.scrollbar-hide::-webkit-scrollbar) {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;