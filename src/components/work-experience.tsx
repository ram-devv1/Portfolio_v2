"use client";

import { workExperience } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export function WorkExperience() {
  return (
    <section id="work" className="mx-auto max-w-7xl border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        {/* Sticky header */}
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">Work Experience</p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-5xl">
            Where I&rsquo;ve <span className="serif-hit text-[#ff9a6f]">shipped.</span>
          </h2>
        </div>

        {/* Content card */}
        <div className="reveal space-y-8">
          <div className="plate rounded-lg p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.22em] text-white/42">
                    {workExperience.period}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {workExperience.role}
                </h3>
                <p className="mt-1 text-lg text-[#c6a9ff]">{workExperience.company}</p>
              </div>
            </div>

            <p className="mb-6 text-[15px] leading-7 text-white/62">
              {workExperience.description}
            </p>

            <div className="space-y-3">
              {workExperience.highlights.map((item, i) => (
                <div key={i} className="flex gap-3 text-[14px] leading-7 text-white/58">
                  <ChevronRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[#ff9a6f]/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
