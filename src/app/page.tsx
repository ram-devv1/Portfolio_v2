import { Header } from "@/components/sidebar";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";
import LaserFlow from "@/components/LaserFlow";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Laser flow transition */}
      <LaserFlow
        color="#ffb000"
        wispDensity={3}
        flowSpeed={0.4}
        className="h-32 -mt-16 relative z-20"
      />

      <WorkExperience />
      <Projects />
      <Posts />

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/40">
            Built in the Bram-cat lab · © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Bram-cat"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/40 hover:text-[#33ff33] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/brvs-app-developer/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/40 hover:text-[#00d4ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:vsbharaniram5@gmail.com"
              className="text-muted-foreground/40 hover:text-[#ffb000] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
