import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchSelect from "@/components/common/search-select";
import { useState } from "react";
import { useLazyGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
import { WarehouseRow } from "@/lib/validators/billing/warehouse";


interface Props {
  setFilterParams: (params: string) => void;
}

export default function StocksFilter({
  setFilterParams,
}: Props) {
  const [warehouse, setWarehouse] = useState<WarehouseRow | undefined>();

  const [getWarehouses, { data: warehouseData }] = useLazyGetWarehouseQuery();
  const warehouses = warehouseData?.data || [];

  const handleEstimate = () => {
    setFilterParams(`warehouse_id=${String(warehouse?.id)}`);
  };

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        {/* warehouse Selector */}
        <SearchSelect
          items={warehouses || []}
          labelKey="name"
          valueKey="id"
          value={warehouse}
          placeholder="Select Warehouse"
          onSelect={setWarehouse}
          onChangeSearch={(searchText) => getWarehouses(`text=${searchText}`)}
          className="w-[250px]"
        />
        <Button
          variant="default"
          className="w-fit px-14 capitalize"
          onClick={handleEstimate}
          size={"sm"}
        >
          apply
        </Button>
      </div>
    </Card>
  );
}
