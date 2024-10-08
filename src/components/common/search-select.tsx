import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "../ui/button";
import { useState } from "react";

interface SearchSelectProps<T> {
  items: T[];
  value: T | undefined;
  labelKey: keyof T;
  valueKey: keyof T;
  onSelect: (item: T) => void;
  placeholder?: string;
  noItemText?: string;
  className?: string;
}

const SearchSelect = <T extends object>({
  items,
  value,
  labelKey,
  valueKey,
  onSelect,
  placeholder = "Select an item...",
  noItemText = "No items found.",
  className
}: SearchSelectProps<T>) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: T) => {
    onSelect(item);
    setOpen(false); // Close popover after selection
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          className={cn("w-[212px] justify-between", className)}
        >
          {value ? value[labelKey]?.toString() : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent  className={cn("max-w-fit w-[212px] p-0", className)}>
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}`} />
          <CommandList>
            <CommandEmpty>{noItemText}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item[valueKey]?.toString()}
                  value={item[valueKey]?.toString()}
                  onSelect={() => handleSelect(item)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value && value[valueKey] === item[valueKey]
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {item[labelKey]?.toString()}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchSelect;
