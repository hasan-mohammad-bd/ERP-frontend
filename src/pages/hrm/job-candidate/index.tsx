import { useState } from "react";
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

const JobCandidate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetJobCandidatesQuery();

  const jobCandidate = data?.data || [];

console.log(jobCandidate);

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
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Job Candidate
            </Button>
          </div>
          <Separator />
          {jobCandidate && (
            <div>
              <DataTable columns={jobCandidateColumns} data={jobCandidate} />
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
