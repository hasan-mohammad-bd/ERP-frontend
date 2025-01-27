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

import { useEffect } from "react";

import { serialize } from "object-to-formdata";
import {
  useCreateRegionMutation,
  useUpdateRegionMutation,
} from "@/store/services/billing/api/regions";
import {
  DivisionFormValues,
  divisionSchema,
} from "@/lib/validators/billing/regions";

interface AddDivisionProps {
  modalClose: () => void;
  data?: any; // If you want to pass an existing category to edit
}

export function AddDivisionForm({
  modalClose,
  data: previousData,
}: AddDivisionProps) {
  const [createDivision, { isLoading }] = useCreateRegionMutation();
  const [updateDivision, { isLoading: updateLoading }] =
    useUpdateRegionMutation();

  const form = useForm<DivisionFormValues>({
    resolver: zodResolver(divisionSchema),
    defaultValues: {
      name: "",
    },
  });

  // Set default values when previousData changes
  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData.data.name || "",
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

      if (previousData && previousData.data.id !== undefined) {
        // Use formData here for updating division
        await updateDivision({
          regionId: previousData.data.id,
          updatedRegion: formData,
        }).unwrap();
        toast.success("Division updated successfully");
      } else {
        // Use formData here for creating a new division
        await createDivision(formData).unwrap();
        toast.success("Division created successfully");
      }

      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="grid grid-cols-3 gap-5">
                {/* Division Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Division Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Division Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
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
