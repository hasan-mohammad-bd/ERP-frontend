import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import { useAuth } from "@/store/hooks";
import { useGetTopSoldItemsQuery } from "@/store/services/billing/api/reports/top-sold-items";
import TopSoldItemsFilter from "./components/top-sold-items-filter";
import TopSoldItemsTable from "./components/top-sold-items-table";
import { getFormattedDate } from "@/utils/format-dates";

const TopSoldItems = () => {
  const [filterParams, setFilterParams] = useState("");
  const { data: warehouseReportData } = useGetTopSoldItemsQuery(
    `${filterParams}`,
    { skip: !filterParams }
  );
  const warehouseWiseSales = warehouseReportData?.data || [];
  const startDate = warehouseReportData?.start_date;
  const endDate = warehouseReportData?.end_date;
  const { user } = useAuth();

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Top Sold Items"
          description="Manage employees for you business"
        />
      </div>
      <Separator />
      <TopSoldItemsFilter setFilterParams={setFilterParams} />
      {warehouseWiseSales.length > 0 ? (
        <Card>
          <PrintPDFWrapper className="space-y-4" fileName="stock-report">
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Top Sold Items Report</h3>
                {startDate && endDate && (
                  <h5 className="text-md">
                    From: {getFormattedDate(startDate)} to{" "}
                    {getFormattedDate(endDate)}
                  </h5>
                )}
              </div>
            </div>

            <TopSoldItemsTable tableData={warehouseWiseSales} />
          </PrintPDFWrapper>
        </Card>
      ) : null}
    </div>
  );
};

export default TopSoldItems;
