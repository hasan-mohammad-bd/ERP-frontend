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
import { LocationColumn } from "@/lib/validators";
import { LedgerRow, SubAccountRow } from "@/lib/validators/accounts";
import {
  OpeningBalanceFromValues,
  openingBalanceSchema,
} from "@/lib/validators/accounts/opening-balance";
import {
  useCreateEntryMutation,
  useGetEntryByIdQuery,
  useUpdateEntryMutation,
} from "@/store/services/accounts/api/entries";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { useGetOpeningBalancesQuery } from "@/store/services/accounts/api/opening-balance";
import { useGetSubAccountsQuery } from "@/store/services/accounts/api/sub-accounts";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { ErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { serialize } from "object-to-formdata";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export function AddOpeningBalanceForm() {
  const { id } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [createEntry, { isLoading }] = useCreateEntryMutation();
  const [updateEntry, { isLoading: updateLoading }] = useUpdateEntryMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");
  const { data: subAccounts, isLoading: subAccountLoading } =
    useGetSubAccountsQuery(`page=1&per_page=1000`);

  const { data: openingBalance } =
    useGetOpeningBalancesQuery(`page=1&per_page=1000`);

  const { data: openingBalanceById, refetch } = useGetEntryByIdQuery(`${id}`, {
    skip: !id,
  });

  const previousData = openingBalanceById?.data;
  console.log("🚀 ~ AddOpeningBalanceForm ~ previousData:", previousData);
  const openingBalanceData = openingBalance?.data || [];

  const { data: location, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const locationData = location?.data || [];

  const filteredLocation = locationData?.filter(
    (item) =>
      !openingBalanceData?.some(
        (openingBalance) => openingBalance.location.id === item.id
      )
  );

  const ledgerAccountData = ledgerAccount?.data || [];
  const subAccountData = subAccounts?.data || [];
  const navigate = useNavigate();

  const [selectedLedgerAccounts, setSelectedLedgerAccounts] = useState<
    number[]
  >([]);

  const form = useForm<OpeningBalanceFromValues>({
    resolver: zodResolver(openingBalanceSchema),
    defaultValues: {
      type: "Opening Balance",
      date: new Date().toISOString().split("T")[0],
      entry_number: "",
      details: [
        { dr_amount: 0, cr_amount: 0 },
        { dr_amount: 0, cr_amount: 0 },
      ],
      note: "",
      file: "",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        type: previousData.type || "Opening balance",
        date: previousData.date || new Date().toISOString(),
        // entry_number: previousData.entry_number || "",
        details: previousData.details || [
          { dr_amount: 0, cr_amount: 0 },
          { dr_amount: 0, cr_amount: 0 },
        ],
        note: previousData.note || "",

        location_id: previousData.location.id,
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

  async function onSubmit(data: OpeningBalanceFromValues) {
    console.log("button clicked");
    try {
      const formData = serialize(
        {
          ...data,
          files: uploadedFiles,
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
        navigate("/accounts/opening-balance");
      } else {
        await createEntry(formData).unwrap();
        toast.success("Voucher created successfully");
        // modalClose();
        navigate("/accounts/opening-balance");
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
              title={
                previousData ? "Edit Opening Balance" : "Add Opening Balance"
              }
              description="Manage your sub accounts for you business"
            />
            <Button
              onClick={() => navigate("/accounts/opening-balance")}
              size={"sm"}
            >
              Opening Balance List
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
                      <div className="w-[250px]">
                        <FormField
                          control={form.control}
                          name="location_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Branch</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.location?.id
                                    ? String(previousData.location.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Branch" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {locationLoading ? (
                                    <Loading />
                                  ) : (
                                    filteredLocation?.map(
                                      (location: LocationColumn) => (
                                        <SelectItem
                                          key={location.id}
                                          value={String(location.id)}
                                        >
                                          {location.name}
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
                  <div key={field.id} className="flex w-full gap-x-3">
                    <div className="w-[250px]">
                      <FormField
                        control={form.control}
                        name={`details.${index}.ledger_account_id`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {index === 0 && "Ledger Account"}
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
                              {index === 0 && "Debit Amount"}
                            </FormLabel>
                            <FormControl>
                              <Input
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
                              {totalDrAmount}
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
                              {index === 0 && "Credit Amount"}
                            </FormLabel>
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
                            Credit:{" "}
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
                    variant="default"
                    onClick={() => navigate("/accounts/opening-balance")}
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
