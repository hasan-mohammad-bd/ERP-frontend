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

import FormSearchSelect from "@/components/ui/form-items/form-search-select";
// import PriceAndStockTable from "./price-and-stock-table";
import { useGetAttributeCategoriesQuery } from "@/store/services/billing/api/attribute-category";
import { AttributeCategoryRow } from "@/lib/validators/billing/attribute-category";
import { useGetAttributesQuery } from "@/store/services/billing/api/attributes";
import { useGenerateDemoBarcodeMutation } from "@/store/services/billing/api/barcoad-generate-demo";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { toast } from "sonner";



export function PricingArea({setAttributeCategoriesData, setResponseData, previousData}: any) {
  const [generateDemoBarcode] = useGenerateDemoBarcodeMutation();
  // const [updateApprovalGroup, { isLoading: updateLoading }] = useUpdateApprovalGroupMutation();

  const [adminOptions, setAdminOptions] = useState<{ [key: number]: Option[] }>(
    {}
  );
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
 
 
  const { data: attributeCategories, isLoading: AttributeCategoryLoading } = useGetAttributeCategoriesQuery(
    `per_page=1000&page=1`
  );

  const { data: attributes } = useGetAttributesQuery(
    `per_page=1000&page=1`
  );

  const attributesCategoryData = attributeCategories?.data || [];

  const attributesData = attributes?.data || [];


  console.log(employeeSearchTerm)

  // const users = data?.data || [];
  // const { data: employeeList } = useGetEmployeesQuery(`per_page=15&page=1&search=${employeeSearchTerm}`);

  // const { id } = useParams();
  // const { data } = useGetApprovalGroupByIdQuery(`${id}`);

  const form = useForm<any>({
    // resolver: zodResolver(approvalGroupSchema),
    defaultValues: {},
  });

  console.log(previousData?.attribute_categories)

  useEffect(() => {
    if (previousData) {
      form.reset({
        attribute_categories: previousData.attribute_categories.map((item: any) => {
          return {
            attribute_category_id: item.id.toString(),
            attribute_ids: item.attribute_ids.map((id: any) => id),
          }
        }),

      });
    }
  }, [previousData, form]);

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
    fields: attribute_categories,
    append: appendAttributeCategory,
    remove: removeAttributeCategory,
  } = useFieldArray({
    control: form.control,
    name: "attribute_categories" as keyof FieldValue<ApprovalGroupFormValues>,
  });

  useEffect(() => {
    if (attribute_categories.length === 0) {
      appendAttributeCategory("");
    }
  }, [attribute_categories, appendAttributeCategory]);


  async function onSubmit(data: any) {
    setAttributeCategoriesData(data.attribute_categories)
    console.log(data)
        try {
      const response = await generateDemoBarcode(data).unwrap();
      toast.success("Barcode generated successfully");
      setResponseData(response.data);

      
      console.log(response);
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }
  

  const catchCategory = form.watch(`attribute_categories.${attribute_categories.length - 1}.attribute_category_id`);


  console.log(catchCategory)

  const filteredAttributes = attributesData.filter(
    (item) => Number(catchCategory) === Number(item.attribute_category.id)
  );

  


 
  const handleSearchAdmin = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);
    const options =
    filteredAttributes?.map((item: any) => ({
        value: String(item.id),
        label: `${item.name} (${item.id})`,
      })) || [];

    return options;
  };

  return (
    <>
      <Card className="p-5">
        <CardTitle className="mb-5">Add Pricing</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                {attribute_categories.map((field, index) => (
                  <div className="flex gap-x-2" key={field.id}>
                    
                    <FormSearchSelect<AttributeCategoryRow>
                      loading={AttributeCategoryLoading}
                      data={attributesCategoryData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name={`attribute_categories.${index}.attribute_category_id`}
                      placeholder="Select Attribute Category"
                      className="w-[330px]"
                      title={index === 0 ? "Attributes Category" : ""}
                      

                    />
                  
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name={`attribute_categories.${index}.attribute_ids`}
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
                      onClick={() => removeAttributeCategory(index)}
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </span>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => appendAttributeCategory("")}
                  variant="secondary"
                  className={`mt-2 space-x-2 border border-dashed border-gray-700 w-fit `}
                >
                  <Plus size={14} /> <span>Add Level</span>
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                // variant="default"
                type="submit"
                className="flex justify-end mt-4"
              >
                Generate
              </Button>
            </div>
          </form>
        </Form>
      </Card>
      <div className="mt-5">
      
      </div>
      
    </>
  );
}
