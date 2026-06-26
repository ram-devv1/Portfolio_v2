"use client";

import Image from "next/image";
import DecryptedText from "@/components/DecryptedText";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-24 sm:px-6">
      <div className="reveal-scroll mb-12">
        <DecryptedText
          text="projects"
          speed={40}
          maxIterations={8}
          animateOn="view"
          revealDirection="start"
          className="text-xs uppercase tracking-[0.3em] text-primary/50"
          encryptedClassName="text-primary/15"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={project.slug}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`reveal-scroll reveal-scroll-delay-${i + 1} group border border-primary/10 rounded-xl bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-card`}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d0d]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-90 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary/10">
                    [screenshot]
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <DecryptedText
                  text={project.title}
                  speed={50}
                  maxIterations={8}
                  animateOn="hover"
                  revealDirection="start"
                  className="text-sm font-bold tracking-[-0.02em] group-hover:text-primary transition-colors"
                  encryptedClassName="text-muted-foreground/40"
                />
                <ExternalLink className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary/20 group-hover:text-primary/60 transition-colors" />
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/60">
                {project.line}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
