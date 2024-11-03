// import React from "react";
import PrintPDFWrapper from "@/components/common";
import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import EmployeeFilters from "@/pages/hrm/employee/employee-list/components/employee-filters";
import { useGetLeaveSummaryQuery } from "@/store/services/hrm/api/report/leave/leave-summay";
import { PaginationInfo } from "@/types";
import { useState } from "react";
import LeaveSummaryTable from "./components/leave-summary-table";

const LeaveSummary = () => {
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [filterParams, setFilterParams] = useState("");

  const { data, isLoading } = useGetLeaveSummaryQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  const leaveSummary = data?.data || [];
  const leavesTypeSummary = data?.leaves_type_summary;

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Leave Summary"
          description="Manage employees for you business"
        />
        <EmployeeFilters setFilterParams={setFilterParams} />
      </div>
      <Card>
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
        </PrintPDFWrapper>
        {paginationInfo && (
          <Paginator
            className="print:hidden hide-in-pdf px-4 pb-4" // optional
            meta={paginationInfo} // Pagination information
            dataCount={leaveSummary.length} // Total number of data is shown in the paginator
            onPageChange={setPage} // Function to handle page change event
            onPageSizeChange={setPageSize} // Function to handle page size change event
          />
        )}
      </Card>
    </>
  );
};

export default LeaveSummary;
