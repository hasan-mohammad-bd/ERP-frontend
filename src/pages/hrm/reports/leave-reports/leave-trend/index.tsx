import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { PaginationInfo } from "@/types"; // Assuming you have a PaginationInfo type like in CheckBooks

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import EmployeeFilters from "@/pages/hrm/employee/employee-list/components/employee-filters";
import { useGetLeaveTrendQuery } from "@/store/services/hrm/api/leave-trend";
import LeaveTrendTable from "./components/leave-trend-table";
import { useAuth } from "@/store/hooks";

const LeaveTrend = () => {
  const { user } = useAuth();
  // State for pagination
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [filterParams, setFilterParams] = useState("");
  // Fetch leave Trend data with pagination
  const { data, isLoading } = useGetLeaveTrendQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  console.log("trend", data);

  // Extract the leave Trend data and pagination info
  const fetchedData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Leave Trend"
          description="Manage employees for you business"
        />
        <EmployeeFilters setFilterParams={setFilterParams} />
      </div>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="leave-trend-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>{user?.organization?.name}</h2>
              <h3 className="text-xl">Leave Trend Report</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />

            {fetchedData ? <LeaveTrendTable tableData={fetchedData} /> : null}
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

export default LeaveTrend;
