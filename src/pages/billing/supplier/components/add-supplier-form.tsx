import { Button } from "@/components/ui/button";
import { useForm, useFieldArray  } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
// import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/common/file-uploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressForm } from "./AddressForm";
import {
  SupplierFormValues,
  supplierSchema,
} from "@/lib/validators/billing/supplier";
import { useState } from "react";
import { Plus,Trash2 } from "lucide-react";
//    import { Input } from "@/components/ui/input";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { Plus,  } from "lucide-react"; // For icons






export function AddSupplierForm() {


    // const form = useForm<SupplierFormValues>({
    //     resolver: zodResolver(supplierSchema),
    //     defaultValues: {
    //       suppliers: [{ name: "", email: "", mobile_number: "", note: "" }], // Start with one supplier
    //     },
    //   });



    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    console.log(uploadedFiles)

  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
        suppliers: [{ name: "", email: "", mobile_number: "", note: "" }], // Start with one supplier
      },
    //  defaultValues: {
    //    name: previousData?.name || "",
    //    short_code: previousData?.short_code || "",
    //  },
  });

  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "suppliers", // Field name in the schema
  });


  async function onSubmit() {
    // try {
    //   if (previousData) {
    //     await updateUnit({
    //       unitId: previousData.id,
    //       updatedUnit: data,
    //     }).unwrap();
    //     toast.success("Policy updated successfully");
    //     modalClose();
    //   } else {
    //     await createUnit(data).unwrap();
    //     toast.success("Policy created successfully");
    //     modalClose();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   handleErrors(error as ErrorResponse);
    // }
  }

  return (
    <Tabs defaultValue="supplier" className="max-w-[1000px] mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="supplier">Supplier Details</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
        <TabsTrigger value="contact_person">Contact Person</TabsTrigger>
        {/* <TabsTrigger value="note">Note</TabsTrigger> */}
        <TabsTrigger value="attachment">Attachment</TabsTrigger>
      </TabsList>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 max-w-[1200px] mx-auto"
        >
          <TabsContent value="supplier">
            <Card>
              <CardHeader>
                <CardTitle>Supplier </CardTitle>
                <CardDescription>
                  {/* Make changes to your account here. Click save when you're
                  done. */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* Form Fields */}

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            placeholder="Enter Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            placeholder="Enter Company Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Id</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter company Id"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
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

                  <FormField
                    control={form.control}
                    name="opening_balance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opening Balance</FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            placeholder="opening balance"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Enter date"
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(e) =>
                              field.onChange(new Date(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
            </Card>
          </TabsContent>

          {/* Billing & shipping address */}
          <TabsContent value="address">
            <Card>
              <CardHeader>
                <CardDescription>{/* Description here */}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Billing Address */}
                  <AddressForm
                    form={form}
                    namePrefix="billing"
                    title="Billing"
                  />

                  {/* Shipping Address */}
                  <AddressForm
                    form={form}
                    namePrefix="shipping"
                    title="Shipping"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>




          {/* contact person */}
          <TabsContent value="contact_person">
        <Card>
          <CardHeader>
            <CardTitle>Contact Supplier</CardTitle>
            {/* <CardDescription>Manage your supplier contacts here.</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-4">
            {fields.map((field, index) => (
              <div className="flex gap-4" key={field.id}>
                {/* Name field */}
                <FormField
                  control={form.control}
                //   name={`suppliers.${index}.name`} // Reference to the dynamic field
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

                {/* Email field */}
                <FormField
                  control={form.control}
                //   name={`suppliers.${index}.email`}
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

                {/* Mobile number field */}
                <FormField
                  control={form.control}
                //   name={`suppliers.${index}.mobile_number`}
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

                {/* Note field */}
                <FormField
                  control={form.control}
                //   name={`suppliers.${index}.note`}
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

                {/* Delete button */}
                {index >= 0 && (
                  <div className="flex items-center mt-8">
                    <Button
                      variant="outline"
                      className="text-red-600"
                      type="button"
                      onClick={() => remove(index)} // Remove the field
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {/* Add Supplier button */}
            <Button
              variant="outline"
              className="border border-dashed border-gray-700 w-full"
              type="button"
              onClick={() =>
                append({ name: "", email: "", mobile_number: "", note: "" })
              } // Append a new supplier field set
            >
              <Plus size={16} /> <span className="ml-2">Add Supplier</span>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>



        {/* Attachment */}
          <TabsContent value="attachment">
            <Card>
              <CardHeader>
                <CardTitle>Attachment </CardTitle>
                <CardDescription>
                  {/* Make changes to your account here. Click save when you're
                  done. */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-2">
                  <FormLabel>Upload Files</FormLabel>
                  <FileUpload
                    setUploadedFiles={setUploadedFiles}
                    // uploadedFiles={previousData?.files}
                    // onDeleteSuccess={() => ()}
                  />
                </div>
              </CardContent>
              {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
            </Card>
          </TabsContent>
          <div className="flex flex-row-reverse items-center !mb-2">
            <Button variant="default" type="submit" className="w-fit ml-2">
              Save
            </Button>
            <Button
              variant="primary"
              //   onClick={}
              className="w-fit"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </Tabs>
  );
}
