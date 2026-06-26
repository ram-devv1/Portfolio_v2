"use client";

import DecryptedText from "@/components/DecryptedText";
import { workExperience } from "@/lib/data";

export function WorkExperience() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-4 py-16 sm:py-24 sm:px-6">
      <div className="reveal-scroll mb-12">
        <DecryptedText
          text="work_experience"
          speed={40}
          maxIterations={8}
          animateOn="view"
          revealDirection="start"
          className="text-xs uppercase tracking-[0.3em] text-[#00d4ff]"
          encryptedClassName="text-muted-foreground/30"
        />
      </div>

      <div className="reveal-scroll reveal-scroll-delay-1 border border-white/10 rounded-xl bg-[#141414] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {workExperience.period}
          </span>
        </div>

        <DecryptedText
          text={workExperience.role}
          speed={60}
          maxIterations={10}
          animateOn="view"
          revealDirection="start"
          className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-[#e0e0e0]"
          encryptedClassName="text-muted-foreground/30"
        />

        <p className="mt-1 text-sm text-[#00d4ff]">{workExperience.company}</p>

        <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">
          {workExperience.description}
        </p>

        <div className="mt-5 space-y-2.5">
          {workExperience.highlights.map((item, i) => (
            <div key={i} className="flex gap-3 text-[12px] leading-relaxed text-muted-foreground/70">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
