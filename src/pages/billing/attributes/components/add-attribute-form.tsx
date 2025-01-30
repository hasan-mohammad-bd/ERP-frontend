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
import {
  useCreateAttributeMutation,
  useUpdateAttributeMutation,
} from "@/store/services/billing/api/attributes";
import {
  AttributeFormValues,
  AttributeRow,
  attributeSchema,
} from "@/lib/validators/billing/attributes";
import { useGetAttributeCategoriesQuery } from "@/store/services/billing/api/attribute-category";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { AttributeCategoryRow } from "@/lib/validators/billing/attribute-category";

interface AddAttributeProps {
  modalClose: () => void;
  data?: AttributeRow;
}

export function AddAttributeForm({
  modalClose,
  data: previousData,
}: AddAttributeProps) {
  const [createAttribute, { isLoading }] = useCreateAttributeMutation();
  const [updateAttribute, { isLoading: updateLoading }] =
    useUpdateAttributeMutation();

  const { data: attributeCategories, isLoading: attributeCategoriesLoading } =
    useGetAttributeCategoriesQuery(`per_page=1000&page=1`);

  const attributeCategoriesData = attributeCategories?.data || [];

  const form = useForm<AttributeFormValues>({
    resolver: zodResolver(attributeSchema),
    defaultValues: {
      name: previousData?.name || "",
      status: previousData?.status === 0 ? 0 : 1,
      description: previousData?.description || "",
      attribute_category_id: previousData?.attribute_category?.id.toString() || "",
    },
  });

  async function onSubmit(data: AttributeFormValues) {
    try {
      if (previousData) {
        await updateAttribute({
          attributeId: previousData.id,
          updatedAttribute: data,
        }).unwrap();
        toast.success("Attribute updated successfully");
        modalClose();
      } else {
        await createAttribute(data).unwrap();
        toast.success("Attribute created successfully");
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
                    <FormLabel>Attribute Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Attribute Name"
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
              <FormSearchSelect<AttributeCategoryRow>
                loading={attributeCategoriesLoading}
                data={attributeCategoriesData}
                displayField="name"
                valueField="id"
                form={form}
                name="attribute_category_id"
                placeholder="Select Attribute Category"
                className="w-[330px]"
                title="Attribute Category"
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
