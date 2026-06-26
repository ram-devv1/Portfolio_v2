"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { sidebarData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-3.5 w-3.5" />,
  LinkedIn: <Linkedin className="h-3.5 w-3.5" />,
  Email: <Mail className="h-3.5 w-3.5" />,
};

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-56 flex-col border-r border-primary/10 bg-[#080808] p-5">
      {/* Identity */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            user@host
          </span>
        </div>
        <h1 className="text-xl font-bold text-foreground font-serif italic tracking-[-0.03em]">
          {sidebarData.name}
        </h1>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
          {sidebarData.tagline}
          <span className="terminal-cursor" />
        </p>
      </div>

      {/* Links */}
      <nav className="mb-8 space-y-1">
        {sidebarData.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            data-text={link.label}
            className="glitch-hover flex items-center gap-2.5 rounded px-2 py-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-primary/60">{iconMap[link.label]}</span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Current */}
      <div className="mt-auto">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60">
            Currently
          </span>
        </div>
        <ul className="space-y-1.5">
          {sidebarData.current.map((item) => (
            <li
              key={item}
              className="text-[11px] leading-relaxed text-muted-foreground"
            >
              <span className="text-primary/40 mr-1.5">$</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
