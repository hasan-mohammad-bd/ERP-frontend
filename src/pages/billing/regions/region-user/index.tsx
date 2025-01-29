import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { regionUserColumns } from "./components/columns";
import { useGetRegionUserQuery } from "@/store/services/billing/api/region-user";

const RegionUsers = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetRegionUserQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const users = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Region Users"
              description="Manage your sub accounts for you business"
            />
          </div>
          <Separator />
          {users && (
            <div>
              <DataTable
                columns={regionUserColumns}
                data={users}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegionUsers;
