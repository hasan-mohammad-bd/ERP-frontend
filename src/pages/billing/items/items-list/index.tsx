import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { itemRows } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { useNavigate } from "react-router-dom";
import { useGetItemQuery } from "@/store/services/billing/api/items";
import RoleAccess from "@/lib/access-control/role-access";

const ItemList = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetItemQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}`
  );

  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Items"
              description="Manage all items for you business"
            />
            <RoleAccess roles={["items.create"]}>
              <Button
                onClick={() => navigate("/billing/items/add")}
                size={"sm"}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Item
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {fetchedData && !isLoading && (
            <div>
              <DataTable
                columns={itemRows}
                data={fetchedData}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
                onChangeSearch={setSearchTerm}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemList;
