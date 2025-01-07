import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ReportDashboardItem } from "@/types";


// Component Props
interface ReportsDashboardProps<CategoryType = string> {
  reports: ReportDashboardItem<CategoryType>[];
}

export default function ReportsDashboard<CategoryType = string>({
  reports,
}: ReportsDashboardProps<CategoryType>) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered reports based on search query
  const filteredReports = useMemo(() => {
    if (!searchQuery) return reports;
    const lowerQuery = searchQuery.toLowerCase();
    return reports.filter((report) =>
      report.name.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, reports]);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(reports.map((report) => report.category))
    );
    return uniqueCategories.map((category) => ({
      name: category,
      reports: filteredReports.filter((report) => report.category === category),
    }));
  }, [filteredReports, reports]);

  // Reusable component for listing reports
  const ReportsList = ({ reports }: { reports: ReportDashboardItem<CategoryType>[] }) => (
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
  );

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

      {/* Render cards dynamically */}
      {categories.map(
        ({ name, reports }) =>
          (!searchQuery || reports.length > 0) && (
            <Card key={String(name)}>
              <CardHeader>
                <h2 className="text-lg font-medium">{`${String(
                  name
                ).charAt(0).toUpperCase()}${String(name).slice(1)} Reports`}</h2>
              </CardHeader>
              <CardContent>
                <ReportsList reports={reports} />
              </CardContent>
            </Card>
          )
      )}

      {/* Show no results message if no reports match */}
      {filteredReports.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No reports found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}
