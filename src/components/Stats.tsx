/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { label: "Satisfied Clients", value: "250+" },
    { label: "Campaigns Run", value: "1.5K+" },
    { label: "Local Impact", value: "Assam" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <h4 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-brand-navy/50 font-medium text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
