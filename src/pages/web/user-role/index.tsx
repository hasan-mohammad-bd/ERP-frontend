import React from "react";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { subAccountColumns } from "./components/columns";
import { useGetRolesQuery } from "@/store/services/erp-main/api/user-role";

import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/common/heading";
import RoleAccess from "@/lib/access-control/role-access";

const UserRole = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetRolesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const userRole = data?.data || [];

  const navigate = useNavigate();

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="User Role"
              description="Manage your sub accounts for you business"
            />
            <RoleAccess roles={["roles.create"]}>
              <Button onClick={() => navigate("/web/role/add")}>
                <Plus className="mr-2 h-4 w-4" /> Add Role
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {userRole && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={userRole}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
                className={"py-2"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserRole;
