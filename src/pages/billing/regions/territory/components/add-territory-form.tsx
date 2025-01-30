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
// import SearchSelect from "@/components/common/search-select";
import { AreaFormValues, areaSchema, DivisionFormValues, DivisionRow } from "@/lib/validators/billing/regions";
import { useCreateRegionMutation, useGetRegionQuery, useUpdateRegionMutation } from "@/store/services/billing/api/regions";

type AddDivisionProps = {
  modalClose: () => void;
  data?: DivisionRow;
};

export function AddTerritoryForm({
  modalClose,
  data: previousData,
}: AddDivisionProps) {
  // Correct API call to get category data

  // const [selectedRegion, setSelectedRegion] =
  //   useState<DivisionFormValues>();

  const [createTerritory, { isLoading: createLoading }] =
    useCreateRegionMutation();
  const [updateTerritory, { isLoading: updateLoading }] =
    useUpdateRegionMutation();

  const { data: regionData ,isLoading: isDivisionDataLoading } = useGetRegionQuery(`type=division`);

  const { data: AreaData, isLoading: isAreaDataLoading } =
  useGetRegionQuery(`type=area`);

  const regions = regionData?.data || [];
  const areaData = AreaData?.data || [];

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
     
      //Create formData to send to the API
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
        
        },
        { indices: true }
      );

      if (previousData && previousData.id !== undefined) {
        // Use formData here for updating category
        await updateTerritory({
          regionId: previousData.id,
          updatedRegion: formData,
        }).unwrap();
        toast.success("Territory updated successfully");
      } else {
        // Use formData here for creating a new category
        await createTerritory(formData).unwrap();
        toast.success("Territory created successfully");
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                
                  <FormSearchSelect<DivisionFormValues>
                    // items={regions || []}
                    // labelKey="name"
                    // valueKey="id"
                    // value={selectedRegion}
                    // placeholder="Select Division"
                    // onSelect={setSelectedRegion}
                    // className="w-[300px]"
                    // size={"default"}

                    loading={isDivisionDataLoading}
                    data={regions}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`parent_id`}
                    title={"Select Division"}
                    className="w-[300px]"
                  />
                </div>
                <div>
                  <FormSearchSelect<DivisionFormValues>
                    loading={isAreaDataLoading}
                    data={areaData}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`parent_id`}
                    title={"Select Area"}
                    className="w-[300px]"
                    disabled={
                      areaData.length === 0 &&
                      !form.getValues("parent_id")?.toString()
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Territory Name</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Enter Territory Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              
              </div>

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
