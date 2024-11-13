// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, FieldValue } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

import { Card, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

import {
  ApprovalGroupFormValues,
  // DetailsApprovalGroupRow,
  // approvalGroupSchema,
} from "@/lib/validators/web/approval-group";

import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
// import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
// import { UsersRow } from "@/lib/validators/web/users";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";

const AttributeCategoryData = [
  { id: 1, name: "Color" },
  { id: 2, name: "Size" },
  { id: 3, name: "Material" },
  { id: 4, name: "Brand" },
  { id: 5, name: "Style" },
  { id: 6, name: "Pattern" },
  { id: 7, name: "Fit" },
  { id: 8, name: "Season" },
  { id: 9, name: "Occasion" },
  { id: 10, name: "Feature" },
];

const attributesData = [
  { id: 1, name: "Red", category_id: 1 },
  { id: 2, name: "Blue", category_id: 1 },
  { id: 3, name: "Green", category_id: 1 },
  { id: 4, name: "Small", category_id: 2 },
  { id: 5, name: "Medium", category_id: 2 },
  { id: 6, name: "Large", category_id: 2 },
  { id: 7, name: "Cotton", category_id: 3 },
  { id: 8, name: "Polyester", category_id: 3 },
  { id: 9, name: "Leather", category_id: 3 },
  { id: 10, name: "Nike", category_id: 4 },
  { id: 11, name: "Adidas", category_id: 4 },
  { id: 12, name: "Puma", category_id: 4 },
  { id: 13, name: "Casual", category_id: 5 },
  { id: 14, name: "Formal", category_id: 5 },
  { id: 15, name: "Striped", category_id: 6 },
  { id: 16, name: "Checked", category_id: 6 },
  { id: 17, name: "Slim Fit", category_id: 7 },
  { id: 18, name: "Regular Fit", category_id: 7 },
  { id: 19, name: "Winter", category_id: 8 },
  { id: 20, name: "Summer", category_id: 8 },
];

export function PricingArea() {
  // const [createApprovalGroup, { isLoading }] = useCreateApprovalGroupMutation();
  // const [updateApprovalGroup, { isLoading: updateLoading }] = useUpdateApprovalGroupMutation();

  const [adminOptions, setAdminOptions] = useState<{ [key: number]: Option[] }>(
    {}
  );
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
  // const { data: employeeList } = useGetUsersQuery(
  //   `per_page=15&page=1&text=${employeeSearchTerm}`
  // );

  console.log(employeeSearchTerm)

  // const users = data?.data || [];
  // const { data: employeeList } = useGetEmployeesQuery(`per_page=15&page=1&search=${employeeSearchTerm}`);

  // const { id } = useParams();
  // const { data } = useGetApprovalGroupByIdQuery(`${id}`);

  const form = useForm<any>({
    // resolver: zodResolver(approvalGroupSchema),
    defaultValues: {},
  });

  /*   useEffect(() => {

    if (previousData) {
      form.reset({

        pricing: previousData.pricing?.map((item : { level: number; admin_ids: number[] }) => ({ 
          level: item.level, 
          admin_ids: item.admin_ids 
        })) || [],
      });
    } 
  }, [previousData, form]); */

  const {
    fields: pricing,
    append: appendPricing,
    remove: removePricing,
  } = useFieldArray({
    control: form.control,
    name: "pricing" as keyof FieldValue<ApprovalGroupFormValues>,
  });

  useEffect(() => {
    if (pricing.length === 0) {
      appendPricing("");
    }
  }, [pricing, appendPricing]);

  const handleSearchAdmin = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);
    const options =
      attributesData?.map((item: any) => ({
        value: String(item.id),
        label: `${item.name} (${item.id})`,
      })) || [];

    return options;
  };

  async function onSubmit(data: any) {
    console.log(data)
    /*     try {
      if (previousData) {

      } else {

      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    } */
  }

  return (
    <>
      <Card className="p-5">
        <CardTitle className="mb-5">Add Pricing</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                {pricing.map((field, index) => (
                  <div className="flex gap-x-2" key={field.id}>
                    <FormSearchSelect<any>
                      // loading={departmentLoading}
                      data={AttributeCategoryData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name={`pricing.${index}.attribute-category-id`}
                      placeholder="Select Attribute Category"
                      className="w-[330px]"
                      title="Attribute Category"
                    />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name={`pricing.${index}.attributes`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{index === 0 && "Attributes"}</FormLabel>
                            <FormControl>
                              <MultipleSelector
                                {...field}
                                value={adminOptions[index]}
                                onSearch={handleSearchAdmin}
                                onChange={(options) => {
                                  setAdminOptions((prev) => ({
                                    ...prev,
                                    [index]: options,
                                  }));
                                  field.onChange(
                                    options.map((option) =>
                                      parseInt(option.value)
                                    )
                                  );
                                }}
                                hidePlaceholderWhenSelected
                                placeholder="Search and select options"
                                loadingIndicator={<span>Loading...</span>}
                                emptyIndicator={<span>No options found</span>}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <span
                      className={`flex items-center justify-center ${
                        index === 0 ? "!mt-8" : "!mt-0"
                      }`}
                      onClick={() => removePricing(index)}
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </span>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => appendPricing("")}
                  variant="secondary"
                  className={`mt-2 space-x-2 border border-dashed border-gray-700 w-fit ${
                    pricing.length === 5 && "hidden"
                  }`}
                >
                  <Plus size={14} /> <span>Add Level</span>
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="default"
                type="submit"
                className="flex justify-end mt-4"
              >
                Generate
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  );
}
