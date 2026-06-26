"use client";

import { useState } from "react";
import { posts } from "@/lib/data";
import { MessageSquare, BarChart3, ChevronDown } from "lucide-react";

export function Posts() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="posts" className="py-16">
      {/* Section header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-primary/60 font-mono text-xs">~/posts</span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Posts
        </span>
      </div>

      <div className="space-y-2">
        {posts.map((post) => {
          const isOpen = expanded === post.id;
          return (
            <article
              key={post.id}
              className="rounded-lg border border-primary/10 bg-card transition-colors hover:border-primary/20"
            >
              <button
                onClick={() => setExpanded(isOpen ? null : post.id)}
                className="flex w-full items-start gap-4 p-4 text-left"
              >
                <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/40" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                      <BarChart3 className="h-3 w-3" />
                      {post.impressions}
                    </span>
                  </div>
                  <h3 className="text-[13px] font-bold text-foreground leading-snug">
                    {post.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-primary/10 px-4 pb-5 pt-4">
                  <p className="text-[12px] leading-relaxed text-muted-foreground whitespace-pre-line">
                    {post.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-primary/10 bg-[#0a0a0a] px-2 py-0.5 text-[10px] text-primary/60"
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
