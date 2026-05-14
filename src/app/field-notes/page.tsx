import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { fieldNotes } from "@/lib/field-notes";

export default function FieldNotesPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-6 text-[#E1E0CC] sm:px-6">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/10 bg-[#101010] p-5 sm:p-8 md:p-10">
        <div className="bg-noise pointer-events-none fixed inset-0 opacity-[0.08]" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-[#E1E0CC]">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <div className="mt-16 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.34em] text-primary sm:text-xs">Field Notes</p>
            <h1 className="mt-5 text-5xl font-normal leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl">
              Notes from the messy edge of building.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-[1.6] text-gray-400 sm:text-base">
              Personal technical writing about AI tools, product experiments, and the parts of software work that feel exciting, brittle, or worth paying attention to.
            </p>
          </div>

          <div className="mt-14 grid gap-4">
            {fieldNotes.map((note) => (
              <Link
                key={note.slug}
                href={`/field-notes/${note.slug}`}
                className="group relative overflow-hidden rounded-[1.7rem] border border-primary/10 bg-black/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-6"
              >
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-primary/70">
                      <span>{note.eyebrow}</span>
                      <span className="h-1 w-1 rounded-full bg-primary/30" />
                      <span>{note.date}</span>
                      <span>{note.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-normal leading-none tracking-[-0.04em] text-[#E1E0CC] sm:text-5xl">
                      {note.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-[1.55] text-gray-400">{note.excerpt}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-bold text-black">
                    Read note <span className="grid h-9 w-9 place-items-center rounded-full bg-black"><ArrowRight className="h-4 w-4 text-primary" /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary/60">
            <Sparkles className="h-4 w-4" /> More notes coming as the lab ships.
          </div>
        </div>
      </section>
    </main>
  );
}
