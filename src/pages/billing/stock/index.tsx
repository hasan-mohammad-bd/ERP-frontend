import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { stockColumns } from "./components/columns";
import { useGetItemStocksQuery } from "@/store/services/billing/api/items";
import StocksFilter from "./components/stocks-filter";

const SalesOrder = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterParams, setFilterParams] = useState("");
  

  const { data, isLoading } = useGetItemStocksQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&text=${searchTerm}&${filterParams}`
  );

  const itemStocksData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Stocks"
              description="Manage your sub accounts for you business"
            />
          </div>
          <Separator />
          <StocksFilter setFilterParams={setFilterParams} />
          {data && (
            <div>
              <DataTable
                columns={stockColumns}
                data={itemStocksData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                onChangeSearch={setSearchTerm}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SalesOrder;
