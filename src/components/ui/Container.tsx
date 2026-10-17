type Props = { children: React.ReactNode; className?: string };

export function Container({ children, className = "" }: Props) {
  return <div className={`mx-auto max-w-[1180px] ${className}`}>{children}</div>;
}
