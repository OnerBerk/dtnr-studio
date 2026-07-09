interface SectionLayoutProps {
  children: React.ReactNode;
  id: string;
  ariaLabelledby: string;
  className?: string;
}
const SectionLayout = ({
  children,
  id,
  ariaLabelledby,
  className,
}: SectionLayoutProps) => {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`
        mx-auto w-full max-w-[1780px]
        ${className ?? ""}
      `}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
