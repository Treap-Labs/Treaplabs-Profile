import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col justify-center py-20">
      <p className="mb-4 font-mono text-sm text-[var(--muted)]">404</p>
      <h1 className="mb-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
        Halaman tidak ditemukan.
      </h1>
      <Link className="w-fit border-b border-current pb-1" href="/">
        Kembali ke beranda
      </Link>
    </Container>
  );
}
