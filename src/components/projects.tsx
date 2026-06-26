"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] mb-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-5xl">
            What I&rsquo;ve <span className="serif-hit text-[#ff9a6f]">built.</span>
          </h2>
        </div>
        <div className="reveal">
          <p className="text-[15px] leading-7 text-white/54 max-w-lg">
            Image + one-liner. Each project opens its repo — no fluff.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="reveal group plate rounded-lg overflow-hidden transition-all duration-300 hover:border-[#9b5cff]/40 hover:shadow-[0_34px_100px_-50px_rgba(155,92,255,0.42)]"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a14]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-[var(--font-mono)] text-[0.6rem] uppercase tracking-[0.26em] text-white/20">
                    {project.title} · add screenshot
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white group-hover:text-[#c6a9ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/48">
                    {project.line}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 group-hover:text-[#c6a9ff] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
