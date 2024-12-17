// import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
// import { PaginationState } from "@tanstack/react-table";


import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import EmployeeFilters from "@/pages/hrm/employee/employee-list/components/employee-filters";
import { useGetLeaveUsageQuery } from "@/store/services/hrm/api/report/leave/leave-usages";
import { PaginationInfo } from "@/types";
import { useState } from "react";
import LeaveUsagesTable from "./components/leave-usages-table";

const LeaveUsagesReport = () => {
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [filterParams, setFilterParams] = useState("");

  const { data, isLoading } = useGetLeaveUsageQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  const fetchedData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Leave Usages"
          description="Manage employees for you business"
        />
        <EmployeeFilters setFilterParams={setFilterParams} />
      </div>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="leave-usages-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Leave Usages</h3>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />

            {fetchedData ? <LeaveUsagesTable tableData={fetchedData} /> : null}
          </div>
        </PrintPDFWrapper>
        {paginationInfo && (
          <Paginator
            className="px-4 pb-4"
            meta={paginationInfo} // Pagination information
            dataCount={fetchedData.length} // Total number of data is shown in the paginator
            onPageChange={setPage} // Function to handle page change event
            onPageSizeChange={setPageSize} // Function to handle page size change event
          />
        )}
      </Card>
    </>
  );
};

export default LeaveUsagesReport;
