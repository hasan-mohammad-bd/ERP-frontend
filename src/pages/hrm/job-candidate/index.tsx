import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { AddJobCandidateForm } from "./components/add-job-candidate-form";
import { jobCandidateColumns } from "./components/columns";
import { useGetJobCandidatesQuery } from "@/store/services/hrm/api/job-candidate";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const JobCandidate = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [pagination, setPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isLoading } = useGetJobCandidatesQuery(
		`per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
	);

	const jobCandidate = data?.data || [];

	const paginationInfo: PaginationInfo | undefined = data?.meta;

	// console.log(departments);
	if (isLoading) return <Loading />;

	return (
		<>
			<div className="flex flex-col">
				<div className="flex-1 space-y-4 md:p-8">
					<div className="flex items-center justify-between">
						<Heading
							title="Job Candidates"
							description="Manage job candidates for you business"
						/>
						<Button onClick={() => setIsOpen(true)} size={"sm"}>
							<Plus className="mr-2 h-4 w-4" /> Add Job Candidate
						</Button>
					</div>
					<Separator />
					{jobCandidate && (
						<div>
							<DataTable
								columns={jobCandidateColumns}
								data={jobCandidate}
								paginationInfo={paginationInfo}
								pagination={pagination}
								setPagination={setPagination}
							/>
						</div>
					)}
				</div>
			</div>
			<Modal
				title="Add Job Candidate"
				isOpen={isOpen}
				toggleModal={() => setIsOpen(false)}
				className="w-[90%] max-w-6xl"
			>
				<AddJobCandidateForm modalClose={() => setIsOpen(false)} />
			</Modal>
		</>
	);
};

export default JobCandidate;
