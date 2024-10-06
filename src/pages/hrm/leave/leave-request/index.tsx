import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { attendanceColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-leave-request-form";
import { useGetLeaveRequestsQuery } from "@/store/services/hrm/api/leave-request";
import { LeaveRequestRow } from "@/lib/validators/hrm/leave";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { LeaveStatusChangeForm } from "./components/leave-status-change";

const BULK_ACTIONS = [
  {
    label: "Change Leave Status",
    value: "change-leave-status",
  },
];

const LeaveRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [selectedBulkAction, setSelectedBulkAction] = useState<
  BulkAction<LeaveRequestRow>
>({ action: "", payload: [] });

  const { data, isLoading, refetch } = useGetLeaveRequestsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const jobRequestData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;



  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Leave Request"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Leave Request
            </Button>
          </div>
          <Separator />
          {jobRequestData && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={jobRequestData}
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

      {isOpen && (
        <Modal
          title="Add Leave Request"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-3/5 max-w-3xl"
        >
          <AttendancePolicyForm
            refetch={refetch}
            modalClose={() => setIsOpen(false)}
          />
        </Modal>
      )}

      {selectedBulkAction.action === "change-leave-status" && (
        <Modal
          title="Change Leave Status"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "change-leave-status"}
          className="!h-fit"
        >
          
          <LeaveStatusChangeForm
            payload={selectedBulkAction.payload as LeaveRequestRow[]}
            modelClose={() =>
              setSelectedBulkAction({ action: "", payload: [] })
            }
          />
        </Modal>
      )}
    </>
  );
};

export default LeaveRequest;
