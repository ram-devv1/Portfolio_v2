"use client";

import Dither from "@/components/Dither";
import StarBorder from "@/components/StarBorder";
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
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-transparent via-transparent to-[#0a0a0a]/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-none">
        <h1 className="text-[22vw] sm:text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold tracking-[-0.05em] leading-none text-[#e0e0e0]">
          {sidebarData.name}.
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[90vw] sm:max-w-2xl text-xs sm:text-sm md:text-xl text-[#ffb000] tracking-wide leading-relaxed px-2">
          {sidebarData.tagline}
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto">
          <StarBorder
            as="a"
            href="#posts"
            color="#33ff33"
            speed="5s"
            className="min-w-[130px]"
          >
            posts
          </StarBorder>
          <StarBorder
            as="a"
            href="#contact"
            color="#ffb000"
            speed="5s"
            className="min-w-[130px]"
          >
            contact
          </StarBorder>
        </div>
      </div>
    </header>
  );
}
