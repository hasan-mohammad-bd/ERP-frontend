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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  CheckBookFormValues,
  CheckBookRow,
  checkBookSchema,
} from "@/lib/validators/accounts/check-books";
import {
  useCreateCheckBookMutation,
  useUpdateCheckBookMutation,
} from "@/store/services/accounts/api/check-books";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { LedgerRow } from "@/lib/validators/accounts";
// import { Switch } from "@/components/ui/switch";

interface AddCheckBookFormProps {
  modalClose: () => void;
  rowData?: CheckBookRow;
}


export function AddCheckBookForm({
  modalClose,
  rowData: previousData,
}: AddCheckBookFormProps) {
  const [createCheckBook, { isLoading }] = useCreateCheckBookMutation();
  const [updateCheckBook, { isLoading: updateLoading }] =
    useUpdateCheckBookMutation();
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const ledgerAccountData = ledgerAccount?.data || [];

  const form = useForm<CheckBookFormValues>({
    resolver: zodResolver(checkBookSchema),
    defaultValues: {
      book_number: previousData?.book_number || "",
      prefix: previousData?.prefix || "",
      number_start: previousData?.number_start || 0,
      number_end: previousData?.number_end || 0,
      issue_date: previousData?.issue_date || "",
      ledger_account_id: previousData?.ledger_account.id || 0,
    },
  });

  async function onSubmit(data: CheckBookFormValues) {
    try {
      if (previousData) {
        await updateCheckBook({
          checkBookId: previousData.id,
          updatedCheckBook: data,
        });
        toast.success("Check Book updated successfully");
        modalClose();
      } else {
        await createCheckBook(data);
        toast.success("Check Book created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
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
              name="ledger_account_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Ledger Account <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.ledger_account.id
                        ? String(previousData?.ledger_account.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Cost Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ledgerAccountLoading ? (
                        <Loading />
                      ) : (
                        ledgerAccountData
                          ?.filter(
                            (ledger: LedgerRow) =>
                              ledger.nature === "Bank Accounts"
                          )
                          .map((ledger: LedgerRow) => (
                            <SelectItem
                              key={ledger.id}
                              value={String(ledger.id)}
                            >
                              {ledger.name}
                            </SelectItem>
                          ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="book_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Book Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prefix"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Prefix Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter prefix number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number_start"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Number Start <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Start Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number_end"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Number End <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter End Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="issue_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Issue Date <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter Issue Date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
