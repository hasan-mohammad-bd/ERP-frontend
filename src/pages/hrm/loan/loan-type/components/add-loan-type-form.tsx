import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";

import { Loading } from "@/components/common/loading";

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import {
  useCreateLoanTypeMutation,
  useUpdateLoanTypeMutation,
} from "@/store/services/hrm/api/laon-type";
import {
  LoanTypeColumn,
  LoanTypeFormSchema,
  LoanTypeFromValues,
} from "@/lib/validators/hrm/loan-type";

interface AddSectionFormProps {
  modalClose: () => void;
  data?: LoanTypeColumn;
}

export function AddLoanTypeForm({
  modalClose,
  data: previousData,
}: AddSectionFormProps) {
  const [createLoanType, { isLoading }] = useCreateLoanTypeMutation();
  const [updateLoanType, { isLoading: updateLoading }] =
    useUpdateLoanTypeMutation();

  const form = useForm<LoanTypeFromValues>({
    resolver: zodResolver(LoanTypeFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      description: previousData?.description || "",
    },
  });

  async function onSubmit(data: LoanTypeFromValues) {
    try {
      if (previousData) {
        await updateLoanType({
          loanTypeId: previousData.id,
          updatedLoanType: data,
        }).unwrap();
        toast.success("Loan Type updated successfully");
        modalClose();
      } else {
        await createLoanType(data).unwrap();
        toast.success("Loan Type created successfully");
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
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter loan type name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
