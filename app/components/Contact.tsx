"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Send, Terminal, Circle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [output, setOutput] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setOutput([
      `> Sending message from ${formData.name}...`,
      `> Email: ${formData.email}`,
      `> ✓ Message delivered successfully!`,
      `> I'll get back to you within 24 hours.`,
    ]);

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setOutput([]), 6000);
  };

  const contacts = [
    {
      icon: Mail,
      label: "email",
      value: "janhavirai932@gmail.com",
      href: "janhavirai932@gmail.com",
    },
    {
      icon: Phone,
      label: "phone",
      value: "+91 980000000",
      href: "tel:+9198000000",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Pune, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Open a terminal session and say hello
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0d0d1f] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <Circle size={11} className="fill-red-500 text-red-500" />
              <Circle size={11} className="fill-yellow-500 text-yellow-500" />
              <Circle size={11} className="fill-green-500 text-green-500" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <Terminal size={13} className="text-gray-500" />
              <span className="text-xs text-gray-500 font-mono">
                janhavi@portfolio: ~/contact
              </span>
            </div>
            <div className="w-12" />
          </div>

          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-xs font-mono text-purple-400 mb-4">
                $ whoami --contact
              </p>

              <div className="space-y-3 mb-6">
                {contacts.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                  >
                    <item.icon
                      size={14}
                      className="text-gray-500 group-hover:text-purple-400 mt-0.5 flex-shrink-0 transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono text-gray-600 uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-300 font-mono break-all group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-xs font-mono text-purple-400 mb-3">
                $ ls ./socials
              </p>

              <div className="space-y-2">
                <a
                  href="https://github.com/janhavirai19"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                >
                  <Github size={14} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                  <span className="text-xs text-gray-300 font-mono group-hover:text-white transition-colors">
                    github.com/janhavirai19
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/janhavi-rai-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                >
                  <Linkedin size={14} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                  <span className="text-xs text-gray-300 font-mono group-hover:text-white transition-colors">
                    linkedin.com/in/janhavi
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 p-6 sm:p-7">
              <p className="text-xs font-mono text-purple-400 mb-4">
                $ ./send-message.sh
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-[11px] font-mono text-gray-500 mb-1.5">
                    <span className="text-purple-400">→</span>
                    <span>name:</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-black/30 border border-white/10 rounded-md text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors text-sm font-mono"
                    placeholder="your_name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[11px] font-mono text-gray-500 mb-1.5">
                    <span className="text-purple-400">→</span>
                    <span>email:</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-black/30 border border-white/10 rounded-md text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors text-sm font-mono"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[11px] font-mono text-gray-500 mb-1.5">
                    <span className="text-purple-400">→</span>
                    <span>message:</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-black/30 border border-white/10 rounded-md text-white placeholder-gray-700 focus:border-purple-500/60 focus:outline-none transition-colors resize-none text-sm font-mono"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white text-sm font-mono font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={14} />
                  <span>execute --send</span>
                </button>
              </form>

              {output.length > 0 && (
                <div className="mt-5 p-3 rounded-md border border-green-500/20 bg-green-500/5">
                  {output.map((line, i) => (
                    <p
                      key={i}
                      className="text-xs font-mono text-green-400 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;