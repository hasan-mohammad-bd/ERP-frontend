import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { DateTimePicker } from "@/components/ui/dayTimePicker";
import { getYearMonthDayFormatted } from "@/utils/format-dates";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import { useState } from "react";
import SearchSelect from "@/components/common/search-select";

interface Props {
  setFilterParams: (params: string) => void;
  selectedDate: Date | undefined;
  selectedEndDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedEndDate: (date: Date | undefined) => void;
  setFiltersApplied: (applied: boolean) => void;
}

export default function SaleSummaryFilter({
  setFilterParams,
  selectedDate,
  setSelectedDate,
  selectedEndDate,
  setSelectedEndDate,
  setFiltersApplied,
}: Props) {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(undefined);

  const { data: customersData } = useGetCustomersQuery("per_page=1000");

  const filterSchema = z.object({
    contact_id: z.union([z.string(), z.number()]).optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
  });

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCustomer) {
      params.append("contact_id", String(selectedCustomer.id));
    }

    if (selectedDate) {
      params.append("start_date", getYearMonthDayFormatted(selectedDate));
    }

    if (selectedEndDate) {
      params.append("end_date", getYearMonthDayFormatted(selectedEndDate));
    }

    const filterParamsObj = {
      contact_id: selectedCustomer?.id,
      start_date: selectedDate
        ? getYearMonthDayFormatted(selectedDate)
        : undefined,
      end_date: selectedEndDate
        ? getYearMonthDayFormatted(selectedEndDate)
        : undefined,
    };

    try {
      filterSchema.parse(filterParamsObj);
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
    setSelectedCustomer(undefined);
    setSelectedDate(undefined);
    setSelectedEndDate(undefined);
    setFilterParams("");
    setFiltersApplied(false);
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        <SearchSelect
          items={customersData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedCustomer}
          placeholder="Select Customer"
          onSelect={(customer) => setSelectedCustomer(customer)}
        />

        <div className="flex flex-col">
          <DateTimePicker
            displayFormat={{ hour24: "yyyy/MM/dd" }}
            value={selectedDate || undefined}
            onChange={(date) => setSelectedDate(date || undefined)}
            granularity="day"
          />
        </div>

        <p className="mt-2">To</p>

        <div className="flex flex-col">
          <DateTimePicker
            displayFormat={{ hour24: "yyyy/MM/dd" }}
            value={selectedEndDate || undefined}
            onChange={(date) => setSelectedEndDate(date || undefined)}
            granularity="day"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <Button variant="outline" size="sm" onClick={handleResetFilters}>
          Reset Filters
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleApplyFilters}
          disabled={!selectedCustomer} // Disable if no customer is selected
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}
