import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import AttendanceSearchToolbar from "./components/attendance-search-toolbar";
import { Option } from "@/components/ui/multiSelectSearch";
import { useState } from "react";
import AttendanceInformation from "./components/attendance-Information";

export type FilterSate = {
  fromDate: Date;
  toDate: Date;
  selectedEmployees: Option[];
};

export default function DailyAttendance() {
  const [filterData, setFilterData] = useState<FilterSate>({
    fromDate: new Date(),
    toDate: new Date(),
    selectedEmployees: [],
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Daily Attendance"
              description="Manage Daily Attendance for you business"
            />
          </div>
          <Separator />
          <AttendanceSearchToolbar onShowAttendance={setFilterData} />
          <AttendanceInformation  filterData={filterData}/>
        </div>
      </div>
    </>
  );
}
