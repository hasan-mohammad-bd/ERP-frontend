import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { loanColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-leave-request-form";
// import { LeaveRequestRow } from "@/lib/validators/hrm/leave";
// import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
// import { LeaveStatusChangeForm } from "./components/leave-status-change";
import { useGetLoansQuery } from "@/store/services/hrm/api/loan";
// import { LoanRow } from "@/lib/validators/hrm/loan";

const BULK_ACTIONS = [
  {
    label: "Change Leave Status",
    value: "change-leave-status",
  },
];

const LoanList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

/*   const [selectedBulkAction, setSelectedBulkAction] = useState<
  BulkAction<LoanRow>
>({ action: "", payload: [] }); */

  const { data, isLoading, refetch } = useGetLoansQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  console.log(data)

  const loanData = data?.data || [];
  console.log(loanData)
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;



  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Loan List"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Loan Request
            </Button>
          </div>
          <Separator />
          {loanData && (
            <div>
              <DataTable
                columns={loanColumns}
                data={loanData}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
                bulkActions={BULK_ACTIONS}
                /* onBulkSelectChange={setSelectedBulkAction} */
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

{/*       {selectedBulkAction.action === "change-leave-status" && (
        <Modal
          title="Change Leave Status"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "change-leave-status"}
          className="!h-fit"
        >
          
          <LeaveStatusChangeForm
            payload={selectedBulkAction.payload as LoanRow[]}
            modelClose={() =>
              setSelectedBulkAction({ action: "", payload: [] })
            }
          />
        </Modal>
      )} */}
    </>
  );
};

export default LoanList;
