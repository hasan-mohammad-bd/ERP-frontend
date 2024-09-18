import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { AddJobPostForm } from "./components/add-job-post-form";
import { jobPostColumns } from "./components/columns";
import { useGetJobPostsQuery } from "@/store/services/hrm/api/job-post";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const JobPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetJobPostsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const jobPost = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Job Post"
              description="Manage job post for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Job Post
            </Button>
          </div>
          <Separator />
          {jobPost && (
            <div>
              <DataTable
                columns={jobPostColumns}
                data={jobPost}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Add Job Post"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <AddJobPostForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default JobPost;
