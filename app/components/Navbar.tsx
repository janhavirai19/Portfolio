"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/70 backdrop-blur-2xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="relative flex items-baseline gap-1.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-bold text-white tracking-tight">
              Janhavi
            </span>
            <span className="text-lg font-light text-gray-400 tracking-tight">
              Rai
            </span>
            <span className="w-1 h-1 rounded-full bg-purple-400 ml-0.5 mb-1 group-hover:animate-pulse" />
          </motion.a>

          <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/janhavirai19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/janhavi-rai-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
            >
              <Linkedin size={15} />
            </a>
            <motion.a
              href="/janhavi.pdf"
              download="Janhavi_Rai_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-full backdrop-blur-xl transition-all duration-300"
            >
              <Download size={13} />
              Resume
            </motion.a>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 md:hidden bg-[#0a0a1a]/95 backdrop-blur-2xl border-b border-white/[0.08]"
          >
            <div className="px-6 py-6 flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-white bg-white/[0.05]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-5 mt-3 border-t border-white/[0.08] flex flex-col space-y-4"
              >
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/janhavirai19"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] transition-colors"
                  >
                    <Github size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/janhavi-rai-dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] transition-colors"
                  >
                    <Linkedin size={17} />
                  </a>
                </div>
                <a
                  href="/janhavi.pdf"
                  download="Janhavi_Rai_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl transition-all"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;