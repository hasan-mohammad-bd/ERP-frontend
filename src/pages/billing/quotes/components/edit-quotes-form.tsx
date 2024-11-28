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
// import FileUpload from "@/components/common/file-uploader";
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
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import {
  QuotationFieldsType,
  quotationSchema,
} from "@/lib/validators/billing/quotation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useGetQuotationByIdQuery,
  useUpdateQuotationMutation,
} from "@/store/services/billing/api/quotations";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { UsersRow } from "@/lib/validators/web/users";
import { Loading } from "@/components/common/loading";
// import { UpdateSearchBarcodeItem } from "@/lib/validators/billing/search-barcode-item";

export default function EditQuoteForm() {
  const params = useParams();
  const quotationId = Number(params.id);
  const navigate = useNavigate();
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ExtendedItemRow[]>(
    []
  );

  const [openDatePickers, setOpenDatePickers] = useState({
    quote_date: false,
    expire_date: false,
    estimated_delivery_date: false,
  });

  const handleDatePickerToggle = (
    type: "quote_date" | "expire_date" | "estimated_delivery_date"
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

  const { data: quotationData, isLoading: quotationLoading } =
    useGetQuotationByIdQuery(quotationId, { skip: !quotationId });

  const customers = customerData?.data || [];
  const projects = projectsData?.data || [];
  const employees = EmployeeData?.data || [];

  const [updateQuotation, { isLoading: isUpdating }] =
    useUpdateQuotationMutation();

  // console.log(uploadedFiles);
  const form = useForm<QuotationFieldsType>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      total: 0,
    },
  });

  useEffect(() => {
    if (quotationData) {
      form.reset({
        ...quotationData.data,
        note: quotationData.data.note || "",
        subject: quotationData.data.subject || "",
        terms_conditions: quotationData.data.terms_conditions || "",
        contact_id: String(quotationData.data.contact.id),
        project_id: String(quotationData.data.project_id),
        sales_person_id: String(quotationData.data.sales_person.id),
        discount: Number(quotationData.data.discount),
        total: Number(quotationData.data.total),
        shipping_charges: Number(quotationData.data.shipping_charges),
      });

      setSelectedProducts(
        quotationData.data.quotation_details.map((detail) => ({
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
  }, [form, quotationData]);

  async function onSubmit(data: QuotationFieldsType) {
    try {
      await updateQuotation({
        itemId: quotationId,
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
              after_discount: Number(discountedPrice.toFixed(2)),
              total: Number((discountedPrice * product.quantity).toFixed(2)),
              qty: product.quantity,
              discount: product.unit.discount,
              note: product.note || "",
            };
          }),
        },
      }).unwrap();
      toast.success("Quotation updated successfully");
      navigate("/billing/quotes");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  if (quotationLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Edit Quote"}
            description="Manage your sub accounts for you business"
          />
          <Button onClick={() => navigate("/billing/quotes")} size={"sm"}>
            Quotes List
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
                        <FormLabel>Quote Date</FormLabel>
                        <Popover
                          open={openDatePickers.quote_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("quote_date")
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
                    name={`expire_date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expire Date</FormLabel>
                        <Popover
                          open={openDatePickers.expire_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("expire_date")
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
                    name={`estimated_delivery`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Delivery Date</FormLabel>
                        <Popover
                          open={openDatePickers.estimated_delivery_date}
                          onOpenChange={() =>
                            handleDatePickerToggle("estimated_delivery_date")
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
                    placeholder="Select Sells person"
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
                        <FormLabel>Customer Note</FormLabel>
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
                  {/* <div className="space-y-2">
                    <FormLabel>Upload Files</FormLabel>
                    <FileUpload
                      setFilesToUpload={setUploadedFiles}
                      filesToUpload={uploadedFiles}
                      // uploadedFiles={previousData?.files}
                      // onDeleteSuccess={() => refetch()}
                    />
                  </div> */}
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
                onClick={() => navigate("/billing/quotes")}
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
