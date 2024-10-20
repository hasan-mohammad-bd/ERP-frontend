import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";

import { useGetLeaveBalanceQuery } from "@/store/services/hrm/api/leave-balance";
import { PaginationInfo } from "@/types"; // Assuming you have a PaginationInfo type like in CheckBooks

import PrintPDFWrapper from "@/components/common";
import { Card } from "@/components/ui/card";
import { Paginator } from "@/components/common/paginator";
import LeaveBalanceTable from "./components/leave-balance-table";

const LeaveBalance = () => {
  // State for pagination
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  // Fetch leave balance data with pagination
  const { data, isLoading } = useGetLeaveBalanceQuery(
    `per_page=${pageSize}&page=${page}`
  );

  // Extract the leave balance data and pagination info
  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="leave-usages-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Leave Balance Report</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />

            {fetchedData ? <LeaveBalanceTable tableData={fetchedData} /> : null}
          </div>
        </PrintPDFWrapper>
        {paginationInfo && (
          <Paginator
            className="px-4 pb-4"
            meta={paginationInfo}
            dataCount={fetchedData.length}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        )}
      </Card>

     
    </>
  );
};

export default LeaveBalance;
