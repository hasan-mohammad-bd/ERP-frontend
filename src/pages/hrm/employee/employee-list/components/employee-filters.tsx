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
import { FilterIcon } from "lucide-react";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useGetSectionsQuery } from "@/store/services/hrm/api/section";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { useGetGendersQuery } from "@/store/services/hrm/api/gender";
import { useGetEmployeeClassesQuery } from "@/store/services/hrm/api/employee-class";
import { useGetEmployeeGradesQuery } from "@/store/services/hrm/api/employee-grade";
import { toast } from "sonner";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function EmployeeFilters({ setFilterParams }: Props) {
  // Fetch department data
  const { data: departmentData } = useGetDepartmentsQuery("per_page=1000");
  // const [getDepartments, { data: departmentData }] = useLazyGetDepartmentsQuery();
  const { data: designationsData } = useGetDesignationQuery("per_page=1000");
  const { data: sectionsData } = useGetSectionsQuery("per_page=1000");
  const { data: branchData } = useGetLocationsQuery("per_page=1000");
  const { data: employmentStatusData } = useGetEmploymentStatusesQuery();
  const { data: ShiftsData } = useGetSchedulesQuery("per_page=1000");
  const { data: gendersData } = useGetGendersQuery();
  const { data: employeeClassesData } =
    useGetEmployeeClassesQuery("per_page=1000");
  const { data: employeeGradesData } =
    useGetEmployeeGradesQuery("per_page=1000");

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
          placeholder="Select Department"
          onSelect={setSelectedDepartment}
          // onChangeSearch={(searchText) => getDepartments(`text=${searchText}`)}
        />
        <SearchSelect
          items={designationsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDesignation}
          placeholder="Select Designation"
          onSelect={setSelectedDesignation}
        />
        <SearchSelect
          items={branchData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedBranch}
          placeholder="Select Branch"
          onSelect={setSelectedBranch}
        />
        <SearchSelect
          items={sectionsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedSection}
          placeholder="Select Section"
          onSelect={setSelectedSection}
        />
        <SearchSelect
          items={employmentStatusData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmploymentStatus}
          placeholder="Select Status"
          onSelect={setSelectedEmploymentStatus}
        />
        <SearchSelect
          items={ShiftsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedShift}
          placeholder="Select Shift"
          onSelect={setSelectedShift}
        />
        <SearchSelect
          items={gendersData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedGender}
          placeholder="Select Gender"
          onSelect={setSelectedGender}
        />
        <SearchSelect
          items={employeeClassesData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmployeeClass}
          placeholder="Select Class"
          onSelect={setSelectedEmployeeClass}
        />
        <SearchSelect
          items={employeeGradesData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmployeeGrade}
          placeholder="Select Grade"
          onSelect={setSelectedEmployeeGrade}
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
