import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import StockReportTable from "./components/stock-report-table";
import { useGetStockReportQuery } from "@/store/services/billing/api/reports/stock-report";
import StockReportFilter from "./components/stock-report-filter";
import { useAuth } from "@/store/hooks";

const StockReport = () => {
  const [filterParams, setFilterParams] = useState("");
  const { data: StockReportData } = useGetStockReportQuery(`${filterParams}`);
  const stocks = StockReportData?.data || [];
  const { user } = useAuth();

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Stock Report"
          description="Manage employees for you business"
        />
      </div>
      <Separator />
      <StockReportFilter setFilterParams={setFilterParams} />
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="stock-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>{user?.organization?.name}</h2>
              <h3 className="text-xl">Stock Report</h3>
            </div>
          </div>

          {stocks.length > 0 ? <StockReportTable tableData={stocks} /> : null}
        </PrintPDFWrapper>
      </Card>
    </div>
  );
};

export default StockReport;
