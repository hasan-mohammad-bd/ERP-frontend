import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { designationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import {  AddDesignationForm } from "./components/add-designation-form";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";

const Department = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading } = useGetDesignationQuery();

	const departments = data?.data || [];

	// console.log(departments);
	if (isLoading) return <Loading />;

	return (
		<>
			<div className="flex flex-col">
				<div className="flex-1 space-y-4 md:p-8">
					<div className="flex items-center justify-between">
						<Heading
							title="Designation"
							description="Manage departments for you business"
						/>
						<Button onClick={() => setIsOpen(true)}>
							<Plus className="mr-2 h-4 w-4" /> Add Designation
						</Button>
					</div>
					<Separator />
					{departments && (
						<div>
							<DataTable columns={designationColumns} data={departments} />
						</div>
					)}
				</div>
			</div>
			<Modal
				title="Add Designation"
				isOpen={isOpen}
				toggleModal={() => setIsOpen(false)}
			>
				<AddDesignationForm modalClose={() => setIsOpen(false)} />
			</Modal>
		</>
	);
};

export default Department;
