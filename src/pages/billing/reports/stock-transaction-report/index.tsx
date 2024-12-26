import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import StockTransactionReportTable from "./components/stock-transaction-report-table";
import StockTransactionReportFilter from "./components/stock-transaction-report-filter";
import { useGetStockTransactionReportQuery } from "@/store/services/billing/api/reports/stock-transaction-report";

const StockTransactionReport = () => {
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(undefined);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const { data, isLoading, error } = useGetStockTransactionReportQuery(filterParams);

  const fetchedData = data?.data || [];

  console.log("Query params:", filterParams); // Debug log
  console.log("API Response:", data); // Debug log
  console.log("API Error:", error); // Debug log

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Stock Transaction Report"
          description="View Stock Transaction Report"
        />
        <StockTransactionReportFilter
          setFilterParams={setFilterParams}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
          setFiltersApplied={setFiltersApplied}
        />
      </div>
      {filtersApplied && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="stock-transaction-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>Akaar It Ltd</h2>
                <h3 className="text-xl">Stock Transaction Report</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              {fetchedData.length > 0 ? (
                <StockTransactionReportTable
                  tableData={fetchedData}
                  selectedDate={selectedDate}
                  selectedEndDate={selectedEndDate}
                />
              ) : (
                <p className="text-center py-4">No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
        </Card>
      )}
    </>
  );
};

export default StockTransactionReport;
