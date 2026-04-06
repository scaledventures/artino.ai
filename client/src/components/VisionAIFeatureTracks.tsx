import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);
  return reduce;
}

export type VisionAIFeature = {
  id: string;
  label: string;
  iconSrc: string;
};

type VisionAIFeatureTracksProps = {
  features: VisionAIFeature[];
  className?: string;
};

const CARD_WIDTH = 160;
const CARD_HEIGHT = 66;
const CARD_GAP = 8; /* same gap between cards in every scroller */

function FeatureCard({ label, iconSrc }: { label: string; iconSrc: string }) {
  return (
    <div
      className="flex shrink-0 rounded-xl bg-card shadow-md border border-border/50 overflow-hidden"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      <img
        src={iconSrc}
        alt={label}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

function Track({
  features,
  direction = "left",
  duration = 60,
  className,
}: {
  features: VisionAIFeature[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  /* Three identical blocks: -33.333% scrolls exactly one block; loop resets with same content so no gap */
  const renderBlock = (blockKey: string) => (
    <div className="flex shrink-0 py-0.5" style={{ gap: CARD_GAP }} key={blockKey}>
      {features.map((f, i) => (
        <FeatureCard key={`${f.id}-${i}`} label={f.label} iconSrc={f.iconSrc} />
      ))}
    </div>
  );
  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        className="flex w-max py-1"
        style={{
          animation: `platform-track-${direction} ${duration}s linear infinite`,
        }}
      >
        {renderBlock("1")}
        {renderBlock("2")}
        {renderBlock("3")}
      </div>
    </div>
  );
}

export function VisionAIFeatureTracks({
  features,
  className,
}: VisionAIFeatureTracksProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (features.length === 0) return null;

  if (prefersReducedMotion) {
    return (
      <div className={cn("w-full flex justify-center py-2", className)}>
        <div className="flex flex-wrap justify-center gap-2 max-w-full px-2">
          {features.map((f) => (
            <FeatureCard key={f.id} label={f.label} iconSrc={f.iconSrc} />
          ))}
        </div>
      </div>
    );
  }

  /* Use full list per track so every row is wide enough to fill the viewport (no blank on right) */
  return (
    <div className={cn("w-full flex flex-col items-center justify-center", className)}>
      {/* Desktop: 3 tracks - same width so no track has blank space */}
      <div className="hidden md:flex flex-col gap-1 justify-center">
        <Track features={features} direction="left" duration={55} />
        <Track features={features} direction="right" duration={70} />
        <Track features={features} direction="left" duration={65} />
      </div>
      {/* Mobile: single track */}
      <div className="md:hidden">
        <Track features={features} direction="left" duration={140} />
      </div>
    </div>
  );
}
