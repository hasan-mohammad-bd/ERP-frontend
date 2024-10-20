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
import { Plus, Trash2 } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ExpensesFormValues,
  expensesSchema,
} from "@/lib/validators/billing/expenses";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import FileUpload from "@/components/common/file-uploader";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
 // Assuming this exists

// Dummy data for the expense categories
const categoryData = [
  { id: 1, name: "Office Supplies" },
  { id: 2, name: "Travel Expenses" },
  { id: 3, name: "Meals" },
];

const AddExpensesForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  console.log(uploadedFiles);

  const form = useForm<ExpensesFormValues>({
    resolver: zodResolver(expensesSchema),
    defaultValues: {
      expenses: [
        { expenses_category: "", note: "", amount: "", attachment: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "expenses", // Field name in the schema
  });

  // Watch amount fields to calculate total
  const amounts = form.watch("expenses"); // Watch the expenses array for changes
  const totalAmount = amounts.reduce((total, current) => {
    const amount = parseFloat(current.amount || "0"); // Parse the current amount or default to 0
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Format total with commas
  const formattedTotal = totalAmount.toLocaleString();

  async function onSubmit() {
    // Handle form submission here
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 py-4">
          <div className="grid grid-cols-2 gap-8 justify-between w-full">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        type="date"
                        placeholder="Enter date"
                        value={
                          field.value
                            ? new Date(field.value).toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="payfrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payform</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Payform"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Note field */}
              <div className="grid col-span-2">
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your note" {...field}

                          />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full">
              <div className="space-y-2">
                <FormLabel>Upload Files</FormLabel>
                <FileUpload setUploadedFiles={setUploadedFiles} />
              </div>
            </div>
          </div>

          {/* Add expenses section   */}
          <div className="mt-10 w-full">
            {fields.map((field, index) => (
              <div
                className="flex gap-4 items-start w-full my-4"
                key={field.id}
              >
                {/* Replace Expense Category with FormSearchSelect */}
                <div className={`${index === 0 ? "-translate-y-0" : "-translate-y-[8px]"}   w-full`}>
                {index === 0 && <FormLabel>Expenses Category</FormLabel>}{" "}
                  <FormSearchSelect
                    loading={false} // Assuming no loading state is needed here for now
                    data={categoryData}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`expenses.${index}.expenses_category`} // Dynamic field reference
                    // title="Expenses Category"
                    className="w-[497px]"
                  />
                </div>

                {/* Note */}
                <FormField
                  control={form.control}
                  name={`expenses.${index}.note`}
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
                  name={`expenses.${index}.amount`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      {index === 0 && <FormLabel>Amount</FormLabel>}{" "}
                      {/* Show only for the first item */}
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Delete button */}
                {index >= 0 && (
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
                    expenses_category: "",
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
            <Button variant="primary" className="w-fit">
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default AddExpensesForm;
