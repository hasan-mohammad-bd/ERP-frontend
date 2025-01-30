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
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";
import {
  // CategoryFormValues,
  // categoryRowSchema,
  ExpenseCategoryRow,
  ExpenseCategoryRowForm,
  extendedCategorySchema,
  extendedExpenseCategorySchema,
} from "@/lib/validators/billing/category";
import FileUploadSingle from "@/components/common/file-upload-single";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serialize } from "object-to-formdata";
import {
  useCreateExpensesCategoryMutation,
  useUpdateExpensesCategoryMutation,
} from "@/store/services/billing/api/expenses-category";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
// import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
// import { LocationColumn } from "@/lib/validators";
import { useGetLedgerGroupsArrayQuery } from "@/store/services/accounts/api/ledger-group";
import { LedgerGroupArrayRow } from "@/lib/validators/accounts";

interface AddCategoryProps {
  modalClose: () => void;
  data?: ExpenseCategoryRow; // If you want to pass an existing category to edit
}

export function AddCategoryForm({
  modalClose,
  data: previousData,
}: AddCategoryProps) {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [createExpensesCategory, { isLoading }] =
    useCreateExpensesCategoryMutation();
  const [updateExpensesCategory, { isLoading: updateLoading }] =
    useUpdateExpensesCategoryMutation();

  const { data: ledgerGroup, isLoading: ledgerGroupLoading } =
    useGetLedgerGroupsArrayQuery("page=1&per_page=1000&type=Expenses");
  const ledgerGroupData = ledgerGroup?.data || [];

  const schema = previousData
    ? extendedCategorySchema
    : extendedExpenseCategorySchema;

  const form = useForm<ExpenseCategoryRowForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: previousData?.name || "",
      description: previousData?.description || "",
      status: previousData?.status === 1 ? 1 : 0,
      ledger_group_id: previousData?.ledger_group_id || "",
    },
  });

  console.log(form.formState.errors);

  async function onSubmit(data: ExpenseCategoryRowForm) {
    console.log("data", data);
    try {
      // Validate the uploaded image if it exists
      if (uploadedImage) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

        // Check if the file type is valid
        if (!validImageTypes.includes(uploadedImage.type)) {
          toast.error("The image must be a file of type: jpeg, png, jpg");
          return;
        }

        // Check if the file size is within the limit (2 MB in this case)
        if (uploadedImage.size > 2048 * 1024) {
          toast.error("The image must not exceed 2 MB in size");
          return;
        }
      }

      //Create formData to send to the API
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
          image: uploadedImage, // include previous image if none is uploaded
        },
        { indices: true }
      );
      formData.append("ledger_group_id", data.ledger_group_id);

      if (previousData && previousData.id !== undefined) {
        // Use formData here for updating category
        await updateExpensesCategory({
          expensesCategoryId: previousData.id,
          updatedExpensesCategory: formData,
        }).unwrap();
        toast.success("Category updated successfully");
      } else {
        // Use formData here for creating a new category
        await createExpensesCategory(formData).unwrap();
        toast.success("Category created successfully");
      }

      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="grid grid-cols-3 gap-5">
                {/* Category Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Expenses Category Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Category Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "Active" ? 1 : 0)
                        }
                        value={field.value === 1 ? "Active" : "Inactive"}
                        defaultValue="Active"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={"Active"}>Active</SelectItem>
                          <SelectItem value={"Inactive"}>Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {!previousData && (
                <FormSearchSelect<LedgerGroupArrayRow>
                  loading={ledgerGroupLoading}
                  data={ledgerGroupData}
                  displayField="name"
                  valueField="id"
                  form={form}
                  name="ledger_group_id"
                  placeholder="Select Ledger Group"
                  title="Ledger Group"
                  className="w-[462px]"
                />
              )}

              {/* Description*/}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* File Upload */}
              <div className="space-y-2">
                <FormLabel>Upload Image</FormLabel>
                <FileUploadSingle
                  image={previousData?.image}
                  setUploadedFile={setUploadedImage} // Set the uploaded file
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <Button variant="default" type="submit" className="w-fit mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
