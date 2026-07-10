import Link from "next/link";

type BackArrowProps = {
  href: string;
  label: string;
  className?: string;
};

export function BackArrow({ href, label, className }: BackArrowProps) {
  return (
    <Link
      href={href}
      className={`
        flex w-fit items-center gap-3 focus-accessible
        ${className ?? ""}
      `}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 shrink-0 text-heading"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      <span
        className="
          text-base text-foreground md:text-xl
        "
      >
        {label}
      </span>
    </Link>
  );
}
