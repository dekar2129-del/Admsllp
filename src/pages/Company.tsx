/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Company() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-brand-navy mb-8">
          Helping Assam Grow.
        </h1>
        <p className="text-xl md:text-2xl text-brand-navy/60 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
          Admsllp is a digital marketing agency born and raised in Assam. We believe in the power of local businesses and aim to bring them to the global stage.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-brand-navy text-white p-16 rounded-[3rem] text-left">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-white/50 leading-relaxed font-medium">To provide clarity in a world of complex financial noise through elegant design and powerful AI analysis.</p>
        </div>
        <div className="bg-brand-green p-16 rounded-[3rem] text-left">
          <h3 className="text-3xl font-bold mb-4">Our Values</h3>
          <p className="text-brand-navy/60 leading-relaxed font-medium">Transparency, privacy-first engineering, and radical accessibility for the next generation of builders.</p>
        </div>
      </div>
    </div>
  );
}
