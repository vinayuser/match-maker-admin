export function PageHeader({ title, subtitle, ctaText }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-2xl font-black text-white tracking-tight">{title}</h2>
        {subtitle ? <p className="text-sm text-on-surface-variant mt-1">{subtitle}</p> : null}
      </div>
      {ctaText ? (
        <button className="metallic-gradient px-4 py-2 rounded text-on-primary text-xs font-bold uppercase tracking-widest">
          {ctaText}
        </button>
      ) : null}
    </div>
  )
}
