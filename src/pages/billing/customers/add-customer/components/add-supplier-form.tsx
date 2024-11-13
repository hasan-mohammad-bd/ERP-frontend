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
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { LocationColumn } from "@/lib/validators";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import {
  CustomerFormType,
  customerSchema,
} from "@/lib/validators/billing/customer";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCustomerMutation } from "@/store/services/billing/api/customer";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";

export function AddCustomerForm() {
  const navigate = useNavigate();
  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
  });
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [createCustomer, { isLoading: isCustomerCreateLoading }] =
    useCreateCustomerMutation();

  const { data: locations, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const locationData = locations?.data || [];

  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const customerform = useForm<CustomerFormType>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      opening_balance: "",
      email: "",
      phone: "",
      note: "",
      company_name: "",
      company_id: "",
      work_phone: "",
    },
  });

  async function onCustomerFormSubmit(data: CustomerFormType) {
    try {
      const response = await createCustomer({
        ...data,
        opening_balance: Number(data.opening_balance),
        location_id: Number(data.location_id),
      }).unwrap();
      toast.success("Customer created successfully");
      navigate(`/billing/customers/edit/${response.data.id}`);
      customerform.reset();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <Tabs defaultValue="customer" className="max-w-[1000px] mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="customer">Customer Details</TabsTrigger>
        <TabsTrigger value="address" disabled>
          Address
        </TabsTrigger>
        <TabsTrigger value="contact_person" disabled>
          Contact Person
        </TabsTrigger>
        {/* <TabsTrigger value="note">Note</TabsTrigger> */}
        <TabsTrigger value="attachment" disabled>
          Attachment
        </TabsTrigger>
      </TabsList>

      <Form {...customerform}>
        <form
          onSubmit={customerform.handleSubmit(onCustomerFormSubmit)}
          className="space-y-3 max-w-[1200px] mx-auto"
        >
          <TabsContent value="customer">
            <Card>
              <CardHeader>
                <CardTitle>Add Customer </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* Form Fields */}

                  <FormField
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                    control={customerform.control}
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
                  <FormSearchSelect<LocationColumn>
                    loading={locationLoading}
                    data={locationData}
                    displayField="name"
                    valueField="id"
                    form={customerform}
                    name="location_id"
                    placeholder="Location"
                    title="Location"
                    className="w-[300px]"
                  />
                  <FormField
                    control={customerform.control}
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
                    {isCustomerCreateLoading ? "Saving..." : "Save"}
                  </Button>
                  <Button
                    variant="primary"
                    type="button"
                    className="w-fit"
                    onClick={() => navigate("/billing/customers")}
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
      {/* <TabsContent value="address">
        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              Billing Address
              <AddressForm form={form} namePrefix="billing" title="Billing" />

              Shipping Address
              <AddressForm form={form} namePrefix="shipping" title="Shipping" />
            </div>
          </CardContent>
        </Card>
      </TabsContent> */}

      {/* contact person */}
      {/* <TabsContent value="contact_person">
        <Card>
          <CardHeader>
            <CardTitle>Contact Supplier</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {fields.map((field, index) => (
              <div className="flex gap-4" key={field.id}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                Email field
                <FormField
                  control={form.control}
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

                Mobile number field
                <FormField
                  control={form.control}
                  name="mobile_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter mobile number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                Note field
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your note"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                Delete button
                {index >= 0 && (
                  <div className="flex items-center mt-8">
                    <Button
                      variant="outline"
                      className="text-red-600"
                      type="button"
                      onClick={() => remove(index)} 
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                )}
              </div>
            ))}

            Add Supplier button
            <Button
              variant="outline"
              className="border border-dashed border-gray-700 w-full"
              type="button"
              onClick={() =>
                append({ name: "", email: "", mobile_number: "", note: "" })
            >
              <Plus size={16} /> <span className="ml-2">Add Supplier</span>
            </Button>
          </CardContent>
        </Card>
      </TabsContent> */}

      {/* Attachment */}
      {/* <TabsContent value="attachment">
        <Card>
          <CardHeader>
            <CardTitle>Attachment </CardTitle>
       
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <FormLabel>Upload Files</FormLabel>
              <FileUpload
                setUploadedFiles={setUploadedFiles}
                uploadedFiles={previousData?.files}
                onDeleteSuccess={() => ()}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent> */}
    </Tabs>
  );
}
