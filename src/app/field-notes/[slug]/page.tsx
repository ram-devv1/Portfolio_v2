import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { fieldNotes } from "@/lib/field-notes";

export function generateStaticParams() {
  return fieldNotes.map((note) => ({ slug: note.slug }));
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = fieldNotes.find((item) => item.slug === slug);

  if (!note) notFound();

  const paragraphs =
    note.slug === "obsidian-and-pi"
      ? [
          "Obsidian is where my long-term thinking lives. It is not polished like a public blog, and that is the point. It holds half-formed ideas, school notes, project context, preferences, decisions, and the small bits of personal operating system that are easy to forget but expensive to reconstruct.",
          "Pi changes what that vault can do. A normal notes app stores knowledge. Pi can read it, follow the links, understand the surrounding project, and use it while actually doing work. That turns Obsidian from an archive into a working memory layer.",
          "The setup feels simple on the surface: keep an index, keep project notes, keep a personal AI profile, and tell the agent to check the vault before guessing. But the effect is bigger than the mechanics. I do not have to re-explain my preferences every session. I can point Pi at the notes and let it rebuild context from something I control.",
          "This matters most when work crosses boundaries. Coding is rarely just code. It touches design taste, school deadlines, writing style, project history, and random decisions from two weeks ago. Obsidian gives those pieces a place to live. Pi gives them a way to show up in the moment I need them.",
          "I am still cautious about it. Memory can make an agent better, but it can also make it overconfident. Old notes can be wrong. A preference can become a cage. A vault can grow noisy if everything gets saved without judgment. The value is not in remembering everything; it is in remembering the right things and keeping them editable.",
          "That is why I like the Obsidian and Pi combination. Obsidian keeps the source of truth local, visible, and human-readable. Pi makes that source of truth operational. I can inspect the memory, change it, delete it, or ask the agent to update it when a durable lesson appears.",
          "The best version of this workflow does not feel like outsourcing my brain. It feels like giving my future self better handles. I still decide what matters. I still keep taste and judgment in the loop. Pi just helps the knowledge I already collected become useful at the speed of work.",
        ]
      : [
          "I used to treat AI coding tools like a faster autocomplete box. Useful, sometimes impressive, but still mostly a place where I asked for snippets and then carried the real shape of the project in my own head.",
          "Working with Pi and GPT-5.5 feels different. The enjoyable part is not that it magically knows everything. It does not. The enjoyable part is that the workflow starts to feel like steering a small technical team: one agent can inspect the repo, read the right files, use skills, run commands, make edits, and come back with something concrete enough to argue with.",
          "That shift matters. When the tool has context and can act, the conversation changes from “write me code” to “help me move this system forward.” I can stay closer to product taste, architecture, and judgment while the agent handles more of the mechanical exploration.",
          "But this is also where the rough edges show up. Agentic workflows are fragile. If context drifts, the agent can sound confident while looking in the wrong place. If a tool fails, the whole flow can become weirdly brittle. If I am vague, it may optimize for motion instead of correctness. The future feels close, but it still breaks in very ordinary ways.",
          "That is why I enjoy Pi most when I do not treat it like autopilot. I treat it like a capable junior engineer with tools, memory, and initiative. I give it direction, challenge its assumptions, make it inspect the real code, and keep taste in the loop.",
          "GPT-5.5 makes that loop feel faster and more alive. Pi gives the model a place to operate: files, terminal, project context, reusable skills, and a workflow that can cross from planning to implementation. Together, they make building feel less like prompting a chatbot and more like collaborating with an opinionated system that can actually touch the work.",
          "I am still critical of it. I do not trust it blindly. But I genuinely enjoy working this way. The fun comes from the steering: knowing when to let the agent run, when to interrupt, when to ask better questions, and when to pull the work back into human judgment.",
        ];

  return (
    <main className="min-h-screen bg-black px-4 py-6 text-[#E1E0CC] sm:px-6">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/10 bg-[#101010]">
        <div className="relative min-h-[420px] overflow-hidden p-5 sm:p-8 md:p-10">
          <Image
            src={note.image}
            alt={note.imageAlt}
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/90" />
          <div className="noise-overlay absolute inset-0 opacity-[0.18] mix-blend-overlay" />

          <div className="relative z-10">
            <Link href="/field-notes" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-[#E1E0CC]">
              <ArrowLeft className="h-4 w-4" /> Field Notes
            </Link>
            <div className="mt-20 max-w-none">
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-primary/75">
                <span>{note.eyebrow}</span><span>{note.date}</span><span>{note.readTime}</span>
              </div>
              <h1 className="mt-5 text-[clamp(3.25rem,7vw,6rem)] font-normal leading-[0.9] tracking-[-0.07em] lg:whitespace-nowrap">{note.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.55] text-gray-300 sm:text-lg">{note.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
          <div className="mb-10 flex flex-wrap gap-2">
            {note.tags.map((tag) => <span key={tag} className="rounded-full border border-primary/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/70">{tag}</span>)}
          </div>

          <div className="space-y-7 text-base leading-[1.8] text-gray-300">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
