/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto bg-brand-navy text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter leading-[0.9]">Start your journey today.</h2>
            <p className="mt-6 text-white/50 text-xl font-medium">Join our 2M+ community and experience the future of digital marketing.</p>
            <div className="mt-8 flex items-center gap-3 text-brand-green">
              <div className="bg-brand-green/20 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <a href="tel:1800-889-0140" className="text-2xl font-bold hover:underline">1800-889-0140</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all font-medium"
            />
            <button className="w-full bg-brand-green text-brand-navy py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all">
              Join Waitlist <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]" />
      </div>
    </section>
  );
}
