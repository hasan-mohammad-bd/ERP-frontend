import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loading } from "../../loading";

interface ItemFilterProps {
  // arrayItems: object[]
  // setItem?: (value: object[]) => void
  filterProp?: {
    setFiltered?: (value: number | null) => void;
    arrayItems?: object[];
    loadingData?: boolean;
  };
}

const ItemFilter = ({ filterProp }: ItemFilterProps) => {
  const { setFiltered, arrayItems, loadingData } = filterProp || {};

  const handleValueChange = (value: string) => {
    if (setFiltered) {
      setFiltered(value === "" ? null : Number(value));
    }
  };

  if (!arrayItems || arrayItems.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="">
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-[200px] h-8">
            <SelectValue placeholder="Select ledger account" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {loadingData ? (
                <Loading />
              ) : (
                <>
                  {arrayItems?.map((ledgerAccount: any) => (
                    <SelectItem
                      key={ledgerAccount.id}
                      value={String(ledgerAccount.id)}
                    >
                      {ledgerAccount.name}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ItemFilter;
