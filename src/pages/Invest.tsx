/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, Zap, Target } from "lucide-react";

export default function Invest() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="bg-brand-green/20 text-brand-navy px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
          Our Services
        </span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-brand-navy">
          Drive your growth.
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Search Engine Optimization", desc: "Rank higher on Google and get found by your customers in Assam.", color: "bg-brand-green" },
          { icon: Zap, title: "Social Media Ads", desc: "Reach your target audience where they hang out with high-converting ads.", color: "bg-brand-yellow" },
          { icon: Shield, title: "Brand Identity", desc: "We craft unique brand stories that resonate with your local audience.", color: "bg-white" }
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${item.color} p-10 rounded-[3rem] shadow-sm border border-brand-navy/5`}
          >
            <item.icon className="w-12 h-12 mb-8 text-brand-navy" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
            <p className="text-brand-navy/60 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
