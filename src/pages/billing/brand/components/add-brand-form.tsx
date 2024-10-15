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
import { useCreateUnitMutation, useUpdateUnitMutation } from "@/store/services/billing/api/unit";
import { BrandFormValues, BrandRow, brandSchema } from "@/lib/validators/billing/brand";



interface AddUnitProps {
  modalClose: () => void;
  data?: BrandRow;
}

export function AddBrandForm({
  modalClose,
  data: previousData,
}: AddUnitProps) {
   const [createUnit, { isLoading }] = useCreateUnitMutation();
   const [updateUnit, { isLoading: updateLoading }] =
    useUpdateUnitMutation();
  const form = useForm<BrandFormValues>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      name: previousData?.name || "",
      short_code: previousData?.short_code || "",

    },
  });

   async function onSubmit(data: BrandFormValues) {
    try {
      if (previousData) {
        await updateUnit({
            unitId: previousData.id,
            updatedUnit: data,
        }).unwrap();
        toast.success("Policy updated successfully");
        modalClose();
      } else {
        await createUnit(data).unwrap();
        toast.success("Policy created successfully");
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
                    <FormLabel>Add Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Brand Name"
                        {...field}
                      />
                    </FormControl>
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
