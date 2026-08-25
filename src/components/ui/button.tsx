import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "charcoal" | "outline-white";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium font-sans transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            // Primary (solid orange)
            "bg-brand-orange text-white hover:bg-[#E57200] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20": variant === "primary",
            // Secondary (outline, dark text, orange border on hover)
            "border border-neutral-200 bg-transparent text-brand-dark hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 hover:shadow-md": variant === "secondary",
            // Ghost (no border/bg, animated underline on hover)
            "text-brand-dark hover:text-brand-orange relative after:absolute after:bottom-1.5 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand-orange after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100": variant === "ghost",
            // Link (standard text link)
            "text-brand-orange underline-offset-4 hover:underline": variant === "link",
            // Charcoal
            "bg-brand-charcoal text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-lg": variant === "charcoal",
            // Outline White (for footer/dark backgrounds)
            "border border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-charcoal hover:-translate-y-0.5": variant === "outline-white",
            
            // Sizes
            "h-10 px-6 py-2": size === "default",
            "h-9 rounded-lg px-4": size === "sm",
            "h-12 rounded-xl px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
