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
import { Loading } from "../../loading";
import { cn } from "@/utils";
import { useState } from "react";


interface SelectInputWithSearchProps<T> {
// Replace with the correct type for your form object
  name: string;
  title: string;
  data: T[];
  loading: boolean;
  width?: string;
  valueField: keyof T; // Field in the data that contains the value (e.g., "id")
  displayField: keyof T; // Field in the data that contains the display name (e.g., "name")
  form: any

}

const SelectWithSearch = <T,>({
  form,
  name,
  title,
  data,
  loading,
  width,
  valueField,
  displayField,
}: SelectInputWithSearchProps<T>) => {
  const [open, setOpen] = useState(false);


  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
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
                >
                  {field.value
                    ? String(
                        data.find(
                          (singleData) =>
                            singleData[valueField] === field.value
                        )?.[displayField] ?? "Select Project"
                      )
                    : "Select Project"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={cn("p-0", width || "w-[460px]")}>
              <Command>
                <CommandInput placeholder="Search parent group..." />
                <CommandList>
                  <CommandEmpty>No parent group found.</CommandEmpty>
                  <CommandGroup>
                    {loading ? (
                      <Loading />
                    ) : (
                      data.map((singleData) => (
                        <CommandItem
                          key={String(singleData[valueField])}
                          onSelect={() => {
                            field.onChange(String(singleData[valueField]));
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value === singleData[valueField]
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {String(singleData[displayField])}
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
      )}
    />
  );
};

export default SelectWithSearch;
