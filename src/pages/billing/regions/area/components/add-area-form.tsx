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
// import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";


import { useEffect } from "react";

import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { toast } from "sonner";
import { serialize } from "object-to-formdata";
import { Loading } from "@/components/common/loading";
import { AreaFormValues, areaSchema, DivisionFormValues } from "@/lib/validators/billing/regions";
import { useCreateRegionMutation, useGetRegionQuery, useUpdateRegionMutation } from "@/store/services/billing/api/regions";

type AddRegionProps = {
  modalClose: () => void;
  data?: DivisionFormValues;
};

export function AddAreaForm({
  modalClose,
  data: previousData,
}: AddRegionProps) {
  // Correct API call to get category data
  const { data, isLoading: isRegionLoading } =
    useGetRegionQuery(`type=division`);

  const regions = data?.data || []; // Fallback to empty array if no data

  const [createArea, { isLoading: createLoading }] =
    useCreateRegionMutation();

  const [updateArea, { isLoading: updateLoading }] =
    useUpdateRegionMutation();

  const form = useForm<AreaFormValues>({
    resolver: zodResolver(areaSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData.name || "",
       
        parent_id: previousData.parent_id
          ? String(previousData.parent_id)
          : undefined,
      });
    }
  }, [previousData, form]);

  async function onSubmit(data: DivisionFormValues) {
    try {
      
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
        
        },
        { indices: true }
      );

      if (previousData && previousData.id !== undefined) {
        // Use formData here for updating category
        await updateArea({
          regionId: previousData.id,
          updatedRegion: formData,
        }).unwrap();
        toast.success("Area updated successfully");
      } else {
        // Use formData here for creating a new Area
        await createArea(formData).unwrap();
        toast.success("Area created successfully");
      }

      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {createLoading || updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div>
                <FormSearchSelect<DivisionFormValues>
                  loading={isRegionLoading}
                  data={regions}
                  displayField="name"
                  valueField="id"
                  form={form}
                  name={`parent_id`}
                  title={"Select Division"}
                  className="w-[430px]"
                />
              </div>

              <div className="grid grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Area Name</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Enter Area Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                
              </div>

              {/* Description */}
        

              {/* File Upload */}
        
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
