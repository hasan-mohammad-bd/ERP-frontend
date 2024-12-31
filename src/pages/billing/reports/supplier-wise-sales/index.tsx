import { Loading } from "@/components/common/loading";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/store/hooks";
import { getFormattedDate } from "@/utils/format-dates";
import { useGetSupplierWiseSaleReportQuery } from "@/store/services/billing/api/supplier-wise-sales";
import SupplierWiseSalesFilter from "./components/supplier-wise-sales-filter";
import SupplierWiseSalesTable from "./components/supplier-wise-sales-table";
import { Paginator } from "@/components/common/paginator";
import { PaginationInfo } from "@/types";

const SupplierWiseSale = () => {
  const { user } = useAuth();
  const [filterParams, setFilterParams] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading } = useGetSupplierWiseSaleReportQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`,
    { skip: !filterParams }
  );

  const salesData = data?.data || [];
  const totalData = data?.total;
  const startDate = data?.start_date;
  const endDate = data?.end_date;
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Supplier Wise Sale Report"
          description="Supplier Wise Sale History"
        />
        <Separator />
        <SupplierWiseSalesFilter setFilterParams={setFilterParams} />
      </div>
      {filterParams && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="Supplier-wise-sale-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Supplier Wise Sale Report</h3>
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
              {salesData.length > 0 ? (
                <SupplierWiseSalesTable
                  reportData={salesData}
                  totalData={totalData}
                />
              ) : (
                <p className="text-center py-4">No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
          {paginationInfo && (
            <Paginator
              className="px-4 pb-4"
              meta={paginationInfo}
              dataCount={salesData.length}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default SupplierWiseSale;
