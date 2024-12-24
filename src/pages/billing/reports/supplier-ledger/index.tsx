// PurchaseRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";

import SupplierLedgerReportTable from "./components/supplier-ledger-table";
import { useGetSuppliersQuery } from "@/store/services/billing/api/supplier";
import { useAuth } from "@/store/hooks";


const SupplierLedgerReport = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const organization_id = user?.organization_id; // Safely access organization_id from user object

  const { data, isLoading } = useGetSuppliersQuery(
    `per_page=${pageSize}&page=${page}&organization_id=${organization_id}&only_due=1`
  );

  const fetchedData = data?.data || [];

  console.log("fetchedDataSupplier", fetchedData);

  console.log("fetchedDataxyz", fetchedData);
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Supplier Ledger"
          description="Manage employees for your business"
        />
      </div>

      <Card>
        <PrintPDFWrapper
          className="space-y-4"
          fileName="Supplier Ledger Report"
        >
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>{user?.organization?.name}</h2>
              <h3 className="text-xl">Supplier Ledger Report</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />
            {fetchedData.length ? (
              <SupplierLedgerReportTable tableData={fetchedData} />
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

export default SupplierLedgerReport;
