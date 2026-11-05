import { forwardRef, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const control =
  "w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-champagne focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-destructive [color-scheme:dark]";

type FieldProps = {
  id: string;
  label: string;
  error?: string | undefined;
  hint?: ReactNode;
  optional?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
};

export function Field({ id, label, error, hint, optional, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="eyebrow">
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(control, className)} {...props} />,
);
TextInput.displayName = "TextInput";

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(control, "min-h-28 resize-y", className)} {...props} />
  ),
);
TextArea.displayName = "TextArea";

export const SelectInput = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(control, "cursor-pointer bg-background", className)} {...props}>
      {children}
    </select>
  ),
);
SelectInput.displayName = "SelectInput";

/** Hidden field bots tend to fill in; real visitors never see it. */
export const Honeypot = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
    <label>
      Website
      <input ref={ref} type="text" tabIndex={-1} autoComplete="off" {...props} />
    </label>
  </div>
));
Honeypot.displayName = "Honeypot";
