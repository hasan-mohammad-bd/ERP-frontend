import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/dayTimePicker";
// import SearchSelect from "@/components/common/search-select";
import { useState } from "react";
import { getYearMonthDayFormatted } from "@/utils/format-dates";
// import { useLazyGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
// import { WarehouseRow } from "@/lib/validators/billing/warehouse";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function WarehouseWiseSalesFilter({ setFilterParams }: Props) {
  // const [warehouse, setWarehouse] = useState<WarehouseRow | undefined>();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );

  // const [getWarehouses, { data: warehouseData }] = useLazyGetWarehouseQuery();
  // const warehouses = warehouseData?.data || [];

  const handleFilterApply = () => {
    setFilterParams(
      `start_date=${
        selectedDate ? getYearMonthDayFormatted(selectedDate) : ""
      }&end_date=${
        selectedEndDate ? getYearMonthDayFormatted(selectedEndDate) : ""
      }`
    );
  };

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        {/* warehouse Selector */}
        {/* <SearchSelect
          items={warehouses || []}
          labelKey="name"
          valueKey="id"
          value={warehouse}
          placeholder="Select Warehouse"
          onSelect={setWarehouse}
          onChangeSearch={(searchText) => getWarehouses(`text=${searchText}`)}
          className="w-[250px]"
        /> */}
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
