"use client";
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
import { Loading } from "@/components/common/loading";
// import {
//   RegionUserFormValues,
//   RegionUserValidationSchema,
// } from "@/lib/validators/billing/apply-region-user";

import { ErrorResponse } from "@/types";

import {
  TargetUserSchema,
  TargetUserValue,
} from "@/lib/validators/billing/user-target";
import { useCreateUserTargetMutation } from "@/store/services/billing/api/regeion-user-terget";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import DatePicker from "react-datepicker";
import { useState } from "react";

type AddDivisionProps = {
  modalClose: () => void;
  userData: any;
};

export function ApplyTargetForm({ modalClose, userData }: AddDivisionProps) {
  const [selectEstimateDate, setSelectEstimateDate] = useState<
    Date | undefined
  >(new Date());
  
  const form = useForm<TargetUserValue>({
    resolver: zodResolver(TargetUserSchema),
    defaultValues: {
      user_id: userData?.id,
      amount: userData?.user_target?.target_amount || 0,
      date:
        
        new Date().toISOString().slice(0, 10),
    },
  });

  console.log(userData);

  // Watch form values for filtering
  // const selectedDivisionId = form.watch("region_id");
  // const selectedAreaId = form.watch("area_id");

  // Fetch all regions data
  // const { data: divisions } = useGetRegionQuery("type=division");
  // const { data: areas } = useGetRegionQuery("type=area");
  // const { data: territories } = useGetRegionQuery("type=territory");

  // const filteredAreas = areas?.data?.filter(
  //   (area: any) => area.parent_id === selectedDivisionId
  // ) || [];

  // const filteredTerritories = territories?.data?.filter(
  //   (territory: any) => territory.parent_id === selectedAreaId
  // ) || [];

  const [createTargetUser, { isLoading: createLoading }] =
    useCreateUserTargetMutation();

  // Reset dependent fields when parent changes
  // useEffect(() => {
  //   if (selectedDivisionId) {
  //     form.resetField("area_id");
  //     form.resetField("territory_id");
  //   }
  // }, [selectedDivisionId, form]);

  // useEffect(() => {
  //   if (selectedAreaId) {
  //     form.resetField("territory_id");
  //   }
  // }, [selectedAreaId, form]);

  async function onSubmit(data: TargetUserValue) {
    try {
      
      await createTargetUser(data).unwrap();
      modalClose();
      toast.success("Target created successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.error(error);
    }
  }

  form.setValue("date", selectEstimateDate && selectEstimateDate.toISOString().slice(0, 10));

  return (
    <>
      {createLoading ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="gap-4">
                {/* Amount */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4">
                  {/* Effective Date */}
                  <DatePicker
                    selected={selectEstimateDate}
                    onChange={(date) => {
                      setSelectEstimateDate(date ?? new Date()); // Set to current date if cleared
                    }}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    placeholderText="Select date"
                    className="border rounded p-[6px] w-full bg-none bg_remove"
                  />
                  {/* <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="mb-1">
                          Date <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DateTimePicker
                            {...field}
                            displayFormat={{ hour24: "MM/yyyy" }}
                            value={
                              field.value ? new Date(field.value) : undefined
                            }
                            onChange={(date) =>
                              field.onChange(date?.toISOString().slice(0, 10))
                            }
                            granularity="day"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
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
