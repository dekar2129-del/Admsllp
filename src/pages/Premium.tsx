/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export default function Premium() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 p-4 bg-brand-yellow rounded-full"
        >
          <Sparkles className="w-8 h-8 text-brand-navy" fill="currentColor" />
        </motion.div>
        <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-brand-navy leading-[0.8] mb-8">
          Go Premium.
        </h1>
        <p className="text-lg text-brand-navy/50 font-bold uppercase tracking-widest">Unlock institutional features</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-12 rounded-[3.5rem] border-4 border-brand-navy flex flex-col justify-between">
          <div>
            <div className="bg-brand-navy text-white w-fit px-4 py-1 rounded-full text-xs font-bold mb-6">PRO PLAN</div>
            <h3 className="text-5xl font-bold mb-2">₹14,999<span className="text-xl text-brand-navy/30">/mo</span></h3>
            <ul className="space-y-4 mt-8">
              {["Full SEO Audit", "Weekly Content Strategy", "Ad Campaign Management", "Monthly Growth Reports"].map(f => (
                <li key={f} className="flex items-center gap-3 font-medium text-brand-navy/70">
                  <div className="bg-brand-green rounded-full p-1"><Check className="w-3 h-3 text-brand-navy" strokeWidth={3} /></div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-brand-navy text-white py-5 rounded-[2rem] font-bold text-xl mt-12 hover:scale-[1.02] transition-transform">
            Get Started
          </button>
        </div>

        <div className="bg-brand-green p-12 rounded-[3.5rem] flex flex-col justify-between items-center text-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 mt-8">Invite-only access</h3>
            <p className="text-brand-navy/60 font-medium leading-relaxed">Early community members get lifetime premium discounts and priority seat access.</p>
          </div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">50%</div>
          </div>
          <p className="font-bold uppercase tracking-widest text-[10px] opacity-40">Limited time offer</p>
        </div>
      </div>
    </div>
  );
}
