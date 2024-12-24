// PurchaseRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";

import { useGetAgedPayableReportQuery } from "@/store/services/billing/api/aged-payable-report";
import AgedPayableReportTable from "./components/aged-payable-report-table";
import { useAuth } from "@/store/hooks";

const AgedPayableReport = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useGetAgedPayableReportQuery(
    `per_page=${pageSize}&page=${page}`
  );

  const fetchedData = data?.data?.report || [];

  console.log("fetchedDataxyz", fetchedData);
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Aged Payable Report"
          description="Manage employees for your business"
        />
      </div>

      <Card>
        <PrintPDFWrapper
          className="space-y-4"
          fileName="Aged Payable Report"
        >
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>{user?.organization?.name}</h2>
              <h3 className="text-xl">Aged Payable Report</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />
            {fetchedData.length ? (
              <AgedPayableReportTable tableData={fetchedData} />
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
    </>
  );
};

export default AgedPayableReport;
