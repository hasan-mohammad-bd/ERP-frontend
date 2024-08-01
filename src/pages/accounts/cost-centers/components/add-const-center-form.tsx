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

import { Textarea } from "@/components/ui/textarea";
import {
  CostCenterFromValues,
  CostCenterRow,
  costCenterSchema,
} from "@/lib/validators/accounts/cost-centers";
import {
  useCreateCostCenterMutation,
  useUpdateCostCenterMutation,
} from "@/store/services/accounts/api/cost-center";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCostCategoriesQuery } from "@/store/services/accounts/api/cost-category";
import { CostCategoryRow } from "@/lib/validators/accounts/cost-categories";
// import { Switch } from "@/components/ui/switch";

interface AddCostCenterFormProps {
  modalClose: () => void;
  rowData?: CostCenterRow;
}

export function AddCostCenterForm({
  modalClose,
  rowData: previousData,
}: AddCostCenterFormProps) {
  const [createCostCenter, { isLoading }] = useCreateCostCenterMutation();
  const [updateCostCenter, { isLoading: updateLoading }] =
    useUpdateCostCenterMutation();

  const { data: costCategories, isLoading: costCategoriesLoading } =
    useGetCostCategoriesQuery(`per_page=1000&page=1`);

  const costCategoriesList = costCategories?.data || [];

  const form = useForm<CostCenterFromValues>({
    resolver: zodResolver(costCenterSchema),
    defaultValues: {
      name: previousData?.name || "",
      description: previousData?.description || "",
      cost_category_id: previousData?.cost_category_id || 1,
    },
  });

  async function onSubmit(data: CostCenterFromValues) {
    try {
      if (previousData) {
        await updateCostCenter({
          costCenterId: previousData.id,
          updatedCostCenter: data,
        });
        toast.success("Cost Center updated successfully");
        modalClose();
      } else {
        await createCostCenter(data);
        toast.success("Cost Center created successfully");
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

            <FormField
              control={form.control}
              name="cost_category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.cost_category_id
                        ? String(previousData.cost_category_id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Cost Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {costCategoriesLoading ? (
                        <Loading />
                      ) : (
                        costCategoriesList?.map((category: CostCategoryRow) => (
                          <SelectItem
                            key={category.id}
                            value={String(category.id)}
                          >
                            {category.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
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
