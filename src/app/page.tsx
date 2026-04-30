"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Github,
  Heart,
  Mail,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const PRIMARY_TEXT = "#E1E0CC";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const navItems = [
  { label: "Story", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Github", href: "https://github.com/Bram-cat" },
  { label: "Contact", href: "mailto:vsbharaniram5@gmail.com" },
];

const projects = [
  {
    number: "01",
    title: "StudyPal.",
    eyebrow: "UPEI learning OS",
    description:
      "A local study assistant that syncs Moodle, builds course knowledge bases, and gives grounded course chat through an OpenClaw runtime.",
    image: "/studypal.png",
    icon: BrainCircuit,
    href: "https://github.com/Bram-cat/Studypal",
    liveHref: undefined,
    checks: [
      "Moodle sync for courses, assignments, quizzes, and announcements",
      "Per-course markdown knowledge base with local-first workflows",
      "Retro dashboard plus grounded assistant chat for student context",
    ],
    tags: ["Node", "Bun", "OpenClaw", "Moodle"],
  },
  {
    number: "02",
    title: "Lovelock.",
    eyebrow: "Relationship intelligence",
    description:
      "A cosmic Expo app blending numerology, compatibility analysis, profiles, Supabase persistence, and paid product flows.",
    image: "/lovelock.png",
    icon: Heart,
    href: "https://github.com/Bram-cat/lovelock",
    liveHref: "https://lovelock.it.com",
    checks: [
      "Life path, destiny, soul urge, personality, and love matching tools",
      "Supabase-backed profiles with shared birthday and preference data",
      "Stripe-ready premium model supported by companion web checkout",
    ],
    tags: ["Expo", "React Native", "Supabase", "Stripe"],
  },
  {
    number: "03",
    title: "Dreamboard.",
    eyebrow: "AI vision product",
    description:
      "A polished AI vision board experience for turning goals into visual boards, examples, and shareable dream canvases.",
    image: "/visionboard.png",
    icon: PanelsTopLeft,
    href: "https://github.com/Bram-cat/Dreamboard",
    liveHref: "https://dreamboard-six.vercel.app",
    checks: [
      "AI-assisted board generation with modern Next.js product UX",
      "Goal-led visual composition for personalized inspiration boards",
      "Public landing page, pricing flow, and creation-first navigation",
    ],
    tags: ["Next.js", "AI APIs", "React 19", "Tailwind"],
  },
  {
    number: "04",
    title: "PEI Web Agency.",
    eyebrow: "Local business studio",
    description:
      "A web studio for Prince Edward Island businesses, focused on sharp websites, launch systems, and practical digital tools.",
    image: "/logo.png",
    icon: BriefcaseBusiness,
    href: "https://github.com/Bram-cat/Portfolio_v2",
    liveHref: "https://peiwebagency.xyz",
    checks: [
      "Modern websites for local businesses that need trust, clarity, and speed",
      "Service pages, booking paths, SEO foundations, and launch-ready hosting",
      "A real client-facing studio layer behind Ram’s development work",
    ],
    tags: ["Web Design", "SEO", "Next.js", "Vercel"],
  },
];

function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden leading-none">
          <motion.span
            className="relative inline-block"
            initial={{ y: 28, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: EASE_OUT,
            }}
          >
            {word}
            {showAsterisk && index === words.length - 1 ? (
              <sup className="absolute -right-[0.32em] top-[0.16em] text-[0.31em] leading-none text-primary">
                *
              </sup>
            ) : null}
            {index < words.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: { text: string; className?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className ?? "",
    })),
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map(({ word, className: wordClass }, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden leading-none">
          <motion.span
            className={`inline-block ${wordClass}`}
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: EASE_OUT,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function AnimatedLetter({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1],
  );

  return (
    <motion.span style={{ opacity }} className="whitespace-pre-wrap">
      {children}
    </motion.span>
  );
}

function AnimatedParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = Array.from(text);

  return (
    <p
      ref={ref}
      className="mx-auto mt-8 max-w-2xl text-xs leading-[1.7] text-[#DEDBC8] sm:text-sm md:mt-10 md:text-base"
    >
      {chars.map((char, index) => (
        <AnimatedLetter
          key={`${char}-${index}`}
          progress={scrollYProgress}
          index={index}
          total={chars.length}
        >
          {char}
        </AnimatedLetter>
      ))}
    </p>
  );
}

