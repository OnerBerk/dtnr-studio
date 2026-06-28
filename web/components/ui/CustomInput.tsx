"use client";

import type { ComponentPropsWithRef } from "react";

const controlClassName =
  "border-border focus-visible:outline-primary w-full rounded-md border-b bg-white px-3 py-2 text-left text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 aria-[invalid=true]:border-red-500";

type CustomInputProps = {
  id: string;
  error?: string;
} & ComponentPropsWithRef<"input">;

export function CustomInput({
  id,
  error,
  className,
  placeholder,
  "aria-label": ariaLabel,
  ref,
  ...rest
}: CustomInputProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <input
        {...rest}
        id={id}
        ref={ref}
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className={
          className ? `${controlClassName} ${className}` : controlClassName
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
