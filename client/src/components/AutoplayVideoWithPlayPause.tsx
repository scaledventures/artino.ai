import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

type AutoplayVideoWithPlayPauseProps = {
  src: string;
  className?: string;
  poster?: string;
  videoClassName?: string;
};

export function AutoplayVideoWithPlayPause({
  src,
  className,
  poster,
  videoClassName,
}: AutoplayVideoWithPlayPauseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    const pause = () => video.pause();
    if (isPlaying) play();
    else pause();
  }, [isPlaying]);

  // When src changes (e.g. in a slider), start playing the new video
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;
    video.play().catch(() => {});
  }, [src, isPlaying]);

  const toggle = () => setIsPlaying((p) => !p);

  return (
    <div
      className={cn("relative aspect-video rounded-xl overflow-hidden bg-foreground/10", className)}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        className={cn("w-full h-full object-cover object-center", videoClassName)}
        onClick={toggle}
        aria-label="Video"
      />
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity",
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        )}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <span className="rounded-full bg-black/50 p-3 text-white">
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-0.5" />}
        </span>
      </button>
    </div>
  );
}
