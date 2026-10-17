type Props = { children: React.ReactNode; className?: string };

export function SectionHeading({ children, className = "" }: Props) {
  return (
    <h2 className={`font-display text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-0.02em] ${className}`}>
      {children}
    </h2>
  );
}
