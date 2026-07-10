"use client";

{
  /*
  placeholder va etre remplacer par les projets
  */
}
const cells = Array.from({ length: 9 }, (_, i) => i);

export function PortfolioGrid() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-3 gap-3">
        {cells.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => console.log(`cell ${i}`)}
            className="
              relative aspect-square cursor-pointer bg-foreground/90
              transition-transform duration-300 hover:z-20 hover:scale-120
            "
            aria-label={`Projet ${i + 1}`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-1/2 left-1/2 z-10 aspect-square
          w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-heading/60
        "
      />
    </div>
  );
}
