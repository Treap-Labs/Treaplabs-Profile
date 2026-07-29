import Link from "next/link";

const columns = [
  {
    title: "Layanan",
    links: [
      { label: "Aplikasi Mobile", href: "/#services" },
      { label: "Platform Web", href: "/#services" },
      { label: "AI & Computer Vision", href: "/#services" },
      { label: "Konsultasi", href: "/#contact" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang", href: "/#about" },
      { label: "Proses", href: "/#process" },
      { label: "Proyek", href: "/#work" },
      { label: "Karier", href: "/#careers" },
    ],
  },
  {
    title: "Media Sosial",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/treaplabs",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/treaplabs",
      },
      {
        label: "GitHub",
        href: "https://github.com/treaplabs",
      },
      {
        label: "Website",
        href: "https://treaplabs.com",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="dark-section bg-deep px-5 pb-10 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden border-b border-white/10">
          <p className="outlined-wordmark">TREAPLABS</p>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-white">
              TreapLabs
            </p>
            <p className="mt-3 max-w-60 text-sm leading-6 text-white/45">
              Tim engineering senior yang membangun software untuk menjawab
              kebutuhan bisnis. Jakarta, Indonesia.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow mb-5 text-white/35">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TreapLabs · Dibuat di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
