import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: ["Mobile Apps", "Web Platforms", "AI & Computer Vision", "Consulting"],
  },
  { title: "Company", links: ["About", "Process", "Work", "Careers"] },
  { title: "Social", links: ["LinkedIn", "Instagram", "GitHub", "Dribbble"] },
];

export function SiteFooter() {
  return (
    <footer className="dark-section bg-ink px-5 pb-10 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden border-b border-white/10">
          <p className="outlined-wordmark">TREAPLABS</p>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-white">TreapLabs</p>
            <p className="mt-3 max-w-60 text-sm leading-6 text-white/45">
              A senior engineering team building software that earns its keep. Jakarta, Indonesia.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="eyebrow mb-5 text-white/35">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link className="text-sm text-white/55 transition-colors hover:text-white" href="#">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TreapLabs · Made in Indonesia</p>
          <div className="flex gap-6">
            <Link className="hover:text-white/60" href="#">Privacy</Link>
            <Link className="hover:text-white/60" href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
