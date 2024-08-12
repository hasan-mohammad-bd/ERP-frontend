import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  // LedgerGroupArrayRow,
  LedgerGroupRow,
  LedgerGroupFromValues,
  LedgerGroupSchema,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";
import {
  useCreateLedgerGroupMutation,
  useGetLedgerGroupsArrayQuery,
} from "@/store/services/accounts/api/ledger-group";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils";
import React from "react";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddLedgerGroupFormProps {
  modalClose: () => void;
  rowData?: LedgerGroupRow;
}

export function AddLedgerGroupForm({
  modalClose,
  rowData: previousData,
}: AddLedgerGroupFormProps) {
  const [open, setOpen] = React.useState(false);
  const [createLedgerGroup, { isLoading }] = useCreateLedgerGroupMutation();
  const { data: ledgerGroupsArray, isLoading: ledgerGroupsArrayLoading } =
    useGetLedgerGroupsArrayQuery();

  const ledgerGroupData = ledgerGroupsArray?.data || [];

  const form = useForm<LedgerGroupFromValues>({
    resolver: zodResolver(LedgerGroupSchema),
    defaultValues: {
      parent_id: previousData?.id || 0,
    },
  });

  async function onSubmit(data: LedgerGroupFromValues) {
    try {
      await createLedgerGroup(data).unwrap();
      toast.success("Add ledger group successfully");
      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            {previousData?.id && (
              <div>
                <span className="font-semibold">Parent:</span>{" "}
                {previousData?.name}
              </div>
            )}
            {!previousData?.id && (
              <>
                <FormField
                  control={form.control}
                  name="parent_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent Group</FormLabel>
                      <Popover open={open} onOpenChange={setOpen} modal={true}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between", // Adjusted width to full
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? ledgerGroupData.find(
                                    (group) => group.id === Number(field.value)
                                  )?.name
                                : "Select Parent"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[460px] p-0">
                          <Command>
                            <CommandInput placeholder="Search parent group..." />
                            <CommandList>
                              <CommandEmpty>
                                No parent group found.
                              </CommandEmpty>
                              <CommandGroup>
                                {ledgerGroupsArrayLoading ? (
                                  <Loading />
                                ) : (
                                  ledgerGroupData.map((parent) => (
                                    <CommandItem
                                      key={parent.id}
                                      onSelect={() => {
                                        field.onChange(String(parent.id));
                                        setOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          Number(field.value) === parent.id
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {parent.name}
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
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter code"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                Add Group
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
