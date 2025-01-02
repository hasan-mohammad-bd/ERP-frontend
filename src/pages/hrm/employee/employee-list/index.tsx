import { AlertModal } from "@/components/common/alert-modal";
import { Heading } from "@/components/common/heading";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table/data-table";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { Separator } from "@/components/ui/separator";
import { EmployeeColumn } from "@/lib/validators";
import { setSelectedEmployeeAction } from "@/store/services/erp-main/slices/commonSlice";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { employeeColumns } from "./components/columns";
import EmployeeFilters from "./components/employee-filters";
import { AddAttendancePolicyMappingForm } from "./components/employee-form/add-attendance-policy";
import { Badge } from "@/components/ui/badge";

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
  {
    label: "Salary Adjustment",
    value: "salary-adjustment",
  },
];

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
}

const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState("");
  const [pagination, setPagination] = React.useState<PaginationState>(initialPaginationState);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}&${filterParams}`
  );
  // console.log("🚀 ~ Employee ~ data:", data);
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

  const handleSaveToGlobalState = (navigateTo: string) => {
    // console.log(selectedBulkAction);
    dispatch(setSelectedEmployeeAction(selectedBulkAction));
    toast.success("Employee selected successfully");
    setSelectedBulkAction({ action: "", payload: [] });
    // navigate("/hrm/estimate-salary");
    const employeeIds = selectedBulkAction.payload
      .map((employee) => employee.id)
      .join(",");

    const salary_month =
      filterParams?.split("=").includes("has_salary_month") &&
      filterParams?.split("=")[1];

    if (selectedBulkAction.action === "salary-adjustment") {
      navigate(
        `${navigateTo}?employee_ids=${employeeIds}&salary_month=${salary_month}`
      );
    } else {
      navigate(navigateTo);
    }
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
            <Button
              onClick={() => navigate("/hrm/employees-list/add")}
              size={"sm"}
            >
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
                onChangeSearch={(value) => {
                  setPagination(initialPaginationState);
                  setSearchTerm(value);
                }}
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

      {selectedBulkAction.action === "salary-estimate-generate" && (
        <Modal
          title="Salary Estimate/Generate"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "salary-estimate-generate"}
          className="!h-fit"
        >
          <span>
            {filterParams.includes("estimate_salary_for") ? null : (
              <span className="text-red-500 text-xs">
                Please Select estimated salary for
              </span>
            )}
          </span>
          <span>
            {selectedBulkAction.payload.length > 0 ? null : (
              <span className="text-red-500 text-xs">
                Please Select at least one employee
              </span>
            )}
          </span>
          {/* delete each on at a time */}
          <span>
            {selectedBulkAction.payload.map((item) => (
              <Badge className="mr-1 mb-1" key={item.id}>
                {item.first_name}
              </Badge>
            ))}
          </span>
          <Button
            onClick={() => handleSaveToGlobalState("/hrm/estimate-salary")}
          >
            Select the Employees
          </Button>
        </Modal>
      )}

      {selectedBulkAction.action === "salary-adjustment" && (
        <Modal
          title="Salary Adjustment"
          toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
          isOpen={selectedBulkAction.action === "salary-adjustment"}
          className="!h-fit"
        >
          <span>
            {filterParams.includes("has_salary_month") ? null : (
              <span className="text-red-500 text-xs">
                Please select a month for employees with generated salaries.
              </span>
            )}
          </span>
          <span>
            {selectedBulkAction.payload.length > 0 ? null : (
              <span className="text-red-500 text-xs">
                Please Select at least one employee
              </span>
            )}
          </span>
          {/* delete each on at a time */}
          <span>
            {selectedBulkAction.payload.map((item) => (
              <Badge className="mr-1 mb-1" key={item.id}>
                {item.first_name}
              </Badge>
            ))}
          </span>
          <Button
            onClick={() => handleSaveToGlobalState("/hrm/salary-adjustment")}
            disabled={
              !filterParams.includes("has_salary_month") ||
              selectedBulkAction.payload.length === 0
            }
          >
            Select the Employees
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Employee;
