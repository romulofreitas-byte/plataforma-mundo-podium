type KickerProps = {
  children: React.ReactNode;
};

export function Kicker({ children }: KickerProps) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-kicker text-gold sm:text-sm">
        {children}
      </p>
      <div className="mt-3 h-1 w-16 rounded-full bg-gold" aria-hidden="true" />
    </div>
  );
}
