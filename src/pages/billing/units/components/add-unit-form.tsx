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
  UnitFormValues,
  UnitRow,
  unitSchema,
} from "@/lib/validators/billing/unit";
import {
  useCreateUnitMutation,
  useUpdateUnitMutation,
} from "@/store/services/billing/api/unit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddUnitProps {
  modalClose: () => void;
  data?: UnitRow;
}

export function AddUnitForm({ modalClose, data: previousData }: AddUnitProps) {
  const [createUnit, { isLoading }] = useCreateUnitMutation();
  const [updateUnit, { isLoading: updateLoading }] = useUpdateUnitMutation();
  const form = useForm<UnitFormValues>({
    resolver: zodResolver(unitSchema),
    defaultValues: {
      name: previousData?.name || "",
      code: previousData?.code || "",
      status: previousData?.status === 0 ? 0 : 1,
    },
  });

  async function onSubmit(data: UnitFormValues) {
    try {
      if (previousData) {
        await updateUnit({
          unitId: previousData.id,
          updatedUnit: data,
        }).unwrap();
        toast.success("Unit updated successfully");
        modalClose();
      } else {
        await createUnit(data).unwrap();
        toast.success("Unit created successfully");
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
                    <FormLabel>Unit Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Unit Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Code</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Short Code"
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
