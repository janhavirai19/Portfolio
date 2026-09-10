"use client";

import { Github, Linkedin, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-gray-400 text-sm mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            {[Github, Linkedin, Twitter, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart size={14} className="text-red-500 mx-1 fill-red-500" /> by
              <span className="text-white ml-1">Your Name</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;