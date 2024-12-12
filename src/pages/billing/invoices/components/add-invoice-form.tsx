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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import {
  SalesInvoiceFormValues,
  salesInvoiceSchema,
} from "@/lib/validators/billing/billing-transactions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TAX_TYPES } from "@/constants/billing";
import ProductBarcodeSearch, {
  type BarcodeLineItemType,
} from "@/components/common/billing/product-barcode-search";
import { formatToTwoDecimalPlaces } from "@/utils/formate-number";
import { useGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
import {
  useCreateSalesInvoicesMutation,
  useGetSalesInvoicesByIdQuery,
  useUpdateSalesInvoicesMutation,
} from "@/store/services/billing/api/invoices";
import { getInclusiveTaxAmount } from "@/utils";
import BillingSummaryShow from "@/components/common/billing/billing-summary-show";

export default function AddInvoiceForm() {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<
    BarcodeLineItemType[]
  >([]);

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

  const { data: warehousesData, isLoading: isWarehousesLoading } =
    useGetWarehouseQuery(`page=1&per_page=1000`);

  const customers = customerData?.data || [];
  const warehouses = warehousesData?.data || [];

  const [createSalesInvoice, { isLoading: isCreateLoading }] =
    useCreateSalesInvoicesMutation();

  const form = useForm<SalesInvoiceFormValues>({
    resolver: zodResolver(salesInvoiceSchema),
    defaultValues: {
      total: 0,
      discount: 0,
      shipping_charge: 0,
      adjustment: 0,
      tax_type: TAX_TYPES[1].id.toString(),
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });

  // For update
  const params = useParams();
  const salesInvoiceId = Number(params.id);
  const { data: salesInvoiceData } = useGetSalesInvoicesByIdQuery(
    salesInvoiceId,
    {
      skip: !salesInvoiceId,
    }
  );

  const [updateSalesInvoice, { isLoading: isUpdateLoading }] =
    useUpdateSalesInvoicesMutation(); // For update

  const salesOrder = salesInvoiceData?.data || undefined;
  // console.log(salesOrder, "salesOrderData");

  useEffect(() => {
    if (salesOrder) {
      const details: BarcodeLineItemType[] = salesOrder.details.map(
        (detail) => ({
          detailId: detail.id,
          barcodeId: detail.item_barcode?.id,
          quantity: detail.qty,
          available_qty: detail.available_qty,
          used_qty: detail.used_qty,
          price: detail.price,
          tax: detail.tax || undefined,
          units: [],
          unit: detail.unit,
          barcode: detail.item_barcode?.barcode,
          name: detail.item?.name,
          barcodeAttribute: detail.item_barcode?.barcode_attribute,
          note: detail.note,
        })
      );
      setSelectedProducts(details);
      form.reset({
        discount: salesOrder.discount,
        tax_type: salesOrder.tax_type,
        total: salesOrder.total,
        contact_id: String(salesOrder.contact?.id),
        date: salesOrder.date || "",
        due_date: salesOrder.due_date || "",
        delivery_date: salesOrder.delivery_date || "",
        note: salesOrder.note || "",
        terms_conditions: salesOrder.terms_conditions || "",
        sub_total: salesOrder.sub_total,
        reference: salesOrder.reference || "",
        tax: salesOrder.tax,
        shipping_charge: salesOrder.shipping_charge || 0,
        adjustment: salesOrder.adjustment || 0,
        warehouse_id: salesOrder.warehouse?.id,
        sales_order_id: salesOrder.sales_order?.id,
      });
    }
  }, [salesOrder, form]);
  // end of update

  const discount = form.watch("discount");
  const tax_type = form.watch("tax_type");
  const shipping_charges = form.watch("shipping_charge");
  const adjustment = form.watch("adjustment");

  // console.log(selectedProducts, "selectedProducts");

  // Calculating business logics
  let subTotal = 0;
  let discountedAmount = 0;
  let totalTaxAmount = 0;

  if (selectedProducts && selectedProducts.length > 0) {
    selectedProducts?.forEach((product) => {
      const total = product.price * product.quantity;
      const productDiscount = (total * (discount ?? 0)) / 100;
      const discountedPrice = total - productDiscount;
      const productTax =
        tax_type === "inclusive"
          ? getInclusiveTaxAmount(discountedPrice, product.tax?.amount || 0)
          : (discountedPrice * (product.tax?.amount || 0)) / 100;

      subTotal += total;
      discountedAmount += productDiscount;
      totalTaxAmount += productTax;
    });
  }

  let grandTotal =
    subTotal -
    discountedAmount +
    (tax_type === "inclusive" ? 0 : totalTaxAmount) +
    (shipping_charges ? Number(shipping_charges) : 0) +
    (adjustment ? Number(adjustment) : 0);

  // Rounding off
  subTotal = formatToTwoDecimalPlaces(subTotal);
  discountedAmount = formatToTwoDecimalPlaces(discountedAmount);
  totalTaxAmount = formatToTwoDecimalPlaces(totalTaxAmount);
  grandTotal = formatToTwoDecimalPlaces(grandTotal);

  // Setting the form values
  form.setValue("sub_total", subTotal);
  form.setValue("tax", totalTaxAmount);
  form.setValue("total", grandTotal);

  async function onSubmit(data: SalesInvoiceFormValues) {
    if (selectedProducts.length === 0) {
      return toast.error("Please select at least one product");
    }
    const payload: SalesInvoiceFormValues = {
      ...data,
      details: selectedProducts.map((product) => {
        return {
          details_id: product.detailId, // required for update
          item_barcode_id: product.barcodeId,
          tax_id: product.tax?.id,
          unit_id: product.unit.id,
          qty: product.quantity,
          price: product.price,
          total: product.price * product.quantity,
          note: product.note || "",
        };
      }),
    };
    // console.log(payload, "payload");

    try {
      if (!salesOrder) {
        await createSalesInvoice(payload).unwrap();
        toast.success("Invoice created successfully");
      } else {
        await updateSalesInvoice({
          itemId: salesInvoiceId,
          updatedItem: payload,
        }).unwrap();
        toast.success("Invoice updated successfully");
      }
      navigate("/billing/invoices");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }
  // console.log(form.formState.errors, "form errors");

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={salesOrder ? "Edit Invoice" : "Add Invoice"}
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
                  <FormSearchSelect
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
                    loading={isWarehousesLoading}
                    data={warehouses}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="warehouse_id"
                    placeholder="Select Warehouse"
                    title="Warehouse"
                    className="w-full"
                  />

                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="tax_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tax Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={String(TAX_TYPES?.[1]?.id)}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Tax Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TAX_TYPES?.map((tax: any) => (
                                <SelectItem key={tax.id} value={String(tax.id)}>
                                  {tax.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
              <ProductBarcodeSearch
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
              />
            </Card>
            {/* calculation */}
            <div className="flex justify-end">
              <BillingSummaryShow
                form={form}
                subTotal={subTotal}
                discountedAmount={discountedAmount}
                totalTaxAmount={totalTaxAmount}
                grandTotal={grandTotal}
                includeShipping={true}
                includeAdjustment={true}
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
              <Button
                disabled={isCreateLoading || isUpdateLoading}
                variant="default"
                type="submit"
                className="w-fit mt-4"
              >
                {salesOrder ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
