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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import SearchPaymentReceived, { InvoicesRow } from "./search-payment-received";
import FileUpload from "@/components/common/file-uploader";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { LedgerRow } from "@/lib/validators/accounts";
import { useCreatePaymentReceivedMutation } from "@/store/services/billing/api/payment-received";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { serialize } from "object-to-formdata";
import {
  BillingPaymentFormType,
  billingPaymentSchema,
} from "@/lib/validators/billing/billing-payment";

interface AddPaymentReceivedProps {
  modalClose: () => void;
}

export function AddPaymentReceivedFrom({
  modalClose,
}: AddPaymentReceivedProps) {
  const [selectedProducts, setSelectedProducts] = useState<InvoicesRow[]>([]);
  const [contactId, setContactId] = useState<number | null>(null);
  const [receivedAmount, setReceivedAmount] = useState<number>(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [createPaymentReceive, { isLoading }] =
    useCreatePaymentReceivedMutation();

  const form = useForm<BillingPaymentFormType>({
    resolver: zodResolver(billingPaymentSchema),
    defaultValues: {
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });

  const { data: ledgerAccountData, isLoading: isAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const ledgerAccounts = ledgerAccountData?.data || [];

  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
    due_date: false,
  });

  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  async function onSubmit(data: BillingPaymentFormType) {
    if (selectedProducts.length === 0) {
      return toast.error("Please select at least one customer");
    }

    const formData = serialize(
      {
        ...data,
        contact_id: contactId,
        amount: Number(receivedAmount),
        details: selectedProducts.map((product) => ({
          amount: product.amount,
          invoice_id: product.id,
        })),
        files: uploadedFiles,
        _method: "POST",
      },
      { indices: true }
    );

    try {
      await createPaymentReceive(formData).unwrap();
      toast.success("Payment receive created successfully");
      modalClose();
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <Card className="mb-4">
              <SearchPaymentReceived
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
                previousData={false}
                setContactId={setContactId}
                receivedAmount={receivedAmount}
                setReceivedAmount={setReceivedAmount}
              />
            </Card>

            <div className="grid grid-cols-2 gap-4 ">
              <FormField
                control={form.control}
                name={`date`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <Popover
                      open={openDatePickers.date}
                      onOpenChange={() => handleDatePickerToggle("date")}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          {field.value
                            ? format(field.value, "PP")
                            : "Pick a date"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 z-[200]"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(
                              date ? format(date, "yyyy-MM-dd") : ""
                            );
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormSearchSelect
                loading={isAccountLoading}
                data={ledgerAccounts.filter(
                  (ledgerAccount: LedgerRow) =>
                    ledgerAccount.nature === "Cash" ||
                    ledgerAccount.nature === "Bank Accounts"
                )}
                displayField="name"
                valueField="id"
                form={form}
                name="ledger_account_id"
                placeholder="Select Ledger Account"
                title="Ledger Account"
                className="w-full"
              />

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note</FormLabel>
                    <FormControl>
                      <Input placeholder="Type Subject." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormLabel>Upload Files</FormLabel>
                <FileUpload
                  setFilesToUpload={setUploadedFiles}
                  filesToUpload={uploadedFiles}
                />
              </div>
            </div>

            <div className="text-right">
              <Button
                type="button"
                onClick={() => modalClose()}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
              <Button variant="default" type="submit" className="w-fit mt-4">
                Add
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
