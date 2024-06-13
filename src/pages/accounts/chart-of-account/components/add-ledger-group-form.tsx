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
import {
  LedgerGroupColumn,
  LedgerGroupFromValues,
  LedgerGroupSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { useCreateLedgerGroupMutation } from "@/store/services/accounts/api/chart-of-account";

interface AddLedgerGroupFormProps {
  modalClose: () => void;
  data?: LedgerGroupColumn;
}

export function AddLedgerGroupForm({
  modalClose,
  data: previousData,
}: AddLedgerGroupFormProps) {
  const [createLedgerGroup, { isLoading }] = useCreateLedgerGroupMutation();
  /*   const [updateLedgerGroup, { isLoading: updateLoading }] =
    useUpdateLedgerGroupMutation(); */

  const form = useForm<LedgerGroupFromValues>({
    resolver: zodResolver(LedgerGroupSchema),
    defaultValues: {
      // name: previousData?.name || "",
      parent_id: previousData?.id || 0,
      // code: previousData?.code || "",

      // is_active: previousData?.is_active || 1,
    },
  });

  async function onSubmit(data: LedgerGroupFromValues) {
    try {
      /*       if (previousData) {
        await updateLedgerGroup({
          ledgerGroupId: previousData.id,
          updatedLedgerGroup: data,
        });
        toast.success("Financial year updated successfully");
        modalClose();
      } else { */
      await createLedgerGroup(data);
      toast.success("Add ledger group successfully");
      modalClose();
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <div>
              <span className="font-semibold">Parent:</span>{" "}
              {previousData?.name}
            </div>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter code"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter financial year name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                Add Group
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
