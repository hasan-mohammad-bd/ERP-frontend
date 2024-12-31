import { Card } from "@/components/ui/card";
import { useLazyGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { useLazyGetSectionsQuery } from "@/store/services/hrm/api/section"; // Import for sections
import SearchSelect from "@/components/common/search-select";
import { DepartmentColumn, LocationColumn, ScheduleColumn } from "@/lib/validators";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useLazyGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useLazyGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { toast } from "sonner";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function AttendanceFilterSummary({ setFilterParams }: Props) {
  // Fetch department, branch, shift, and section data
  const [getDepartments, { data: departmentData }] = useLazyGetDepartmentsQuery();
  const [getBranches, { data: branchData }] = useLazyGetLocationsQuery();
  const [getShifts, { data: ShiftsData }] = useLazyGetSchedulesQuery();
  const [getSections, { data: sectionData }] = useLazyGetSectionsQuery(); // Lazy query for sections

  // Filter states
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentColumn | undefined>(undefined);
  const [selectedBranch, setSelectedBranch] = useState<LocationColumn | undefined>(undefined);
  const [selectedShift, setSelectedShift] = useState<ScheduleColumn | undefined>(undefined);
  const [selectedSection, setSelectedSection] = useState<any | undefined>(undefined);
  const [selectEstimateDate, setSelectEstimateDate] = useState<Date | undefined>(new Date()); // Default to the current month and year

  const handleApplyFilters = () => {
    const estimateMonth = selectEstimateDate
      ? format(selectEstimateDate, "yyyy-MM")
      : "";

    const params = new URLSearchParams();
    if (selectedDepartment)
      params.append("department_id", selectedDepartment.id.toString());
    if (selectedBranch) params.append("location_id", selectedBranch.id.toString());
    if (selectedShift) params.append("schedule_id", selectedShift.id.toString());
    if (selectedSection) params.append("section_id", selectedSection.id.toString());
    if (selectEstimateDate) params.append("date", estimateMonth.toString());

    const filterParams = params.toString();
    setFilterParams(filterParams);
    toast.success("Filters applied successfully");
  };

  const handleResetFilters = () => {
    setSelectedDepartment(undefined);
    setSelectedBranch(undefined);
    setSelectedShift(undefined);
    setSelectedSection(undefined);
    setSelectEstimateDate(new Date()); // Reset to current month and year
    setFilterParams(""); // reset filters
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        {/* Date Picker */}
        <div className="space-y-2 flex flex-col py-0">
          <DatePicker
            selected={selectEstimateDate}
            onChange={(date) => {
              setSelectEstimateDate(date ?? new Date()); // Set to current date if cleared
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select date"
            className="border rounded p-[6px] w-full bg-none bg_remove"
          />
        </div>

        {/* Department Filter */}
        <SearchSelect
          items={departmentData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDepartment}
          placeholder="Select Department"
          onSelect={setSelectedDepartment}
          onChangeSearch={(searchText) => getDepartments(`text=${searchText}`)}
        />

        {/* Location Filter */}
        <SearchSelect
          items={branchData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedBranch}
          placeholder="Select Location"
          onSelect={setSelectedBranch}
          onChangeSearch={(searchText) => getBranches(`text=${searchText}`)}
        />

        {/* Shift Filter */}
        <SearchSelect
          items={ShiftsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedShift}
          placeholder="Select Shift"
          onSelect={setSelectedShift}
          onChangeSearch={(searchText) => getShifts(`text=${searchText}`)}
        />

        {/* Section Filter */}
        <SearchSelect
          items={sectionData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedSection}
          placeholder="Select Section"
          onSelect={setSelectedSection}
          onChangeSearch={(searchText) => getSections(`text=${searchText}`)}
        />

        {/* Buttons */}
        <Button variant="outline" size={"sm"} onClick={handleResetFilters}>
          Reset Filters
        </Button>
        <Button variant="default" size={"sm"} onClick={handleApplyFilters}>
          <FilterIcon className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}
