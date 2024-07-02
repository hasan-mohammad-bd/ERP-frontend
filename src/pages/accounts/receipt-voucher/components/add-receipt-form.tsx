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

interface AddReceiptFormProps {
  modalClose: () => void;
  rowData?: EntryRow;
}

export function AddReceiptForm({
  modalClose,
  rowData: previousData,
}: AddReceiptFormProps) {
  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);

  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];

  const [totalDrAmount, setTotalDrAmount] = useState(0);
  const [totalCrAmount, setTotalCrAmount] = useState(0);

  console.log(totalDrAmount)

  const [selectedLedgerAccounts, setSelectedLedgerAccounts] = useState<
    number[]
  >([]);
  const form = useForm<EntryFromValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      type: previousData?.type || "Receipt voucher",
      date: previousData?.date || "",
      entry_number: previousData?.entry_number || "",
      details: previousData?.details || [
        { dr_amount: totalCrAmount, cr_amount: 0 },
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

  useEffect(() => {
    const selectedAccounts = details.map((detail) =>
      Number(detail.ledger_account_id)
    );
    setSelectedLedgerAccounts(selectedAccounts);
  }, [details]);

  async function onSubmit(data: EntryFromValues) {
    const updateData = {
      ...data,
      details: data.details.map((detail, index) =>
        index === 0 ? { ...detail, dr_amount: totalCrAmount } : detail
      ),
    };

    try {
      if (previousData) {
        await updateEntry({
          entryId: previousData.id,
          updatedEntry: updateData,
        });
        toast.success("Voucher updated successfully");
        modalClose();
      } else {
        await createEntry(updateData);
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
            className="space-y-3 h-[68vh]  px-2 overflow-y-scroll no-scrollbar"
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
            <div className="w-fit flex space-x-3">
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

              <div className="w-[200px]">
                <FormField
                  control={form.control}
                  name={`details.0.ledger_account_id`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{"Ledger Account"}</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          const updatedAccounts = [...selectedLedgerAccounts];
                          updatedAccounts[0] = Number(value);
                          setSelectedLedgerAccounts(updatedAccounts);
                        }}
                        value={(field.value || "").toString()}
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
                            ledgerAccountData
                              .filter(
                                (ledgerAccount: LedgerRow) =>
                                  !selectedLedgerAccounts.includes(
                                    ledgerAccount.id
                                  ) || ledgerAccount.id === Number(field.value)
                              )
                              .map((ledgerAccount: LedgerRow) => (
                                <SelectItem
                                  key={ledgerAccount.id}
                                  value={String(ledgerAccount.id)}
                                >
                                  {ledgerAccount.name}
                                </SelectItem>
                              ))
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
              <div
                key={field.id}
                className={`flex w-full gap-x-3 ${index === 0 && "hidden"}`}
              >
                <div className={`w-[200px]`}>
                  <FormField
                    control={form.control}
                    name={`details.${index}.ledger_account_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 1 && "Ledger Account"}</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            const updatedAccounts = [...selectedLedgerAccounts];
                            updatedAccounts[index] = Number(value);
                            setSelectedLedgerAccounts(updatedAccounts);
                          }}
                          value={(field.value || "").toString()}
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
                              ledgerAccountData
                                .filter(
                                  (ledgerAccount: LedgerRow) =>
                                    !selectedLedgerAccounts.includes(
                                      ledgerAccount.id
                                    ) ||
                                    ledgerAccount.id === Number(field.value)
                                )
                                .map((ledgerAccount: LedgerRow) => (
                                  <SelectItem
                                    key={ledgerAccount.id}
                                    value={String(ledgerAccount.id)}
                                  >
                                    {ledgerAccount.name}
                                  </SelectItem>
                                ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[200px]">
                  <FormField
                    control={form.control}
                    name={`details.${index}.sub_account_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 1 && "Sub Account"}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={(field.value || "").toString()}
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

                {/*                 <div className="max-w-[120px]">
                  <FormField
                    control={form.control}
                    name={`details.0.dr_amount`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 0 && "Debit Amount"}</FormLabel>
                        <FormControl>
                          <Input
                            disabled={
                              form.watch(`details.${index}.cr_amount`) > 0
                            }
                            min={0}
                            type="number"
                            placeholder="Debit amount"
                            {...field}
                            value={totalCrAmount}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}
                <div className="max-w-[120px]">
                  <FormField
                    control={form.control}
                    name={`details.${index}.cr_amount`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 1 && "Amount"}</FormLabel>
                        <FormControl>
                          <Input
                            disabled={
                              form.watch(`details.${index}.dr_amount`) > 0
                            }
                            type="number"
                            min={0}
                            placeholder="Credit amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name={`details.${index}.note`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{index === 1 && "Note"}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Take Note"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormItem className="mt-auto mb-2">
                  <span
                    className=""
                    onClick={() => {
                      remove(index);
                      const updatedAccounts = [...selectedLedgerAccounts];
                      updatedAccounts.splice(index, 1);
                      setSelectedLedgerAccounts(updatedAccounts);
                    }}
                  >
                    <Delete color="red" className="" />
                  </span>
                </FormItem>
              </div>
            ))}
            {/*             <div className="text-end mt-4">
              <div>
                <p className="text-sm ">Total Debit: {totalDrAmount}</p>
              </div>
              <div className="">
                <p className="text-sm ">Total Credit: {totalCrAmount}</p>
              </div>
            </div> */}

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
                  note: "",
                })
              }
            >
              <Plus size={16} /> <span className="ml-2">Add Line</span>
            </Button>

            <div className="mx-auto absolute right-3 bottom-3 flex items-center">
              <Button variant="default" type="submit" className="w-fit ">
                {previousData ? "Update" : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
