"use client";

import DecryptedText from "@/components/DecryptedText";
import Dither from "@/components/Dither";
import { sidebarData } from "@/lib/data";

export function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Dither background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveSpeed={0.04}
          waveFrequency={2.5}
          waveAmplitude={0.25}
          waveColor={[0.15, 0.55, 0.15]}
          colorNum={3}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.8}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-transparent via-transparent to-[#0a0a0a]/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <DecryptedText
          text={sidebarData.name}
          speed={80}
          maxIterations={15}
          animateOn="view"
          revealDirection="center"
          className="text-[16vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-[-0.05em] leading-none"
          encryptedClassName="text-primary/30"
        />

        <div className="mt-6 max-w-xl">
          <DecryptedText
            text={sidebarData.tagline}
            speed={50}
            maxIterations={8}
            animateOn="view"
            revealDirection="center"
            className="text-sm md:text-base text-primary/50 tracking-wide"
            encryptedClassName="text-primary/15"
          />
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/40">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
            <rect x="7" y="5" width="2" height="6" rx="1" fill="currentColor" className="text-primary/40" />
          </svg>
        </div>
      </div>
    </header>
  );
}
