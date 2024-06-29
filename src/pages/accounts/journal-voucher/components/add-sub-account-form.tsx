import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
  EntryFromValues,
  EntryRow,
  entrySchema,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateEntryMutation,
  useUpdateEntryMutation,
} from "@/store/services/accounts/api/entries";

// import { Switch } from "@/components/ui/switch";

interface AddFinancialYearFormProps {
  modalClose: () => void;
  rowData?: EntryRow;
}

export function AddSubAccountForm({
  modalClose,
  rowData: previousData,
}: AddFinancialYearFormProps) {
  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();



  const form = useForm<EntryFromValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      type: previousData?.type || "Journal voucher",
      date: previousData?.date || "",
      entry_number: previousData?.entry_number || "",
      details: previousData?.details || [{}, {}],
      note: previousData?.note || "",
      file: previousData?.file || "",
    },
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "details",
  });

  async function onSubmit(data: EntryFromValues) {
    try {
      if (previousData) {
        await updateEntry({
          entryId: previousData.id,
          updatedEntry: data,
        });
        toast.success("Voucher updated successfully");
        modalClose();
      } else {
        await createEntry(data);
        toast.success("Voucher created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voucher Type</FormLabel>
                  <FormControl>
                    <Input type="text" readOnly placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="entry_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entry Number</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter entry number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Add note" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={previousData?.type || "None"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"None"}>None</SelectItem>
                      <SelectItem value={"Employee"}>Employee</SelectItem>
                      <SelectItem value={"Customer"}>Customer</SelectItem>
                      <SelectItem value={"Supplier"}>Supplier</SelectItem>
                      <SelectItem value={"Agent"}>Agent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <div key={field.id} className="flex space-x-2">
                <FormField
                  control={form.control}
                  name={`details.${index}.ledger_account_id`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ledger Account</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ledger account"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`details.${index}.dr_amount`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Debit Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Debit amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`details.${index}.cr_amount`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Credit amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}

            <Button
              variant="outline"
              type="button"
              onClick={() => append({ dr_amount: 0, cr_amount: 0, ledger_account_id: 0 })}
            >
              Add Detail
            </Button>

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
