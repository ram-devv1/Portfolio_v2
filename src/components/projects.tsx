"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      {/* Section header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-primary/60 font-mono text-xs">~/projects</span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Projects
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-3">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-5 rounded-lg border border-primary/10 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-[#0f0f0f]"
          >
            {/* Image placeholder */}
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded border border-primary/10 bg-[#0a0a0a]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover opacity-70 transition-opacity group-hover:opacity-100"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[9px] uppercase tracking-[0.18em] text-muted-foreground/30">
                  img
                </div>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3
                data-text={project.title}
                className="glitch-hover mb-0.5 text-sm font-bold text-foreground"
              >
                {project.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                {project.line}
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
