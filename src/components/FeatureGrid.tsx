/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Apple, Triangle, ArrowUp, Circle } from "lucide-react";

export default function FeatureGrid() {
  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Performance Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-brand-green rounded-[2.5rem] p-8 aspect-square flex flex-col justify-between relative overflow-hidden"
      >
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">₹1.2L+</span>
            <span className="text-brand-navy/60 font-semibold flex items-center gap-1">
              Monthly ROI <ArrowUp className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="relative h-24 w-full">
           <svg viewBox="0 0 100 40" className="w-full h-full text-brand-navy">
             <motion.path
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               d="M0,35 Q10,35 20,25 T40,20 T60,30 T80,25 T100,35"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
             />
             <motion.circle 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="100" cy="35" r="2" fill="currentColor" 
             />
           </svg>
        </div>

        <h3 className="text-3xl font-bold leading-[1.1] tracking-tight max-w-[200px]">
          Scale your business with Admsllp!
        </h3>

        {/* Decorative Circle */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-[16px] border-black/5 rounded-full" />
      </motion.div>

      {/* Portfolio Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-brand-navy rounded-[2.5rem] p-8 aspect-square flex flex-col justify-between text-white"
      >
        <h3 className="text-4xl font-bold leading-[1.1] tracking-tight text-center mt-4">
          Choose the strategy you need.
        </h3>

        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-full p-2 pr-6 flex items-center gap-4 text-brand-navy w-fit self-start">
             <div className="bg-brand-navy text-white rounded-full p-2">
               <Apple className="w-6 h-6" fill="currentColor" />
             </div>
             <div>
               <div className="font-bold">SEO Ads</div>
               <div className="text-[10px] opacity-40 font-bold">₹25,000/mo</div>
             </div>
          </div>
          
          <div className="bg-white rounded-full p-2 pr-6 flex items-center gap-4 text-brand-navy w-fit self-end mr-4">
             <div className="bg-black text-white rounded-full p-2 overflow-hidden flex items-center justify-center">
               <div className="w-6 h-6 bg-white rounded-full scale-[0.6] flex items-center justify-center">
                  <div className="w-full h-full bg-black rotate-45 scale-x-[0.2]" />
               </div>
             </div>
             <div>
               <div className="font-bold">Social</div>
               <div className="text-[10px] opacity-40 font-bold">₹15,000/mo</div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Community Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-brand-yellow rounded-[2.5rem] p-8 aspect-square flex flex-col justify-between relative overflow-hidden"
      >
        <h3 className="text-3xl font-bold leading-[1.1] tracking-tight text-center max-w-[240px] mx-auto mt-4 px-2">
          Trusted by businesses in Assam
        </h3>

        <div className="flex flex-col items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                alt="user"
                className="w-12 h-12 rounded-full border-4 border-brand-yellow bg-white"
              />
            ))}
          </div>

          <button className="bg-white text-brand-navy px-8 py-2.5 rounded-full font-bold text-sm shadow-sm">
            Get Proposal
          </button>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 border-[20px] border-black/5 rounded-full" />
      </motion.div>
    </section>
  );
}
