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

const JobApply = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetJobAppliesQuery();

  const jobApply = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

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
              <DataTable columns={jobApplyColumns} data={jobApply} />
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
    </>
  );
};

export default JobApply;
