import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilterIcon, CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface AttendanceSummarySearchToolbarProps {
  setFilterParams: (params: string) => void;
}

export default function DailyAttendanceReportSearchToolbar({
  setFilterParams,
}: AttendanceSummarySearchToolbarProps) {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [openFromDate, setOpenFromDate] = useState(false);
  const per_page = 25;

  const handleFromDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setFromDate(selectedDate);
      setOpenFromDate(false);
    }
  };

  const handleApplyFilters = () => {
    if (fromDate) {
      const formattedDate = format(fromDate, "yyyy-MM-dd");
      const queryString = `date=${formattedDate}&per_page=${per_page}`;
      setFilterParams(queryString);
    }
  };

  const handleResetFilters = () => {
    setFromDate(null);
    setFilterParams("");
  };

  return (
    <Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 p-5">
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium mt-1">Date *</label>
          <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${
                  !fromDate ? "text-muted-foreground" : ""
                }`}
              >
                {fromDate ? format(fromDate, "yyyy-MM-dd") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fromDate ?? undefined}
                onSelect={handleFromDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <Button variant="outline" size="sm" onClick={handleResetFilters}>
          Reset Filters
        </Button>
        <Button variant="default" size="sm" onClick={handleApplyFilters}>
          <FilterIcon className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}
