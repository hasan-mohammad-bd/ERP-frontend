import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { EmployeeForm } from "./components/employee-form";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { employeeColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { EmployeeColumn } from "@/lib/validators";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { AddAttendancePolicyMappingForm } from "./components/employee-form/add-attendance-policy";

const BULK_ACTIONS = [
  {
    label: "Enable Roster",
    value: "enable-roster",
  },
  {
    label: "Attendance Policy Mapping",
    value: "attendance-policy-mapping",
  },
  {
    label: "Delete Selected",
    value: "delete-selected",
  },
];

const Employee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  // Set appropriate bulk action type here
  const [selectedBulkAction, setSelectedBulkAction] = useState<
    BulkAction<EmployeeColumn>
  >({ action: "", payload: [] });

  const employee = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  console.log(selectedBulkAction);
  if (isLoading) return <Loading />;

  const handleEmployeeRosterChange = () => {
    console.log("Handle Employee Roster Change");
    console.log(selectedBulkAction);
    // Handle selectedBulkAction here
    toast.success("Employee roster updated successfully");
    setSelectedBulkAction({ action: "", payload: [] });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Employees"
              description="Manage employees for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Employee
            </Button>
          </div>
          <Separator />
          {employee && (
            <div>
              <DataTable
                columns={employeeColumns}
                data={employee}
                bulkActions={BULK_ACTIONS} // optional - pass it if you want to show bulk actions
                onBulkSelectChange={setSelectedBulkAction} // ((fun) optional - pass it if you want to get selected bulk action
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Employee"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="w-[90%] max-w-6xl"
      >
        <EmployeeForm modalClose={() => setIsOpen(false)} />
      </Modal>

      {/* Example uses with modal using selected bulk action  */}
      {selectedBulkAction.action === "enable-roster" && (
        <AlertModal
          title="Enable Employee Roster?"
          description="This action can be changed later"
          alertMessage="Are you sure you want to update employee roster status?"
          type="default"
          isOpen={selectedBulkAction.action === "enable-roster"}
          onClose={() => setSelectedBulkAction({ action: "", payload: [] })}
          onConfirm={handleEmployeeRosterChange}
        ></AlertModal>
      )}

      {selectedBulkAction.action === "attendance-policy-mapping" && (
        <Modal
          title="Attendance Policy Mapping"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "attendance-policy-mapping"}
          className="!h-fit"
        >
          <AddAttendancePolicyMappingForm
            payload={selectedBulkAction.payload as EmployeeColumn[]}
            modelClose={() =>
              setSelectedBulkAction({ action: "", payload: [] })
            }
          />
        </Modal>
      )}
    </>
  );
};

export default Employee;
