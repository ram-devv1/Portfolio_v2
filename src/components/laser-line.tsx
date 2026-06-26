export function LaserLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Left laser — hidden on mobile, visible sm+ */}
      <div
        className="absolute top-0 left-0 w-px h-full origin-top-left hidden sm:block"
        style={{ transform: "rotate(7deg)" }}
      >
        <div className="absolute inset-0 bg-[#ffb000] opacity-20 blur-[2px]" />
        <div className="absolute inset-0 bg-[#ffb000] opacity-8 blur-[6px]" />
        <div
          className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent via-[#ffb000] to-transparent opacity-70"
          style={{ animation: "laser-scan 3s ease-in-out infinite" }}
        />
      </div>

      {/* Right laser — hidden on mobile, visible sm+ */}
      <div
        className="absolute top-0 right-0 w-px h-full origin-top-right hidden sm:block"
        style={{ transform: "rotate(-7deg)" }}
      >
        <div className="absolute inset-0 bg-[#ffb000] opacity-20 blur-[2px]" />
        <div className="absolute inset-0 bg-[#ffb000] opacity-8 blur-[6px]" />
        <div
          className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent via-[#ffb000] to-transparent opacity-70"
          style={{ animation: "laser-scan 3s ease-in-out 0.6s infinite" }}
        />
      </div>
    </div>
  );
}
