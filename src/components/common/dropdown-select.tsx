import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Loading } from "./loading";

// Define the types for your props
interface DropdownSelectProps<T> {
  defaultValue?: string;
  loadingData: boolean;
  items: T[];
  itemValueKey: string;
  itemLabelKey: string;
  placeholder?: string;
  setSelected: (value: string | null) => void;
}

export default function DropdownSelect<T extends Record<string, any>>({
  defaultValue,
  loadingData,
  items,
  itemValueKey,
  itemLabelKey,
  placeholder,
  setSelected,
}: DropdownSelectProps<T>) {
  const handleValueChange = (value: string) => {
    const selectedValue = value === "-1" ? null :value;
    setSelected(selectedValue);
  };
  return (
    <Select defaultValue={defaultValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[200px] h-8">
        <SelectValue placeholder={placeholder || "Select an option"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {loadingData ? (
            <Loading />
          ) : (
            <>
              <SelectItem key="clear" value="-1">
                <span className="flex space-x-1 items-center">
                  <p>Clear Selection</p> <Cross2Icon color="red" />
                </span>
              </SelectItem>
              {items.map((item, index) => (
                <SelectItem key={index} value={(item[itemValueKey])}>
                  {item[itemLabelKey]}
                </SelectItem>
              ))}
            </>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
