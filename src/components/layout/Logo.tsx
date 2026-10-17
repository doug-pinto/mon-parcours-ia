export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-brand">
        <div className="h-3 w-3 rounded-full border-2 border-accent" />
      </div>
      <span className="font-display text-xl font-extrabold">
        Mon Parcours <span className="text-accent">IA</span>
      </span>
    </div>
  );
}
