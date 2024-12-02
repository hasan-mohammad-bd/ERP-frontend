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

import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { CustomerColumn } from "@/lib/validators/billing/customer";

import { zodResolver } from "@hookform/resolvers/zod";

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";

import { Loading } from "@/components/common/loading";
import {
  SalesOrderFormValues,
  salesOrderSchema,
} from "@/lib/validators/billing/sales-order";
import {
  useGetSalesOrderByIdQuery,
  useUpdateSalesOrderMutation,
} from "@/store/services/billing/api/sales-order";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { useGetPaymentTermsQuery } from "@/store/services/billing/api/payment-terms";
import { useGetQuotationsQuery } from "@/store/services/billing/api/quotations";
import { UsersRow } from "@/lib/validators/web/users";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import { PaymentTermRow } from "@/lib/validators/billing/payment-terms";
import { QuotationRow } from "@/lib/validators/billing/quotation";

export default function EditSalesOrder() {
  const params = useParams();
  const salesOrderId = Number(params.id);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<ExtendedItemRow[]>(
    []
  );

  const [openDatePickers, setOpenDatePickers] = useState({
    sales_order_date: false,
    delivery_date: false,
    due_date: false,
  });

  const handleDatePickerToggle = (
    type: "sales_order_date" | "delivery_date" | "due_date"
  ) => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const { data: customerData, isLoading: isCustomerLoading } =
    useGetCustomersQuery("page=1&per_page=1000");
  const { data: projectsData, isLoading: projectLoading } =
    useGetProjectsQuery(`per_page=1000&page=1`);
  const { data: EmployeeData, isLoading: employeeLoading } =
    useGetUsersQuery(`per_page=1000&page=1`);
  const { data: paymentTermsData, isLoading: paymentTermLoading } =
    useGetPaymentTermsQuery(`per_page=1000&page=1`);
  const { data: quotationData, isLoading: quotationLoading } =
    useGetQuotationsQuery(`per_page=1000&page=1`);

  const quotations = quotationData?.data || [];

  const customers = customerData?.data || [];
  const projects = projectsData?.data || [];
  const employees = EmployeeData?.data || [];
  const paymentTerms = paymentTermsData?.data || [];

  const { data: salesOrderData, isLoading: isQuotationLoading } =
    useGetSalesOrderByIdQuery(salesOrderId, { skip: !salesOrderId });

  const [updateSalesOrder, { isLoading: isUpdating }] =
    useUpdateSalesOrderMutation();

  const form = useForm<SalesOrderFormValues>({
    resolver: zodResolver(salesOrderSchema),
    defaultValues: {
      total: 0,
    },
  });

  useEffect(() => {
    if (salesOrderData) {
      form.reset({
        ...salesOrderData.data,
        note: salesOrderData.data.note ?? "",
        subject: salesOrderData.data.subject ?? "",
        terms_conditions: salesOrderData.data.terms_conditions ?? "",
        contact_id: String(salesOrderData.data.contact.id),

        discount: Number(salesOrderData.data.discount),
        total: Number(salesOrderData.data.total),
        shipping_charges: Number(salesOrderData.data.shipping_charges),
        reference: salesOrderData.data.reference ?? undefined,
      });

      setSelectedProducts(
        salesOrderData.data.details.map((detail) => ({
          barcode: String(detail.item_barcode.barcode),
          id: detail.item_barcode.id,
          barcode_attribute: detail.item_barcode.barcode_attribute,
          name: detail.item.name,
          note: detail.note || "",
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
  }, [form, salesOrderData]);

  async function onSubmit(data: SalesOrderFormValues) {
    try {
      await updateSalesOrder({
        salesOrderId: salesOrderId,
        updatedSalesOrder: {
          ...data,
          discount: data.discount || 0,
          shipping_charges: data.shipping_charges || 0,
          details: selectedProducts.map((product) => {
            const discountedPrice =
              product.unit.selling_price * (1 - product.unit.discount / 100); // Price after discount

            return {
              unit_id: product.unit.id,
              item_id: product.id,
              item_barcode_id: Number(product.id),
              price: product.unit.selling_price,
              after_discount: Number(discountedPrice.toFixed(2)),
              total: Number((discountedPrice * product.quantity).toFixed(2)),
              qty: product.quantity,
              discount: product.unit.discount,
              note: product.note || "",
            };
          }),
        },
      }).unwrap();
      toast.success("Sales order updated successfully");
      navigate("/billing/sales-orders");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  if (isQuotationLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Edit Sales Order"}
            description="Manage your sub accounts for you business"
          />
          <Button onClick={() => navigate("/billing/sales-orders")} size={"sm"}>
            Sales Order List
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

                  <FormField
                    control={form.control}
                    name="reference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter reference" {...field} />
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
                          open={openDatePickers.sales_order_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("sales_order_date")
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
                    name={`delivery_date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Date</FormLabel>
                        <Popover
                          open={openDatePickers.delivery_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("delivery_date")
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

                  <FormSearchSelect<UsersRow>
                    loading={employeeLoading}
                    data={employees}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="sales_person_id"
                    placeholder="Select Sales person"
                    title="Sales Person"
                    className="w-full"
                  />

                  <FormSearchSelect<ProjectRow>
                    loading={projectLoading}
                    data={projects}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="project_id"
                    placeholder="Select Project"
                    title="Project Name"
                    className="w-full"
                  />

                  <FormSearchSelect<PaymentTermRow>
                    loading={paymentTermLoading}
                    data={paymentTerms}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="payment_terms"
                    placeholder="Select Payment Terms"
                    title="Payment Terms"
                    className="w-full"
                  />

                  <FormSearchSelect<QuotationRow>
                    loading={quotationLoading}
                    data={quotations}
                    displayField="invoice_number"
                    valueField="id"
                    form={form}
                    name="quotation_id"
                    placeholder="Select Quotation"
                    title="Quotation"
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
                          <Input placeholder="Type Note." {...field} />
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
                onClick={() => navigate("/billing/sales-orders")}
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
