/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Is Univest safe for large portfolios?", a: "Yes, we use bank-level AES-256 encryption and follow strict compliance standards." },
    { q: "What markets can I invest in?", a: "We support US Equities, major ETFs, and international markets including LSE and Euronext." },
    { q: "How do real-time insights work?", a: "Our AI engine analyzes global news and market movements to provide tailored summaries." }
  ];

  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight text-center mb-12">Questions?</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group"
          >
            <details className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-navy/5">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-bold text-lg text-brand-navy">
                {faq.q}
                <Plus className="w-5 h-5 text-brand-navy/30 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-brand-navy/60 font-medium">
                {faq.a}
              </div>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
