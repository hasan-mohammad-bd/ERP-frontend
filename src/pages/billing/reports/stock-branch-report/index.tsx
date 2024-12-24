// SaleRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import SaleRegisterTable from "./components/stock-branch-report";
import SaleSummaryFilter from "./components/sale-summary-filter";
import { useGetStockBatchQuery } from "@/store/services/billing/api/reports/stack-branch-report";
import { getFormattedDate } from "@/utils/format-dates";

const StockBranchReport = () => {
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );
  const [filtersApplied, setFiltersApplied] = useState(false); // Track if filters are applied

  // Use skip option to prevent fetching data before filters are applied
  const { data, isLoading } = useGetStockBatchQuery(
    `${filterParams}`,
    { skip: !filtersApplied } // Skip the query when filters are not applied
  );

  const fetchedData = data;
  const startDate = fetchedData?.start_date;
  const endDate = fetchedData?.end_date;
  console.log(fetchedData)

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Stock Branch Report"
          description="Manage employees for your business"
        />
        <SaleSummaryFilter
          setFilterParams={(params) => {
            setFilterParams(params);
            setFiltersApplied(true); // Enable data fetching
          }}
          setFiltersApplied={setFiltersApplied}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
        />
      </div>
      {filtersApplied && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="sale-profit-lass-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>Akaar IT</h2>
                <h3 className="text-xl">Stock Branch Report</h3>
                {startDate && endDate && (
                  <h5 className="text-md">
                    From: {getFormattedDate(startDate)} to{" "}
                    {getFormattedDate(endDate)}
                  </h5>
                )}
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              { fetchedData ? (
                  <SaleRegisterTable
                    tableData={fetchedData}
                    // ledgerAccounts={fetchedData.ledger_accounts}
                    // totals={fetchedData.total} // Pass the totals object
                  />

              ) : (
                <p>No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
        </Card>
      )}
    </>
  );
};

export default StockBranchReport;
