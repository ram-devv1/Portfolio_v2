import { Sidebar } from "@/components/sidebar";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      {/* Main scroll area */}
      <main className="ml-56 flex-1 px-8 py-12 max-w-3xl">
        <WorkExperience />
        <Projects />
        <Posts />

        {/* Footer */}
        <footer className="border-t border-primary/10 py-8 text-[10px] text-muted-foreground">
          <span className="text-primary/40">$</span> echo &quot;Built in the Bram-cat lab. © 2026&quot;
        </footer>
      </main>
    </div>
  );
}
