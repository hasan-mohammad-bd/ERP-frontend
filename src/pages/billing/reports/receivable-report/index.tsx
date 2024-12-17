// PurchaseRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";

import ReceiveableReportTable from "./components/receiveable-report-table";

import { useGetReceivableReportQuery } from "@/store/services/billing/api/receiveable-report";

const ReceiveableReport = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useGetReceivableReportQuery(
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
          title="Receivable Report"
          description="Manage employees for your business"
        />
      </div>

      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="Receivable Report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Receivable Report</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />
            {fetchedData.length ? (
              <ReceiveableReportTable tableData={fetchedData} />
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

export default ReceiveableReport;
