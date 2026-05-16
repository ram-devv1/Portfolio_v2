export const fieldNotes = [
  {
    slug: "pi-and-jmux",
    title: "Pi and jmux",
    subtitle:
      "Why a terminal-native cockpit plus a programmable agent harness feels like an underrated path for parallel coding agents.",
    date: "May 2026",
    readTime: "4 min read",
    eyebrow: "Agentic coding",
    tags: ["Pi", "jmux", "Coding agents", "Terminal workflow"],
    excerpt:
      "Pi plus jmux feels like one of those setups people will rediscover later and ask why we were not already working this way: parallel agents, real terminal visibility, code intelligence, browser automation, and durable memory in one harness.",
    image: "/field-notes-pi-jmux.png",
    imageAlt: "Terminal-native agent cockpit with Pi and jmux dashboards",
  },
  {
    slug: "obsidian-and-pi",
    title: "Obsidian and Pi",
    subtitle:
      "How my notes became less like storage and more like a working memory an agent can actually use.",
    date: "May 2026",
    readTime: "4 min read",
    eyebrow: "Personal knowledge systems",
    tags: ["Obsidian", "Pi", "Memory", "Workflow"],
    excerpt:
      "Obsidian is where my long-term thinking lives. Pi is what makes that knowledge operational: it can read the vault, follow links, respect preferences, and turn static notes into action.",
    image: "/field-notes-obsidian-pi.png",
    imageAlt: "Dark knowledge workspace with linked notes and luminous memory graph",
  },
  {
    slug: "working-with-pi-and-gpt-55",
    title: "Working with Pi and GPT-5.5",
    subtitle:
      "A personal, technical, and slightly critical note on why agentic coding finally feels enjoyable to steer.",
    date: "May 2026",
    readTime: "5 min read",
    eyebrow: "Agentic coding",
    tags: ["Pi", "GPT-5.5", "Agents", "Developer workflow"],
    excerpt:
      "I used to treat AI like a faster autocomplete box. Pi with GPT-5.5 feels different: more like a coding partner with tools, context, and initiative — powerful, fun, and still very easy to derail.",
    image: "/field-notes-pi-gpt-55.png",
    imageAlt: "Dark developer workspace with luminous AI context threads",
  }
] as const;

export type FieldNote = (typeof fieldNotes)[number];
