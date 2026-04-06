import { cn } from "@/lib/utils";

export type LogoItem = {
  name: string;
  logoUrl?: string;
};

const PLACEHOLDER_LOGOS: LogoItem[] = [
  { name: "Company One" },
  { name: "Company Two" },
  { name: "Company Three" },
  { name: "Company Four" },
  { name: "Company Five" },
  { name: "Company Six" },
  { name: "Company Seven" },
  { name: "Company Eight" },
];

type LogoScrollerProps = {
  items?: LogoItem[];
  className?: string;
};

export function LogoScroller({ items = PLACEHOLDER_LOGOS, className }: LogoScrollerProps) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex animate-logo-scroll gap-8 py-4">
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card/60 px-5 py-3 shadow-sm"
          >
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
