import { Card } from "@/components/ui/card";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import SearchSelect from "@/components/common/search-select";
import {
  DepartmentColumn,
  DesignationColumn,
  EmployeeClassColumn,
  EmployeeGradeColumn,
  EmploymentStatusColumn,
  GenderColumn,
  LocationColumn,
  ScheduleColumn,
  SectionColumn,
} from "@/lib/validators";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FilterIcon } from "lucide-react";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useGetSectionsQuery } from "@/store/services/hrm/api/section";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";

import { toast } from "sonner";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface Props {
  setFilterParams: (params: string) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

export default function MasterSalesFilter({ setFilterParams,selectedDate,setSelectedDate }: Props) {


  const [openFromDate, setOpenFromDate] = useState(false);



  // Fetch department data
  const { data: departmentData } = useGetDepartmentsQuery("per_page=1000");
  const { data: designationsData } = useGetDesignationQuery("per_page=1000");
  const { data: sectionsData } = useGetSectionsQuery("per_page=1000");
  const { data: branchData } = useGetLocationsQuery("per_page=1000");
  const { data: employmentStatusData } = useGetEmploymentStatusesQuery();
  const { data: ShiftsData } = useGetSchedulesQuery("per_page=1000");


  // Filter states
  const [selectedDepartment, setSelectedDepartment] = useState<
    DepartmentColumn | undefined
  >(undefined);
  const [selectedDesignation, setSelectedDesignation] = useState<
    DesignationColumn | undefined
  >(undefined);
  const [selectedBranch, setSelectedBranch] = useState<
    LocationColumn | undefined
  >(undefined);
  const [selectedSection, setSelectedSection] = useState<
    SectionColumn | undefined
  >(undefined);
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState<
    EmploymentStatusColumn | undefined
  >(undefined);
  const [selectedShift, setSelectedShift] = useState<
    ScheduleColumn | undefined
  >(undefined);
  const [selectedGender, setSelectedGender] = useState<
    GenderColumn | undefined
  >(undefined);
  const [selectedEmployeeClass, setSelectedEmployeeClass] = useState<
    EmployeeClassColumn | undefined
  >(undefined);
  const [selectedEmployeeGrade, setSelectedEmployeeGrade] = useState<
    EmployeeGradeColumn | undefined
  >(undefined);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (selectedDepartment)
      params.append("department_id", selectedDepartment.id.toString());
    if (selectedDesignation)
      params.append("designation_id", selectedDesignation.id.toString());
    if (selectedBranch) params.append("location_id", selectedBranch.id.toString());
    if (selectedSection)
      params.append("section_id", selectedSection.id.toString());
    if (selectedEmploymentStatus)
      params.append(
        "employment_status_id",
        selectedEmploymentStatus.id.toString()
      );
    if (selectedShift) params.append("schedule_id", selectedShift.id.toString());
    if (selectedGender) params.append("gender_id", selectedGender.id.toString());
    if (selectedEmployeeClass)
      params.append("employee_class_id", selectedEmployeeClass.id.toString());
    if (selectedEmployeeGrade)
      params.append("employee_grade_id", selectedEmployeeGrade.id.toString());

    const filterParams = params.toString();
    console.log(filterParams);
    setFilterParams(filterParams);
    toast.success("Filters applied successfully");
  };

  const handleResetFilters = () => {
    setSelectedDepartment(undefined);
    setSelectedDesignation(undefined);
    setSelectedBranch(undefined);
    setSelectedSection(undefined);
    setSelectedEmploymentStatus(undefined);
    setSelectedShift(undefined);
    setSelectedGender(undefined);
    setSelectedEmployeeClass(undefined);
    setSelectedEmployeeGrade(undefined);
    setFilterParams(""); // reset filters
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        <SearchSelect
          items={departmentData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDepartment}
          placeholder="All"
          onSelect={setSelectedDepartment}
        />
        <SearchSelect
          items={designationsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDesignation}
          placeholder="All Employees"
          onSelect={setSelectedDesignation}
        />
        <SearchSelect
          items={branchData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedBranch}
          placeholder="Customer"
          onSelect={setSelectedBranch}
        />



<Popover open={openFromDate}   onOpenChange={setOpenFromDate}>
          <PopoverTrigger asChild className="h-9">
            <Button
              variant={"outline"}
              className={`w-56 justify-start text-left font-normal ${
                !selectedDate && "text-muted-foreground"
              }`}
            >
              {selectedDate ? format(selectedDate, "PP") : "Pick a date"}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>








        <SearchSelect
          items={sectionsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedSection}
          placeholder="Search Invoice No"
          onSelect={setSelectedSection}
        />
        <SearchSelect
          items={employmentStatusData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmploymentStatus}
          placeholder="Select Type"
          onSelect={setSelectedEmploymentStatus}
        />
        <SearchSelect
          items={ShiftsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedShift}
          placeholder="Paid by"
          onSelect={setSelectedShift}
        />

      </div>
      <div className="mt-4 flex justify-end gap-4">
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
