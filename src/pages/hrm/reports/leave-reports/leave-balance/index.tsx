import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { useGetLeaveBalanceQuery } from "@/store/services/hrm/api/leave-balance";
import { PaginationInfo } from "@/types"; // Assuming you have a PaginationInfo type like in CheckBooks
import { leaveBalanceColumns } from "./components/columns";

const LeaveBalance = () => {
  // State for pagination
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0, // Start from the first page (0-indexed)
    pageSize: 10, // Show 10 records per page
  });

  // Fetch leave balance data with pagination
  const { data, isLoading } = useGetLeaveBalanceQuery({
    page: pagination.pageIndex + 1, // API expects 1-indexed pages
    per_page: pagination.pageSize,
  });

  // Extract the leave balance data and pagination info
  const leaveBalanceData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />
          {leaveBalanceData && (
            <div>
              {/* DataTable component rendering data and pagination */}
              <DataTable
                columns={leaveBalanceColumns}
                data={leaveBalanceData}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination} // Correctly pass setPagination
                className={"py-3"}
                reportFormate={{
                  startDate: null,
                  endDate: null,
                  company: "Akaar IT",
                  reportType: "Leave Balance Report",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LeaveBalance;
