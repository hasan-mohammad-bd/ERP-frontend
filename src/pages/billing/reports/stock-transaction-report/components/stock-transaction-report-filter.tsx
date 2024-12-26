

import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

import { DateTimePicker } from "@/components/ui/dayTimePicker";
import { getYearMonthDayFormatted } from "@/utils/format-dates";
import ItemBarcodeSearch, { BarcodeLineItemType } from "./item-barocde-search";

interface Props {
  setFilterParams: (params: string) => void;
  selectedDate: Date | undefined;
  selectedEndDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedEndDate: (date: Date | undefined) => void;
  setFiltersApplied: (applied: boolean) => void;
}

export default function StockTransactionReportFilter({
  setFilterParams,
  selectedDate,
  setSelectedDate,
  selectedEndDate,
  setSelectedEndDate,
  setFiltersApplied,
}: Props) {
  const [selectedBarcodes, setSelectedBarcodes] = useState<BarcodeLineItemType[]>([]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedDate) {
      params.append("start_date", getYearMonthDayFormatted(selectedDate));
    }

    if (selectedEndDate) {
      params.append("end_date", getYearMonthDayFormatted(selectedEndDate));
    }

    if (selectedBarcodes.length > 0) {
      const barcodeIds = selectedBarcodes.map((barcode) => barcode.barcodeId).join(",");
      params.append("item_barcode_id", barcodeIds);
    }

    const paramsString = params.toString();
    setFilterParams(paramsString);
    setFiltersApplied(true);
    toast.success("Filters applied successfully");
  };

  const handleResetFilters = () => {
    setSelectedDate(undefined);
    setSelectedEndDate(undefined);
    setSelectedBarcodes([]);
    setFilterParams("");
    setFiltersApplied(false);
    toast.success("Filters reset successfully");
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-4 flex-wrap">



        
        <ItemBarcodeSearch
          setSelectedProducts={setSelectedBarcodes}
          selectedProducts={selectedBarcodes}
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
        <Button variant="default" size="sm" onClick={handleApplyFilters}>
          <FilterIcon className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}


// import { Card } from "@/components/ui/card";
// import SearchSelect from "@/components/common/search-select";
// import { Button } from "@/components/ui/button";
// import { FilterIcon } from "lucide-react";
// import { toast } from "sonner";
// import { useState } from "react";
// import { z } from "zod";
// import { DateTimePicker } from "@/components/ui/dayTimePicker";
// import { getYearMonthDayFormatted } from "@/utils/format-dates";
// import { useLazyGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
// import ItemBarcodeSearch, { BarcodeLineItemType } from "./item-barocde-search";

// interface Props {
//   setFilterParams: (params: string) => void;
//   selectedDate: Date | undefined;
//   selectedEndDate: Date | undefined;
//   setSelectedDate: (date: Date | undefined) => void;
//   setSelectedEndDate: (date: Date | undefined) => void;
//   setFiltersApplied: (applied: boolean) => void;
// }

// export default function StockTransactionReportFilter({
//   setFilterParams,
//   selectedDate,
//   setSelectedDate,
//   selectedEndDate,
//   setSelectedEndDate,
//   setFiltersApplied,
// }: Props) {
//   const [warehouse, setWarehouse] = useState<any>(undefined);
//   const [selectedProducts, setSelectedProducts] = useState<BarcodeLineItemType[]>([]);

//   const [getWarehouses, { data: warehouseData }] = useLazyGetWarehouseQuery();
//   const warehouses = warehouseData?.data || [];

//   const filterSchema = z.object({
//     warehouse_id: z.union([z.string(), z.number()]).optional(),
//     start_date: z.string().optional(),
//     end_date: z.string().optional(),
//   });

//   const handleApplyFilters = () => {
//     const params = new URLSearchParams();

//     if (warehouse) {
//       params.append("warehouse_id", String(warehouse.id));
//     }

//     if (selectedDate) {
//       params.append("start_date", getYearMonthDayFormatted(selectedDate));
//     }

//     if (selectedEndDate) {
//       params.append("end_date", getYearMonthDayFormatted(selectedEndDate));
//     }

//     const filterParamsObj = {
//       warehouse_id: warehouse?.id,
//       start_date: selectedDate ? getYearMonthDayFormatted(selectedDate) : undefined,
//       end_date: selectedEndDate ? getYearMonthDayFormatted(selectedEndDate) : undefined,
//     };

//     try {
//       filterSchema.parse(filterParamsObj);
//       const paramsString = params.toString();
//       setFilterParams(paramsString);
//       setFiltersApplied(true);
//       toast.success("Filters applied successfully");
//     } catch (e) {
//       if (e instanceof z.ZodError) {
//         toast.error(e.errors[0].message);
//       }
//     }
//   };

//   const handleResetFilters = () => {
//     setWarehouse(undefined);
//     setSelectedDate(undefined);
//     setSelectedEndDate(undefined);
//     setFilterParams("");
//     setFiltersApplied(false);
//     toast.success("Filters reset successfully");
//   };

//   return (
//     <Card className="w-full p-5">
//       <div className="flex gap-4 flex-wrap">
//         <SearchSelect
//           items={warehouses || []}
//           labelKey="name"
//           valueKey="id"
//           value={warehouse}
//           placeholder="Select Warehouse"
//           onSelect={setWarehouse}
//           onChangeSearch={(searchText) => getWarehouses(`text=${searchText}`)}
//           className="w-[250px]"
//         />

//         <ItemBarcodeSearch
//           setSelectedProducts={setSelectedProducts}
//           selectedProducts={selectedProducts}
//           usedFor="purchase"
//         />

//         <div className="flex flex-col">
//           <DateTimePicker
//             displayFormat={{ hour24: "yyyy/MM/dd" }}
//             value={selectedDate || undefined}
//             onChange={(date) => setSelectedDate(date || undefined)}
//             granularity="day"
//           />
//         </div>

//         <p className="mt-2">To</p>

//         <div className="flex flex-col">
//           <DateTimePicker
//             displayFormat={{ hour24: "yyyy/MM/dd" }}
//             value={selectedEndDate || undefined}
//             onChange={(date) => setSelectedEndDate(date || undefined)}
//             granularity="day"
//           />
//         </div>
//       </div>

//       <div className="mt-4 flex justify-end gap-4">
//         <Button variant="outline" size="sm" onClick={handleResetFilters}>
//           Reset Filters
//         </Button>
//         <Button variant="default" size="sm" onClick={handleApplyFilters}>
//           <FilterIcon className="mr-2 h-4 w-4" />
//           Apply Filters
//         </Button>
//       </div>
//     </Card>
//   );
// }
