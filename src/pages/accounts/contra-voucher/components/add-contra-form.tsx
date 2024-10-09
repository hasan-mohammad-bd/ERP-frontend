import SelectWithSearch from "@/components/common/accounts/entry/select-input-with-search";
import FileUpload from "@/components/common/file-uploader";
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
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import handleErrors from "@/lib/handle-errors";
import {
  EntryFromValues,
  LedgerRow,
  SubAccountRow,
  entrySchema,
} from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import {
  useCreateEntryMutation,
  useGetEntryByIdQuery,
  useUpdateEntryMutation,
} from "@/store/services/accounts/api/entries";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { useGetSubAccountsQuery } from "@/store/services/accounts/api/sub-accounts";
import { ErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { serialize } from "object-to-formdata";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { InputNumberFormat } from "@react-input/number-format";

export function AddContraForm() {
  const { id } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  console.log("🚀 ~ AddJournalForm ~ uploadedFiles:", uploadedFiles);

  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);
  const { data: projects, isLoading: projectLoading } =
    useGetProjectsQuery(`per_page=1000&page=1`);

  const { data: journalById, refetch } = useGetEntryByIdQuery(`${id}`);

  const previousData = journalById?.data;
  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];
  const projectData = projects?.data || [];
  const navigate = useNavigate();

  // const [totalDrAmount, setTotalDrAmount] = useState(0);
  const [totalCrAmount, setTotalCrAmount] = useState(0);

<<<<<<< HEAD
=======

>>>>>>> main
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
        details: previousData.details.map((detail) => ({
          ledger_account_id: detail.ledger_account_id.toString(),
          cr_amount: detail.cr_amount,
          dr_amount: detail.dr_amount,
          note: detail.note,
        })) || [
          { dr_amount: 0, cr_amount: 0 },
          { dr_amount: 0, cr_amount: 0 },
        ],
        note: previousData?.note || "",
        file: previousData?.file || "",
        project_id: previousData.project?.id?.toString() || null,
      });
    }
  }, [form, previousData]);

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

<<<<<<< HEAD
=======


>>>>>>> main
  async function onSubmit(data: EntryFromValues) {
    const updateData = {
      ...data,
      details: data.details.map((detail, index) =>
        index === 0 ? { ...detail, dr_amount: totalCrAmount } : detail
      ),
    };

    try {
      const formData = serialize(
        {
          ...updateData,
          files: uploadedFiles || "",
          _method: previousData ? "PUT" : "POST",
        },
        { indices: true }
      );

      if (previousData) {
        await updateEntry({
          entryId: previousData.id,
          updatedEntry: formData,
        }).unwrap();
        toast.success("Voucher updated successfully");
        // modalClose();
        navigate("/accounts/contra-voucher");
      } else {
        await createEntry(formData).unwrap();
        toast.success("Voucher created successfully");
        // modalClose();
        navigate("/accounts/contra-voucher");
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
                <div className="grid grid-cols-2 gap-16">
                  <div>
                    <div className="flex">
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
                          <FormSearchSelect<LedgerRow>
                            loading={ledgerAccountLoading}
                            data={ledgerAccountData.filter(
                              (ledgerAccount: LedgerRow) =>
                                ledgerAccount.nature === "Cash" ||
                                ledgerAccount.nature === "Bank Accounts"
                            )}
                            displayField="name"
                            valueField="id"
                            form={form}
                            name={`details.0.ledger_account_id`}
                            title="Debit Account Head"
                            className="w-[190px]"
                          />
                          {/*                           <FormField
                            control={form.control}
                            name={`details.0.ledger_account_id`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Debit Account Head{" "}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
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
                                            ledgerAccount.nature === "Cash" ||
                                            ledgerAccount.nature ===
                                              "Bank Accounts"
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
                          /> */}
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

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className={`flex w-full gap-x-3 ${index === 0 && "hidden"}`}
                  >
                    <div className={`w-[250px]`}>
                      <FormSearchSelect<LedgerRow>
                        loading={ledgerAccountLoading}
                        data={ledgerAccountData.filter(
                          (ledgerAccount: LedgerRow) =>
                            ledgerAccount.nature === "Cash" ||
                            ledgerAccount.nature === "Bank Accounts"
                        )}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name={`details.${index}.ledger_account_id`}
                        title={index === 1 ? "Credit Account Head" : undefined}
                        className="w-[250px]"
                      />
<<<<<<< HEAD
                      {/*                       <FormField
=======
{/*                       <FormField
>>>>>>> main
                        control={form.control}
                        name={`details.${index}.ledger_account_id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {index === 1 && (
                                <>
                                  Credit Account Head{" "}
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
                                  ledgerAccountData
                                    .filter(
                                      (ledgerAccount: LedgerRow) =>
                                        ledgerAccount.nature === "Cash" ||
                                        ledgerAccount.nature === "Bank Accounts"
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
                      /> */}
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

                    <div className="max-w-[180px]">
                      <FormField
                        control={form.control}
                        name={`details.${index}.cr_amount`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {index === 1 && (
                                <>
                                  Amount <span className="text-red-500">*</span>
                                </>
                              )}
                            </FormLabel>
                            <FormControl>
<<<<<<< HEAD
                              <InputNumberFormat
                                locales="en-IN"
                                className="bg-white border border-gray-300 rounded-md px-2 py-2 text-sm w-full focus:outline-none"
                                onChange={(event) =>
                                  field.onChange(
                                    event.target.value.replace(/,/g, "")
                                  )
=======
                              <Input
                                step="any"
                                disabled={
                                  form.watch(`details.${index}.dr_amount`) > 0
>>>>>>> main
                                }
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
                          const updatedAccounts = [...ledgerAccountData];
                          updatedAccounts.splice(index, 1);
<<<<<<< HEAD
=======
                          
>>>>>>> main
                        }}
                      >
                        <Trash2 size={16} color="red" className="" />
                      </span>
                    </FormItem>
                  </div>
                ))}

                <Button
                  variant="outline"
                  className="border border-dashed border-gray-700 w-full"
                  type="button"
                  onClick={() =>
                    append({
                      dr_amount: 0,
                      cr_amount: 0,
                      ledger_account_id: "",
                      sub_account_id: null,
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
                    variant="primary"
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
