/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import type { Page } from "../App";

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const links: { id: Page; label: string; italic?: boolean }[] = [
    { id: "invest", label: "Invest" },
    { id: "resources", label: "Resources" },
    { id: "company", label: "Company" },
    { id: "premium", label: "Premium", italic: true },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center justify-between shadow-sm">
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 pl-2 cursor-pointer group"
        >
          <div className="bg-brand-navy rounded-full p-1.5 text-white group-hover:scale-110 transition-transform">
            <Globe className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Admsllp</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/70">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`hover:text-brand-navy transition-all relative ${
                currentPage === link.id ? "text-brand-navy" : ""
              } ${link.italic ? "italic opacity-50" : ""}`}
            >
              {link.id === "invest" ? "Services" : link.label}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate("premium")}
          className="bg-brand-navy text-white text-sm px-6 py-2.5 rounded-full font-semibold whitespace-nowrap hover:bg-brand-navy/90 transition-all"
        >
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
