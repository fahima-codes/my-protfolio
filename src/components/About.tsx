"use client";

import { portfolioData } from "@/data/portfolioData";
import { Check, User, MapPin, Mail, Phone, Calendar, Code, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const quickDetails = [
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: Mail, label: "Email", value: personal.email },
    { icon: Phone, label: "Phone", value: personal.phone },
    { icon: Calendar, label: "Status", value: personal.status },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering robust web products with <span className="text-gradient">modern code</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Bridging client-side aesthetics with resilient, scalable backend infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Philosophy Cards */}
            <div className="pt-4 space-y-3">
              <h3 className="text-white font-semibold text-base sm:text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-400" />
                How I Build Software:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {personal.corePhilosophy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all"
                  >
                    <div className="text-indigo-400 font-bold text-xs mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {item.title}
                    </div>
                    <p className="text-slate-400 text-xs leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Highlights */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                Developer Profile Snapshot
              </h3>

              <div className="space-y-4">
                {quickDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div key={index} className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5 border border-indigo-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-400 uppercase font-medium tracking-wider">
                          {detail.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-200 truncate mt-0.5">
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Specializations list */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  Core Specializations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "MERN Architecture",
                    "Next.js App Router",
                    "REST API Design",
                    "MongoDB & Mongoose",
                    "JWT Auth Security",
                    "Responsive UI/UX",
                    "Clean Code Practices"
                  ].map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all"
                >
                  <span>Let&apos;s Discuss Your Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
