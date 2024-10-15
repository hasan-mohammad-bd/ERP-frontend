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
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/store/services/billing/api/category";
import {
  CategoryFormValues,
  CategoryRow,
  categorySchema,
} from "@/lib/validators/billing/category";

interface AddCategoryProps {
  modalClose: () => void;
  data?: CategoryRow;
}

export function AddCategoryForm({
  modalClose,
  data: previousData,
}: AddCategoryProps) {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: previousData?.name || "",
      //   short_code: previousData?.short_code || "",
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
        await createCategory(data).unwrap();
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

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Category Name"
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
