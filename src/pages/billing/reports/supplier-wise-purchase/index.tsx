import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import { useGetSupplierWisePurchaseReportQuery } from "@/store/services/billing/api/reports/supplier-wise-purchase-report";
import SupplierWisePurchaseFilter from "./components/supplier-wise-purchase-filter";
import SupplierWisePurchaseTable from "./components/supplier-wise-purchase-table";
import { useAuth } from "@/store/hooks";

const SupplierWisePurchase = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );
  const [filtersApplied, setFiltersApplied] = useState(false);


  const { data, isLoading } = useGetSupplierWisePurchaseReportQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`,
    { skip: !filtersApplied }
  );

  const fetchedData = data?.data.report || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  console.log("fetchedData", fetchedData);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Supplier Wise Purchase"
          description="Manage employees for your business"
        />
        <SupplierWisePurchaseFilter
          setFilterParams={(params) => {
            setFilterParams(params);
            setFiltersApplied(true);
          }}
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
            fileName="supplier-wise-purchase-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Supplier Wise Purchase Report</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              {fetchedData.length ? (
                <SupplierWisePurchaseTable tableData={fetchedData} />
              ) : (
                <p>No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
          {paginationInfo && (
            <Paginator
              className="px-4 pb-4"
              meta={paginationInfo}
              dataCount={fetchedData.length}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default SupplierWisePurchase;
