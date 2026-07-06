export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <span className="font-display text-2xl tracking-tight text-foreground">
        Vantara <span className="text-gold-400">& Rao</span>
      </span>
      <div className="mt-6 h-px w-40 overflow-hidden bg-foreground/10">
        <div className="h-full w-1/3 animate-[loading-sweep_1.1s_ease-in-out_infinite] bg-gold-400" />
      </div>
      <style>{`
        @keyframes loading-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
