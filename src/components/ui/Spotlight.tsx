import React from 'react';
import { cn } from '../../lib/utils';

interface SpotlightProps {
  className?: string;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
}

export function Spotlight({
  className,
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 85%, .08) 0, hsla(185, 100%, 55%, .02) 50%, hsla(185, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 85%, .06) 0, hsla(185, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 85%, .04) 0, hsla(185, 100%, 45%, .02) 80%, transparent 100%)",
}: SpotlightProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 z-[-1] bg-cover"
        style={{
          backgroundImage: gradientFirst,
          transform: "translate(-50%, -50%) scale(1.5)",
          top: "30%",
          left: "50%",
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-0 z-[-1] bg-cover"
        style={{
          backgroundImage: gradientSecond,
          transform: "translate(-50%, -50%) scale(1.5)",
          top: "20%",
          left: "60%",
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-0 z-[-1] bg-cover"
        style={{
          backgroundImage: gradientThird,
          transform: "translate(-50%, -50%) scale(1.5)",
          top: "60%",
          left: "40%",
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      />
    </div>
  );
}
