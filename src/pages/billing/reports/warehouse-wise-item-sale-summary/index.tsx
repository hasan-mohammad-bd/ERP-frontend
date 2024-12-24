import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import WarehouseWiseSalesFilter from "./components/warehouse-wise-sales-filter";
import { useGetWarehouseWiseItemSaleSummaryQuery } from "@/store/services/billing/api/reports/warehouse-wise-item-sale-summary";
import { useAuth } from "@/store/hooks";
import WarehouseWiseSalesTable from "./components/warehouse-wise-sales-table";

const WarehouseWiseItemSale = () => {
  const [filterParams, setFilterParams] = useState("");
  const { data: warehouseReportData } = useGetWarehouseWiseItemSaleSummaryQuery(
    `${filterParams}`,
    { skip: !filterParams }
  );
  const warehouseWiseSales = warehouseReportData?.data || [];
  const { user } = useAuth();

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Warehouse Item Wise Sales"
          description="Manage employees for you business"
        />
      </div>
      <Separator />
      <WarehouseWiseSalesFilter setFilterParams={setFilterParams} />
      {warehouseWiseSales.length > 0 ? (
        <Card>
          <PrintPDFWrapper className="space-y-4" fileName="stock-report">
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">warehouse Item wise sales summary</h3>
              </div>
            </div>

            <WarehouseWiseSalesTable tableData={warehouseWiseSales} />
          </PrintPDFWrapper>
        </Card>
      ) : null}
    </div>
  );
};

export default WarehouseWiseItemSale;
