export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <header className={`mb-10 flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">{description}</p> : null}
    </header>
  );
}
