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

import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import BillingSummaryShow from "../../../../components/common/billing/billing-summary-show";
import { formatToTwoDecimalPlaces } from "@/utils/formate-number";
import {
  PurchaseReturnFormValues,
  returnSchema,
} from "@/lib/validators/billing/billing-transactions";



import { useGetPurchaseByIdQuery } from "@/store/services/billing/api/purchases";
import { useCreatePurchaseReturnMutation } from "@/store/services/billing/api/purchase-return";

import ProductReturnLineItems, { ProductReturnLineItemType } from "@/components/common/billing/product-return-line-items";
import ReturnSummaryShow from "@/components/common/billing/return-summary-show";
// import { PurchaseResponse } from "@/lib/validators/billing/billing-responses";
// import { PurchaseOrderFormValues, purchaseOrderSchema } from "@/lib/validators/billing/purchase-order";

export default function AddPurchaseReturnForm() {
  const params = useParams();
  const purchaseId = Number(params.id);
  // const purchaseReturnId = Number(params.id);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<
  ProductReturnLineItemType[]
  >([]);

  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
    delivery_date: false,
    due_date: false,
  });

  const handleDatePickerToggle = (
    type: "date" | "delivery_date" | "due_date"
  ) => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const { data: PurchaseSingleData } = useGetPurchaseByIdQuery(purchaseId, {
    skip: !purchaseId,
  });

  // const { data: PurchaseReturnSingleData } = useGetPurchaseReturnByIdQuery(purchaseReturnId, {
  //   skip: !purchaseReturnId,
  // });
  

  const purchaseData =  PurchaseSingleData?.data || undefined;
  // const purchaseReturnData =  PurchaseReturnSingleData?.data || undefined;

  // console.log(PurchaseReturnSingleData)
 
  

  const [createPurchaseReturn] = useCreatePurchaseReturnMutation();

  const form = useForm<PurchaseReturnFormValues>({
    resolver: zodResolver(returnSchema),
    defaultValues: {
      total: 0,
      // tax_type: TAX_TYPES[1].id.toString(),
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });


  // const purchaseOrderId = Number(params.id);
  // const { data: purchaseOrderData } = useGetPurchaseOrderByIdQuery(
  //   purchaseOrderId,
  //   {
  //     skip: !purchaseOrderId,
  //   }
  // );

  // const [updatePurchaseReturn] = useUpdatePurchaseReturnMutation(); 

  // const purchaseData = purchaseOrderData?.data || undefined;
  // console.log(purchaseData, "purchaseOrderData");

  useEffect(() => {
    if (purchaseData) {
      const details: ProductReturnLineItemType[] = purchaseData.details
        .filter((detail) => detail?.available_qty > 0) // Exclude items with available_qty = 0
        .map((detail) => ({
          detailId: detail.id,
          quantity: detail?.available_qty,
          price: detail?.price,
          tax: detail?.tax || undefined,
          units: [],
          unit: detail?.unit,
          barcode: detail?.item_barcode.barcode,
          name: detail?.item.name,
          barcodeAttribute: detail?.item_barcode.barcode_attribute,
          note: detail?.note,
        }));
  
      setSelectedProducts(details);
      form.reset({
        discount: purchaseData.discount,
        total: purchaseData.total,
        purchase_id: purchaseId,
        return_reason: "",
        date: format(new Date(), "yyyy-MM-dd"),
        note: "",
        sub_total: purchaseData.sub_total,
        tax: purchaseData.tax,
      });
    }
  }, [purchaseData, form]);
  
  // end of update

  const discount = form.watch("discount");
  // const tax_type = form.watch("tax_type");

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
        (discountedPrice * (product.tax?.amount || 0)) / 100;

      subTotal += total;
      discountedAmount += productDiscount;
      totalTaxAmount += productTax;
    });
  }

  let grandTotal =
    subTotal -
    discountedAmount +
    totalTaxAmount;

  // Rounding off
  subTotal = formatToTwoDecimalPlaces(subTotal);
  discountedAmount = formatToTwoDecimalPlaces(discountedAmount);
  totalTaxAmount = formatToTwoDecimalPlaces(totalTaxAmount);
  grandTotal = formatToTwoDecimalPlaces(grandTotal);

  // Setting the form values
  form.setValue("sub_total", subTotal);
  form.setValue("tax", totalTaxAmount);
  form.setValue("total", grandTotal);

  async function onSubmit(data: PurchaseReturnFormValues) {
    if (selectedProducts.length === 0) {
      return toast.error("Please select at least one product");
    }
    const payload: PurchaseReturnFormValues = {
      ...data,
      // purchase_id: purchaseId,
      details: selectedProducts.map((product) => {
        return {
          purchase_details_id: product.detailId,
          qty: product.quantity,
          note: product.note || "",
        };
      }),
    };
    // console.log(payload, "payload");


    try {
      // if () {
        await createPurchaseReturn(payload).unwrap();
        toast.success("Purchase return created successfully");
      // } else {
      //   await updatePurchaseReturn({
      //     purchaseReturnId: purchaseReturnId,
      //     updatedPurchaseReturn: payload,
      //   }).unwrap();
      //   toast.success(" Purchase return updated successfully");
      // }
      navigate("/billing/purchase-return");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }
  console.log(form.formState.errors, "form errors");

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={purchaseData ? "Edit Purchase Return" : "Add Purchase Return"}
            description="Manage your sub accounts for you business"
          />
          <Button
            onClick={() => navigate("/billing/purchase-return")}
            size={"sm"}
          >
            Purchase Order List
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 mb-4  overflow-y-scroll no-scrollbar"
          >
            <div className="">
              <Card className="p-3">
                <div className="">
                  <Card className="p-3">
                  <div className="grid grid-cols-3 gap-4">
{/*                   <FormSearchSelect<CustomerColumn>
                    loading={isCustomerLoading}
                    data={suppliers}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="contact_id"
                    placeholder="Select supplier"
                    title="Supplier Name"
                    className="w-full"
                  /> */}

                  <FormField
                    control={form.control}
                    name={`date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Return Date</FormLabel>
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
                    name="return_reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Return Reason</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter return reason" {...field} />
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
                          <Input placeholder="Enter note" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />



                  {/*                   <FormSearchSelect<UsersRow>
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
 */}
                  {/*                   <FormSearchSelect<ProjectRow>
                    loading={projectLoading}
                    data={projects}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="project_id"
                    placeholder="Select Project"
                    title="Project Name"
                    className="w-full"
                  /> */}



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
              </Card>
            </div>
            {/* product Search */}
            <Card className="mb-4">
              <ProductReturnLineItems
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
                details={purchaseData?.details}
              />
            </Card>
            {/* calculation */}
            <div className="flex justify-end">
              <ReturnSummaryShow
                form={form}
                subTotal={subTotal}
                discountedAmount={discountedAmount}
                totalTaxAmount={totalTaxAmount}
                grandTotal={grandTotal}
                discountDisabled={true}
              />
            </div>
            <div className="text-right">
              <Button
                type="button"
                onClick={() => navigate("/billing/purchase-return")}
                className="mr-2"
                variant="primary"
              >
                Cancel
              </Button>
              <Button variant="default" type="submit" className="w-fit mt-4">
                {purchaseData ? "Add" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
