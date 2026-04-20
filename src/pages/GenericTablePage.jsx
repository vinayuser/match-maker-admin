import { DataTableCard } from "../components/common/DataTableCard"
import { PageHeader } from "../components/common/PageHeader"

export function GenericTablePage({ title, subtitle, ctaText, cardTitle, rows }) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} subtitle={subtitle} ctaText={ctaText} />
      <DataTableCard title={cardTitle} rows={rows} />
    </div>
  )
}
