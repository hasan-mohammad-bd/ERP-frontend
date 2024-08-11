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
  useGetEntryByIdQuery,
  useUpdateEntryMutation,
} from "@/store/services/accounts/api/entries";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { useGetSubAccountsQuery } from "@/store/services/accounts/api/sub-accounts";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "@/components/common/heading";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import SelectWithSearch from "@/components/common/accounts/entry/select-input-with-search";
import { ProjectRow } from "@/lib/validators/accounts/projects";

export function AddContraForm() {
  const { id } = useParams();
  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);
  const { data: projects, isLoading: projectLoading } =
    useGetProjectsQuery(`per_page=1000&page=1`);

  const { data: journalById } = useGetEntryByIdQuery(`${id}`);

  const previousData = journalById?.data;
  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];
  const projectData = projects?.data || [];
  const navigate = useNavigate();

  // const [totalDrAmount, setTotalDrAmount] = useState(0);
  const [totalCrAmount, setTotalCrAmount] = useState(0);

  const [selectedLedgerAccounts, setSelectedLedgerAccounts] = useState<
    number[]
  >([]);
  const form = useForm<EntryFromValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      type: previousData?.type || "Contra Voucher",
      date: previousData?.date || new Date().toISOString().split("T")[0],
      entry_number: previousData?.entry_number || "",
      details: previousData?.details || [
        { dr_amount: totalCrAmount, cr_amount: 0 },
        { dr_amount: 0, cr_amount: 0 },
      ],
      note: previousData?.note || "",
      file: previousData?.file || "",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        type: previousData?.type || "Contra Voucher",
        date: previousData?.date || new Date().toISOString(),
        entry_number: previousData?.entry_number || "",
        details: previousData?.details || [
          { dr_amount: totalCrAmount, cr_amount: 0 },
          { dr_amount: 0, cr_amount: 0 },
        ],
        note: previousData?.note || "",
        file: previousData?.file || "",
      });
    }
  }, [form, previousData, totalCrAmount]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "details",
  });

  const details = useWatch({
    control: form.control,
    name: "details",
  });

  useEffect(() => {
    /* const totalDr = details.reduce(
      (sum, detail) => sum + Number(detail.dr_amount || 0),
      0
    ); */
    const totalCr = details.reduce(
      (sum, detail) => sum + Number(detail.cr_amount || 0),
      0
    );
    // setTotalDrAmount(totalDr);
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
        // modalClose();
        navigate("/accounts/contra-voucher");
      } else {
        await createEntry(updateData);
        toast.success("Voucher created successfully");
        // modalClose();
        navigate("/accounts/contra-voucher");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const lastIndex = fields.length - 1;

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <Heading
              title={previousData ? "Edit Contra Entry" : "Add Contra Entry"}
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/accounts/contra-voucher")}
              size={"sm"}
            >
              Contra Voucher List
            </Button>
          </div>
          <Card className="p-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 px-2 no-scrollbar"
              >
                <div className="flex">
                  <div className="w-fit">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              placeholder="Enter date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-fit flex space-x-3 ml-3">
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
                    <SelectWithSearch<ProjectRow>
                      name="project_id"
                      title={"Project"}
                      data={projectData}
                      loading={projectLoading}
                      valueField="id"
                      displayField="name"
                      width="w-[195px]"
                      form={form}
                    />

                    <div className="w-[200px]">
                      <FormField
                        control={form.control}
                        name={`details.0.ledger_account_id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{"Debit Account Head"}</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                const updatedAccounts = [
                                  ...selectedLedgerAccounts,
                                ];
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
                    <div className={`w-[250px]`}>
                      <FormField
                        control={form.control}
                        name={`details.${index}.ledger_account_id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {index === 1 && "Ledger Account"}
                            </FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                const updatedAccounts = [
                                  ...selectedLedgerAccounts,
                                ];
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
                    <div className="w-[250px]">
                      <FormField
                        control={form.control}
                        name={`details.${index}.sub_account_id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{index === 1 && "Contact"}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={(field.value || "").toString()}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Contact" />
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
                    <div className="max-w-[180px]">
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

                      {index === lastIndex && (
                        <>
                          <p className="text-sm mt-2 whitespace-nowrap">
                            Total Amount:{" "}
                            <span className="font-semibold">
                              {" "}
                              {totalCrAmount}
                            </span>
                          </p>
                        </>
                      )}
                    </div>

                    <FormItem
                      className={`mt-auto ${
                        index === lastIndex ? "mb-10" : "mb-3"
                      } `}
                    >
                      <span
                        className=""
                        onClick={() => {
                          remove(index);
                          const updatedAccounts = [...selectedLedgerAccounts];
                          updatedAccounts.splice(index, 1);
                          setSelectedLedgerAccounts(updatedAccounts);
                        }}
                      >
                        <Trash2 size={16} color="red" className="" />
                      </span>
                    </FormItem>
                  </div>
                ))}
                {/*                         <div className="text-end mt-4">
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

                <div className=" flex flex-row-reverse items-center !mb-2">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-fit ml-2"
                  >
                    {previousData ? "Update" : "Save"}
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => navigate("/accounts/contra-voucher")}
                    className="w-fit "
                  >
                    Back
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      )}
    </>
  );
}
