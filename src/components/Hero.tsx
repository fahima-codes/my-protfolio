"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import {
  Mail,
  ArrowRight,
  Download,
  Terminal,
  Database,
  Server,
  Layers,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Radiant glow orbs in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building scalable <br />
              <span className="text-gradient">MERN &amp; Next.js</span> <br />
              web applications.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personal.tagline}
            </p>

            {/* Tech Pill highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["React 19", "Next.js 15", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs font-medium text-slate-400">Connect:</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Avatar & Interactive Code Terminal Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Premium Round Avatar Showcase */}
            <div className="relative mb-6 sm:mb-8 group">
              {/* Radiant Ambient Glow Behind Avatar */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-60 blur-xl group-hover:opacity-90 group-hover:blur-2xl transition-all duration-500" />
              
              {/* Outer decorative ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-white/90 via-indigo-200/50 to-white/90 shadow-2xl shadow-indigo-950/80">
                {/* Round Shape Image with White Border and Shadow */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                  <Image
                    src="/saniya.jpg"
                    alt={personal.name}
                    width={220}
                    height={220}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/95 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Work</span>
              </div>
            </div>

            {/* Interactive Code Terminal Card */}
            <div className="relative w-full mx-auto max-w-lg">
              {/* Decorative gradient border wrap */}
              <div className="rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-cyan-500/40 shadow-2xl shadow-indigo-950/60">
                <div className="rounded-[15px] bg-[#0c1222] p-5 sm:p-6 border border-slate-800/80">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                        developer.config.ts
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>

                  {/* Terminal Code Content */}
                  <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 overflow-x-auto leading-relaxed">
                    <p className="text-slate-400">
                      <span className="text-purple-400">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-cyan-300">&quot;{personal.name}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      role: <span className="text-emerald-300">&quot;Full-Stack / MERN Developer&quot;</span>,
                    </p>
                    <p className="pl-4">
                      coreStack: [
                      <span className="text-cyan-300">&quot;MongoDB&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Express&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
                      <span className="text-cyan-300">&quot;Node.js&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      frameworks: [<span className="text-indigo-300">&quot;Next.js App Router&quot;</span>, <span className="text-indigo-300">&quot;Tailwind CSS&quot;</span>],
                    </p>
                    <p className="pl-4">
                      database: <span className="text-amber-300">&quot;MongoDB + Mongoose ODM&quot;</span>,
                    </p>
                    <p className="pl-4">
                      authSecurity: [<span className="text-emerald-300">&quot;JWT&quot;</span>, <span className="text-emerald-300">&quot;Bcrypt&quot;</span>, <span className="text-emerald-300">&quot;Better-Auth&quot;</span>],
                    </p>
                    <p className="pl-4">
                      openToWork: <span className="text-indigo-400">true</span>,
                    </p>
                    <p className="pl-4">
                      codeQuality: <span className="text-cyan-300">&quot;Clean, Modular, Tested&quot;</span>
                    </p>
                    <p className="text-slate-400">&#125;;</p>
                    <div className="pt-2 text-slate-400 flex items-center gap-2">
                      <span className="text-indigo-400">&gt;</span>
                      <span className="text-slate-300 animate-pulse">npm run dev:portfolio</span>
                    </div>
                  </div>

                  {/* Interactive Status Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Ready for production</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Clean code architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 text-center group hover:border-indigo-500/40 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
