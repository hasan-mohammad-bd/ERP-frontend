import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { useNavigate } from "react-router-dom";
import { quotesColumns } from "./components/columns";
import { useGetQuotationsQuery } from "@/store/services/billing/api/quotations";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";

const Quotes = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetQuotationsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const quotationData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Quotes"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => navigate("/billing/quotes/add")} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Quotes
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={quotesColumns}
                data={quotationData}
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

export default Quotes;
