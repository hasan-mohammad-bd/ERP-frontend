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
import { Textarea } from "@/components/ui/textarea";
import {
  TaxFormValues,
  TaxRow,
  TaxSchema,
} from "@/lib/validators/accounts/tax";
import {
  useCreateTaxesMutation,
  useUpdateTaxesMutation,
} from "@/store/services/accounts/api/tax";

interface AddTaxesProps {
  modalClose: () => void;
  data?: TaxRow;
}

export function AddTaxForm({ modalClose, data: previousData }: AddTaxesProps) {
  const [createUnit, { isLoading }] = useCreateTaxesMutation();
  const [updateUnit, { isLoading: updateLoading }] = useUpdateTaxesMutation();
  const form = useForm<TaxFormValues>({
    resolver: zodResolver(TaxSchema),
    defaultValues: {
      name: previousData?.name || "",
      amount: previousData?.amount || "0",
      description: previousData?.description || "",
      status: previousData?.status === 0 ? 0 : 1,
    },
  });

  async function onSubmit(data: TaxFormValues) {
    try {
      if (previousData) {
        await updateUnit({
          taxId: previousData.id,
          updatedTax: {
            ...data,
            amount: Number(data.amount),
          },
        }).unwrap();
        toast.success("Unit updated successfully");
        modalClose();
      } else {
        await createUnit({
          ...data,
          amount: Number(data.amount),
        }).unwrap();
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
                    <FormLabel>Tax Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Tax Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="amount"
                        {...field}
                        value={Number(field.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
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
