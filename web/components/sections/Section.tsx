import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <h2
        id={headingId}
        className="text-heading text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
