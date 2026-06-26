"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "@/components/DecryptedText";
import { posts } from "@/lib/data";
import { BarChart3, X } from "lucide-react";

export function Posts() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const post = activePost !== null ? posts.find((p) => p.id === activePost) : null;

  return (
    <>
      <section id="posts" className="max-w-3xl mx-auto px-4 py-24 sm:px-6">
        <div className="reveal-scroll mb-12">
          <DecryptedText
            text="posts"
            speed={40}
            maxIterations={8}
            animateOn="view"
            revealDirection="start"
            className="text-xs uppercase tracking-[0.3em] text-primary/50"
            encryptedClassName="text-primary/15"
          />
        </div>

        <div className="space-y-2">
          {posts.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePost(p.id)}
              className={`reveal-scroll reveal-scroll-delay-${i + 1} w-full text-left border border-primary/10 rounded-lg bg-card/50 p-4 transition-all duration-200 hover:border-primary/25 hover:bg-card group`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40">
                      {p.date}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground/30">
                      <BarChart3 className="h-3 w-3" />
                      {p.impressions}
                    </span>
                  </div>
                  <DecryptedText
                    text={p.title}
                    speed={50}
                    maxIterations={6}
                    animateOn="hover"
                    revealDirection="start"
                    className="text-[13px] font-medium"
                    encryptedClassName="text-primary/15"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground/20 group-hover:text-primary/40 transition-colors shrink-0">
                  Read →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Fullscreen post modal */}
      <AnimatePresence>
        {post && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-primary/10 text-primary/40 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image placeholder */}
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#0d0d0d] border border-primary/10 mb-6">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary/10">
                    [post image — add screenshot]
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/50">
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                  <BarChart3 className="h-3 w-3" />
                  {post.impressions} impressions
                </span>
              </div>

              {/* Title */}
              <DecryptedText
                text={post.title}
                speed={60}
                maxIterations={10}
                animateOn="view"
                revealDirection="start"
                className="text-lg font-bold tracking-[-0.02em] mb-4"
                encryptedClassName="text-primary/15"
              />

              {/* Body */}
              <p className="text-[13px] leading-7 text-muted-foreground whitespace-pre-line">
                {post.body}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] text-primary/40 border border-primary/10 rounded px-2 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
