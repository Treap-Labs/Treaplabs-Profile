import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const foundations = [
  {
    index: "01",
    title: "Static by default",
    detail: "Server Components and build-time content keep pages fast and portable.",
  },
  {
    index: "02",
    title: "Typed throughout",
    detail: "Strict TypeScript and explicit content models make change predictable.",
  },
  {
    index: "03",
    title: "Motion at the edges",
    detail: "Small client-side animation leaves preserve a server-first architecture.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Container className="grid min-h-[68vh] content-between gap-20 py-16 sm:py-24">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Profile architecture
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            A clear foundation for what comes next.
          </h1>
        </Reveal>
        <p className="max-w-xl text-lg leading-8 text-[var(--muted)] sm:ml-auto">
          A minimal, statically generated starting point with reusable layout,
          content, styling, and animation boundaries.
        </p>
      </Container>

      <section
        id="architecture"
        aria-labelledby="architecture-heading"
        className="border-t border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
      >
        <Container>
          <h2
            id="architecture-heading"
            className="mb-12 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]"
          >
            Core foundations
          </h2>
          <div className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
            {foundations.map((item, index) => (
              <Reveal
                key={item.index}
                delay={index * 0.08}
                className="min-h-64 bg-[var(--background)] p-7 sm:p-9"
              >
                <p className="mb-20 font-mono text-xs text-[var(--muted)]">
                  {item.index}
                </p>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="leading-7 text-[var(--muted)]">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
