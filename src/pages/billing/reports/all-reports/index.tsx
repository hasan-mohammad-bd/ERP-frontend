import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Report, reports } from "./reports"
import { Link } from "react-router-dom"

export default function ReportsDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredReports = useMemo(() => {
    if (!searchQuery) return reports
    
    const lowerQuery = searchQuery.toLowerCase()
    return reports.filter(report => 
      report.name.toLowerCase().includes(lowerQuery)
    )
  }, [searchQuery])

  const reportsByCategory = useMemo(() => {
    const categories = {
      trader: filteredReports.filter(r => r.category === "trader"),
      sales: filteredReports.filter(r => r.category === "sales"),
      purchase: filteredReports.filter(r => r.category === "purchase"),
    }
    return categories
  }, [filteredReports])

  const ReportsList = ({ reports }: { reports: Report[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {reports.map((report) => (
        <Link
          key={`${report.category}-${report.name}`}
          to={report.href || "#"}
          className="text-sm text-gray-600 hover:text-gray-900 pb-2 border-b border-gray-200 transition-colors"
        >
          {report.name}
        </Link>
      ))}
    </div>
  )

  return (
    <div className="max-w-9xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Reports</h1>
        <Input 
          type="search" 
          placeholder="Search Report By Name" 
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {(!searchQuery || reportsByCategory.trader.length > 0) && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Trader Reports</h2>
          </CardHeader>
          <CardContent>
            <ReportsList reports={reportsByCategory.trader} />
          </CardContent>
        </Card>
      )}

      {(!searchQuery || reportsByCategory.sales.length > 0) && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Sales Reports</h2>
          </CardHeader>
          <CardContent>
            <ReportsList reports={reportsByCategory.sales} />
          </CardContent>
        </Card>
      )}

      {(!searchQuery || reportsByCategory.purchase.length > 0) && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Purchase Reports</h2>
          </CardHeader>
          <CardContent>
            <ReportsList reports={reportsByCategory.purchase} />
          </CardContent>
        </Card>
      )}

      {filteredReports.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No reports found matching "{searchQuery}"
        </div>
      )}
    </div>
  )
}

