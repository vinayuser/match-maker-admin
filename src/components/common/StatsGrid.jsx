export function StatsGrid({ items }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-surface-container rounded-xl p-5 border border-outline-variant/20">
          <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant font-bold">
            {item.label}
          </p>
          <p className="text-3xl font-black text-white mt-2">{item.value}</p>
          <p className="text-xs text-primary-container mt-2">{item.trend}</p>
        </div>
      ))}
    </section>
  )
}
