import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { AddJobApplyForm } from "./components/add-apply-post-form";
import { useGetJobAppliesQuery } from "@/store/services/hrm/api/job-apply";
import { jobApplyColumns } from "./components/columns";
import { BulkAction } from "@/components/ui/data-table/data-table-bulk-actions";
import { JobApplyColumn } from "@/lib/validators";

const BULK_ACTIONS = [
	{
		label: "Update Status",
		value: "update-status",
	},
	{
		label: "Delete Selected",
		value: "delete-selected",
	},
];

const JobApply = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading } = useGetJobAppliesQuery();

	// Set appropriate bulk action type here
	const [selectedBulkAction, setSelectedBulkAction] = useState<
		BulkAction<JobApplyColumn>
	>({ action: "", payload: [] });

	const jobApply = data?.data || [];

	// console.log(departments);
	if (isLoading) return <Loading />;

	// console.log(selectedBulkAction); // you can see selected bulk action here

	return (
		<>
			<div className="flex flex-col">
				<div className="flex-1 space-y-4 md:p-8">
					<div className="flex items-center justify-between">
						<Heading
							title="Job Apply"
							description="Manage job apply for you business"
						/>
						<Button onClick={() => setIsOpen(true)}>
							<Plus className="mr-2 h-4 w-4" /> Add Job Apply
						</Button>
					</div>
					<Separator />
					{jobApply && (
						<div>
							<DataTable
								columns={jobApplyColumns}
								data={jobApply}
								bulkActions={BULK_ACTIONS} // optional - pass it if you want to show bulk actions
								selectedBulkAction={selectedBulkAction} // optional - pass it if you want to show active bulk action
								setSelectedBulkAction={setSelectedBulkAction} // ((fun) optional - pass it if you want to get selected bulk action
							/>
						</div>
					)}
				</div>
			</div>
			<Modal
				title="Add Job Apply"
				isOpen={isOpen}
				toggleModal={() => setIsOpen(false)}
				className=""
			>
				<AddJobApplyForm modalClose={() => setIsOpen(false)} />
			</Modal>

			{/* Example uses with modal using selected bulk action  */}
			{selectedBulkAction.action === "update-status" && (
				<Modal
					title="Job Status Bulk Update"
					isOpen={selectedBulkAction.action === "update-status"}
					toggleModal={() => setSelectedBulkAction({ action: "", payload: [] })}
					className=""
				>
					{/* Do whatever you want to do with selected items  */}
					{selectedBulkAction.payload.map((job) => (
						<div key={job.id}>{job.job_candidate?.email}</div>
					))}
				</Modal>
			)}
		</>
	);
};

export default JobApply;
