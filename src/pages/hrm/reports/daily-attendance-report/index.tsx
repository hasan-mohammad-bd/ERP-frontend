import { Loading } from "@/components/common/loading";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { useState } from "react";

import DailyAttendanceReportTable from "./components/daily-attendance-report-table";
import { useGetDailyAttendanceReportQuery } from "@/store/services/hrm/api/daily-attendance-report";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/store/hooks";

import { getYearMonthDayFormatted } from "@/utils/format-dates";
import AttendanceFilterDaily from "./components/attendance-filter";
import { PaginationInfo } from "@/types";
import { Paginator } from "@/components/common/paginator";
import NoDataFound from "@/components/common/no-data-found";
import { Card } from "@/components/ui/card";

const DailyAttendanceReport = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filterParams, setFilterParams] = useState(
    `date=${getYearMonthDayFormatted(new Date())}`
  ); // Start with empty string to fetch all data initially

  const { data, isLoading } = useGetDailyAttendanceReportQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  const dailyAttendanceReportData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Daily Attendance Report"
          description="Manage Daily Attendance Report for you business"
        />
      </div>
      <Separator />
      <div className="">
        <AttendanceFilterDaily setFilterParams={setFilterParams} />
      </div>
      {dailyAttendanceReportData.length > 0 ? (
        <Card>
          <div>
            <>
              <PrintPDFWrapper
                className="space-y-4"
                fileName="daily-attendance-report"
              >
                <div className="flex-1 space-y-4 my-4">
                  <div className="text-center">
                    <h2>{user?.organization?.name}</h2>
                    <h3 className="text-xl">Daily Attendance Report</h3>
                  </div>
                </div>

                <DailyAttendanceReportTable
                  tableData={dailyAttendanceReportData}
                />
              </PrintPDFWrapper>
              {paginationInfo && (
                <Paginator
                  className="px-4 pb-4"
                  meta={paginationInfo}
                  dataCount={dailyAttendanceReportData.length}
                  onPageChange={setPage}
                  onPageSizeChange={setPageSize}
                />
              )}
            </>
          </div>
        </Card>
      ) : (
        <div className="text-center">
          <NoDataFound />
        </div>
      )}
    </div>
  );
};

export default DailyAttendanceReport;
