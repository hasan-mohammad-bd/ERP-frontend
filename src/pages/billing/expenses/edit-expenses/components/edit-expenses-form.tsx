import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ExpensesFormValues,
  expensesSchema,
} from "@/lib/validators/billing/expenses";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
// import FileUpload from "@/components/common/file-uploader";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { LedgerRow } from "@/lib/validators/accounts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useGetExpensesCategoryQuery } from "@/store/services/billing/api/expenses-category";
import {
  useGetExpenseQuery,
  useUpdateExpenseMutation,
} from "@/store/services/billing/api/expenses";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { Loading } from "@/components/common/loading";
// Assuming this exists

const EditExpensesForm = () => {
  const params = useParams();
  const expenseId = Number(params.id);
  const navigate = useNavigate();
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
  });

  const { data: ledgerAccounts, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("type=Assets&nature=Cash&page=1&per_page=1000");
  const { data: expensesCategory, isLoading: expensesCategoryLoading } =
    useGetExpensesCategoryQuery("page=1&per_page=1000");

  const [updateExpense, { isLoading: isUpdating }] = useUpdateExpenseMutation();

  const { data: expense, isLoading: expenseLoading } = useGetExpenseQuery(
    expenseId,
    {
      skip: !expenseId,
      refetchOnMountOrArgChange: expenseId,
      refetchOnFocus: true,
    }
  );

  const ledgerAccountData = ledgerAccounts?.data || [];
  const expensesCategoryData = expensesCategory?.data || [];

  const form = useForm<ExpensesFormValues>({
    resolver: zodResolver(expensesSchema),
    defaultValues: {
      total: 0,
      note: "",
      details: [{ note: "", attachment: "" }],
    },
  });

  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "details", // Field name in the schema
  });

  // Update form defaults on fetch
  useEffect(() => {
    if (expense?.data) {
      form.reset({
        note: expense?.data.note,
        ledger_account_id: String(expense?.data.ledger_account_id),
        date: expense?.data.date,
        details: expense?.data.details.map((detail) => ({
          note: detail.note || "",
          amount: detail.amount,
          expense_category_id: String(detail.expense_category_id),
        })),
      });
    }
  }, [expense?.data, form]);

  // Watch amount fields to calculate total
  const amounts = form.watch("details"); // Watch the expenses array for changes
  const totalAmount = amounts.reduce((total, current) => {
    const amount = parseFloat(current.amount || "0"); // Parse the current amount or default to 0
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Format total with commas
  const formattedTotal = totalAmount;

  useEffect(() => {
    form.setValue("total", formattedTotal);
  }, [form, formattedTotal]);

  async function onSubmit(data: ExpensesFormValues) {
    try {
      await updateExpense({
        expenseId: Number(expense?.data.id),
        updatedExpense: {
          ...data,
          ledger_account_id: Number(data.ledger_account_id),
          details: data.details.map((detail) => ({
            ...detail,
            expense_category_id: Number(detail.expense_category_id),
            amount: Number(detail.amount),
          })),
        },
      }).unwrap();
      toast.success("Expense Updated successfully");
      navigate("/billing/expenses");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  if (expenseLoading) {
    return <Loading />;
  }
  return (
    <Card>
      {isUpdating ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 py-4">
            <div className="grid grid-cols-2 gap-8 justify-between w-full">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name={`date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <Popover
                        open={openDatePickers.date}
                        onOpenChange={() => handleDatePickerToggle("date")}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={`w-full justify-start text-left font-normal ${
                              !field.value && "text-muted-foreground"
                            }`}
                          >
                            {field.value
                              ? format(field.value, "PP")
                              : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 z-[200]"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) => {
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              );
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className={`w-full`}>
                  <FormSearchSelect<LedgerRow>
                    loading={ledgerAccountLoading}
                    data={ledgerAccountData}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`ledger_account_id`}
                    title="Payform"
                    className="w-[375px]"
                  />
                </div>

                {/* Note field */}
                <div className="grid col-span-2">
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Note</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your note" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* <div className="w-full">
                <div className="space-y-2">
                  <FormLabel>Upload Files</FormLabel>
                  <FileUpload
                    setFilesToUpload={setUploadedFiles}
                    filesToUpload={uploadedFiles}
                  />
                </div>
              </div> */}
            </div>

            {/* Add expenses section   */}
            <div className="mt-10 w-full">
              {fields.map((field, index) => (
                <div
                  className="flex gap-4 items-start w-full my-4"
                  key={field.id}
                >
                  {/* Replace Expense Category with FormSearchSelect */}
                  <div
                    className={`${
                      index === 0 ? "-translate-y-0" : "-translate-y-[8px]"
                    }   w-full`}
                  >
                    {index === 0 && <FormLabel>Expenses Category</FormLabel>}{" "}
                    <FormSearchSelect
                      loading={expensesCategoryLoading}
                      data={expensesCategoryData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name={`details.${index}.expense_category_id`}
                      className="w-[497px]"
                    />
                  </div>

                  {/* Note */}
                  <FormField
                    control={form.control}
                    name={`details.${index}.note`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {index === 0 && <FormLabel>Note</FormLabel>}{" "}
                        {/* Show only for the first item */}
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter note"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Amount */}
                  <FormField
                    control={form.control}
                    name={`details.${index}.amount`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {index === 0 && <FormLabel>Amount</FormLabel>}{" "}
                        {/* Show only for the first item */}
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            placeholder="Enter amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Delete button */}
                  {index !== 0 && (
                    <div
                      className={`flex items-center ${
                        index === 0 ? "mt-8" : "mt-0"
                      }`}
                    >
                      <Button
                        variant="outline"
                        className="text-red-600"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Expense button */}
              <div className="w-full">
                <Button
                  variant="outline"
                  className="border border-dashed border-gray-700 w-full"
                  type="button"
                  onClick={() =>
                    append({
                      expense_category_id: "",
                      note: "",
                      amount: "",
                      attachment: "",
                    })
                  }
                >
                  <Plus size={16} /> <span className="ml-2">Add Expense</span>
                </Button>
              </div>

              {/* Total section inside the same column as the amount */}
              <div className="flex flex-row-reverse my-5">
                <p className="text-[14px] font-semibold">
                  Total: {formattedTotal}
                </p>
              </div>
            </div>

            {/* Submit and Cancel buttons */}
            <div className="flex flex-row-reverse items-center !mb-2 mt-8">
              <Button variant="default" type="submit" className="w-fit ml-2">
                Save
              </Button>
              <Button
                type="button"
                variant="primary"
                className="w-fit"
                onClick={() => navigate("/billing/expenses")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </Card>
  );
};

export default EditExpensesForm;
