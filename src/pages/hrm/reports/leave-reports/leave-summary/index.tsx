// import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
// import { PaginationState } from "@tanstack/react-table";
import { useGetLeaveSummaryQuery } from "@/store/services/hrm/api/report/leave/leave-summay";
// import { PaginationInfo } from "@/types";
import LeaveSummaryTable from "./components/leave-summary-table";





const LeaveSummary = () => {

  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  const { data, isLoading } = useGetLeaveSummaryQuery(
    `per_page=1000&page=1`
  );



  const leaveSummary = data?.data || [];
  const leavesTypeSummary = data?.leaves_type_summary
  
  // const paginationInfo: PaginationInfo | undefined = data?.meta;

 


  if (isLoading) return <Loading />;

  return (
    <>
      <div className="">

        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />

          {leaveSummary && leavesTypeSummary ? (
            <LeaveSummaryTable
              tableData={leaveSummary}
              leaveTypeSummary={leavesTypeSummary}
              // summery={summery}
              // totalCr={totalCr}
              // totalDr={totalDr}
              reportFormate={{
                // startDate,
                // endDate,
                company: "Akaar IT",
                reportType: "Leave Summary",
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LeaveSummary;
