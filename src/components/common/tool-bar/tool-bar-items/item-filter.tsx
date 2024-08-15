import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loading } from "../../loading";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ItemFilterProps {
  filterProp?: {
    setFiltered?: (value: number | null) => void;
    setProjectFiltered?: (value: number | null) => void;
    arrayItems?: object[];
    loadingData?: boolean;
    arrayItemsTwo?: object[];
    loadingDataTwo?: boolean;
  };
}

const ItemFilter = ({ filterProp }: ItemFilterProps) => {
  const {
    setFiltered,
    arrayItems,
    loadingData,
    arrayItemsTwo,
    loadingDataTwo,
    setProjectFiltered,
  } = filterProp || {};

  const handleValueChange = (value: string) => {
    if (setFiltered) {
      setFiltered(value === "-1" ? null : Number(value));
    }
  };

  const handleProjectChange = (value: string) => {
    if (setProjectFiltered) {
      setProjectFiltered(value === "-1" ? null : Number(value));
    }
  };

  return (
    <div className="flex space-x-3">
      {arrayItems && arrayItems.length !== 0 && (
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
                    <SelectItem key="clear" value="-1">
                      <span className="flex space-x-1 items-center">

                        <p>Clear Filter</p> <Cross2Icon color="red" />
                      </span>
                    </SelectItem>
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
      )}
      {arrayItemsTwo && arrayItemsTwo.length !== 0 && (
        <div className="">
          <Select onValueChange={handleProjectChange}>
            <SelectTrigger className="w-[200px] h-8">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {loadingDataTwo ? (
                  <Loading />
                ) : (
                  <>
                    <SelectItem key="clear" value="-1">
                      <span className="flex space-x-1 items-center">
                        {" "}
                        <p>Clear Filter</p> <Cross2Icon color="red" />
                      </span>
                    </SelectItem>
                    {arrayItemsTwo?.map((project: any) => (
                      <SelectItem key={project.id} value={String(project.id)}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default ItemFilter;
