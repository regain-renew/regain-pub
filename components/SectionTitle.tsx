type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </div>
  );
}
