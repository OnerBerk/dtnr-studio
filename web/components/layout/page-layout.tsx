import { BackArrow } from "@/components/ui/BackArrow";

type PageLayoutProps = {
  children: React.ReactNode;
  ariaLabelledby?: string;
  className?: string;
  backHref?: string;
  backLabel?: string;
};

export default function PageLayout({
  children,
  ariaLabelledby,
  className,
  backHref,
  backLabel,
}: PageLayoutProps) {
  return (
    <main
      id="main-content"
      {...(ariaLabelledby ? { "aria-labelledby": ariaLabelledby } : {})}
      className={className}
    >
      {backHref && backLabel ? (
        <nav aria-label="Retour" className="mt-10">
          <BackArrow href={backHref} label={backLabel} />
        </nav>
      ) : null}
      {children}
    </main>
  );
}
