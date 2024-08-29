import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { Modal } from "@/components/common/modal";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { subAccountColumns } from "./components/columns";
import { AddUsers } from "./components/add-users-form";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetUsersQuery(
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
              title="Users"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </div>
          <Separator />
          {users && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={users}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Contact"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddUsers modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Users;
