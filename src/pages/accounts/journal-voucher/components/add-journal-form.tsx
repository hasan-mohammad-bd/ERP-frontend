import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  EntryFromValues,
  LedgerRow,
  SubAccountRow,
  entrySchema,
} from "@/lib/validators/accounts";
import { CostCenterRow } from "@/lib/validators/accounts/cost-centers";
import { useGetCostCentersQuery } from "@/store/services/accounts/api/cost-center";
import {
  useCreateEntryMutation,
  useGetEntryByIdQuery,
  useUpdateEntryMutation,
} from "@/store/services/accounts/api/entries";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { useGetSubAccountsQuery } from "@/store/services/accounts/api/sub-accounts";
import { zodResolver } from "@hookform/resolvers/zod";
import { serialize } from "object-to-formdata";

import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import FileUpload from "@/components/common/file-uploader";
import handleErrors from "@/lib/handle-errors";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import { ErrorResponse } from "@/types";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";

export function AddJournalForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { id } = useParams();

  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);
  const { data: projects, isLoading: projectLoading } =
    useGetProjectsQuery(`per_page=1000&page=1`);

  const { data: journalById, refetch } = useGetEntryByIdQuery(`${id}`, {
    skip: !id,
  });

  const { data: costCenters, isLoading: costCenterLoading } =
    useGetCostCentersQuery(`page=1&per_page=1000`);

  const previousData = journalById?.data;

  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];
  const costCentersData = costCenters?.data || [];
  const projectData = projects?.data || [];

  const navigate = useNavigate();

  const [selectedLedgerAccounts, setSelectedLedgerAccounts] = useState<
    number[]
  >([]);
  const form = useForm<EntryFromValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      type: "Journal Voucher",
      date: new Date().toISOString().split("T")[0],
      entry_number: "",
      details: [
        {
          dr_amount: 0,
          cr_amount: 0,
          cost_centers: [],
        },
        {
          dr_amount: 0,
          cr_amount: 0,
          cost_centers: [],
        },
      ],
      note: "",
      file: "",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        type: previousData.type || "Journal Voucher",
        date: previousData.date || new Date().toISOString(),
        entry_number: previousData.entry_number || "",
        details: previousData.details || [
          {
            dr_amount: 0,
            cr_amount: 0,
            cost_centers: [],
          },
          {
            dr_amount: 0,
            cr_amount: 0,
            cost_centers: [],
          },
        ],
        note: previousData.note || "",
        file: previousData.file || "",
        project_id: previousData.project?.id?.toString() || null,
      });
    }
  }, [previousData, form]);

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

  useEffect(() => {
    const selectedAccounts = details.map((detail) =>
      Number(detail.ledger_account_id)
    );
    setSelectedLedgerAccounts(selectedAccounts);
  }, [details]);

  async function onSubmit(data: EntryFromValues) {
    try {
      // serialize the form data to match the backend requirements
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
          files: uploadedFiles,
        },
        { indices: true }
      );
      if (previousData) {
        await updateEntry({
          entryId: previousData.id,
          updatedEntry: formData,
        }).unwrap();

        toast.success("Voucher updated successfully");
        navigate("/accounts/journal-voucher");
      } else {
        await createEntry(formData).unwrap();
        toast.success("Voucher created successfully");
        navigate("/accounts/journal-voucher");
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
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
              title={previousData ? "Edit Journal Entry" : "Add Journal Entry"}
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/accounts/journal-voucher")}
              size={"sm"}
            >
              Journal Voucher List
            </Button>
           </div>


          <Card className="p-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 mb-auto  px-2 overflow-y-scroll no-scrollbar"
              >
                <div className="grid grid-cols-2 gap-16">
                  <div>
                    <div className="flex gap-x-4">
                      <div className="w-fit">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Date <span className="text-red-500">*</span>
                              </FormLabel>
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
                      <div className="w-[250px]">
                        <FormSearchSelect<ProjectRow>
                          loading={projectLoading}
                          data={projectData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="project_id"
                          title="Project"
                          className="w-[250px]"
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
                  </div>
                  {/* file Upload  */}
                  <div className="space-y-2">
                    <FormLabel>Upload Files</FormLabel>
                    <FileUpload
                      setUploadedFiles={setUploadedFiles}
                      uploadedFiles={previousData?.files}
                      onDeleteSuccess={() => refetch()}
                    />
                  </div>
                </div>
                {fields?.map((field, index) => (
                  <Card key={field.id} className="p-3">
                    <div className="flex w-full gap-x-3">
                      <div className="w-[250px]">
                        <FormField
                          control={form.control}
                          name={`details.${index}.ledger_account_id`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && (
                                  <>
                                    Ledger Account{" "}
                                    <span className="text-red-500">*</span>
                                  </>
                                )}
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
                                    ledgerAccountData.map(
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
                      <div className="w-[250px]">
                        <FormField
                          control={form.control}
                          name={`details.${index}.sub_account_id`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{index === 0 && "Contact"}</FormLabel>
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
                              <FormLabel>{index === 0 && "Note"}</FormLabel>
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
                        {index === lastIndex && (
                          <>
                            <p className="text-sm mt-2 whitespace-nowrap text-right">
                              Total{" "}
                            </p>
                          </>
                        )}
                      </div>

                      <div className="max-w-[180px]">
                        <FormField
                          control={form.control}
                          name={`details.${index}.dr_amount`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && (
                                  <>
                                    Debit Amount{" "}
                                    <span>
                                      <span className="text-red-500">*</span>
                                    </span>
                                  </>
                                )}
                              </FormLabel>
                              <FormControl>
                                <Input
                                step="any"
                                  disabled={
                                    form.watch(`details.${index}.cr_amount`) > 0
                                  }
                                  min={0}
                                  type="number"
                                  placeholder="Debit amount"
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
                              Debit:{" "}
                              <span className="font-semibold">
                                {" "}
                                {totalDrAmount.toLocaleString("en-IN")}
                              </span>
                            </p>
                          </>
                        )}
                      </div>
                      <div className="max-w-[180px]">
                        <FormField
                          control={form.control}
                          name={`details.${index}.cr_amount`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {index === 0 && (
                                  <>
                                    Credit Amount{" "}
                                    <span className="text-red-500">*</span>
                                  </>
                                )}
                              </FormLabel>
                              <FormControl>
                                <Input
                                step="any"
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
                              Credit:{" "}
                              <span className="font-semibold">
                                {" "}
                                {totalCrAmount.toLocaleString("en-IN")}
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

                    <div className="flex flex-col ">
                      {form
                        ?.watch(`details.${index}.cost_centers`)
                        ?.map((costCenter, costCenterIndex) => (
                          <div
                            key={costCenter.cost_center_id}
                            className="flex w-full gap-x-3 mt-2"
                          >
                            <div className="w-[250px]">
                              <FormField
                                control={form.control}
                                name={`details.${index}.cost_centers.${costCenterIndex}.cost_center_id`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>
                                      {costCenterIndex === 0 && "Cost Center"}
                                    </FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={(field.value || "").toString()}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select Cost Center" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {costCenterLoading ? (
                                          <Loading />
                                        ) : (
                                          costCentersData.map(
                                            (costCenter: CostCenterRow) => (
                                              <SelectItem
                                                key={costCenter.id}
                                                value={String(costCenter.id)}
                                              >
                                                {costCenter.name}
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
                            <div className="w-[250px]">
                              <FormField
                                control={form.control}
                                name={`details.${index}.cost_centers.${costCenterIndex}.amount`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>
                                      {costCenterIndex === 0 && "Amount"}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormItem className="mt-auto mb-3">
                              <span
                                className=""
                                onClick={() =>
                                  form.setValue(
                                    `details.${index}.cost_centers`,
                                    form
                                      ?.getValues(
                                        `details.${index}.cost_centers`
                                      )
                                      ?.filter(
                                        (_, idx) => idx !== costCenterIndex
                                      ) || []
                                  )
                                }
                              >
                                <Trash2 size={16} color="red" className="" />
                              </span>
                            </FormItem>
                          </div>
                        ))}
                      <Button
                        variant="outline"
                        className="border border-dashed border-gray-700 w-fit mt-2"
                        type="button"
                        onClick={() =>
                          form.setValue(`details.${index}.cost_centers`, [
                            ...(form.getValues(
                              `details.${index}.cost_centers`
                            ) ?? []),
                            { cost_center_id: 0, amount: 0 },
                          ])
                        }
                      >
                        <Plus size={16} />{" "}
                        <span className="ml-2">Add Cost Center</span>
                      </Button>
                    </div>
                  </Card>
                ))}

                <Button
                  variant="outline"
                  className="border border-dashed border-gray-700 w-full"
                  type="button"
                  onClick={() =>
                    append({
                      dr_amount: 0,
                      cr_amount: 0,
                      ledger_account_id: 0,
                      sub_account_id: null,
                      note: "",
                      // cost_centers: [{ cost_center_id: 0, amount: 0 }],
                    })
                  }
                >
                  <Plus size={16} /> <span className="ml-2">Add Line</span>
                </Button>

                <div className=" flex flex-row-reverse items-center !mb-2">
                  <Button
                    disabled={totalDrAmount !== totalCrAmount}
                    variant="default"
                    type="submit"
                    className="w-fit ml-2"
                  >
                    {previousData ? "Update" : "Save"}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/accounts/journal-voucher")}
                    className="w-fit "
                  >
                    Back
                  </Button>
                  {totalCrAmount !== totalDrAmount && (
                    <p className="text-red-500 mr-3 text-sm">
                      Debit and Credit amount must be same
                    </p>
                  )}
                </div>
              </form>
            </Form>
          </Card>
        </div>
      )}
    </>
  );
}
