"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const categories = [
    {
      title: "frontend",
      description: "crafting pixel-perfect interfaces",
      accent: "#3B82F6",
      skills: [
        { name: "React", short: "Re", color: "#61DAFB" },
        { name: "Next.js", short: "N", color: "#FFFFFF" },
        { name: "TypeScript", short: "TS", color: "#3178C6" },
        { name: "JavaScript", short: "JS", color: "#F7DF1E" },
        { name: "Tailwind CSS", short: "Tw", color: "#06B6D4" },
        { name: "Framer Motion", short: "Fm", color: "#E64BFF" },
      ],
    },
    {
      title: "backend",
      description: "building scalable systems",
      accent: "#8B5CF6",
      skills: [
        { name: "Node.js", short: "No", color: "#339933" },
        { name: "Python", short: "Py", color: "#3776AB" },
        { name: "PostgreSQL", short: "Pg", color: "#4169E1" },
        { name: "MongoDB", short: "Mo", color: "#47A248" },
        { name: "REST APIs", short: "Api", color: "#8B5CF6" },
        { name: "GraphQL", short: "Gql", color: "#E10098" },
      ],
    },
    {
      title: "tools & design",
      description: "workflow essentials",
      accent: "#EC4899",
      skills: [
        { name: "Docker", short: "Dk", color: "#2496ED" },
        { name: "Git", short: "Git", color: "#F05032" },
        { name: "Figma", short: "Fg", color: "#F24E1E" },
        { name: "VS Code", short: "Vs", color: "#007ACC" },
        { name: "Vercel", short: "Vc", color: "#FFFFFF" },
        { name: "Postman", short: "Pm", color: "#FF6C37" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#0a0a1a] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-blue-500/8 rounded-full blur-[120px] animate-soft-float-1" />
        <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/8 rounded-full blur-[120px] animate-soft-float-2" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
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
              skills / tech-stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Tech </span>
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-5" />

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light font-mono">
            $ cat tech-stack --list-all
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 border backdrop-blur-sm"
                  style={{
                    borderColor: `${category.accent}30`,
                    backgroundColor: `${category.accent}10`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: category.accent }}
                  />
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase"
                    style={{ color: category.accent }}
                  >
                    0{catIndex + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 font-mono">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light font-mono">
                  {category.description}
                </p>
              </div>

              <div className="relative">
                <div
                  className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 h-full opacity-40"
                  style={{
                    background: `linear-gradient(to bottom, ${category.accent}, transparent)`,
                  }}
                />

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-10"
                  style={{
                    backgroundColor: category.accent,
                    boxShadow: `0 0 12px ${category.accent}, 0 0 4px ${category.accent}`,
                  }}
                  animate={{
                    top: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: catIndex * 0.5,
                  }}
                />

                <div className="space-y-4 relative z-20">
                  {category.skills.map((skill, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: catIndex * 0.1 + index * 0.08,
                        }}
                        className={`relative flex items-center ${
                          isLeft ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`absolute top-1/2 h-[1px] ${
                            isLeft ? "right-1/2 mr-3" : "left-1/2 ml-3"
                          } w-12 opacity-30`}
                          style={{
                            background: `linear-gradient(${
                              isLeft ? "to right" : "to left"
                            }, transparent, ${skill.color})`,
                          }}
                        />

                        <div
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-10"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 8px ${skill.color}`,
                          }}
                        />

                        <div
                          className="group relative flex items-center gap-3 p-3 rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden w-[calc(50%-1.5rem)]"
                          style={{
                            marginRight: isLeft ? "1.5rem" : "0",
                            marginLeft: isLeft ? "0" : "1.5rem",
                          }}
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                            style={{ background: `${skill.color}10` }}
                          />

                          <div
                            className="relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold font-mono transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              color: skill.color,
                              border: `1px solid ${skill.color}30`,
                            }}
                          >
                            {skill.short}
                          </div>

                          <span className="relative text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 truncate font-mono">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: category.accent,
                    backgroundColor: "#0a0a1a",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl">
            <span className="text-[10px] font-mono text-gray-500">
              <span className="text-purple-400">$</span> echo{" "}
              <span className="text-gray-400">
                "always learning, always shipping"
              </span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>
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
      `}</style>
    </section>
  );
};

export default Skills;