import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { attendanceColumns } from "./components/columns";

// import { JobApplyColumn } from "@/lib/validators";

import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-leave-group-form";
import { useGetLeaveGroupsQuery } from "@/store/services/hrm/api/leave-group";


const LeaveGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetLeaveGroupsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );



  const leaveGroup = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;


  if (isLoading) return <Loading />;



  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Leave Group"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Leave Group
            </Button>
          </div>
          <Separator />
          {leaveGroup && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={leaveGroup}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Leave Group"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className=""
        >
          <AttendancePolicyForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default LeaveGroup;
