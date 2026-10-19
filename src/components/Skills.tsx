"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "databases", label: "Databases", icon: Database },
    { id: "tools", label: "Tools & DevOps", icon: Wrench },
  ];

  const getFilteredCategories = () => {
    if (activeTab === "all") return skills;
    if (activeTab === "frontend") return skills.filter((s) => s.category.includes("Frontend"));
    if (activeTab === "backend") return skills.filter((s) => s.category.includes("Backend"));
    if (activeTab === "databases") return skills.filter((s) => s.category.includes("Databases"));
    if (activeTab === "tools") return skills.filter((s) => s.category.includes("Tools"));
    return skills;
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Tech Stack &amp; <span className="text-gradient">Specializations</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Modern tools and technologies I leverage daily to engineer full-stack web applications.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === cat.id
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-12">
          {getFilteredCategories().map((categoryGroup, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {categoryGroup.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-indigo-400 hidden sm:inline-block">
                  {categoryGroup.skills.length} competencies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-4 rounded-xl border transition-all ${
                      skill.highlight
                        ? "bg-slate-900/90 border-indigo-500/40 shadow-sm hover:border-indigo-400"
                        : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-white">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 mb-3">
                      {skill.experience}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? "bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
                            : "bg-indigo-500/80"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Banner */}
        <div className="mt-14 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Constantly Evolving With Modern Standards
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Currently actively building with React 19, Next.js 15 Server Components, modern Auth adapters, and high-performance MongoDB indexing patterns.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30"
          >
            See Them In Action
          </a>
        </div>
      </div>
    </section>
  );
}
