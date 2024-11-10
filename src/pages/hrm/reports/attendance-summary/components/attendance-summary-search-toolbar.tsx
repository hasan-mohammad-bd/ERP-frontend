import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { format } from "date-fns";

interface AttendanceSummarySearchToolbarProps {
  setFilterParams: (params: string) => void;
}

export default function AttendanceSummarySearchToolbar({
  setFilterParams,
}: AttendanceSummarySearchToolbarProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const sort_by = "desc";
  const per_page = 25;

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
  };

  const handleApplyFilters = () => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM");
      const queryString = `date=${formattedDate}&sort_by=${sort_by}&per_page=${per_page}`;
      setFilterParams(queryString);
    }
  };

  const handleResetFilters = () => {
    setFilterParams("");
    setDate(null);
  };

  return (
    <Card className="p-5">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6 items-start">
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium">Month and Year *</label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="border rounded p-1.5 w-full bg-none bg_remove"
          />
        </div>
        <div className="pt-7 flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={handleResetFilters}>
            Reset Filters
          </Button>
          <Button variant="default" size="sm" onClick={handleApplyFilters}>
            <FilterIcon className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>
      </div>
    </Card>
  );
}
