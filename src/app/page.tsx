import { Header } from "@/components/sidebar";
import { WorkExperience } from "@/components/work-experience";
import { Projects } from "@/components/projects";
import { Posts } from "@/components/posts";
import { LaserLines } from "@/components/laser-line";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Lasers — from hero edges, converge at footer */}
      <div className="relative">
        <LaserLines />
        <div className="relative z-10">
          <WorkExperience />
          <Projects />
          <Posts />
        </div>
      </div>

      <footer className="relative py-16">
        {/* Accent gradient bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-[#ffb000]/60 to-transparent" />

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Bram-cat"
              target="_blank"
              rel="noreferrer"
              className="group relative p-3 rounded-full border border-white/5 text-muted-foreground/30 hover:text-[#33ff33] hover:border-[#33ff33]/30 hover:shadow-[0_0_20px_rgba(51,255,51,0.1)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/brvs-app-developer/"
              target="_blank"
              rel="noreferrer"
              className="group relative p-3 rounded-full border border-white/5 text-muted-foreground/30 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:vsbharaniram5@gmail.com"
              className="group relative p-3 rounded-full border border-white/5 text-muted-foreground/30 hover:text-[#ffb000] hover:border-[#ffb000]/30 hover:shadow-[0_0_20px_rgba(255,176,0,0.1)] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-[10px] tracking-[0.3em] text-muted-foreground/15">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
