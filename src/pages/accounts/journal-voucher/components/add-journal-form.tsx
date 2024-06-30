import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
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
  LedgerRow,
  SubAccountRow,
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
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { useGetSubAccountsQuery } from "@/store/services/accounts/api/sub-accounts";
import { Textarea } from "@/components/ui/textarea";
import { Delete, Plus } from "lucide-react";

interface AddJournalFormProps {
  modalClose: () => void;
  rowData?: EntryRow;
}

export function AddJournalForm({
  modalClose,
  rowData: previousData,
}: AddJournalFormProps) {
  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);

  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];

  console.log(ledgerAccountData);
  console.log(previousData);

  const form = useForm<EntryFromValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      type: previousData?.type || "Journal voucher",
      date: previousData?.date || "",
      entry_number: previousData?.entry_number || "",
      details: previousData?.details || [
        { dr_amount: 0, cr_amount: 0 },
        { dr_amount: 0, cr_amount: 0 },
      ],
      note: previousData?.note || "",
      file: previousData?.file || "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "details",
  });

  const [totalDrAmount, setTotalDrAmount] = useState(0);
  const [totalCrAmount, setTotalCrAmount] = useState(0);

  const details = useWatch({
    control: form.control,
    name: "details",
  });

  useEffect(() => {
    const totalDr = details.reduce(
      (sum, detail) => sum + Number(detail.dr_amount || 0),
      0
    );
    const totalCr = details.reduce(
      (sum, detail) => sum + Number(detail.cr_amount || 0),
      0
    );
    setTotalDrAmount(totalDr);
    setTotalCrAmount(totalCr);
  }, [details]);

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
            className="space-y-3 h-[78vh]  px-2 overflow-y-scroll no-scrollbar"
          >
            <div className="w-fit">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder="Enter date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-fit">
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
            </div>
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <div key={field.id} className="flex w-full gap-x-3">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name={`details.${index}.ledger_account_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 0 && "Ledger Account"}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={
                            previousData?.details[index]?.ledger_account_id
                              ? String(
                                  previousData?.details[index]
                                    ?.ledger_account_id
                                )
                              : undefined
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Ledger Account" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {ledgerAccountLoading ? (
                              <Loading />
                            ) : (
                              ledgerAccountData?.map(
                                (ledgerAccount: LedgerRow) => (
                                  <SelectItem
                                    key={ledgerAccount.id}
                                    value={String(ledgerAccount.id)}
                                  >
                                    {ledgerAccount.name}
                                  </SelectItem>
                                )
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name={`details.${index}.sub_account_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 0 && "Sub Account"}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={
                            previousData?.details[index]?.sub_account_id
                              ? String(
                                  previousData?.details[index]?.sub_account_id
                                )
                              : undefined
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Sub Account" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subAccountLoading ? (
                              <Loading />
                            ) : (
                              subAccountData?.map(
                                (subAccount: SubAccountRow) => (
                                  <SelectItem
                                    key={subAccount.id}
                                    value={String(subAccount.id)}
                                  >
                                    {subAccount.name}
                                  </SelectItem>
                                )
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`details.${index}.dr_amount`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{index === 0 && "Debit Amount"}</FormLabel>
                      <FormControl>
                        <Input
                        disabled={form.watch(`details.${index}.cr_amount`) >= 0 ? false : true}
                          type="number"
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
                      <FormLabel>{index === 0 && "Credit Amount"}</FormLabel>
                      <FormControl>
                        <Input
                        // disabled={form.watch(`details.${index}.dr_amount`) <= 0 ? false : true}
                          type="number"
                          placeholder="Credit amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem className="mt-auto">
                  <Button variant={"destructive"} onClick={() => remove(index)}>
                    <Delete />
                  </Button>
                </FormItem>
              </div>
            ))}
            <div className="flex justify-end mt-4 relative right-16">
              <div>
                <p className=" font-semibold">Total Debit: {totalDrAmount}</p>
              </div>
              <div className="ml-28">
                <p className=" font-semibold">Total Credit: {totalCrAmount}</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border border-dashed border-gray-700 w-full"
              type="button"
              onClick={() =>
                append({
                  dr_amount: 0,
                  cr_amount: 0,
                  ledger_account_id: 0,
                  sub_account_id: 0,
                })
              }
            >
              <Plus size={16} /> <span className="ml-2">Add Line</span>
            </Button>

            <div className="mx-auto absolute right-3 bottom-3">
              <Button disabled={totalDrAmount !== totalCrAmount} variant="default" type="submit" className="w-fit mt-4 ">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
