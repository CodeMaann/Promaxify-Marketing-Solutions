import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "lucide-react"

// --- INPUT ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-xl border bg-white px-4 py-2 text-sm font-body text-brand-dark transition-all duration-300",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-12" : "",
            error ? "border-red-500 text-red-900 focus-visible:ring-red-500" : "border-neutral-200 hover:border-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

// --- TEXTAREA ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border bg-white px-4 py-3 text-sm font-body text-brand-dark transition-all duration-300",
          "placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-red-500 text-red-900 focus-visible:ring-red-500" : "border-neutral-200 hover:border-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

// --- SELECT ---
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, icon, children, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            {icon}
          </div>
        )}
        <select
          className={cn(
            "flex h-14 w-full appearance-none rounded-xl border bg-white px-4 py-2 text-sm font-body text-brand-dark transition-all duration-300 cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-12" : "",
            error ? "border-red-500 text-red-900 focus-visible:ring-red-500" : "border-neutral-200 hover:border-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
      </div>
    )
  }
)
Select.displayName = "Select"

// --- CHECKBOX ---
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            className={cn(
              "peer h-5 w-5 appearance-none rounded border border-neutral-300 bg-white checked:border-brand-orange checked:bg-brand-orange transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2",
              className
            )}
            ref={ref}
            {...props}
          />
          <Check className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={3} />
        </div>
        {label && <span className="text-sm font-body text-neutral-600 group-hover:text-brand-dark transition-colors">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Input, Textarea, Select, Checkbox }
