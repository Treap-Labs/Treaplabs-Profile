type ServiceProps = {
  index: string;
  title: string;
  detail: string;
  tags: readonly string[];
};

export function ServiceCard({ index, title, detail, tags }: ServiceProps) {
  return (
    <div>
      <p className="mb-16 font-mono text-xs text-muted">{index}</p>
      <h3 className="mb-3 text-muted text-xl font-semibold tracking-[-0.03em]">
        {title}
      </h3>
      <p className="leading-7 text-muted">{detail}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-sm text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
