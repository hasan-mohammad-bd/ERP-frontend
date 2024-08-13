import { Card } from "@/components/ui/card";
import { DatePickerWithRange } from "./tool-bar-items/date-range-picker";
import ItemFilter from "./tool-bar-items/item-filter";
import { Button } from "@/components/ui/button";
import { File, Sheet } from "lucide-react";

interface ReportsToolBarProps {
  // startDate: string;
  // endDate: string;
  setStartDate?: (value: Date | null) => void;
  setEndDate?: (value: Date | null) => void;
  setItem?: (value: object[]) => void
  filterProp?: {
    setFiltered?: (value: number | null) => void;
    arrayItems?: object[]
    loadingData?: boolean
  }
  
}

const ReportsToolBar = ({ setEndDate, setStartDate, filterProp }: ReportsToolBarProps) => {
  return (
    <Card className="p-3 flex justify-between items-center">
    <div className="flex space-x-3">
      <div className="date-picker">
        <DatePickerWithRange
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
      <div className="item-filter">
        <ItemFilter filterProp={filterProp}  />
      </div>
      <Button size={"input"}>
        Generate Report
      </Button>
    </div>

    <div className="flex space-x-2 items-center">
        <Button size="input" variant="outline" className="h-8 lg:flex">
          CSV <Sheet className="ml-1" size={16} strokeWidth={1.2} />
        </Button>
        <Button variant="outline" size="input" className="h-8 lg:flex">
          PDF <File className="ml-1" size={16} strokeWidth={1.2} />
        </Button>
        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </Card>
  );
};

export default ReportsToolBar;
