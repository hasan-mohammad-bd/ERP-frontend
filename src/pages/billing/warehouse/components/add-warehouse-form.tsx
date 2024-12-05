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
  WarehouseFormValues,
  WarehouseRow,
  warehouseSchema,
} from "@/lib/validators/billing/warehouse";
import {
  useCreateWarehouseMutation,
  useUpdateWarehouseMutation,
} from "@/store/services/billing/api/warehouse";

interface AddWarehouseProps {
  modalClose: () => void;
  data?: WarehouseRow;
}

export function AddWareHouseForm({
  modalClose,
  data: previousData,
}: AddWarehouseProps) {
  const [createWarehouse, { isLoading }] = useCreateWarehouseMutation();
  const [updateWarehouse, { isLoading: updateLoading }] =
    useUpdateWarehouseMutation();
  const form = useForm<WarehouseFormValues>({
    resolver: zodResolver(warehouseSchema),
    defaultValues: {
      name: previousData?.name || "",
      status: previousData?.status === 0 ? 0 : 1,
    },
  });

  async function onSubmit(data: WarehouseFormValues) {
    try {
      if (previousData) {
        await updateWarehouse({
          warehouseId: previousData.id,
          updatedWarehouse: data,
        }).unwrap();
        toast.success("Warehouse updated successfully");
        modalClose();
      } else {
        await createWarehouse(data).unwrap();
        toast.success("Warehouse created successfully");
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
                    <FormLabel>Warehouse Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Warehouse Name"
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
