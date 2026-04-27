/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Jonali Das",
      role: "E-commerce Owner",
      text: "Admsllp transformed our online presence in Guwahati. Our sales have increased significantly after their SEO campaign.",
    },
    {
      name: "Bikash Borah",
      role: "Local Business Owner",
      text: "The best digital marketing agency in Assam. They understood our local market and delivered exactly what was promised.",
    },
    {
      name: "Rita Sharma",
      role: "Marketing Head",
      text: "Their data-driven approach to social media marketing is unmatched. Highly professional and results-oriented.",
    }
  ];

  return (
    <section className="px-6 py-24 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Trusted by the best</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-navy/5"
            >
              <p className="text-brand-navy/70 leading-relaxed font-medium mb-6 italic">"{rev.text}"</p>
              <div>
                <p className="font-bold text-brand-navy">{rev.name}</p>
                <p className="text-xs text-brand-navy/40 font-bold uppercase tracking-wider">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
