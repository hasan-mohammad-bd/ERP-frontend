import { Card } from "@/components/ui/card";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import SearchSelect from "@/components/common/search-select";
import { DepartmentColumn } from "@/lib/validators";
import { Popover } from "@radix-ui/react-popover";
import { useState } from "react";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

type AttendanceFiltersProps = {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedDepartment: DepartmentColumn | undefined;
  setSelectedDepartment: (dept: DepartmentColumn) => void;
};

export default function AttendanceFilters({
  selectedDate,
  setSelectedDate,
  selectedDepartment,
  setSelectedDepartment,
}: AttendanceFiltersProps) {
  // Fetch department data
  const { data: departmentData } = useGetDepartmentsQuery("");
  const [openFromDate, setOpenFromDate] = useState(false);

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4">
        <div className="w-[280px]">
        <Popover open={openFromDate}   onOpenChange={setOpenFromDate}>
          <PopoverTrigger asChild className="h-9">
            <Button
              variant={"outline"}
              className={`w-full justify-start text-left font-normal ${
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
        </div>

        <SearchSelect
          items={departmentData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedDepartment}
          placeholder="Select Department"
          onSelect={setSelectedDepartment}
        />
      </div>
    </Card>
  );
}
