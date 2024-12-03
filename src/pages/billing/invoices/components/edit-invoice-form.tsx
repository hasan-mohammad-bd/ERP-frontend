import { Heading } from "@/components/common/heading";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import SearchProduct, { ExtendedItemRow } from "./search-product";
import Calculation from "./calculation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { CustomerColumn } from "@/lib/validators/billing/customer";

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { UsersRow } from "@/lib/validators/web/users";
import { Loading } from "@/components/common/loading";
import {
  InvoiceFieldsType,
  invoiceSchema,
} from "@/lib/validators/billing/invoices";
import {
  useGetSalesInvoicesByIdQuery,
  useUpdateSalesInvoicesMutation,
} from "@/store/services/billing/api/invoices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetPaymentTermsQuery } from "@/store/services/billing/api/payment-terms";
import { useGetSalesOrdersQuery } from "@/store/services/billing/api/sales-order";

export default function EditInvoiceForm() {
  const params = useParams();
  const invoiceId = Number(params.id);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<ExtendedItemRow[]>(
    []
  );

  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
    due_date: false,
  });

  const handleDatePickerToggle = (type: "date" | "due_date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const { data: customerData, isLoading: isCustomerLoading } =
    useGetCustomersQuery("page=1&per_page=1000");

  const { data: EmployeeData, isLoading: employeeLoading } =
    useGetUsersQuery(`per_page=1000&page=1`);

  const { data: invoiceData, isLoading: invoiceLoading } =
    useGetSalesInvoicesByIdQuery(invoiceId, { skip: !invoiceId });

  const { data: payemtTermsData, isLoading: isPaymentTermLoading } =
    useGetPaymentTermsQuery(`page=1&per_page=1000`);

  const { data: salesOrderData, isLoading: isSalesOrderLoading } =
    useGetSalesOrdersQuery(`page=1&per_page=1000`);

  console.log("invoiceData", invoiceData);

  const customers = customerData?.data || [];
  const employees = EmployeeData?.data || [];

  const payemtTerms = payemtTermsData?.data || [];
  const salesOrder = salesOrderData?.data || [];

  const [updateInvoice, { isLoading: isUpdating }] =
    useUpdateSalesInvoicesMutation();

  // console.log(uploadedFiles);
  const form = useForm<InvoiceFieldsType>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      total: 0,
    },
  });
  console.log("checking", invoiceData?.data.sales_order_id);

  useEffect(() => {
    if (invoiceData) {
      form.reset({
        ...invoiceData.data,
        note: invoiceData.data.note || "",
        subject: invoiceData.data.subject || "",
        terms_conditions: invoiceData.data.terms_conditions || "",
        contact_id: String(invoiceData.data.contact.id),
        sales_person_id: String(invoiceData.data.sales_person.id),
        discount: Number(invoiceData.data.discount),
        total: Number(invoiceData.data.total),
        shipping_charges: Number(invoiceData.data.shipping_charges),
        sales_order_id: String(invoiceData.data.sales_order.id),
        payment_term_id: String(invoiceData.data.payment_term.id),
      });

      setSelectedProducts(
        invoiceData.data.details.map((detail) => ({
          barcode: String(detail.item_barcode.barcode),
          id: detail.item_barcode.id,
          barcode_attribute: detail.item_barcode.barcode_attribute,
          name: detail.item.name,
          secondary_unit: {
            wholesale_price: Number(detail.item_barcode.wholesale_price),
            after_discount: Number(detail.item_barcode.after_discount),
            discount: Number(detail.discount),
            discount_amount: Number(detail.item_barcode.discount_amount),
            id: detail.unit.id,
            name: detail.item.name,
            selling_price: Number(detail.item_barcode.selling_price),
          },
          finalPrice: Number(detail.total),
          quantity: Number(detail.qty),
          subTotal: Number(detail.item_barcode.after_discount),
          total: Number(detail.total),

          primary_unit: {
            wholesale_price: Number(detail.item_barcode.wholesale_price),
            after_discount: Number(detail.item_barcode.after_discount),
            discount: Number(detail.discount),
            discount_amount: Number(detail.item_barcode.discount_amount),
            id: detail.unit.id,
            name: detail.item.name,
            selling_price: Number(detail.item_barcode.selling_price),
          },
          unit: {
            wholesale_price: Number(detail.item_barcode.wholesale_price),
            after_discount: Number(detail.item_barcode.after_discount),
            discount: Number(detail.discount),
            discount_amount: Number(detail.item_barcode.discount_amount),
            id: detail.unit.id,
            name: detail.item.name,
            selling_price: Number(detail.item_barcode.selling_price),
          },
        }))
      );
    }
  }, [form, invoiceData]);

  async function onSubmit(data: InvoiceFieldsType) {
    try {
      await updateInvoice({
        itemId: invoiceId,
        updatedItem: {
          ...data,
          details: selectedProducts.map((product) => {
            const discountedPrice =
              product.unit.selling_price * (1 - product.unit.discount / 100); // Price after discount

            return {
              unit_id: product.unit.id,
              item_id: product.id,
              item_barcode_id: Number(product.id),
              price: product.unit.selling_price,
              after_discount: discountedPrice, // Update to reflect price after discount
              total: discountedPrice * product.quantity, // Update total to use discounted price
              qty: product.quantity,
              discount: product.unit.discount,
              note: "",
            };
          }),
        },
      }).unwrap();
      toast.success("Invoices updated successfully");
      navigate("/billing/invoices");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  if (invoiceLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Edit Invoice"}
            description="Manage your sub accounts for you business"
          />
          <Button onClick={() => navigate("/billing/invoices")} size={"sm"}>
            Invoice List
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 mb-4  overflow-y-scroll no-scrollbar"
          >
            <div className="">
              <Card className="p-3">
                <div className="grid grid-cols-3 gap-4">
                  <FormSearchSelect<CustomerColumn>
                    loading={isCustomerLoading}
                    data={customers}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="contact_id"
                    placeholder="Select Customer"
                    title="Customer Name"
                    className="w-full"
                  />

                  <FormSearchSelect
                    loading={isSalesOrderLoading}
                    data={salesOrder}
                    displayField="invoice_number"
                    valueField="id"
                    form={form}
                    name="sales_order_id"
                    placeholder="Select Sales Order"
                    title="Sales Order"
                    className="w-full"
                  />

                  <FormSearchSelect
                    loading={isPaymentTermLoading}
                    data={payemtTerms}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="payment_term_id"
                    placeholder="Select Payment Term"
                    title="Payment Term"
                    className="w-full"
                  />

                  <FormField
                    control={form.control}
                    name="reference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter reference" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="order_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter order number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  <FormField
                    control={form.control}
                    name={`due_date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Due Date</FormLabel>
                        <Popover
                          open={openDatePickers.due_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("due_date")
                          }
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
                                : "Pick due date"}
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

                  <FormSearchSelect<UsersRow>
                    loading={employeeLoading}
                    data={employees}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="sales_person_id"
                    placeholder="Select Sells person"
                    title="Sales Person"
                    className="w-full"
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Type Subject." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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

                  <FormField
                    control={form.control}
                    name="terms_conditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Terms and conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type terms and conditions."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            </div>
            {/* product Search */}
            <Card className="mb-4">
              <SearchProduct
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
                previousData={true}
              />
            </Card>
            {/* calculation */}
            <div className="flex justify-end">
              <Calculation
                form={form}
                subTotal={Number(
                  selectedProducts
                    .reduce((acc, product) => acc + product.total, 0)
                    .toFixed(2)
                )}
              />
            </div>
            <div className="text-right">
              <Button
                type="button"
                onClick={() => navigate("/billing/invoices")}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
              <Button variant="default" type="submit" className="w-fit mt-4">
                {isUpdating ? "Updating..." : "Update"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
