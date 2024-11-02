import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { employeeColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { EmployeeColumn } from "@/lib/validators";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { AddAttendancePolicyMappingForm } from "./components/employee-form/add-attendance-policy";
import { Separator } from "@/components/ui/separator";
import EmployeeFilters from "./components/employee-filters";
import ListSkeleton from "@/components/common/ListSkeleton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmployeeAction } from "@/store/services/erp-main/slices/commonSlice";

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
  {
    label: "Salary Estimate/Generate",
    value: "salary-estimate-generate",
  },
];

const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState("");
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }${filterParams}{}`
  );

  // Set appropriate bulk action type here
  const [selectedBulkAction, setSelectedBulkAction] = useState<
    BulkAction<EmployeeColumn>
  >({ action: "", payload: [] });

  const employees = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  const handleEmployeeRosterChange = () => {
    console.log("Handle Employee Roster Change");
    console.log(selectedBulkAction);
    // Handle selectedBulkAction here
    toast.success("Employee roster updated successfully");
    setSelectedBulkAction({ action: "", payload: [] });
  };

  const handleSaveToGlobalState = () => {
    console.log(selectedBulkAction)
    dispatch(setSelectedEmployeeAction(selectedBulkAction));
    toast.success("Employee selected successfully");
    setSelectedBulkAction({ action: "", payload: [] });
    navigate("/hrm/estimate-salary")
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
            <Button onClick={(()=> navigate("/hrm/employees-list/add"))} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Employee
            </Button>
          </div>
          <Separator />
          <EmployeeFilters setFilterParams={setFilterParams} />
          {isLoading && <ListSkeleton />}
          {employees && !isLoading && (
            <div>
              <DataTable
                columns={employeeColumns}
                data={employees}
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

      {
        selectedBulkAction.action === "salary-estimate-generate" && (
          <Modal
            title="Salary Estimate/Generate"
            toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
            isOpen={selectedBulkAction.action === "salary-estimate-generate"}
            className="!h-fit"
          >
            {/* delete each on at a time */}
            <span>{selectedBulkAction.payload.map((item) => item.first_name).join(", ")} </span> 
            <Button onClick={handleSaveToGlobalState}>Select the Employees</Button>
          </Modal>
        )
      }
    </>
  );
};

export default Employee;
