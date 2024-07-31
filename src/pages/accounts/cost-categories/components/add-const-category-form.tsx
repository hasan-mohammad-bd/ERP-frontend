import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";

import { Loading } from "@/components/common/loading";
import {
  CostCategoryFromValues,
  CostCategoryRow,
  costCategorySchema,
} from "@/lib/validators/accounts/cost-categories";
import {
  useCreateCostCategoryMutation,
  useUpdateCostCategoryMutation,
} from "@/store/services/accounts/api/cost-category";
import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";

interface AddCostCategoryFormProps {
  modalClose: () => void;
  rowData?: CostCategoryRow;
}

export function AddCostCategoryForm({
  modalClose,
  rowData: previousData,
}: AddCostCategoryFormProps) {
  const [createCostCategory, { isLoading }] = useCreateCostCategoryMutation();
  const [updateCostCategory, { isLoading: updateLoading }] =
    useUpdateCostCategoryMutation();

  const form = useForm<CostCategoryFromValues>({
    resolver: zodResolver(costCategorySchema),
    defaultValues: {
      name: previousData?.name || "",
      description: previousData?.description || "",
    },
  });

  async function onSubmit(data: CostCategoryFromValues) {
    try {
      if (previousData) {
        await updateCostCategory({
          costCategoryId: previousData.id,
          updatedCostCategory: data,
        });
        toast.success("Cost Category updated successfully");
        modalClose();
      } else {
        await createCostCategory(data);
        toast.success("Cost Category created successfully");
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
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your description here."
											{...field}
											value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
