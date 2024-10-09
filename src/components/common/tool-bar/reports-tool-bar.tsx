import { Card } from "@/components/ui/card";
import { DatePickerWithRange } from "./tool-bar-items/date-range-picker";
import ItemFilter from "./tool-bar-items/item-filter";
import { Button } from "@/components/ui/button";
import { File, Sheet } from "lucide-react";
import { LedgerRow, SubAccountRow } from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";

interface ReportsToolBarProps {
  // startDate: string;
  // endDate: string;
  setStartDate?: (value: Date | null) => void;
  setEndDate?: (value: Date | null) => void;
  setItem?: (value: object[]) => void
  filterProp?: {
    setAccount: (account: LedgerRow ) => void;
    account?: LedgerRow | undefined;
    project?: ProjectRow | undefined;
    setProject?: (project: ProjectRow) => void;
    contact?: SubAccountRow | undefined;
    setContact?: (contact: SubAccountRow) => void;
    arrayItems?: LedgerRow[]
    loadingData?: boolean
    arrayItemsTwo?: ProjectRow[]
    loadingDataTwo?: boolean
    arrayItemsThree?: SubAccountRow[]
    loadingDataThree?: boolean
    detailedGeneralLedger?: boolean
    
  }

  children?: React.ReactNode
}

const ReportsToolBar = ({ setEndDate, setStartDate, filterProp, children ,}: ReportsToolBarProps) => {
  return (
    <Card className="p-3 flex justify-between items-center">
    <div className="flex space-x-3 flex-wrap">
      <div className="date-picker">
        <DatePickerWithRange
          setStartDate={setStartDate}
          setEndDate={setEndDate}

        />
      </div>
      <div className="item-filter">
        <ItemFilter filterProp={filterProp}  />
      </div>
      {children}
      {/* <Button size={"input"}>
        Generate Report
      </Button> */}
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
