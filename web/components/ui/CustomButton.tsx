"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type CustomButtonProps = {
  outline?: boolean;
  scrollToId?: string;
} & ComponentPropsWithoutRef<"button">;

export function CustomButton({
  outline = false,
  scrollToId,
  className,
  type = "button",
  onClick,
  children,
  ...rest
}: CustomButtonProps) {
  const baseClassName =
    "inline-block border px-4 py-3 text-center text-xl md:text-2xl lg:text-3xl font-bold font-ol-round-gothic tracking-wider transition-opacity hover:opacity-90 focus-accessible cursor-pointer";
  const variantClassName = outline
    ? "border-heading border-2 bg-transparent text-foreground hover:bg-heading hover:text-primary-foreground"
    : "border-heading bg-heading text-primary-foreground";

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView();
    }
  };

  return (
    <button
      type={type}
      className={`
        ${baseClassName}
        ${variantClassName}
        ${className ?? ""}
      `}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}
