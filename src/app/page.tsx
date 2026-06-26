import { Header } from "@/components/sidebar";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <main>
      <Header />
      <WorkExperience />
      <Projects />
      <Posts />

      <footer className="border-t border-primary/10 py-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/30">
          Built in the Bram-cat lab · © {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
