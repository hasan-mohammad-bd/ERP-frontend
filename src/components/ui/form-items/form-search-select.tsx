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
import { useState } from "react";
import { Loading } from "../../common/loading";

// Define the types for your props
interface FormSearchSelectProps<T> {
  name: string;
  title?: string;
  data: T[];
  loading?: boolean;
  className?: string;
  width?: string;
  valueField: keyof T;
  displayField: keyof T;
  form: any;
  placeholder?: string;
  disabled?: any;
  required?: boolean;
}

const FormSearchSelect = <T extends Record<string, any>>({
  form,
  name,
  title,
  data,
  loading,
  className,
  valueField,
  displayField,
  placeholder = "Select an option",
  disabled = false,
  required = false,
}: FormSearchSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    String(item[displayField]).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selectedItem = data.find(
          (singleData) => singleData[valueField] === field.value || String(singleData[valueField]) === String(field.value)
        );

        return (
          <FormItem className={cn("w-full")}>
            <FormLabel>
              {title}{" "}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
            <Popover open={open} onOpenChange={setOpen} modal={true}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                    disabled={disabled}
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
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                  />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {loading ? (
                        <Loading />
                      ) : (
                        filteredData.map((item, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => {
                              field.onChange(item[valueField]); // Ensure correct type
                              setOpen(false);
                            }}
                            disabled={disabled}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === item[valueField] || String(field.value) === String(item[valueField])
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {String(item[displayField])}
                          </CommandItem>
                        ))
                      )}
                    </CommandGroup>
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


export default FormSearchSelect;
