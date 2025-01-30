import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate, useParams } from "react-router-dom";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { LocationColumn } from "@/lib/validators";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import {
  ContactFormType,
  contactSchema,
} from "@/lib/validators/billing/customer-supplier";
import { Textarea } from "@/components/ui/textarea";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { Loading } from "@/components/common/loading";
import { toast } from "sonner";
import { Addresses } from "./components/addresss";
import CustomerContactPerson from "./components/contact-person";
import CustomerAttachment from "./components/attachment";
import {
  useGetSupplierQuery,
  useUpdateSupplierMutation,
} from "@/store/services/billing/api/supplier";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";

export default function EditSupplierForm() {
  const navigate = useNavigate();
  const params = useParams();
  const supplierId = Number(params.id);
  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
  });

  // Query to fetch locations data
  const { data: locations, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  // Query to fetch customer data
  const { data: customerData, isLoading: isSupplierLoading } =
    useGetSupplierQuery(supplierId, {
      skip: !supplierId,
    });
  const locationData = locations?.data || [];

  const [updateSupplier, { isLoading: isUpdateLoading }] =
    useUpdateSupplierMutation();

  // Toggle function for date picker
  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Initialize the form with zod resolver
  const supplierForm = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  });

  // Reset the form only when `customerData` changes and has valid data
  useEffect(() => {
    if (customerData?.data) {
      supplierForm.reset({
        name: customerData?.data.name || "",
        email: customerData?.data.email || "",
        phone: customerData?.data.phone || "",
        work_phone: customerData?.data.work_phone || "",
        opening_balance: customerData?.data.opening_balance,
        note: customerData?.data.note || "",
        date: customerData?.data.date || "",
        company_name: customerData?.data.company_name || "",
        company_id: customerData?.data.company_id || "",
        location_id: customerData?.data.location.id,
      });
    }
  }, [customerData?.data, supplierForm]); // Removed supplierForm from dependencies

  async function onSupplierFormSubmit(data: ContactFormType) {
    try {
      await updateSupplier({
        updatedSupplier: {
          ...data,
        },
        supplier_id: supplierId,
      }).unwrap();
      toast.success("Supplier updated successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  if (isSupplierLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Supplier Edit"
          description="Manage all items for you business"
        />
        <Button onClick={() => navigate("/billing/supplier")} size={"sm"}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back To All Supplier
        </Button>
      </div>

      <Separator />
      <Tabs defaultValue="supplier" className="max-w-[1000px] mx-auto mt-10">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="supplier">Supplier Details</TabsTrigger>
          <TabsTrigger value="address">Address</TabsTrigger>
          <TabsTrigger value="contact_person">Contact Person</TabsTrigger>
          <TabsTrigger value="attachment">Attachment</TabsTrigger>
        </TabsList>

        <Form {...supplierForm}>
          <form
            onSubmit={supplierForm.handleSubmit(onSupplierFormSubmit)}
            className="space-y-3 max-w-[1200px] mx-auto"
          >
            <TabsContent value="supplier">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Supplier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {/* Form Fields */}

                    <FormField
                      control={supplierForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              className=""
                              placeholder="Enter full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={supplierForm.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              className=""
                              placeholder="Enter company name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={supplierForm.control}
                      name="company_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Customer Id</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter customer Id"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={supplierForm.control}
                      name="work_phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter work phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={supplierForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone number</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Enter phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={supplierForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter email address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={supplierForm.control}
                      name="opening_balance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Opening Balance</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter opening balance"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={supplierForm.control}
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
                                  field.value
                                    ? new Date(field.value)
                                    : undefined
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
                    <FormSearchSelect<LocationColumn>
                      loading={locationLoading}
                      data={locationData}
                      displayField="name"
                      valueField="id"
                      form={supplierForm}
                      name="location_id"
                      placeholder="Location"
                      title="Location"
                      className="w-[300px]"
                    />
                    <FormField
                      control={supplierForm.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Note</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter note" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-row-reverse items-center pt-5">
                    <Button
                      variant="default"
                      type="submit"
                      className="w-fit ml-2"
                    >
                      {isUpdateLoading ? "Saving" : "Save"}
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      className="w-fit"
                      onClick={() => navigate("/billing/supplier")}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </form>
        </Form>

        {/* Billing & shipping address */}
        <TabsContent value="address">
          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-5">
                {/* Billing Address */}
                <Addresses customer_id={supplierId} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact_person">
          <Card>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-5">
                <CustomerContactPerson customer_id={supplierId} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attachment">
          <Card>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-5">
                <CustomerAttachment customer_id={supplierId} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
