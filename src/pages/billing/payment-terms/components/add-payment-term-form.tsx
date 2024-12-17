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
  useCreatePaymentTermMutation,
  useUpdatePaymentTermMutation,
} from "@/store/services/billing/api/payment-terms";
import {
  PaymentTermFormType,
  PaymentTermRow,
  paymentTermSchema,
} from "@/lib/validators/billing/payment-terms";

interface AddUnitProps {
  modalClose: () => void;
  data?: PaymentTermRow;
}

export function AddPaymentTermForm({
  modalClose,
  data: previousData,
}: AddUnitProps) {
  const [createPaymentTerm, { isLoading }] = useCreatePaymentTermMutation();
  const [updatePaymentTerm, { isLoading: updateLoading }] =
    useUpdatePaymentTermMutation();

  const form = useForm<PaymentTermFormType>({
    resolver: zodResolver(paymentTermSchema),
    defaultValues: {
      name: previousData?.name || "",
      value: Number(previousData?.value) || undefined,
      is_default: previousData?.is_default ? 1 : 0,
    },
  });

  async function onSubmit(data: PaymentTermFormType) {
    try {
      if (previousData) {
        await updatePaymentTerm({
          paymentTermId: previousData.id,
          updatedPaymentTerm: data,
        }).unwrap();
        toast.success("Payment Term updated successfully");
        modalClose();
      } else {
        await createPaymentTerm(data).unwrap();
        toast.success("Payment Term created successfully");
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Value"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            parseFloat(e.target.value) || undefined
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Status */}
              <FormField
                control={form.control}
                name="is_default"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is Default</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Is Default" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"1"}>Yes</SelectItem>
                        <SelectItem value={"0"}>No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-right">
              <Button
                onClick={() => modalClose()}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
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
