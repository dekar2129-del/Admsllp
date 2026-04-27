/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Invest from "./pages/Invest";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import Premium from "./pages/Premium";

export type Page = "home" | "invest" | "resources" | "company" | "premium";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "invest": return <Invest />;
      case "resources": return <Resources />;
      case "company": return <Company />;
      case "premium": return <Premium />;
      default:
        return (
          <>
            <Hero />
            <FeatureGrid />
            <Stats />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen selection:bg-brand-green/30 bg-brand-offwhite">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {renderPage()}
      
      <footer className="py-20 border-t border-brand-navy/5 text-center px-6 bg-white/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 opacity-80">
            <span className="font-bold text-2xl tracking-tight text-brand-navy">Admsllp</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-brand-navy/40">
            <button onClick={() => setCurrentPage("invest")}>Services</button>
            <button onClick={() => setCurrentPage("resources")}>Blog</button>
            <button onClick={() => setCurrentPage("company")}>Privacy</button>
            <button onClick={() => setCurrentPage("company")}>Legal</button>
          </div>
          <p className="text-sm text-brand-navy/30 font-medium max-w-2xl leading-relaxed">
            &copy; 2024 Admsllp Digital Marketing. Helping businesses in Assam thrive in the digital age.
          </p>
          <p className="text-xs text-brand-navy/20 font-bold uppercase tracking-[0.2em]">
            Design by <a href="https://www.ozosoft.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">OZOSOFT</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
