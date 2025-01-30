import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/dayTimePicker";
import { useState } from "react";
import { getYearMonthDayFormatted } from "@/utils/format-dates";
import SearchSelect from "@/components/common/search-select";
import { useLazyGetSuppliersQuery } from "@/store/services/billing/api/supplier";
import { CustomerColumn } from "@/lib/validators/billing/customer-supplier";
interface Props {
  setFilterParams: (params: string) => void;
}

export default function SupplierWiseSalesFilter({ setFilterParams }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );

  const [supplier, setSupplier] = useState<CustomerColumn | undefined>();

  const [getSuppliers, { data: suppliersData }] = useLazyGetSuppliersQuery();
  const suppliers = suppliersData?.data || [];

  const handleFilterApply = () => {
    setFilterParams(
      `contact_id=${supplier?.id}&start_date=${
        selectedDate ? getYearMonthDayFormatted(selectedDate) : ""
      }&end_date=${
        selectedEndDate ? getYearMonthDayFormatted(selectedEndDate) : ""
      }`
    );
  };

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        {/* Supplier Selector */}
        <SearchSelect
          items={suppliers || []}
          labelKey="name"
          valueKey="id"
          value={supplier}
          placeholder="Select Supplier"
          onSelect={setSupplier}
          onChangeSearch={(searchText) => getSuppliers(`text=${searchText}`)}
          className="w-[250px]"
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
        <Button
          variant="default"
          className="w-fit px-14 capitalize"
          onClick={handleFilterApply}
          size={"sm"}
        >
          apply
        </Button>
      </div>
    </Card>
  );
}
