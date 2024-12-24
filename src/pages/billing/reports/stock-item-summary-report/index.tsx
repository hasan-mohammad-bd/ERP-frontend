import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import { useAuth } from "@/store/hooks";
import { getFormattedDate } from "@/utils/format-dates";
import StockItemSummaryTable from "./components/stock-item-summary-table";
import StockItemSummaryFilter from "./components/stock-item-summary-filter";
import { useGetStockItemSummaryReportQuery } from "@/store/services/billing/api/reports/stock-item-summary-report";

const StockItemSummaryReport = () => {
  const [filterParams, setFilterParams] = useState("");
  const { data } = useGetStockItemSummaryReportQuery(
    `${filterParams}`,
    { skip: !filterParams }
  );
  const stackItemSummary = data 
  const startDate = data?.start_date;
  const endDate = data?.end_date;
  const { user } = useAuth();

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Stock Item Summary Report"
          description="Manage employees for you business"
        />
      </div>
      <Separator />
      <StockItemSummaryFilter setFilterParams={setFilterParams} />

        <Card>
          <PrintPDFWrapper className="space-y-4" fileName="stock-item-summary-report">
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Stock Item Summary Report</h3>
                {startDate && endDate && (
                  <h5 className="text-md">
                    From: {getFormattedDate(startDate)} to{" "}
                    {getFormattedDate(endDate)}
                  </h5>
                )}
              </div>
            </div>

          {
            stackItemSummary &&   <StockItemSummaryTable tableData={stackItemSummary} />
          }
          </PrintPDFWrapper>
        </Card>

    </div>
  );
};

export default StockItemSummaryReport;
