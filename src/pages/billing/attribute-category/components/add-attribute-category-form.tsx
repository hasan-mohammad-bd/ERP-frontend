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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AttributeCategoryFormValues, AttributeCategoryRow, attributeCategorySchema } from "@/lib/validators/billing/attribute-category";
import { useCreateAttributeCategoryMutation, useUpdateAttributeCategoryMutation } from "@/store/services/billing/api/attribute-category";

interface AddAttributeCategoryProps {
  modalClose: () => void;
  data?: AttributeCategoryRow;
}

export function AddAttributeCategoryForm({ modalClose, data: previousData }: AddAttributeCategoryProps) {
  const [createAttributeCategory, { isLoading }] = useCreateAttributeCategoryMutation();
  const [updateAttributeCategory, { isLoading: updateLoading }] = useUpdateAttributeCategoryMutation();
  const form = useForm<AttributeCategoryFormValues>({
    resolver: zodResolver(attributeCategorySchema),
    defaultValues: {
      name: previousData?.name || "",
      status: previousData?.status === 0 ? 0 : 1,
    },
  });

  async function onSubmit(data: AttributeCategoryFormValues) {
    try {
      if (previousData) {
        await updateAttributeCategory({
          attributeCategoryId: previousData.id,
          updatedAttributeCategory: data,
        }).unwrap();
        toast.success("Attribute Category updated successfully");
        modalClose();
      } else {
        await createAttributeCategory(data).unwrap();
        toast.success("Attribute Category created successfully");
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
                    <FormLabel>Attribute Category Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Attribute Category Name"
                        {...field}
                      />
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
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"1"}>Active</SelectItem>
                        <SelectItem value={"0"}>Inactive</SelectItem>
                      </SelectContent>
                    </Select>
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
