import { Card } from "@/components/ui/card";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FilterIcon } from "lucide-react";

import { toast } from "sonner";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { getYearMonthDayFormatted } from "@/utils/format-dates";

interface Props {
  setFilterParams: (params: string) => void;
  selectedDate: Date | undefined;
  selectedEndDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedEndDate: (date: Date | undefined) => void;
}

export default function CustomerBalanceFilter({
  setFilterParams,
  selectedDate,
  setSelectedDate,
  selectedEndDate,
  setSelectedEndDate,
}: Props) {
  const [openFromDate, setOpenFromDate] = useState(false);
  const [openEndFromDate, setOpenEndFromDate] = useState(false);



  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedDate) {
      params.append("start_date", getYearMonthDayFormatted(selectedDate));
    }

    if (selectedEndDate) {
      params.append("end_date", getYearMonthDayFormatted(selectedEndDate));
    }

    const filterParams = params.toString();
    console.log(filterParams);
    setFilterParams(filterParams);
    toast.success("Filters applied successfully");
  };

  const handleResetFilters = () => {

    setSelectedDate(undefined);
    setSelectedEndDate(undefined);
    setFilterParams(""); // reset filters
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
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

        <div className="mt-1">
          <p>To</p>
        </div>

        <Popover open={openEndFromDate} onOpenChange={setOpenEndFromDate}>
          <PopoverTrigger asChild className="h-9">
            <Button
              variant={"outline"}
              className={`w-56 justify-start text-left font-normal ${
                !selectedEndDate && "text-muted-foreground"
              }`}
            >
              {selectedEndDate ? format(selectedEndDate, "PP") : "Pick a date"}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedEndDate}
              onSelect={setSelectedEndDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
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
