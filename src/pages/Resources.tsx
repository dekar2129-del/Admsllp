/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookOpen, Newspaper, Play } from "lucide-react";

export default function Resources() {
  const articles = [
    { title: "Macro trends in 2024", type: "Article", time: "5 min", icon: BookOpen },
    { title: "Understanding ETFs", type: "Video", time: "12 min", icon: Play },
    { title: "Weekly Market Wrap", type: "News", time: "8 min", icon: Newspaper }
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-brand-navy mb-8">
          Market Intelligence
        </h1>
        <div className="flex justify-center gap-2 font-bold text-sm">
          <button className="bg-brand-navy text-white px-6 py-2 rounded-full">All Resources</button>
          <button className="bg-white text-brand-navy/50 px-6 py-2 rounded-full hover:bg-white/80">News</button>
          <button className="bg-white text-brand-navy/50 px-6 py-2 rounded-full hover:bg-white/80">Tutorials</button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art, i) => (
          <motion.div
            key={art.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-brand-navy/5 shadow-sm group cursor-pointer"
          >
            <div className="bg-brand-offwhite w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-green transition-colors">
              <art.icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">{art.type} &bull; {art.time}</span>
            <h3 className="text-2xl font-bold mt-2 leading-tight group-hover:text-brand-green transition-colors">{art.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
