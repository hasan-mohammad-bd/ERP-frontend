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
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import {
  CustomerFormType,
  customerSchema,
} from "@/lib/validators/billing/customer-supplier";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCustomerMutation } from "@/store/services/billing/api/customer";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useGetRegionQuery } from "@/store/services/billing/api/regions";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";

export function AddCustomerForm() {
  const navigate = useNavigate();
  const [openDatePickers, setOpenDatePickers] = useState({
    date: false,
  });
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const customerform = useForm<CustomerFormType>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      opening_balance: 0,
      email: "",
      phone: "",
      note: "",
      company_name: "",
      company_id: "",
      work_phone: "",
      credit_limit: 0,
    },
  });

  const [createCustomer, { isLoading: isCustomerCreateLoading }] =
    useCreateCustomerMutation();

  const { data: locations, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const locationData = locations?.data || [];

  // Watch form values for filtering
  const selectedDivisionId = customerform.watch("region_id");
  const selectedAreaId = customerform.watch("area_id");

  // Fetch all regions data
  const { data: divisions } = useGetRegionQuery("type=division");
  const { data: areas } = useGetRegionQuery(
    `type=area&parent_id=${selectedDivisionId}`
  );
  const { data: territories } = useGetRegionQuery(
    `type=territory&parent_id=${selectedAreaId}`
  );

  const handleDatePickerToggle = (type: "date") => {
    setOpenDatePickers((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  async function onCustomerFormSubmit(data: CustomerFormType) {
    // console.log(data, "customer data");
    try {
      const response = await createCustomer({
        ...data,
        region_id: data.territory_id, // Use territory_id as region_id
      }).unwrap();
      toast.success("Customer created successfully");
      navigate(`/billing/customers/edit/${response.data.id}`);
      customerform.reset();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  // console.log(customerform.formState.errors, "customer form errors");

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
                  <FormSearchSelect
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

                  {/* Division Select */}
                  <FormSearchSelect
                    data={divisions?.data || []}
                    displayField="name"
                    valueField="id"
                    form={customerform}
                    name="region_id"
                    title="Select Region"
                  />

                  {/* Area Select */}
                  <FormSearchSelect
                    data={areas?.data || []}
                    displayField="name"
                    valueField="id"
                    form={customerform}
                    name="area_id"
                    title="Select Area"
                    disabled={!selectedDivisionId}
                  />

                  {/* Territory Select */}
                  <FormSearchSelect
                    data={territories?.data || []}
                    displayField="name"
                    valueField="id"
                    form={customerform}
                    name="territory_id"
                    title="Select Territory"
                    disabled={!selectedAreaId}
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
                  <FormField
                    control={customerform.control}
                    name="credit_limit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Limit</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter credit limit"
                            {...field}
                          />
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
    </Tabs>
  );
}
