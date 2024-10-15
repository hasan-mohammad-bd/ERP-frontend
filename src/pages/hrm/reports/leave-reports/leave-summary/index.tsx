// import React from "react";
import { Loading } from "@/components/common/loading";
import { useGetLeaveSummaryQuery } from "@/store/services/hrm/api/report/leave/leave-summay";
import { PaginationInfo } from "@/types";
import LeaveSummaryTable from "./components/leave-summary-table";
import { useState } from "react";
import { Paginator } from "@/components/common/paginator";
import PrintPDFWrapper from "@/components/common";

const LeaveSummary = () => {
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const { data, isLoading } = useGetLeaveSummaryQuery(
    `per_page=${pageSize}&page=${page}`
  );

  const leaveSummary = data?.data || [];
  const leavesTypeSummary = data?.leaves_type_summary;

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="">
        <PrintPDFWrapper className="space-y-4" fileName="leave-summary-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center  ">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Leave Summary</h3>
            </div>
          </div>
          {leaveSummary && leavesTypeSummary ? (
            <LeaveSummaryTable
              tableData={leaveSummary}
              leaveTypeSummary={leavesTypeSummary}
            />
          ) : null}
          {paginationInfo && (
            <Paginator
              className="print:hidden hide-in-pdf"
              meta={paginationInfo} // Pagination information
              dataCount={leaveSummary.length} // Total number of data is shown in the paginator
              onPageChange={setPage} // Function to handle page change event
              onPageSizeChange={setPageSize} // Function to handle page size change event
            />
          )}
        </PrintPDFWrapper>
      </div>
    </>
  );
};

export default LeaveSummary;
