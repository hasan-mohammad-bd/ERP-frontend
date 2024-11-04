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
import RoleAccess from "@/lib/access-control/role-access";
import { Badge } from "@/components/ui/badge";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { UsersRow } from "@/lib/validators/web/users";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmployeeAction } from "@/store/services/erp-main/slices/commonSlice";
import { toast } from "sonner";

const BULK_ACTIONS = [

  {
    label: "Approval Groups Select",
    value: "approval-groups-select",
  },
];
const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [selectedBulkAction, setSelectedBulkAction] = useState<
  BulkAction<UsersRow>
>({ action: "", payload: [] });
  const { data, isLoading } = useGetUsersQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const users = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  const handleSaveToGlobalState = () => {
    console.log(selectedBulkAction);
    dispatch(setSelectedEmployeeAction(selectedBulkAction));
    toast.success("User selected successfully");
    setSelectedBulkAction({ action: "", payload: [] });
    navigate("/web/approval-group/add");
  };

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
            <RoleAccess roles={["users.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add User
              </Button>
            </RoleAccess>
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
                bulkActions={BULK_ACTIONS}
                onBulkSelectChange={setSelectedBulkAction}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add User"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="w-1/2 max-w-5xl"
      >
        <AddUsers modalClose={() => setIsOpen(false)} />
      </Modal>

      {selectedBulkAction.action === "approval-groups-select" && (
        <Modal
          title="Approval Groups Selection"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "approval-groups-select"}
          className="!h-fit"
        >

            <span>
              {
                selectedBulkAction.payload.length > 0 ? null : <span className="text-red-500 text-xs">Please Select at least one employee</span>
              }
            </span>
          {/* delete each on at a time */}
          <span>
            {selectedBulkAction.payload
              .map((item) => <Badge className="mr-1 mb-1" key={item.id}>{item.name}</Badge>)
            }
          </span>
          <Button onClick={handleSaveToGlobalState}>
            Select The Users
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Users;
