export const sidebarData = {
  name: "Ram",
  tagline: "trying to summon god with 1's and 0's",
  links: [
    { label: "GitHub", href: "https://github.com/Bram-cat" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brvs-app-developer/" },
    { label: "Email", href: "mailto:vsbharaniram5@gmail.com" },
  ],
  current: [
    "Pi + jmux + GPT-5.5",
    "Ramclaw agents",
    "Artystic design skill",
  ],
};

export const workExperience = {
  company: "Trailflow",
  role: "Software Developer Intern",
  period: "2026",
  description:
    "Built the driver-facing mobile experience for a TMS platform — from a Gemini-grounded driver assistant with Convex backend to an overlay redesign with screen-aware context and a Traccar ELD emulator integration.",
  highlights: [
    "Built Driver Assistant v1: Gemini-grounded chat for drivers scoped to their loads, HOS, and routes — with Convex backend (askDriverAssistant, getDriverAssistantContext), admin fallback, and zero cross-driver data leakage",
    "Redesigned assistant from separate screen to blurred bottom-sheet overlay via PortalHost — screen-aware (route + loadId from expo-router), true blur with expo-blur + @gorhom/bottom-sheet",
    "Wired Traccar ELD emulator to Convex: seed mutation, device links, duty-state pipeline for local testing",
    "Stack: Expo SDK 54, Convex, Clerk, MapLibre, Valhalla, TypeScript",
  ],
};

export const projects = [
  {
    slug: "ramclaw",
    title: "Ramclaw",
    line: "My OpenClaw fork with personality agents — devdaddy for PRs and code reviews, and other agents that made coding fun when OpenClaw first dropped.",
    image: "/hero.png",
    imageAlt: "Ramclaw terminal with agent personalities",
    href: "https://github.com/Bram-cat",
  },
  {
    slug: "artystic",
    title: "Artystic",
    line: "A published design-polish skill and editorial website — makes interfaces feel authored instead of templated. Ships as an npm CLI, Next.js site, and cross-agent Pi skill.",
    image: "/lovelock.png",
    imageAlt: "Artystic editorial design system",
    href: "https://github.com/Bram-cat/artyistic",
  },
  {
    slug: "pi-setup",
    title: "Pi Setup",
    line: "My personal Pi coding-agent cockpit — context-cat for window awareness, code-improve for multi-axis review, Obsidian-backed memory, and terminal themes that other devs actually steal.",
    image: "/field-notes-pi-jmux.png",
    imageAlt: "Pi terminal setup with jmux panes",
    href: "https://github.com/Bram-cat/my-pi-setup",
  },
  {
    slug: "studypal",
    title: "StudyPal",
    line: "A local study assistant that syncs Moodle, builds per-course knowledge bases, and gives grounded chat through an OpenClaw runtime — built for UPEI students.",
    image: "/studypal.png",
    imageAlt: "StudyPal course dashboard",
    href: "https://github.com/Bram-cat/Studypal",
  },
];

export const posts = [
  {
    id: 1,
    date: "June 2026",
    title: "Candid + Ponytail: The Code Review Combo That Actually Works",
    body: "I combined candid and ponytail skills for code review and it's been great. Candid is an in-depth code review skill useful for going through the git logs, diffs and more and trying to do a detailed code review. On the other side, ponytail is a bit funny but effective skill letting the AI pretend to be the lazy programmer who writes the best code. Combining these two skills has made code review/audit really good — when I go through the changes it does, I'm pleasantly surprised at how good the edits are and it looks like the code I wish I wrote. Highly recommend trying these two skills out.",
    tags: ["ponytail", "candid_loop"],
    impressions: 324,
  },
  {
    id: 2,
    date: "June 2026",
    title: "GPU VRAM as RAM Cache on Linux",
    body: "My Hermes found this repo — still going through the project, but I like it very much. It uses my GPU's VRAM (6GiB) as cache for my RAM. It's basically tricking the kernel into thinking my GPU is a place to store cache rather than my SSD. The GPU stores the cache in binary and when required goes through RAM to CPU for processing. If you have Linux, you should absolutely try this out.",
    tags: ["CUDA", "NVIDIA", "linux", "absolute_cinema"],
    impressions: 857,
  },
  {
    id: 3,
    date: "May 2026",
    title: "Pi Familiar — Automatic Sliding Context Window in Rust",
    body: "I was going through Matt Pocock's skills and especially the handoff skill — I was learning more about context window and token optimization. I built this Pi extension in Rust called Pi Familiar. It automatically goes through the context window and suggests or automatically starts a new session with a better and improved prompt suggestion (aka automatic sliding context window) — so you can make the agent always be in the smart zone.",
    tags: ["Pi", "Rust", "context_window"],
    impressions: 291,
  },
  {
    id: 4,
    date: "May 2026",
    title: "My Pi Setup — Sharing What Actually Works",
    body: "Over the course of 2 months, I started using Pi + jmux, and I have never been so happy — this setup is peak (imo). So I decided to share my setup (as my parents always told me to share my happiness with others). I arrived at this setup by combining extensions from other people and making it my own. One of the extensions I'm actually proud of is the Obsidian brain — my god, this is a game changer with GPT 5.5. (Guys also try GPT 5.5 low, it's severely underestimated.)",
    tags: ["Pi", "jmux", "Obsidian", "GPT-5.5"],
    impressions: 617,
  },
  {
    id: 5,
    date: "April 2026",
    title: "Career-Ops: What Broke When AI Agents Hit the Real Web",
    body: "In ~2 weeks, I built a career-ops system instead of manually grinding through job boards. The numbers: 347 roles tracked, 346 status files maintained, 196 confirmed applications, 215 applied records in the raw ledger, 12 rejected/closed outcomes logged, 91 browser evidence records captured. But volume was not the real lesson. The real lesson was what breaks when AI agents touch the real web. Workday asks for accounts. Greenhouse behaves differently per company. LinkedIn Easy Apply is inconsistent. Some ATS forms hide fields behind conditional logic. Some flows hit CAPTCHA, OTP, stale links, salary questions, or legal/work-authorization fields that should never be guessed. So I built around reality. The system used browser automation, Playwright-style flows, deterministic browser patterns, tracker files, per-role status files, evidence JSONL, resume tailoring, and cover-letter rendering. More importantly, it had boundaries. It tracked whether each role was applied, blocked, skipped, rejected, stale, or waiting for review. It stopped at unsafe points: CAPTCHA, OTP gates, password gates, legal answers, compensation questions, final-submit boundaries. That changed how I think about agents. Good agents are not magic. Good agents need state, evidence, retries, guardrails, and the ability to say: 'I should stop here.' Demos show the happy path. Real workflows show the truth.",
    tags: ["AI", "Automation", "BrowserAutomation", "SoftwareEngineering", "JobSearch"],
    impressions: 424,
  },
  {
    id: 6,
    date: "April 2026",
    title: "Pi + jmux: The Most Underrated Agent Workflow",
    body: "Pi + jmux might be the most underrated agent workflow I've touched. Not because it's flashy — because it gets the shape of agent work right. Most AI coding tools still feel like one assistant inside one chat box. Useful, but cramped. The moment you start doing real work, you need more than a prompt window: you need parallel sessions, isolated workspaces, visibility into which agent is working/stuck/done/waiting for review, browser automation, codebase memory, web search, local docs, and durable notes. You need a harness. That's where jmux clicked for me — a terminal-native cockpit for running coding agents in parallel. Sessions, panes, diffs, issue/MR context, attention flags, worktree-native workflows — all without turning the terminal into a bloated IDE. Then Pi makes the harness programmable. My current setup has extensions for Contextro (codebase search, call graphs, impact analysis), Agentyc (deterministic Chrome automation), Crawl4AI (local web scraping), Obsidian-backed memory so the agent can learn my preferences, and custom Pi tools for review, shipping, QA, design, writing, and workflow automation. That combination feels different. Not 'an AI chatbot that can run commands' — more like a personal agent operating system.",
    tags: ["AIcoding", "DeveloperTools", "CodingAgents", "TerminalWorkflow", "AgenticAI"],
    impressions: 373,
  },
  {
    id: 7,
    date: "January 2026",
    title: "Open to Work — The Honest Version",
    body: "My resume says I build AI apps that boost engagement by 45%. What it doesn't say: I also developed a stress relief method by smashing my desk, can be stuck in coding problems for a long time, and use my skills to avoid reading terms & conditions. (Also hire me to see my full resume.)",
    tags: ["OpenToWork", "JuniorDeveloper", "TechHumor", "React", "AI", "JobSearch"],
    impressions: 404,
  },
];


