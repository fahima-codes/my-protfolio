"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Award, MapPin, Milestone } from "lucide-react";

export default function Timeline() {
  const { timeline } = portfolioData;

  const iconMap = {
    work: Briefcase,
    education: GraduationCap,
    achievement: Award,
  };

  return (
    <section id="timeline" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; <span className="text-gradient">Milestones</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            My track record of continuous learning, certifications, and hands-on web development.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
          {timeline.map((item, index) => {
            const Icon = iconMap[item.type] || Briefcase;
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline node icon */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500/80 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-950 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mt-1 mb-4">
                    <span className="font-medium text-slate-300">{item.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
