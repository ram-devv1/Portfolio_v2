export function LaserLine() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
      {/* Core beam */}
      <div className="relative w-px h-full">
        {/* Glow */}
        <div className="absolute inset-0 bg-[#ffb000] opacity-30 blur-[2px]" />
        <div className="absolute inset-0 bg-[#ffb000] opacity-15 blur-[6px]" />
        {/* Animated scanner */}
        <div
          className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-[#ffb000] to-transparent opacity-80"
          style={{ animation: "laser-scan 2.5s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}
