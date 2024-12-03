import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useNavigate } from "react-router-dom";
import { invoiceColumns } from "./components/columns";
import { useGetSalesInvoicesQuery } from "@/store/services/billing/api/invoices";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { useState } from "react";

const Invoice = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetSalesInvoicesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const invoicesData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Invoices"
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/billing/invoices/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Invoice
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={invoiceColumns}
                data={invoicesData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Invoice;
