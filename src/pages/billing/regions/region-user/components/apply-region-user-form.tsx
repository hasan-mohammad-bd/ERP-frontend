"use client";
import { useEffect } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { Loading } from "@/components/common/loading";
import {
  RegionUserFormValues,
  RegionUserValidationSchema,
} from "@/lib/validators/billing/apply-region-user";
import { useGetRegionQuery } from "@/store/services/billing/api/regions";
import { DateTimePicker } from "@/components/ui/dayTimePicker";
import { ErrorResponse } from "@/types";
import { useCreateApplyRegionUserMutation } from "@/store/services/billing/api/region-user";
import { toast } from "sonner";

type AddDivisionProps = {
  modalClose: () => void;
  userId: number;
};

export function ApplyRegionUserForm({ modalClose, userId }: AddDivisionProps) {
  const form = useForm<RegionUserFormValues>({
    resolver: zodResolver(RegionUserValidationSchema),
    defaultValues: {
      user_id: userId,
      region_id: 0,
      area_id: 0,
      territory_id: 0,
      effective_date: new Date().toISOString().slice(0, 10),
    },
  });

  // Watch form values for filtering
  const selectedDivisionId = form.watch("region_id");
  const selectedAreaId = form.watch("area_id");

  // Fetch all regions data
  const { data: divisions } = useGetRegionQuery("type=division");
  const { data: areas } = useGetRegionQuery(
    `type=area&parent_id=${selectedDivisionId}`
  );
  const { data: territories } = useGetRegionQuery(
    `type=territory&parent_id=${selectedAreaId}`
  );

  const [createApplyRegionUser, { isLoading: createLoading }] =
    useCreateApplyRegionUserMutation();

  // Reset dependent fields when parent changes
  useEffect(() => {
    if (selectedDivisionId) {
      form.resetField("area_id");
      form.resetField("territory_id");
    }
  }, [selectedDivisionId, form]);

  useEffect(() => {
    if (selectedAreaId) {
      form.resetField("territory_id");
    }
  }, [selectedAreaId, form]);

  async function onSubmit(data: RegionUserFormValues) {
    try {
      const payload = {
        user_id: userId,
        region_id: data.territory_id,
        effective_date: data.effective_date,
      };
      await createApplyRegionUser(payload).unwrap();
      toast.success("Region user applied successfully");
      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.error(error);
    }
  }

  return (
    <>
      {createLoading ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="gap-4">
                {/* Division Select */}
                <FormSearchSelect
                  data={divisions?.data || []}
                  displayField="name"
                  valueField="id"
                  form={form}
                  name="region_id"
                  title="Select Division"
                />

                <div className="mt-2">
                  {/* Area Select */}
                  <FormSearchSelect
                    data={areas?.data || []}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="area_id"
                    title="Select Area"
                    disabled={!selectedDivisionId}
                  />
                </div>

                <div className="mt-2">
                  {/* Territory Select */}
                  <FormSearchSelect
                    data={territories?.data || []}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="territory_id"
                    title="Select Territory"
                    disabled={!selectedAreaId}
                  />
                </div>

                <div className="mt-4">
                  {/* Effective Date */}
                  <FormField
                    control={form.control}
                    name="effective_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="mb-1">
                          Effective Date <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DateTimePicker
                            {...field}
                            displayFormat={{ hour24: "yyyy/MM/dd" }}
                            value={new Date(field.value)}
                            onChange={(date) =>
                              field.onChange(date?.toISOString().slice(0, 10))
                            }
                            granularity="day"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse">
              <Button variant="default" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
