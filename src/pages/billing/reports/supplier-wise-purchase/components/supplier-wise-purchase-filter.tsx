import { Card } from "@/components/ui/card";
import SearchSelect from "@/components/common/search-select";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FilterIcon } from "lucide-react";
import { toast } from "sonner";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { useGetSuppliersQuery } from "@/store/services/billing/api/supplier";
import { z } from "zod";

interface Props {
  setFilterParams: (params: string) => void;
  selectedDate: Date | undefined;
  selectedEndDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedEndDate: (date: Date | undefined) => void;
}

export default function SupplierWisePurchaseFilter({
  setFilterParams,
  selectedDate,
  setSelectedDate,
  selectedEndDate,
  setSelectedEndDate,
}: Props) {
  const [openFromDate, setOpenFromDate] = useState(false);
  const [openEndFromDate, setOpenEndFromDate] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(undefined);

  const { data: suppliersData } = useGetSuppliersQuery("per_page=1000");

  const filterSchema = z.object({
    supplier_id: z.union([z.string(), z.number()]).optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
  }).refine(
    (data) => data.supplier_id || data.start_date || data.end_date,
    { message: "At least one filter parameter is required." }
  );

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedSupplier) params.append("contact_id", String(selectedSupplier.id));
    if (selectedDate) params.append("start_date", selectedDate.toISOString());
    if (selectedEndDate) params.append("end_date", selectedEndDate.toISOString());

    const filterParamsObj = {
      supplier_id: selectedSupplier?.id,
      start_date: selectedDate?.toISOString(),
      end_date: selectedEndDate?.toISOString(),
    };

    try {
      filterSchema.parse(filterParamsObj);
      setFilterParams(params.toString());
      toast.success("Filters applied successfully");
    } catch (e) {
      if (e instanceof z.ZodError) {
        toast.error(e.errors[0].message);
      }
    }
  };

  const handleResetFilters = () => {
    setSelectedSupplier(undefined);
    setSelectedDate(undefined);
    setSelectedEndDate(undefined);
    setFilterParams("");
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">
        {/* Controlled SearchSelect */}
        <SearchSelect
          items={suppliersData?.data || []}
          labelKey="name"
          valueKey="id"
          value={selectedSupplier}
          placeholder="Select Supplier"
          onSelect={setSelectedSupplier}
        />

        <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-56 justify-start text-left font-normal ${
                !selectedDate && "text-muted-foreground"
              }`}
            >
              {selectedDate ? format(selectedDate, "PP") : "Pick a start date"}
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
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-56 justify-start text-left font-normal ${
                !selectedEndDate && "text-muted-foreground"
              }`}
            >
              {selectedEndDate ? format(selectedEndDate, "PP") : "Pick an end date"}
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

