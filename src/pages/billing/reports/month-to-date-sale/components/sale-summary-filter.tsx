import { Card } from "@/components/ui/card";
// import SearchSelect from "@/components/common/search-select";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { toast } from "sonner";
// import { useState } from "react";
import { z } from "zod";
// import { useGetCustomersQuery } from "@/store/services/billing/api/customer";

import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

interface Props {
  setFilterParams: (params: string) => void;
  setFiltersApplied: (applied: boolean) => void;
}

export default function SaleSummaryFilter({
  setFilterParams,
  setFiltersApplied,
}: Props) {
  const [selectEstimateDate, setSelectEstimateDate] = useState<
    Date | undefined
  >(new Date()); // Default to the current month and year

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    const estimateMonth = selectEstimateDate
      ? format(selectEstimateDate, "yyyy-MM")
      : "";

    if (selectEstimateDate) params.append("date", estimateMonth.toString());

    try {
      const paramsString = params.toString();
      setFilterParams(paramsString);
      setFiltersApplied(true);
      toast.success("Filters applied successfully");
    } catch (e) {
      if (e instanceof z.ZodError) {
        toast.error(e.errors[0].message);
      }
    }
  };

  const handleResetFilters = () => {
    setFilterParams("");
    setFiltersApplied(false);
    setSelectEstimateDate(undefined);
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        <div className="space-y-2 flex flex-col py-0">
          <DatePicker
            selected={selectEstimateDate}
            onChange={(date) => {
              setSelectEstimateDate(date ?? new Date()); 
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select date"
            className="border rounded p-[6px] w-full bg-none bg_remove"
          />
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
