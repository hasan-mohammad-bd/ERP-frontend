import { useForm } from "react-hook-form";
// import { useState } from "react";
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
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/store/services/billing/api/category";
import {
  CategoryFormValues,
  CategoryRow,
  categorySchema,
  SubCategoryColumn,
} from "@/lib/validators/billing/category";
import SearchSelect from "@/components/common/search-select";

// Define a new type that includes categoryId
type CreateCategoryPayload = CategoryFormValues & { categoryId?: number };

type AddCategoryProps = {
  modalClose: () => void;
  data?: CategoryRow;
  selectedSubCategory: SubCategoryColumn | undefined;
  setSelectedSubCategory: (dept: SubCategoryColumn) => void;
};

export function AddSubCategoryForm({
  modalClose,
  data: previousData,
  selectedSubCategory,
  setSelectedSubCategory,
}: AddCategoryProps) {
  const categoryName = {
    data: [
      { id: 1, name: "Category-1" },
      { id: 2, name: "Category-2" },
      { id: 3, name: "Category-3" },
      { id: 4, name: "Category-4" },
      { id: 5, name: "Category-5" },
    ],
  };

  // State to track selected category
  // const [selectedCategory, setSelectedCategory] = useState<CategoryRow | null>(
  //   null
  // );

  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: previousData?.name || "",
    },
  });

  async function onSubmit(data: CategoryFormValues) {
    try {
      if (previousData) {
        await updateCategory({
          categoryId: previousData.id,
          updatedCategory: data,
        }).unwrap();
        toast.success("Category updated successfully");
        modalClose();
      } else {
        // Create a payload with the categoryId if selectedCategory exists
        const payload: CreateCategoryPayload = {
          ...data,
          categoryId: selectedSubCategory?.id, // Add categoryId here
        };
        await createCategory(payload).unwrap();
        toast.success("Category created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {/* Form Fields */}

              <div>
                <p className="text-[14px] font-semibold mb-2">
                  Select Category
                </p>
                <SearchSelect
                  items={categoryName?.data || []}
                  labelKey="name"
                  valueKey="id"
                  value={selectedSubCategory} // Bind selectedCategory state here
                  placeholder="Select Category"
                  onSelect={setSelectedSubCategory} // Set the selected category
                  className=""
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subcategory Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Subcategory Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
