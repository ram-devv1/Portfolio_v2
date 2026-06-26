"use client";

import { useState } from "react";
import { posts } from "@/lib/data";
import { BarChart3, ChevronDown } from "lucide-react";

export function Posts() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="posts" className="mx-auto max-w-7xl border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] mb-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">Posts</p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-5xl">
            Writing from <span className="serif-hit text-[#ff9a6f]">LinkedIn.</span>
          </h2>
        </div>
        <div className="reveal">
          <p className="text-[15px] leading-7 text-white/54 max-w-lg">
            Thoughts on agent tooling, workflow, and building with taste. Originally posted on LinkedIn.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((post) => {
          const isOpen = expanded === post.id;
          return (
            <article key={post.id} className="reveal border border-white/10 rounded-lg bg-white/[0.015] transition-colors hover:border-white/20">
              <button
                onClick={() => setExpanded(isOpen ? null : post.id)}
                className="flex w-full items-start gap-5 p-5 text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.22em] text-[#ff9a6f]/70">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-[var(--font-mono)] text-[0.62rem] text-white/25">
                      <BarChart3 className="h-3 w-3" />
                      {post.impressions}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {post.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 text-white/30 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/10 px-5 pb-6 pt-5">
                  <p className="text-[14px] leading-7 text-white/58 whitespace-pre-line">
                    {post.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[var(--font-mono)] text-[0.6rem] uppercase tracking-[0.18em] text-[#c6a9ff]/60 border border-white/10 rounded px-2 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
