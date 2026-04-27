/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkle, Disc } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-48 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
      {/* Decorative Blocks Left */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-3 gap-2 opacity-100">
        <Block className="bg-white shadow-sm" delay={0.1} />
        <Block className="bg-brand-green shadow-green-200" delay={0.2}>
          <Sparkle className="w-6 h-6 text-brand-navy" fill="currentColor" />
        </Block>
        <div />
        <Block className="bg-white shadow-sm" delay={0.3} />
        <Block className="bg-white shadow-sm" delay={0.4} />
        <Block className="bg-white shadow-sm" delay={0.5} />
        <div />
        <Block className="bg-brand-yellow shadow-yellow-200" delay={0.6}>
          <Disc className="w-6 h-6 text-brand-navy" />
        </Block>
        <Block className="bg-white shadow-sm" delay={0.7} />
      </div>

      {/* Decorative Blocks Right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-3 gap-2">
        <div />
        <Block className="bg-white shadow-sm" delay={0.15} />
        <Block className="bg-white shadow-sm" delay={0.25} />
        <Block className="bg-white shadow-sm" delay={0.35} />
        <Block className="bg-brand-green shadow-green-200" delay={0.45}>
           <Sparkle className="w-6 h-6 text-brand-navy" fill="currentColor" />
        </Block>
        <Block className="bg-white shadow-sm" delay={0.55} />
        <div />
        <Block className="bg-white shadow-sm" delay={0.65} />
        <Block className="bg-brand-yellow shadow-yellow-200" delay={0.75}>
          <Disc className="w-6 h-6 text-brand-navy" />
        </Block>
      </div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-navy max-w-4xl leading-[0.9]"
      >
        Elevate your brand in Assam
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg md:text-xl text-brand-navy/60 max-w-lg font-medium leading-relaxed"
      >
        Your premium digital marketing partner for real results and data-driven growth.
      </motion.p>
      
      <motion.button 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 bg-brand-navy text-white px-10 py-4 rounded-[1.5rem] font-bold text-lg hover:shadow-xl transition-shadow"
      >
        Get Started
      </motion.button>
    </section>
  );
}

function Block({ className, children, delay = 0 }: { className: string, children?: React.ReactNode, delay?: number }) {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
