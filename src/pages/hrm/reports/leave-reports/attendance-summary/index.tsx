import { Loading } from "@/components/common/loading";
import PrintPDFWrapper from "@/components/common";
import { Card } from "@/components/ui/card";
import { useGetAttendanceSummaryQuery } from "@/store/services/hrm/api/attendance-summary";
import AttendanceSummaryTable from "./components/attendance-summary-table";
import { useState } from "react";
import AttendanceSummarySearchToolbar from "./components/attendance-summary-search-toolbar";
import { format } from "date-fns";

const AttendanceSummary = () => {
  const [filterParams, setFilterParams] = useState(`date=${format(new Date(), "yyyy-MM")}`); // Start with empty string to fetch all data initially

  const { data: attendanceSummaryData, isLoading } = useGetAttendanceSummaryQuery(filterParams);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="py-3">
        <Card>
          <AttendanceSummarySearchToolbar setFilterParams={setFilterParams} />
        </Card>
      </div>
      <div>
        <Card>
          <PrintPDFWrapper className="space-y-4" fileName="attendance-summary-report">
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>Akaar IT</h2>
                <h3 className="text-xl">Attendance Summary</h3>
              </div>
            </div>

            {attendanceSummaryData ? (
              <AttendanceSummaryTable tableData={attendanceSummaryData} />
            ) : null}
          </PrintPDFWrapper>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceSummary;
