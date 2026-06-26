import { Nav, PageHeader } from "@/components/sidebar";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader />
        <WorkExperience />
        <Projects />
        <Posts />

        <footer className="border-t border-white/10 py-10 text-center">
          <p className="font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.24em] text-white/25">
            Built in the Bram-cat lab · © {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
