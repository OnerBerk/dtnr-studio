"use client";

import type { ComponentPropsWithRef } from "react";

const controlClassName =
  "border-border focus-visible:outline-primary w-full rounded-md border bg-white px-3 py-2 text-left text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 aria-[invalid=true]:border-red-500";

type CustomTextareaProps = {
  id: string;
  error?: string;
} & ComponentPropsWithRef<"textarea">;

export function CustomTextarea({
  id,
  error,
  className,
  placeholder,
  "aria-label": ariaLabel,
  ref,
  ...rest
}: CustomTextareaProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <textarea
        {...rest}
        id={id}
        ref={ref}
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className={
          className
            ? `${controlClassName} resize-y ${className}`
            : `${controlClassName} resize-y`
        }
      />

      <p
        id={errorId}
        role="alert"
        className="min-h-5 text-left text-sm text-red-300"
      >
        {error}
      </p>
    </div>
  );
}