function CTAButton({ href, children }: { href: string; children: string }) {
  return (
    <motion.a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-bold text-black transition-all duration-300 hover:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-base"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease: EASE_OUT }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
        <ArrowRight className="h-4 w-4 text-primary" />
      </span>
    </motion.a>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      className="group preserve-3d relative min-h-[560px] overflow-hidden rounded-[1.7rem] bg-[#212121] p-5 shadow-2xl shadow-black/40 sm:p-6 lg:min-h-[620px]"
      initial={{ opacity: 0, scale: 0.95, y: 26 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 26 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, rotateX: 2.5, rotateY: index % 2 ? -2 : 2 }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-primary/15 bg-black/30 sm:h-20 sm:w-20">
            <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full border border-primary/15 bg-black/35 text-primary backdrop-blur-md transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-3 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.32em] text-gray-500">
            <span>{project.eyebrow}</span>
            <span>{project.number}</span>
          </div>
          <h3 className="text-2xl font-normal leading-none text-[#E1E0CC] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-[1.45] text-gray-400">{project.description}</p>
        </div>

        <div className="space-y-3">
          {project.checks.map((item) => (
            <div key={item} className="flex gap-3 text-xs leading-[1.35] text-gray-400 sm:text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary/65">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-[#E1E0CC]"
          >
            Code <Github className="h-4 w-4" />
          </a>
          {project.liveHref ? (
            <Fragment>
              <span className="h-1 w-1 rounded-full bg-primary/30" />
              <a
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-[#E1E0CC]"
              >
                Live <ArrowRight className="h-4 w-4 -rotate-45" />
              </a>
            </Fragment>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC]">
      <section ref={heroRef} className="relative h-screen overflow-hidden p-4 md:p-6" id="top">
        <div className="relative h-full overflow-hidden rounded-2xl bg-black md:rounded-[2rem]">
          <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0">
            <Image src="/hero.png" alt="Cinematic PEI coastline and code workspace" fill priority className="object-cover opacity-60" />
          </motion.div>
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(222,219,200,0.18),transparent_32%),radial-gradient(circle_at_25%_80%,rgba(117,78,35,0.33),transparent_34%)]" />

          <nav className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="whitespace-nowrap text-[10px] transition-colors duration-300 sm:text-xs md:text-sm"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = PRIMARY_TEXT;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7 md:p-9 lg:p-10">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <h1
                className="col-span-8 text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] drop-shadow-[0_18px_50px_rgba(0,0,0,0.72)] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: PRIMARY_TEXT }}
              >
                <WordsPullUp text="Ram" showAsterisk />
              </h1>
              <div className="col-span-4 max-w-xl rounded-[1.5rem] border border-primary/10 bg-black/30 p-4 pb-4 backdrop-blur-sm lg:mb-8">
                <motion.p
                  className="text-xs leading-[1.25] text-primary/80 sm:text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
                >
                  Ram is a full-stack developer and AI product builder turning local problems, student workflows, and creative ideas into polished web and mobile products.
                </motion.p>
                <div className="mt-5">
                  <CTAButton href="#projects">View the work</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-black px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#101010] px-5 py-16 text-center sm:px-8 md:rounded-[2.5rem] md:py-24">
          <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-primary sm:text-xs">
            Developer studio
          </p>
          <h2 className="mx-auto max-w-4xl text-3xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Ram,", className: "font-normal" },
                {
                  text: "a builder of useful products.",
                  className: "font-serif italic text-primary",
                },
                {
                  text: "I study computer science, run PEI Web Agency, and ship AI-powered apps.",
                  className: "font-normal text-[#E1E0CC]",
                },
              ]}
            />
          </h2>
          <AnimatedParagraph text="From UPEI student tools to local business websites, relationship apps, legal scanners, and AI vision boards, my work is about compressing messy real-world needs into clean interfaces that people can actually use." />

          <div id="studio" className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              { value: "UPEI", label: "Computer Science" },
              { value: "PEI", label: "Web Agency founder" },
              { value: "AI", label: "Product experiments" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-primary/10 bg-black/25 p-4"
                whileHover={{ y: -4, rotateX: 3 }}
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-black px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[#101010] p-6 shadow-2xl shadow-black/40 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE_OUT }}
          >
            <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[0.85fr_1.4fr] md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-primary sm:text-xs">
                  Current role
                </p>
                <h2 className="mt-5 max-w-md text-3xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-4xl md:text-5xl">
                  Gen AI Engineer at Trailflow.
                </h2>
              </div>
              <div className="rounded-[1.5rem] border border-primary/10 bg-black/25 p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-black/35 p-2 shadow-lg shadow-black/30 ring-1 ring-primary/10">
                    <Image src="/trailflow-logo.svg" alt="Trailflow logo" width={40} height={40} className="h-10 w-10" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#E1E0CC]">Gen AI Engineer</h3>
                        <p className="mt-1 text-sm text-gray-400">Trailflow · Contract Full-time</p>
                      </div>
                      <span className="mt-2 w-fit rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary sm:mt-0">
                        Apr 2026 to Present
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-[1.45] text-gray-400">
                      Building generative AI workflows on-site in Charlottetown, Prince Edward Island, translating product needs into reliable AI-assisted systems.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Charlottetown, PEI",
                        "On-site",
                        "Generative AI",
                        "Product engineering",
                      ].map((item) => (
                        <span key={item} className="rounded-full border border-primary/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/65">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative min-h-screen overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(222,219,200,0.16),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
              <WordsPullUpMultiStyle
                segments={[
                  {
                    text: "Selected work from the Bram-cat lab.",
                    className: "text-[#E1E0CC]",
                  },
                  {
                    text: "Study tools, relationship intelligence, AI canvases, and local business launches.",
                    className: "text-gray-500",
                  },
                ]}
              />
            </h2>
            <motion.a
              href="https://github.com/Bram-cat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-black"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE_OUT }}
            >
              Browse Github <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="grid gap-3 sm:gap-3 md:grid-cols-2 md:gap-2 items-stretch lg:grid-cols-4 lg:gap-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.7rem] border border-primary/10 bg-[#101010] p-5 sm:flex-row sm:items-center sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE_OUT }}
          >
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.28em]">Open for selected builds</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-[1.45] text-gray-400">
                Need a launch-ready website, AI workflow, or product prototype? PEI Web Agency is the studio layer behind the code.
              </p>
            </div>
            <a
              href="mailto:vsbharaniram5@gmail.com"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-bold text-black transition-all duration-300 hover:gap-3"
            >
              Start a project
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-4 w-4 text-primary" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-black px-6 py-8 text-xs text-gray-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ram. Built in the Bram-cat lab.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Bram-cat" target="_blank" rel="noreferrer" className="hover:text-primary">
              Github
            </a>
            <a href="https://www.linkedin.com/in/brvs-app-developer/" target="_blank" rel="noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
            <a href="mailto:vsbharaniram5@gmail.com" className="hover:text-primary">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
