import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { employeeClassColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import { useGetEmployeeClassesQuery } from "@/store/services/hrm/api/employee-class";
import { AddEmployeeClassForm } from "./components/add-employee-class-form";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";

const EmployeeClass = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [pagination, setPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isLoading } = useGetEmployeeClassesQuery(
		`per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
	);

	const employeeClasses = data?.data || [];

	const paginationInfo: PaginationInfo | undefined = data?.meta;
	// console.log(departments);
	if (isLoading) return <Loading />;

	return (
		<>
			<div className="flex flex-col">
				<div className="flex-1 space-y-4 md:p-8">
					<div className="flex items-center justify-between">
						<Heading
							title="Employee Class"
							description="Manage employee classes for you business"
						/>
						<Button onClick={() => setIsOpen(true)} size={"sm"}>
							<Plus className="mr-2 h-4 w-4" /> Add Employee Class
						</Button>
					</div>
					<Separator />
					{employeeClasses && (
						<div>
							<DataTable
								columns={employeeClassColumns}
								data={employeeClasses}
								paginationInfo={paginationInfo}
								pagination={pagination}
								setPagination={setPagination}
							/>
						</div>
					)}
				</div>
			</div>
			<Modal
				title="Add Employee Class"
				isOpen={isOpen}
				toggleModal={() => setIsOpen(false)}
			>
				<AddEmployeeClassForm modalClose={() => setIsOpen(false)} />
			</Modal>
		</>
	);
};

export default EmployeeClass;
