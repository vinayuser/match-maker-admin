export function DataTableCard({ title, rows }) {
  const columns = rows?.length ? Object.keys(rows[0]) : []

  return (
    <section className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden">
      <div className="px-4 py-3 border-b border-outline-variant/20">
        <h3 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">{title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low/60">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-on-surface-variant font-bold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-t border-outline-variant/10">
                {columns.map((col) => (
                  <td key={`${col}-${rowIndex}`} className="px-4 py-3 text-sm text-white">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
