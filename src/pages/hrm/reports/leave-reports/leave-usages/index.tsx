// import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
// import { PaginationState } from "@tanstack/react-table";

// import { PaginationInfo } from "@/types";
import LeaveUsagesTable from "./components/leave-usages-table";
import { useGetLeaveUsageQuery } from "@/store/services/hrm/api/report/leave/leave-usages";
import { PaginationInfo } from "@/types";
import { Paginator } from "@/components/common/paginator";
import PrintPDFWrapper from "@/components/common";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const LeaveUsagesReport = () => {
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const { data, isLoading } = useGetLeaveUsageQuery(
    `per_page=${pageSize}&page=${page}`
  );

  const fetchedData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
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
