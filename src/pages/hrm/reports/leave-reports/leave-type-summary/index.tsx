import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { PaginationInfo } from "@/types";

import PrintPDFWrapper from "@/components/common";
import { Card } from "@/components/ui/card";

import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import EmployeeFilters from "@/pages/hrm/employee/employee-list/components/employee-filters";
import { useGetLeaveTypeSummaryQuery } from "@/store/services/hrm/api/leave-type-summary";
import LeaveTypeSummaryTable from "./components/leave-type-summery-table";

const LeaveTypeSummary = () => {
  // State for pagination
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [filterParams, setFilterParams] = useState("");
  console.log("pageSize", pageSize);

  // Fetch leave type summary data with pagination
  const { data, isLoading } = useGetLeaveTypeSummaryQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  console.log("summary", data);

  // Extract the leave type summary data and pagination info
  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Leave Type Summary"
          description="Manage employees for you business"
        />
        <EmployeeFilters setFilterParams={setFilterParams} />
      </div>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="leave-type-summary">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Leave Type Summary</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />

            {fetchedData ? (
              <LeaveTypeSummaryTable tableData={fetchedData} />
            ) : null}
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

export default LeaveTypeSummary;
