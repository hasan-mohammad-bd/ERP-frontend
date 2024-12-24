import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { useGetLeaveBalanceQuery } from "@/store/services/hrm/api/leave-balance";
import { PaginationInfo } from "@/types"; // Assuming you have a PaginationInfo type like in CheckBooks

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import EmployeeFilters from "@/pages/hrm/employee/employee-list/components/employee-filters";
import LeaveBalanceTable from "./components/leave-balance-table";
import { useAuth } from "@/store/hooks";

const LeaveBalance = () => {
  const { user } = useAuth();
  // State for pagination
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [filterParams, setFilterParams] = useState("");
  // Fetch leave balance data with pagination
  const { data, isLoading } = useGetLeaveBalanceQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  // Extract the leave balance data and pagination info
  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Leave Balance"
          description="Manage employees for you business"
        />
        <EmployeeFilters setFilterParams={setFilterParams} />
      </div>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="leave-usages-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>{user?.organization?.name}</h2>
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
