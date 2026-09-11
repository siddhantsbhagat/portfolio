export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-32 relative overflow-hidden">
      {/* Decorative center piece indicating empty shell */}
      <div className="z-10 flex flex-col items-center text-center max-w-2xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-6 text-white text-shadow-sm">
          CONCEPTUAL <span className="text-tracker-red">PHASE</span>
        </h1>
        
        <p className="font-pixel text-sm md:text-base text-white/60 leading-loose uppercase tracking-[0.2em] mb-12">
          Root shell initialized.<br/>
          Awaiting mission data injections...
        </p>
        
        {/* Placeholder for future hero content */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-tracker-red to-transparent opacity-50 mb-12"></div>
        
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-tracker-red animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </main>
  );
}
