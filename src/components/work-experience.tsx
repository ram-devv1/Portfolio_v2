"use client";

import { workExperience } from "@/lib/data";
import { Briefcase, ChevronRight } from "lucide-react";

export function WorkExperience() {
  return (
    <section id="work" className="py-16">
      {/* Section header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-primary/60 font-mono text-xs">~/work</span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Experience
        </span>
      </div>

      {/* Card */}
      <div className="group rounded-lg border border-primary/10 bg-card p-6 transition-colors hover:border-primary/20">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="h-3.5 w-3.5 text-primary/60" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {workExperience.period}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              {workExperience.role}
            </h3>
            <p className="text-sm text-primary/80">{workExperience.company}</p>
          </div>
        </div>

        <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground">
          {workExperience.description}
        </p>

        <div className="space-y-2.5">
          {workExperience.highlights.map((item, i) => (
            <div key={i} className="flex gap-2.5 text-[12px] leading-relaxed text-muted-foreground">
              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/40" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
