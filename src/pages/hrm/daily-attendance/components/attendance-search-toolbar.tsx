import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import DropdownSelect from "@/components/common/dropdown-select";
import { FilterSate } from "..";
import { EmployeeColumn } from "@/lib/validators";

type AttendanceSearchToolbarProps = {
  onShowAttendance: ({
    fromDate,
    toDate,
    selectedEmployees,
  }: FilterSate) => void;
};

export default function AttendanceSearchToolbar({
  onShowAttendance,
}: AttendanceSearchToolbarProps) {
  const [selectedEmployees, setSelectedEmployees] = useState<Option[]>([]);

  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
  const [locationFiltered, setLocationFiltered] = useState<string | null>(null);

  const { data: employeeList } = useGetEmployeesQuery(
    `per_page=15&location_id=${
      locationFiltered ? locationFiltered : ""
    }&page=1&search=${employeeSearchTerm}`,
    {
      skip: !employeeSearchTerm,
    }
  );

  const handleSearch = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);

    // Transform the API response to match the Option interface
    const options =
      employeeList?.data?.map((item: EmployeeColumn) => ({
        value: String(item.id),
        label:
          item.first_name + " " + item.last_name + "" + "(" + item.id + ")",
      })) || [];

    //   console.log(options)

    return options;
  };

  const { data: location, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const locationData = location?.data || [];

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const handleFromDateSelect = (date: Date | undefined) => {
    if(!date) return
    setFromDate(date);
    setOpenFromDate(false); // Close popover after selecting a date
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if(!date) return
    setToDate(date);
    setOpenToDate(false); // Close popover after selecting a date
  };

  const handleShowAttendance = () => {
    if (!fromDate || !toDate) {
      return;
    }
    onShowAttendance({
      fromDate,
      toDate,
      selectedEmployees,
    });
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold mb-6 text-gray-800">
        ATTENDANCE RECONCILIATION
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label
            htmlFor="employees"
            className="text-sm font-medium text-gray-700"
          >
            Employees
          </label>
          <MultipleSelector
            value={selectedEmployees}
            className="h-16"
            onSearch={handleSearch}
            onChange={(options) => {
              setSelectedEmployees(options);
            }}
            hidePlaceholderWhenSelected
            placeholder="Search employees"
            loadingIndicator={<span>Loading...</span>}
            emptyIndicator={<span>No options found</span>}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="fromDate"
            className="text-sm font-medium text-gray-700"
          >
            From Date *
          </label>
          <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
            <PopoverTrigger asChild className="h-8">
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${
                  !fromDate && "text-muted-foreground"
                }`}
              >
                {fromDate ? format(fromDate, "PP") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={handleFromDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label htmlFor="toDate" className="text-sm font-medium text-gray-700">
            To Date *
          </label>
          <Popover open={openToDate} onOpenChange={setOpenToDate}>
            <PopoverTrigger asChild className="h-8">
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${
                  !toDate && "text-muted-foreground"
                }`}
              >
                {toDate ? format(toDate, "PP") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                disabled={(date) =>
                  date > new Date() || !!(fromDate && date < fromDate)
                } // Disable future dates and dates before fromDate
                selected={toDate}
                onSelect={handleToDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label htmlFor="branch" className="text-sm font-medium text-gray-700">
            Branch
          </label>
          <DropdownSelect
            items={locationData}
            loadingData={locationLoading}
            itemValueKey="id"
            itemLabelKey="name"
            placeholder="Select Location"
            setSelected={setLocationFiltered}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleShowAttendance}
          className="bg-sky-500 hover:bg-sky-600 text-white"
        >
          Show Attendance
        </Button>
      </div>
    </div>
  );
}
