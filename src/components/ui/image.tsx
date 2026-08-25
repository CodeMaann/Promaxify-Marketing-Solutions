import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export type ImageProps = React.ComponentProps<"img"> & {
  skeletonClassName?: string;
};

export function Image({ src, alt, className, skeletonClassName, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100 rounded-xl border border-neutral-200/60 shadow-sm", className)}>
      {!isLoaded && !hasError && (
        <div className={cn("absolute inset-0 animate-pulse bg-neutral-200/60", skeletonClassName)} />
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400 text-sm font-body">
          Image not found
        </div>
      )}
      <img
        src={src}
        alt={alt || "Promaxify Media"}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
        {...props}
      />
      {/* Premium Color Grading Overlay */}
      <div className="absolute inset-0 bg-brand-orange mix-blend-color opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 bg-brand-charcoal mix-blend-overlay opacity-[0.02] pointer-events-none" />
    </div>
  );
}
