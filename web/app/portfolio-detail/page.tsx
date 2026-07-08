import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre portfolio",
};

export default function PortfolioDetailPage() {
  return (
    <main
      className="
        mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col gap-6 p-5
      "
    >
      <h1 className="text-4xl font-bold text-heading">Notre portfolio</h1>

      <Link
        href="/#portfolio"
        className="w-fit text-lg underline underline-offset-4 focus-accessible"
      >
        ← Retour au portfolio
      </Link>
    </main>
  );
}
