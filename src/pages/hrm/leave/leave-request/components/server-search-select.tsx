import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils";
import {  useState, useMemo } from "react";


interface FormSearchSelectProps<T> {
  name: string;
  title?: string ;
  data: T[];
  loading?: boolean;
  className?: string;
  width?: string;
  valueField: keyof T;
  displayField: keyof T;
  form: any;
  placeholder?: string;
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
  trigger?: (value: string) => void;
}

const ServerSearchSelect = <T extends Record<string, any>>({
  form,
  name,
  title,
  data,
  className,
  valueField,
  displayField,
  placeholder = "Select an option",
  searchTerm,
  setSearchTerm,
  // trigger
}: FormSearchSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  // const handleOpenChange = (isOpen: boolean) => {
  //   setOpen(isOpen);
  //   if (isOpen && setSearchTerm) {
  //     setSearchTerm(""); // Clear search term when dropdown is opened
  //   }
  // };


  // Real-time filtering for displaying results immediately
  const filteredData = useMemo(
    () => data.filter((item) =>
      String(item[displayField]).toLowerCase().includes(searchTerm?.toLowerCase() || "")
    ),
    [data, displayField, searchTerm]
  );

  return (
<FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selectedItem = data.find(
          (singleData) => String(singleData[valueField]) === field.value
        );

        return (
          <FormItem className={cn("w-full")}>
            <FormLabel>{title}</FormLabel>
            <Popover open={open} onOpenChange={setOpen} modal={true} >
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {selectedItem
                      ? String(selectedItem[displayField])
                      : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={cn("p-0 w-full", className)}>
                <Command>
                  <CommandInput
                    placeholder="Search..."
                    value={searchTerm}
                    onValueChange={setSearchTerm}
                  />
                  <CommandList>
                    {filteredData.length === 0 ? (
                      <CommandEmpty>No results found.</CommandEmpty>
                    ) : (
                      <CommandGroup>
                        {filteredData.map((item, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => {
                              field.onChange(String(item[valueField]));
                              setOpen(false);
                              
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === String(item[valueField])
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {String(item[displayField])}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default ServerSearchSelect;
