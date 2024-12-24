import { Loading } from "@/components/common/loading";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { format } from "date-fns";
import DailyAttendanceReportSearchToolbar from "./components/daily-attendance-report-search-toolbar";
import DailyAttendanceReportTable from "./components/daily-attendance-report-table";
import { useGetDailyAttendanceReportQuery } from "@/store/services/hrm/api/daily-attendance-report";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/store/hooks";

const DailyAttendanceReport = () => {
  const { user } = useAuth();
  const [filterParams, setFilterParams] = useState(
    `date=${format(new Date(), "yyyy-MM")}`
  ); // Start with empty string to fetch all data initially

  const { data, isLoading } = useGetDailyAttendanceReportQuery(filterParams);

  const dailyAttendanceReportData = data?.data || [];

  console.log("object", data);
  console.log("object2", dailyAttendanceReportData);

  console.log("object");

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
        <DailyAttendanceReportSearchToolbar setFilterParams={setFilterParams} />
      </div>
      <div>
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="attendance-summary-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Daily Attendance Report</h3>
              </div>
            </div>

            {dailyAttendanceReportData ? (
              <DailyAttendanceReportTable
                tableData={dailyAttendanceReportData}
              />
            ) : null}
          </PrintPDFWrapper>
        </Card>
      </div>
    </div>
  );
};

export default DailyAttendanceReport;
