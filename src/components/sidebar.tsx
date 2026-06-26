"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { sidebarData } from "@/lib/data";
import Noise from "@/components/Noise";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05050a]/72 py-5 font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 hover:text-[#c6a9ff] transition-colors">
          <span className="text-base font-bold tracking-[-0.04em]" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            Ram
          </span>
          <span className="hidden sm:inline text-white/30">/ dev</span>
        </a>
        <nav className="flex items-center gap-5">
          <a href="#work" className="hover:text-[#c6a9ff] transition-colors">Work</a>
          <a href="#projects" className="hover:text-[#c6a9ff] transition-colors">Projects</a>
          <a href="#posts" className="hover:text-[#c6a9ff] transition-colors">Posts</a>
          <a href="https://github.com/Bram-cat" target="_blank" rel="noreferrer" className="hover:text-[#c6a9ff] transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export function PageHeader() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-24">
      <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
        <div className="space-y-5">
          <p className="kicker" style={{ animation: "reveal-up 0.6s both" }}>
            Developer · agent-native tools
          </p>
          <h1
            className="max-w-4xl text-6xl font-semibold leading-[0.86] tracking-[-0.105em] text-white sm:text-7xl lg:text-[7rem]"
            style={{ animation: "reveal-up 0.6s 0.1s both" }}
          >
            {sidebarData.name}
            <span className="serif-hit text-[#c6a9ff]">.</span>
          </h1>
          <p
            className="max-w-xl text-lg leading-8 text-white/68"
            style={{ animation: "reveal-up 0.6s 0.2s both" }}
          >
            {sidebarData.tagline}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-3"
          style={{ animation: "reveal-up 0.6s 0.3s both" }}
        >
          <a
            href="#projects"
            className="pixel-button inline-flex items-center gap-2 border border-[#9b5cff]/60 px-5 py-3 text-sm font-semibold text-[#c6a9ff]"
          >
            <span className="pixel-text">
              <span className="pixel-text__sizer">View projects</span>
              <span className="pixel-text__label">View projects</span>
            </span>
          </a>
          <a
            href="https://github.com/Bram-cat"
            target="_blank"
            rel="noreferrer"
            className="pixel-button inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold text-white/72"
          >
            <span className="pixel-text">
              <span className="pixel-text__sizer">GitHub</span>
              <span className="pixel-text__label">GitHub</span>
            </span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div
          className="border-t border-white/10 pt-5"
          style={{ animation: "reveal-up 0.6s 0.4s both" }}
        >
          <p className="max-w-lg text-sm leading-7 text-white/54">
            Currently: {sidebarData.current.join(" · ")}
          </p>
        </div>
      </div>

      {/* Hero visual plate with dither */}
      <div
        className="plate rounded-lg aspect-[4/3] lg:aspect-auto lg:min-h-[520px] flex items-center justify-center relative overflow-hidden"
        style={{ animation: "reveal-up 0.6s 0.3s both" }}
      >
        <Noise
          patternSize={200}
          patternScaleX={1.2}
          patternScaleY={1.2}
          patternRefreshInterval={3}
          patternAlpha={18}
        />
        <p className="relative z-10 font-[var(--font-mono)] text-xs uppercase tracking-[0.22em] text-white/20">
          Hero plate — add your image
        </p>
      </div>
    </section>
  );
}
