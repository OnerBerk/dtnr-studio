export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="accueil-heading"
      className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <h1
        id="accueil-heading"
        className="text-heading text-[50px] font-bold tracking-tight md:text-[160px]"
      >
        DTNR Studio
      </h1>

      <p className="text-muted-foreground max-w-xl text-lg">
        Texte de présentation temporaire — à remplacer plus tard.
      </p>

      <a
        href="#contact"
        className="bg-primary text-primary-foreground rounded-md px-6 py-3 font-medium transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        Nous contacter
      </a>
    </section>
  );
}
