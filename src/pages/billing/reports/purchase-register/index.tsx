// PurchaseRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import PurchaseRegisterFilter from "./components/purchase-register-filter";
import { useGetPurchaseRegisterQuery } from "@/store/services/billing/api/reports/purchase-register";
import PurchaseRegisterTable from "./components/purchase-register-table";
import { useAuth } from "@/store/hooks";

const PurchaseRegister = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );
  const [filtersApplied, setFiltersApplied] = useState(false); // Track if filters are applied

  // Use skip option to prevent fetching data before filters are applied
  const { data, isLoading } = useGetPurchaseRegisterQuery(
    `with_summary=1&per_page=${pageSize}&page=${page}&${filterParams}`,
    { skip: !filtersApplied } // Skip the query when filters are not applied
  );

  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Purchase Register"
          description="Manage employees for your business"
        />
        <PurchaseRegisterFilter
          setFilterParams={(params) => {
            setFilterParams(params);
            setFiltersApplied(true); // Enable data fetching
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
            fileName="purchase-register-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Purchase Register</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              {fetchedData.length ? (
                <PurchaseRegisterTable tableData={fetchedData} />
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

export default PurchaseRegister;
