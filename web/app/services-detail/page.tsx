import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos services et tarifs",
};

export default function ServicesDetailPage() {
  return (
    <main
      className="
        mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col gap-6 p-5
      "
    >
      <h1 className="text-4xl font-bold text-heading">
        Nos services et tarifs
      </h1>

      <Link
        href="/#services"
        className="w-fit text-lg underline underline-offset-4 focus-accessible"
      >
        ← Retour aux services
      </Link>
    </main>
  );
}
