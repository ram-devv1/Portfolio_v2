"use client";

import Dither from "@/components/Dither";
import TextPressure from "@/components/TextPressure";
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
        <h1 className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold tracking-[-0.05em] leading-none text-[#e0e0e0]">
          {sidebarData.name}.
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-xl text-[#ffb000] tracking-wide leading-relaxed">
          {sidebarData.tagline}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4 pointer-events-auto">
          <a href="#posts">
            <TextPressure
              text="posts"
              flex={true}
              stroke={true}
              textColor="#e0e0e0"
              strokeColor="#33ff33"
              strokeWidth={0.5}
              fontFamily="JetBrains Mono"
              minFontSize={14}
              className="!w-auto !min-w-[120px] h-12 rounded-lg border border-[#33ff33]/30 !bg-transparent hover:border-[#33ff33]/60 transition-colors cursor-pointer"
            />
          </a>
          <a href="mailto:vsbharaniram5@gmail.com">
            <TextPressure
              text="contact"
              flex={true}
              stroke={true}
              textColor="#e0e0e0"
              strokeColor="#ffb000"
              strokeWidth={0.5}
              fontFamily="JetBrains Mono"
              minFontSize={14}
              className="!w-auto !min-w-[120px] h-12 rounded-lg border border-[#ffb000]/30 !bg-transparent hover:border-[#ffb000]/60 transition-colors cursor-pointer"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
