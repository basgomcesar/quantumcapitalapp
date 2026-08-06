import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const reportData = [
  { id: 1, name: "John Doe", investment: "$10,000", returns: "$1,200", date: "2024-06-01" },
  { id: 2, name: "Jane Smith", investment: "$8,000", returns: "$950", date: "2024-06-02" },
  { id: 3, name: "Alice Johnson", investment: "$12,500", returns: "$1,500", date: "2024-06-03" },
]

export default function ReportSection() {
  return (
    <section className="space-y-4 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Investment Report</h2>
        <Button>Oprimeme</Button>
      </div>
      <Table>
        <TableHeader><TableRow><TableHead>#</TableHead><TableHead>Name</TableHead><TableHead>Investment</TableHead><TableHead>Returns</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
        <TableBody>
          {reportData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell><TableCell>{row.name}</TableCell><TableCell>{row.investment}</TableCell><TableCell>{row.returns}</TableCell><TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
