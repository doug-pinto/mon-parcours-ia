import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(20px,6vw,56px)] pb-[clamp(50px,7vw,80px)]">
      <div className="flex flex-wrap justify-between gap-7 rounded-[20px] border border-line bg-surface px-[clamp(20px,4vw,48px)] py-8">
        {stats.map((s) => (
          <div key={s.label} className="min-w-[140px]">
            <div className="mb-1 font-display text-[clamp(30px,3.4vw,44px)] font-extrabold tracking-[-0.02em]">{s.value}</div>
            <div className="text-[14.5px] font-semibold text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
