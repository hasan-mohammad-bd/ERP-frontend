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
// import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
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
// import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
// import FormSearchSelect from "@/components/ui/form-items/form-search-select";
// import { CustomerColumn } from "@/lib/validators/billing/customer";
// import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
// import { ProjectRow } from "@/lib/validators/accounts/projects";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
// import { EmployeeColumn } from "@/lib/validators";

import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
// import {
//   PurchaseOrderFormValues,
//   purchaseOrderSchema,
// } from "@/lib/validators/billing/purchase-order";
// import { useGetSuppliersQuery } from "@/store/services/billing/api/supplier";

import { useGetPurchaseByIdQuery } from "@/store/services/billing/api/purchases";
import { useCreatePurchaseReturnMutation } from "@/store/services/billing/api/purchase-return";
import { PurchaseReturnFormData, PurchaseReturnSchema } from "@/lib/validators/billing/purchase-return";

export default function AddPurchaseReturnForm() {
  const params = useParams();
  const purchaseId = Number(params.id);
  const navigate = useNavigate();
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ExtendedItemRow[]>(
    []
  );
  console.log(selectedProducts);
  const { data: PurchaseSingleData } = useGetPurchaseByIdQuery(purchaseId, {
    skip: !purchaseId,
  });

  const purchaseData = PurchaseSingleData?.data || {};

  console.log(purchaseData);

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

  // const { data: supplierData } =
  //   useGetSuppliersQuery("page=1&per_page=1000");
  // const { data: projectsData, isLoading: projectLoading } =
  //   useGetProjectsQuery(`per_page=1000&page=1`);
  // const { data: EmployeeData, isLoading: employeeLoading } =
  //   useGetUsersQuery(`per_page=1000&page=1`);

  // const suppliers = supplierData?.data || [];
  // const projects = projectsData?.data || [];
  // const employees = EmployeeData?.data || [];

  const [createPurchaseReturn, { isLoading: isCreating }] =
    useCreatePurchaseReturnMutation();

  // console.log(uploadedFiles);
  const form = useForm<PurchaseReturnFormData>({
    resolver: zodResolver(PurchaseReturnSchema),
    defaultValues: {
      total: 0,
    },
  });

  async function onSubmit(data: PurchaseReturnFormData) {
    console.log(data);
    try {
      await createPurchaseReturn({
        ...data,
        // discount: data.discount || 0,
        // shipping_charges: data.shipping_charges || 0,
/*         details: selectedProducts.map((product) => {
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
            note: product.note || "",
          };
        }), */
      }).unwrap();
      toast.success("Purchase order created successfully");
      navigate("/billing/purchase-orders");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  }

  console.log(form.formState.errors);

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Heading
            title={"Add Purchase Return"}
            description="Manage your sub accounts for you business"
          />
          <Button
            onClick={() => navigate("/billing/purchase-orders")}
            size={"sm"}
          >
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
            {/* product Search */}
            <Card className="mb-4">
              <SearchProduct
                setSelectedProducts={setSelectedProducts}
                selectedProducts={selectedProducts}
                // previousData={purchaseData}
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
                {isCreating ? "Creating..." : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
