"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const lines = [
    { cmd: "whoami", output: "Janhavi Rai" },
    { cmd: "status", output: "open to work" },
    { cmd: "location", output: "Pune, India" },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 800);
    return () => clearTimeout(timer);
  }, [visibleLines, lines.length]);

  return (
    <footer className="relative bg-[#0a0a1a] border-t border-white/[0.08] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[150px] bg-purple-500/8 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-14 sm:py-16">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d1f]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[11px] text-gray-500 font-mono">
                janhavi@portfolio: ~/footer
              </span>
            </div>
            <div className="w-12" />
          </div>

          <div className="p-6 sm:p-8 font-mono text-sm space-y-4 min-h-[180px]">
            {lines.map((line, i) => (
              <div
                key={line.cmd}
                className={`transition-opacity duration-500 ${
                  i < visibleLines ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">$</span>
                  <span className="text-gray-400">{line.cmd}</span>
                </div>
                <div className="pl-4 mt-1 text-gray-300">
                  <span className="text-gray-600">→</span>{" "}
                  <span
                    className={
                      line.cmd === "status"
                        ? "text-green-400"
                        : line.cmd === "whoami"
                        ? "text-white font-medium"
                        : "text-gray-300"
                    }
                  >
                    {line.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-gray-600">
          <p>
            &copy; {currentYear} <span className="text-gray-500">Janhavi Rai</span>
          </p>
          <p>
            <span className="text-purple-400/60">$</span> echo &quot;thanks for
            scrolling&quot;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;