import { Card } from "@/components/ui/card";
import { useLazyGetDepartmentsQuery } from "@/store/services/hrm/api/department";
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
import { useLazyGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useLazyGetSectionsQuery } from "@/store/services/hrm/api/section";
import { useLazyGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useLazyGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { useLazyGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { useLazyGetGendersQuery } from "@/store/services/hrm/api/gender";
import { useLazyGetEmployeeClassesQuery } from "@/store/services/hrm/api/employee-class";
import { useLazyGetEmployeeGradesQuery } from "@/store/services/hrm/api/employee-grade";
import { toast } from "sonner";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function EmployeeFilters({ setFilterParams }: Props) {
  // Fetch department data

  const [getDepartments, { data: departmentData }] =
    useLazyGetDepartmentsQuery();
  const [getDesignations, { data: designationsData }] =
    useLazyGetDesignationQuery();
  const [getSections, { data: sectionsData }] = useLazyGetSectionsQuery();
  const [getBranches, { data: branchData }] = useLazyGetLocationsQuery();
  const [getEmploymentStatuses, { data: employmentStatusData }] =
    useLazyGetEmploymentStatusesQuery();
  const [getShifts, { data: ShiftsData }] = useLazyGetSchedulesQuery();
  const [getGenders, { data: gendersData }] = useLazyGetGendersQuery();
  const [getEmployeeClasses, { data: employeeClassesData }] =
    useLazyGetEmployeeClassesQuery();
  const [getEmployeeGrades, { data: employeeGradesData }] =
    useLazyGetEmployeeGradesQuery();

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
  const [selectEstimateDate, setSelectEstimateDate] = useState<
    Date | undefined
  >(undefined);

  const [selectHasSalaryDate, setSelectHasSalaryDate] = useState<
    Date | undefined
  >(undefined);

  const handleApplyFilters = () => {
    const estimateMonth = selectEstimateDate
      ? format(selectEstimateDate, "yyyy-MM")
      : "";
    const salaryMonth = selectHasSalaryDate
      ? format(selectHasSalaryDate, "yyyy-MM")
      : "";

    console.log(salaryMonth);
    const params = new URLSearchParams();
    if (selectedDepartment)
      params.append("department_id", selectedDepartment.id.toString());
    if (selectedDesignation)
      params.append("designation_id", selectedDesignation.id.toString());
    if (selectedBranch)
      params.append("location_id", selectedBranch.id.toString());
    if (selectedSection)
      params.append("section_id", selectedSection.id.toString());
    if (selectedEmploymentStatus)
      params.append(
        "employment_status_id",
        selectedEmploymentStatus.id.toString()
      );
    if (selectedShift)
      params.append("schedule_id", selectedShift.id.toString());
    if (selectedGender)
      params.append("gender_id", selectedGender.id.toString());
    if (selectedEmployeeClass)
      params.append("employee_class_id", selectedEmployeeClass.id.toString());
    if (selectedEmployeeGrade)
      params.append("employee_grade_id", selectedEmployeeGrade.id.toString());
    if (selectEstimateDate)
      params.append("estimate_salary_for", estimateMonth.toString());
    if (selectHasSalaryDate)
      params.append("has_salary_month", salaryMonth.toString());

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
    setSelectEstimateDate(undefined);
    setSelectHasSalaryDate(undefined);
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
          onChangeSearch={(searchText) => getDepartments(`text=${searchText}`)}
        />
        <SearchSelect
          items={designationsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDesignation}
          placeholder="Select Designation"
          onSelect={setSelectedDesignation}
          onChangeSearch={(searchText) => getDesignations(`text=${searchText}`)}
        />
        <SearchSelect
          items={branchData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedBranch}
          placeholder="Select Branch"
          onSelect={setSelectedBranch}
          onChangeSearch={(searchText) => getBranches(`text=${searchText}`)}
        />
        <SearchSelect
          items={sectionsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedSection}
          placeholder="Select Section"
          onSelect={setSelectedSection}
          onChangeSearch={(searchText) => getSections(`text=${searchText}`)}
        />
        <SearchSelect
          items={employmentStatusData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmploymentStatus}
          placeholder="Select Status"
          onSelect={setSelectedEmploymentStatus}
          onChangeSearch={() => getEmploymentStatuses()}
        />
        <SearchSelect
          items={ShiftsData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedShift}
          placeholder="Select Shift"
          onSelect={setSelectedShift}
          onChangeSearch={(searchText) => getShifts(`text=${searchText}`)}
        />
        <SearchSelect
          items={gendersData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedGender}
          placeholder="Select Gender"
          onSelect={setSelectedGender}
          onChangeSearch={() => getGenders()}
        />
        <SearchSelect
          items={employeeClassesData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmployeeClass}
          placeholder="Select Class"
          onSelect={setSelectedEmployeeClass}
          onChangeSearch={(searchText) =>
            getEmployeeClasses(`text=${searchText}`)
          }
        />
        <SearchSelect
          items={employeeGradesData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedEmployeeGrade}
          placeholder="Select Grade"
          onSelect={setSelectedEmployeeGrade}
          onChangeSearch={(searchText) =>
            getEmployeeGrades(`text=${searchText}`)
          }
        />
        <div className="space-y-2 flex flex-col py-0">
          {/* <label className={cn("text-sm font-medium mt-1")}>
            Month and Year
          </label> */}
          <DatePicker
            selected={selectEstimateDate} // Watch for form updates
            onChange={(date) => {
              setSelectEstimateDate(date ?? undefined);
              if (!date) return;
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select Estimate Salary For"
            className="border rounded p-[6px] w-full bg-none bg_remove "
          />
        </div>
        <div className="space-y-2 flex flex-col py-0">
          {/* <label className={cn("text-sm font-medium mt-1")}>
            Month and Year
          </label> */}
          <DatePicker
            selected={selectHasSalaryDate} // Watch for form updates
            onChange={(date) => {
              setSelectHasSalaryDate(date ?? undefined);
              if (!date) return;
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select Has Salary Month"
            className="border rounded p-[6px] w-full bg-none bg_remove "
          />
        </div>
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
